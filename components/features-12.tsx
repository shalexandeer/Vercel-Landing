'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Wrench, Car, Palette, Settings, Shield } from 'lucide-react'

const services = [
    {
        title: "Recondition Mobil - Restorasi Komponen Kendaraan",
        description: "Layanan recondition mobil untuk mengembalikan kondisi komponen dan bagian kendaraan Anda agar berfungsi optimal, baik dari segi mesin, interior, maupun fitur lainnya, tanpa perlu penggantian total.",
        image: "/services/reicon-tombol.jpeg",
        icon: Shield 
    },
    {
        title: "Repair Interior Mobil - Perbaikan Interior",
        description: "Spesialis repair interior mobil mulai dari perbaikan kerusakan kecil hingga perbaikan struktural yang kompleks. Tim ahli kami siap mengembalikan fungsi dan bentuk interior kendaraan Anda seperti semula.",
        image: "/services/repair-stir.jpeg",
        icon: Wrench
    },
    {
        title: "Replace Panel Mobil - Penggantian Panel Interior",
        description: "Layanan replace panel mobil untuk penggantian suku cadang yang sudah tidak layak pakai dengan komponen baru berkualitas, memastikan kendaraan Anda kembali aman dan prima.",
        image: "/services/replace-handle.jpeg",
        icon: Settings
    },
    {
        title: "Retrim Jok Mobil - Perbaikan Jok & Interior",
        description: "Spesialis retrim jok mobil untuk menghidupkan kembali interior kendaraan Anda. Layanan retrim kami mencakup penggantian dan perbaikan jok, karpet, dashboard, dan panel agar terlihat segar dan mewah.",
        image: "/services/retrim-dashboard.jpeg",
        icon: Car
    },
    {
        title: "Repaint Interior - Pengecatan Ulang Interior Mobil",
        description: "Layanan repaint interior untuk memberikan tampilan baru pada kendaraan Anda. Menggunakan bahan berkualitas tinggi dan teknik pengecatan presisi untuk hasil akhir yang halus, merata, dan tahan lama.",
        image: "/services/repaint-jok.jpeg",
        icon: Palette
    }
]

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="py-16 md:py-24">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]" />
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Layanan Kami</h2>
                    <p className="text-muted-foreground">Berikut adalah layanan unggulan RR Restorasi untuk interior mobil Anda.</p>
                </div>
                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={services[activeIndex].title}
                        onValueChange={(value) => {
                            const idx = services.findIndex(s => s.title === value)
                            if (idx !== -1) setActiveIndex(idx)
                        }}
                        className="w-full"
                    >
                        {services.map((service, idx) => (
                            <AccordionItem value={service.title} key={service.title}>
                                <AccordionTrigger>
                                    <div className={`flex items-center gap-2 text-base`}>
                                        <service.icon className="size-4" />
                                        {service.title}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>{service.description}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={services[activeIndex].title}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                                >
                                    <Image
                                        src={services[activeIndex].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={services[activeIndex].title}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-[#F5130E] to-transparent dark:via-[#F5130E]/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
