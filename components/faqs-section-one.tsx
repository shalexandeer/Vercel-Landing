import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { FAQS_QUERY } from '@/sanity/lib/queries'

// Define the FAQ type
interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

// Define the fallback FAQ type
interface FallbackFAQ {
  id: string;
  question: string;
  answer: string;
}

async function getFAQs(): Promise<FAQ[]> {
  const faqs = await client.fetch(FAQS_QUERY);
  return faqs;
}

export default async function FAQs() {
    const faqItems = await getFAQs();
    
    // Fallback to hardcoded FAQs if no data is found
    const fallbackFaqs: FallbackFAQ[] = [
        {
            id: 'item-1',
            question: 'Apa saja jasa restorasi mobil yang ditawarkan RR Restorasi?',
            answer: 'Kami melayani berbagai kebutuhan restorasi mobil dan perbaikan interior mobil, meliputi recondition mobil, repair interior mobil, replace panel mobil, retrim jok mobil, dan repaint interior. Tim ahli kami siap mengembalikan performa dan estetika kendaraan Anda dengan presisi.',
        },
        {
            id: 'item-2',
            question: 'Berapa lama proses pengerjaan restorasi mobil?',
            answer: 'Durasi pengerjaan restorasi mobil sangat bervariasi, tergantung pada kondisi kendaraan dan jenis layanan yang dibutuhkan. Setelah pemeriksaan awal, kami akan memberikan estimasi waktu yang lebih akurat untuk perbaikan interior mobil Anda.',
        },
        {
            id: 'item-3',
            question: 'Di mana lokasi bengkel restorasi RR Restorasi di Surabaya?',
            answer: 'Lokasi bengkel restorasi kami berada di Rungkut Alang-Alang 189, Surabaya. Anda bisa mencari kami di Google Maps dengan mengetik "RR Restorasi Surabaya" untuk panduan arah yang lebih mudah.',
        },
        {
            id: 'item-4',
            question: 'Kapan jam operasional bengkel restorasi RR Restorasi?',
            answer: 'Kami siap melayani Anda dari Senin hingga Sabtu, mulai pukul 08:00 hingga 17:00. Namun, kami sarankan untuk membuat janji terlebih dahulu agar kami dapat melayani restorasi mobil Anda dengan lebih maksimal.',
        }
    ];

    const displayItems = (faqItems && faqItems.length > 0) ? faqItems : fallbackFaqs;

    return (
        <section className="py-6 md:py-24 bg-[#181818]" id='faqs'>
            <div className="mx-auto max-w-5xl">
                <div
                    className="flex flex-col justify-between cursor-pointer transition-colors h-full mb-6 px-6"
                >
                    <h3 className="text-base font-semibold text-white ">QUESTION?</h3>
                    <h3 className="text-xl font-semibold text-white uppercase">ASK QUESTION</h3>
                </div>

                <div className="">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={(displayItems[0] as any)?._id || (displayItems[0] as any)?.id}
                        className="bg-[#181818] w-full !border-none rounded-none shadow text-white">
                        {displayItems.map((item: any) => (
                            <AccordionItem
                                key={item._id || item.id}
                                value={item._id || item.id}
                                className="border-none">
                                <AccordionTrigger className="cursor-pointer font-semibold rounded-none border-none text-base hover:no-underline px-6 data-[state=open]:bg-[#2E2E2E] bg-[#181818] transition-colors duration-200">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className='!border-none px-6 bg-[#2E2E2E]'>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted mt-6 px-6">
                        Tidak menemukan jawaban yang Anda cari? Hubungi kami di{' '}
                        <Link
                            href="https://wa.me/6281511361035"
                            className="text-primary font-medium hover:underline">
                            WhatsApp: 0815-1136-1035
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
