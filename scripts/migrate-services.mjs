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

const services = [
  {
    _type: 'service',
    title: 'Recondition Mobil',
    slug: {
      _type: 'slug',
      current: 'recondition-mobil'
    },
    description: 'Layanan recondition mobil untuk mengembalikan kondisi komponen dan bagian kendaraan Anda agar berfungsi optimal, baik dari segi mesin, interior, maupun fitur lainnya, tanpa perlu penggantian total.',
    icon: 'ShieldCheckIcon',
    images: [
      {
        _type: 'object',
        _key: 'reicon-before-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-reicon-before-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Recondition before image 1',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'reicon-after-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-reicon-after-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Recondition after image 1',
        type: 'after'
      },
      {
        _type: 'object',
        _key: 'reicon-before-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-reicon-before-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Recondition before image 2',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'reicon-after-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-reicon-after-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Recondition after image 2',
        type: 'after'
      }
    ],
    order: 1,
    isActive: true
  },
  {
    _type: 'service',
    title: 'Repaint Interior',
    slug: {
      _type: 'slug',
      current: 'repaint-interior'
    },
    description: 'Layanan repaint interior untuk memberikan tampilan baru pada kendaraan Anda. Menggunakan bahan berkualitas tinggi dan teknik pengecatan presisi untuk hasil akhir yang halus, merata, dan tahan lama.',
    icon: 'PaletteIcon',
    images: [
      {
        _type: 'object',
        _key: 'repaint-before-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repaint-before-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repaint before image 1',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'repaint-after-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repaint-after-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repaint after image 1',
        type: 'after'
      },
      {
        _type: 'object',
        _key: 'repaint-before-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repaint-before-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repaint before image 2',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'repaint-after-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repaint-after-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repaint after image 2',
        type: 'after'
      }
    ],
    order: 2,
    isActive: true
  },
  {
    _type: 'service',
    title: 'Repair Interior Mobil',
    slug: {
      _type: 'slug',
      current: 'repair-interior-mobil'
    },
    description: 'Spesialis repair interior mobil mulai dari perbaikan kerusakan kecil hingga perbaikan struktural yang kompleks. Tim ahli kami siap mengembalikan fungsi dan bentuk interior kendaraan Anda seperti semula.',
    icon: 'WrenchIcon',
    images: [
      {
        _type: 'object',
        _key: 'repair-before-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repair-before-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repair before image 1',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'repair-after-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repair-after-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repair after image 1',
        type: 'after'
      },
      {
        _type: 'object',
        _key: 'repair-before-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repair-before-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repair before image 2',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'repair-after-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-repair-after-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Repair after image 2',
        type: 'after'
      }
    ],
    order: 3,
    isActive: true
  },
  {
    _type: 'service',
    title: 'Replace Panel Mobil',
    slug: {
      _type: 'slug',
      current: 'replace-panel-mobil'
    },
    description: 'Layanan replace panel mobil untuk penggantian suku cadang yang sudah tidak layak pakai dengan komponen baru berkualitas, memastikan kendaraan Anda kembali aman dan prima.',
    icon: 'RefreshCwIcon',
    images: [
      {
        _type: 'object',
        _key: 'replace-before-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-replace-before-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Replace before image 1',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'replace-after-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-replace-after-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Replace after image 1',
        type: 'after'
      },
      {
        _type: 'object',
        _key: 'replace-before-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-replace-before-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Replace before image 2',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'replace-after-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-replace-after-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Replace after image 2',
        type: 'after'
      }
    ],
    order: 4,
    isActive: true
  },
  {
    _type: 'service',
    title: 'Retrim Jok Mobil',
    slug: {
      _type: 'slug',
      current: 'retrim-jok-mobil'
    },
    description: 'Spesialis retrim jok mobil untuk menghidupkan kembali interior kendaraan. Layanan retrim kami mencakup perbaikan jok, karpet, dashboard, dan panel agar terlihat segar dan mewah.',
    icon: 'CarIcon',
    images: [
      {
        _type: 'object',
        _key: 'retrim-before-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-retrim-before-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Retrim before image 1',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'retrim-after-1',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-retrim-after-1' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Retrim after image 1',
        type: 'after'
      },
      {
        _type: 'object',
        _key: 'retrim-before-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-retrim-before-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Retrim before image 2',
        type: 'before'
      },
      {
        _type: 'object',
        _key: 'retrim-after-2',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-retrim-after-2' // This would need to be uploaded to Sanity first
          }
        },
        alt: 'Retrim after image 2',
        type: 'after'
      }
    ],
    order: 5,
    isActive: true
  }
];

async function migrateServices() {
  console.log('Starting services migration...');
  
  try {
    // First, check if services already exist
    const existingServices = await client.fetch('*[_type == "service"]');
    
    if (existingServices.length > 0) {
      console.log(`Found ${existingServices.length} existing services. Deleting them first...`);
      
      // Delete existing services
      const transaction = client.transaction()
      existingServices.forEach(service => {
        transaction.delete(service._id)
      })
      
      await transaction.commit()
      console.log('Deleted existing services');
    }
    
    // Create services without images first (images need to be uploaded manually via Sanity Studio)
    const servicesWithoutImages = services.map(service => ({
      ...service,
      images: [] // Remove images for now
    }));
    
    const transaction = client.transaction()
    
    servicesWithoutImages.forEach(service => {
      transaction.create(service)
    })
    
    await transaction.commit()
    
    console.log(`Successfully migrated ${servicesWithoutImages.length} services to Sanity!`);
    console.log('Note: Images need to be uploaded manually via Sanity Studio');
    
    // Verify migration
    const newServices = await client.fetch('*[_type == "service"] | order(order asc)')
    console.log('Verification:')
    newServices.forEach((service, index) => {
      console.log(`${index + 1}. ${service.title} - ${service.icon}`);
    })
    
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1)
  }
}

migrateServices();