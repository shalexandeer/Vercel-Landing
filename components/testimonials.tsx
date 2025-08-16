'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'

const testimonials = [
  {
    name: "Hans D Julian",
    date: "sebulan lalu",
    review: `Tempat yang sejauh ini bisa diandalkan buat restorasi interior mobil Eropa. Harga bagus, Pengerjaan cepat dan cukup rapi dengan kondisi yang pernah ada sebelumnya, Pemberian estimasi cepat Overall memuaskan sejauh ini.`,
    activityImage: "/hadi.webp",
    rating: 5,
  },
  {
    name: "Mas Yons",
    date: "3 bulan lalu",
    review: "Orang nya ramah2 terutama bos,hasil nya rapih",
    activityImage: "/yona.webp",
    rating: 5,
  },
  {
    name: "Deva Sitinur",
    date: "3 bulan lalu",
    review: "Pengerjaannya rapih hasilnya memuaskan dan cepat prosesnya,ownernya pun ramah puas sekali dengan pengerjaan RR restorasi,pokoknya yg mau ngerapihin interiornya jangan ragu dateng kesini🫶🏻🙏🏻",
    rating: 5,
  },
  {
    name: "Hadianto Budihardjo",
    date: "9 bulan lalu",
    review: "Car seat got fixed neatly! The price is really reasonable too.",
    rating: 5,
  },
  {
    name: "Sasii Sunanti",
    date: "setahun lalu",
    review: "Hasilnya detail bgt disini, rapih & juga kebersihannya ok, udah 2x restorasi mobil disini. highly recommended y'all 🙏",
    rating: 5,
  },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white" id='testimonials'>
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-3 text-center md:space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Testimoni Pelanggan Restorasi Mobil</h2>
                    <p className='text-muted-foreground'>Dengarkan pengalaman langsung dari pelanggan kami yang telah merasakan kualitas layanan <strong>restorasi mobil</strong> dan <strong>perbaikan interior mobil</strong> RR Restorasi di Surabaya.</p>
                </div>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
                    <Marquee pauseOnHover className="[--duration:1000s] h-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full max-w-[250px] md:max-w-xl mx-auto mb-6">
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                                    {/* Activity Image (optional) */}
                                    {testimonial.activityImage && (
                                        <div className="relative h-40 md:h-auto md:w-1/3 flex-shrink-0">
                                            <img
                                                src={testimonial.activityImage}
                                                alt={`Activity - ${testimonial.activityImage}`}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute inset-0 bg-black/20"></div>
                                        </div>
                                    )}
                                    {/* Testimonial Content */}
                                    <div className="p-6 flex flex-col justify-center w-full">
                                        <div className="flex items-center gap-1 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <blockquote className="text-xs md:text-sm font-medium mb-4">
                                            <div dangerouslySetInnerHTML={{ __html: testimonial.review }} />
                                        </blockquote>
                                        <div className="flex items-center gap-4 mt-2">
                                            <Avatar className="size-10">
                                                <AvatarImage
                                                    alt={testimonial.name}
                                                />
                                                <AvatarFallback>
                                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-xs md:text-smfont-semibold not-italic block">
                                                    {testimonial.name}
                                                </cite>
                                                <span className="text-xs md:text-sm text-muted-foreground block">{testimonial.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 -left-0.5 md:left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 -right-0.5 md:right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </section>
    )
}
