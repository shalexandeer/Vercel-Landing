'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
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
    ]

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Pertanyaan Umum Restorasi Mobil</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Temukan jawaban lengkap untuk pertanyaan umum seputar layanan <strong>restorasi mobil</strong>, <strong>perbaikan interior mobil</strong>, dan <strong>bengkel restorasi</strong> kami di Surabaya.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Tidak menemukan jawaban yang Anda cari? Hubungi kami di{' '}
                        <Link
                            href="https://wa.me/6282245527366"
                            className="text-primary font-medium hover:underline">
                            WhatsApp: 0822-4552-7366
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
