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
        // Remove quotes from value if present
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

// Initialize Sanity client
const envVars = loadEnvVars()
const client = createClient({
  projectId: envVars.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: envVars.NEXT_PUBLIC_SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: envVars.NEXT_PUBLIC_SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-07',
  token: envVars.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false, // We want to write data, so don't use CDN
})

const socialMediaData = [
  {
    _type: 'socialMedia',
    name: 'instagram',
    url: 'https://instagram.com/rrrestorasi',
    order: 1,
  },
  {
    _type: 'socialMedia',
    name: 'youtube',
    url: 'https://youtube.com/@rrrestorasi',
    order: 2,
  },
  {
    _type: 'socialMedia',
    name: 'tiktok',
    url: 'https://tiktok.com/@rrrestorasi',
    order: 3,
  },
  {
    _type: 'socialMedia',
    name: 'whatsapp',
    url: 'https://wa.me/6282245527366',
    order: 4,
  },
]

async function migrateSocialMedia() {
  console.log('Starting social media migration...')
  
  try {
    // Check if social media already exist
    const existingSocialMedia = await client.fetch('*[_type == "socialMedia"]')
    
    if (existingSocialMedia.length > 0) {
      console.log(`Found ${existingSocialMedia.length} existing social media entries. Deleting them first...`)
      
      // Delete existing social media
      const transaction = client.transaction()
      existingSocialMedia.forEach(social => {
        transaction.delete(social._id)
      })
      
      await transaction.commit()
      console.log('Deleted existing social media entries')
    }
    
    // Create new social media entries
    const transaction = client.transaction()
    
    socialMediaData.forEach(social => {
      transaction.create(social)
    })
    
    await transaction.commit()
    
    console.log(`Successfully migrated ${socialMediaData.length} social media entries to Sanity!`)
    
    // Verify migration
    const newSocialMedia = await client.fetch('*[_type == "socialMedia"] | order(order asc)')
    console.log('Verification:')
    newSocialMedia.forEach((social, index) => {
      console.log(`${index + 1}. ${social.name} - ${social.url}`)
    })
    
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

migrateSocialMedia()