import { createClient } from 'next-sanity'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Read environment variables from .env.local or .env file
function loadEnvVars() {
  try {
    const envPath = join(__dirname, '..', '.env.local')
    const envContent = readFileSync(envPath, 'utf8')
    
    const envVars = {}
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=')
      if (key && valueParts.length > 0) {
        let value = valueParts.join('=')
        // Remove quotes from the value if present
        value = value.replace(/^["']|["']$/g, '')
        envVars[key] = value
      }
    })
    
    return envVars
  } catch (error) {
    console.error('Error loading environment variables:', error.message)
    return {}
  }
}

// Initialize the Sanity client
const envVars = loadEnvVars()
const client = createClient({
  projectId: envVars.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: envVars.NEXT_PUBLIC_SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: envVars.NEXT_PUBLIC_SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-07',
  token: envVars.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false, // We want to write data, so don't use CDN
})

const branches = [
  {
    _type: 'branch',
    name: "RR Restorasi Surabaya",
    address: "Rungkut Alang-Alang 189, Rungkut Tengah, Kec. Gn. Anyar, Surabaya, Jawa Timur 60293, Indonesia",
    mapQuery: "Rungkut+Alang-Alang+189,+Rungkut+Tengah,+Kec.+Gn.+Anyar,+Surabaya,+Jawa+Timur+60293,+Indonesia",
    phone: "+62 822-4552-7366",
    order: 1
  },
  {
    _type: 'branch',
    name: "RR Restorasi BSD",
    address: "Ruko Golden Madrid 2 No. 20, Jl. Letnan Sutopo, BSD City, Serpong, Tangerang Selatan, Banten 15310, Indonesia",
    mapQuery: "Ruko+Golden+Madrid+2+No.+20,+Jl.+Letnan+Sutopo,+BSD+City,+Serpong,+Tangerang+Selatan,+Banten+15310,+Indonesia",
    phone: "+62 815-1136-1035",
    order: 2
  },
  {
    _type: 'branch',
    name: "RR Restorasi Bekasi",
    address: "Jl. Pulo Ribung Raya No. 99, Jakasetia, Bekasi Selatan, Kota Bekasi, Jawa Barat 17147, Indonesia",
    mapQuery: "Jl.+Pulo+Ribung+Raya+No.+99,+Jakasetia,+Bekasi+Selatan,+Kota+Bekasi,+Jawa+Barat+17147,+Indonesia",
    phone: "+62 815-1136-1035",
    order: 3
  }
]

async function migrateBranches() {
  console.log('Starting branch migration...')
  
  try {
    // Check if branches already exist
    const existingBranches = await client.fetch('*[_type == "branch"]')
    
    if (existingBranches.length > 0) {
      console.log(`Found ${existingBranches.length} existing branches. Deleting them first...`)
      
      // Delete existing branches
      const transaction = client.transaction()
      existingBranches.forEach(branch => {
        transaction.delete(branch._id)
      })
      
      await transaction.commit()
      console.log('Deleted existing branches')
    }
    
    // Create new branches
    const transaction = client.transaction()
    
    branches.forEach(branch => {
      transaction.create(branch)
    })
    
    await transaction.commit()
    
    console.log(`Successfully migrated ${branches.length} branches to Sanity!`)
    
    // Verify the migration
    const newBranches = await client.fetch('*[_type == "branch"] | order(order asc)')
    console.log('Verification:')
    newBranches.forEach((branch, index) => {
      console.log(`${index + 1}. ${branch.name} - ${branch.address}`)
    })
    
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

migrateBranches()