import { createClient } from 'next-sanity'

// Initialize the Sanity client with environment variables
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-07',
  useCdn: false, // We want to write data, so don't use CDN
})

// The FAQ data from the fallback
const faqData = [
  {
    _type: 'faq',
    question: 'Apa saja jasa restorasi mobil yang ditawarkan RR Restorasi?',
    answer: 'Kami melayani berbagai kebutuhan restorasi mobil dan perbaikan interior mobil, meliputi recondition mobil, repair interior mobil, replace panel mobil, retrim jok mobil, dan repaint interior. Tim ahli kami siap mengembalikan performa dan estetika kendaraan Anda dengan presisi.',
    order: 1,
    category: 'general'
  },
  {
    _type: 'faq',
    question: 'Berapa lama proses pengerjaan restorasi mobil?',
    answer: 'Durasi pengerjaan restorasi mobil sangat bervariasi, tergantung pada kondisi kendaraan dan jenis layanan yang dibutuhkan. Setelah pemeriksaan awal, kami akan memberikan estimasi waktu yang lebih akurat untuk perbaikan interior mobil Anda.',
    order: 2,
    category: 'general'
  },
  {
    _type: 'faq',
    question: 'Di mana lokasi bengkel restorasi RR Restorasi di Surabaya?',
    answer: 'Lokasi bengkel restorasi kami berada di Rungkut Alang-Alang 189, Surabaya. Anda bisa mencari kami di Google Maps dengan mengetik "RR Restorasi Surabaya" untuk panduan arah yang lebih mudah.',
    order: 3,
    category: 'location'
  },
  {
    _type: 'faq',
    question: 'Kapan jam operasional bengkel restorasi RR Restorasi?',
    answer: 'Kami siap melayani Anda dari Senin hingga Sabtu, mulai pukul 08:00 hingga 17:00. Namun, kami sarankan untuk membuat janji terlebih dahulu agar kami dapat melayani restorasi mobil Anda dengan lebih maksimal.',
    order: 4,
    category: 'general'
  }
]

async function migrateFAQs() {
  console.log('Starting FAQ migration...')
  
  try {
    // Check if FAQs already exist
    const existingFAQs = await client.fetch('*[_type == "faq"]')
    
    if (existingFAQs.length > 0) {
      console.log(`Found ${existingFAQs.length} existing FAQs. Deleting them first...`)
      
      // Delete existing FAQs
      const transaction = client.transaction()
      existingFAQs.forEach(faq => {
        transaction.delete(faq._id)
      })
      
      await transaction.commit()
      console.log('Deleted existing FAQs')
    }
    
    // Create new FAQs
    const transaction = client.transaction()
    
    faqData.forEach(faq => {
      transaction.create(faq)
    })
    
    await transaction.commit()
    
    console.log(`Successfully migrated ${faqData.length} FAQs to Sanity!`)
    
    // Verify the migration
    const newFAQs = await client.fetch('*[_type == "faq"] | order(order asc)')
    console.log('Verification:')
    newFAQs.forEach((faq, index) => {
      console.log(`${index + 1}. ${faq.question}`)
    })
    
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

migrateFAQs()