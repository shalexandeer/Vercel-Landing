import { client } from '../sanity/lib/client.js'

const contactPersons = [
  {
    _type: 'contactPerson',
    name: 'RR Restorasi Customer Service',
    email: 'info@rrrestorasi.com',
    phone: '6282245527366',
    isActive: true
  }
]

async function migrateContactPersons() {
  try {
    console.log('Starting contact person migration...')
    
    for (const contactPerson of contactPersons) {
      // Check if contact person already exists
      const existing = await client.fetch(`
        *[_type == "contactPerson" && email == "${contactPerson.email}"][0]
      `)
      
      if (existing) {
        console.log(`Contact person with email ${contactPerson.email} already exists. Skipping.`)
        continue
      }
      
      const result = await client.create(contactPerson)
      console.log(`Created contact person: ${result.name} (ID: ${result._id})`)
    }
    
    console.log('Contact person migration completed!')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

migrateContactPersons()