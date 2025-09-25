'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Car, Palette, Settings, Shield, Replace, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const services = [
    {
        id: 'recondition',
        icon: Shield,
        title: 'Recondition Mobil',
        description: 'Layanan recondition mobil untuk mengembalikan kondisi komponen dan bagian kendaraan Anda agar berfungsi optimal, baik dari segi mesin, interior, maupun fitur lainnya, tanpa perlu penggantian total.',
        images: [
            "/services/reicon-before.jpg",
            "/services/reicon-after.jpg", 
            "/services/reicon-before-2.jpg",
            "/services/reicon-after-2.jpg"
        ]
    },
    {
        id: 'repaint',
        icon: Palette,
        title: 'Repaint Interior',
        description: 'Layanan repaint interior untuk memberikan tampilan baru pada kendaraan Anda. Menggunakan bahan berkualitas tinggi dan teknik pengecatan presisi untuk hasil akhir yang halus, merata, dan tahan lama.',
        images: [
            "/services/repaint-before.jpg",
            "/services/repaint-after.jpg",
            "/services/repaint-before-2.jpg", 
            "/services/repaint-after-2.jpg"
        ]
    },
    {
        id: 'repair',
        icon: Settings,
        title: 'Repair Interior Mobil',
        description: 'Spesialis repair interior mobil mulai dari perbaikan kerusakan kecil hingga perbaikan struktural yang kompleks. Tim ahli kami siap mengembalikan fungsi dan bentuk interior kendaraan Anda seperti semula.',
        images: [
            "/services/repair-before.jpg",
            "/services/repair-after.jpg",
            "/services/repair-before-2.jpg",
            "/services/repair-after-2.jpg",
            "/services/repair-before-3.jpg",
            "/services/repair-after-3.jpg",
            "/services/repair-before-4.jpg",
            "/services/repair-after-4.jpg"
        ]
    },
    {
        id: 'replace',
        icon: Replace,
        title: 'Replace Panel Mobil',
        description: 'Layanan replace panel mobil untuk penggantian suku cadang yang sudah tidak layak pakai dengan komponen baru berkualitas, memastikan kendaraan Anda kembali aman dan prima.',
        images: [
            "/services/replace-before.jpg",
            "/services/replace-after.jpg",
            "/services/replace-before-2.jpg",
            "/services/replace-after-2.jpg"
        ]
    },
    {
        id: 'retrim',
        icon: Car,
        title: 'Retrim Jok Mobil',
        description: 'Spesialis retrim jok mobil untuk menghidupkan kembali interior kendaraan. Layanan retrim kami mencakup perbaikan jok, karpet, dashboard, dan panel agar terlihat segar dan mewah.',
        images: [
            "/services/retrim-before.jpg",
            "/services/retrim-after.jpg",
            "/services/retrim-before-2.jpg",
            "/services/retrim-after-2.jpg",
            "/services/retrim-before-3.jpg",
            "/services/retrim-after-3.jpg"
        ]
    }
];

export default function FeaturesSection() {
    const [expandedService, setExpandedService] = useState<string | null>(null);

    const toggleService = (serviceId: string) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    return (
        <section className="bg-[#181818]" id='layanan'>
            <div className="mx-auto max-w-5xl">
                <div className="relative">
                    {services.map((service) => {
                        const isExpanded = expandedService === service.id;
                        
                        return (
                            <Card
                                key={service.id}
                                className="relative overflow-hidden border-none bg-transparent rounded-none min-h-[400px] pt-6 pb-16"
                                style={{
                                    background: `linear-gradient(rgba(24,24,24,0.5), rgba(24,24,24,0.55)), url('${service.images[0]}') center center / cover no-repeat`
                                }}
                                onClick={() => toggleService(service.id)}
                            >
                                <CardContent className="p-0 h-full">
                                    {/* Bottom gradient overlay - always visible */}
                                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent z-5"></div>
                                    
                                    <div 
                                        className={`h-full w-full absolute left-0 right-0 top-0 bottom-0 z-10 transition-all duration-500 ease-in-out ${
                                            isExpanded ? 'bg-[#181818]' : 'bg-transparent opacity-0'
                                        }`}
                                        id='overlay-active'
                                    ></div>
                                    {/* Header - Always visible */}
                                    <div className='relative z-20'>
                                        <div 
                                            className="flex flex-col justify-between cursor-pointer transition-colors h-full px-6 mb-6"
                                        >
                                            <h3 className="text-base font-semibold text-white ">RESTORASI</h3>
                                            <h3 className="text-xl font-semibold text-white uppercase ">{service.title}</h3>
                                        </div>
                                        {/* Expandable content */}
                                        <div className={`overflow-hidden transition-all grid md:grid-cols-2 duration-500 ease-in-out ${
                                            isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                                <div>
                                                    <p className="text-white text-sm text-justify px-6 mb-6">
                                                        {service.description}
                                                    </p>
                                                    <Button
                                                        asChild
                                                        size="lg"
                                                        className="mt-4 bg-secondary hover:bg-secondary/90  mx-6"
                                                    >
                                                        <Link href="https://wa.me/6282245527366" className="flex items-center gap-2 text-white">
                                                            <span className="text-nowrap text-base">HUBUNGI SEKARANG</span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                                
                                                {/* Photo collage */}
                                                <div className="grid grid-cols-2 px-6 pb-4">
                                                    {service.images.slice(0, 4).map((img, idx) => (
                                                        <div key={idx} className="aspect-[4/3] w-full overflow-hidden relative">
                                                            {/* Tag for index 0 and 2: "before" */}
                                                            {(idx === 0 || idx === 2) && (
                                                                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                                                    before
                                                                </span>
                                                            )}
                                                            {/* Tag for index 1 and 3: "after" */}
                                                            {(idx === 1 || idx === 3) && (
                                                                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                                                    after
                                                                </span>
                                                            )}
                                                            <img
                                                                src={img}
                                                                alt={`${service.title} photo ${idx + 1}`}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='px-6 pb-8 md:hidden'>
                                                    <Button
                                                        asChild
                                                        size="lg"
                                                        className="mt-4 bg-secondary hover:bg-secondary/90 w-full"
                                                    >
                                                        <Link href="https://wa.me/6282245527366" className="flex items-center gap-2 text-white">
                                                            <span className="text-nowrap text-base">HUBUNGI SEKARANG</span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-between text-white absolute bottom-6 px-6 left-0 right-0 w-full z-20 items-center'>
                                        <h1 className='text-base font-semibold'>{isExpanded ? 'SEMBUNYIKAN' : 'LIHAT LEBIH'}</h1>
                                        <div className={` border p-2 rounded-full ${isExpanded ? 'text-red-500 border-red-500' : 'text-white border-white'}`}>
                                            <ChevronDown 
                                                className={`size-5 transition-transform duration-300 ${
                                                    isExpanded ? 'rotate-180' : ''
                                                }`} 
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
