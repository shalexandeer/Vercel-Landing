import { client } from '@/sanity/lib/client'
import { CONTACT_PERSON_QUERY } from '@/sanity/lib/queries'
import { ContactPerson } from '@/types/contactPerson'

export async function getContactPerson(): Promise<ContactPerson | null> {
  try {
    const contactPerson = await client.fetch(CONTACT_PERSON_QUERY);
    return contactPerson;
  } catch (error) {
    console.error('Error fetching contact person:', error);
    return null;
  }
}

// Fallback contact person data
export const fallbackContactPerson: ContactPerson = {
  _id: 'fallback-contact',
  name: 'RR Restorasi',
  email: 'info@rrrestorasi.com',
  phone: '6282245527366',
  isActive: true,
};