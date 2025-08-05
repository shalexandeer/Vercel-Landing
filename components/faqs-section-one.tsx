'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Apakah hanya untuk mobil Eropa?',
            answer: 'Tidak! Kami melayani semua tipe dan merk mobil, mulai dari Jepang, Eropa, hingga mobil premium.',
        },
        {
            id: 'item-2',
            question: 'Apakah plafon bisa diperbaiki tanpa bongkar seluruh interior?',
            answer: 'Bisa! Kami spesialis plafon turun, proses efisien, rapi, dan minim bongkar.',
        },
        {
            id: 'item-3',
            question: 'Berapa lama waktu pengerjaan?',
            answer: 'Tergantung jenis kerusakan; rata-rata 1-3 hari, namun kami utamakan hasil presisi dan rapi.',
        },
        {
            id: 'item-4',
            question: 'Apakah dapat garansi?',
            answer: 'Tentu. Semua layanan kami bergaransi—jika ada masalah dari pengerjaan kami, perbaikan ulang GRATIS.',
        },
        {
            id: 'item-5',
            question: 'Lokasi dan cara konsultasi?',
            answer: 'Workshop kami di Rungkut Alang-Alang 189, Surabaya. Konsultasi/boking via WA: 0822-4552-7366.',
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Pertanyaan Umum</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Temukan jawaban lengkap untuk pertanyaan umum seputar layanan restorasi interior mobil kami.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
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
