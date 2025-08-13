'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: "Ahmad Rizki",
        service: "Recondition (Recon)",
        rating: 5,
        image: "/testimonials/customer1.jpg",
        activityImage: "/testimonials/activity1.jpg",
        review: "Pelayanan <strong>restorasi mobil</strong> sangat memuaskan! Mobil saya yang sudah berumur 10 tahun sekarang terlihat seperti baru lagi. Tim RR Restorasi sangat profesional dan detail dalam pengerjaan <strong>recondition mobil</strong>."
    },
    {
        id: 2,
        name: "Sarah Putri",
        service: "Repair Plafon",
        rating: 5,
        image: "/testimonials/customer2.jpg",
        activityImage: "/testimonials/activity2.jpg",
        review: "<strong>Perbaikan plafon mobil turun</strong> sudah diperbaiki dengan rapi. Hasilnya sangat memuaskan dan harga terjangkau. Recommended banget untuk <strong>perbaikan interior mobil</strong>!"
    },
    {
        id: 3,
        name: "Budi Santoso",
        service: "Retrim Jok Mobil",
        rating: 5,
        image: "/testimonials/customer3.jpg",
        activityImage: "/testimonials/activity3.jpg",
        review: "Jok mobil saya yang sudah kusam sekarang terlihat mewah lagi. Layanan <strong>retrim jok mobil</strong> dengan kualitas bahan dan jahitan sangat bagus. Terima kasih RR Restorasi!"
    },
    {
        id: 4,
        name: "Dewi Sari",
        service: "Repaint Interior",
        rating: 5,
        image: "/testimonials/customer4.jpg",
        activityImage: "/testimonials/activity4.jpg",
        review: "Interior mobil saya sekarang terlihat fresh dan modern. Layanan <strong>repaint interior</strong> dengan proses pengerjaan cepat dan hasilnya sesuai ekspektasi. Sangat puas!"
    },
    {
        id: 5,
        name: "Rudi Hermawan",
        service: "Replace Panel Mobil",
        rating: 5,
        image: "/testimonials/customer5.jpg",
        activityImage: "/testimonials/activity5.jpg",
        review: "Panel interior yang rusak sudah diganti dengan yang baru. Layanan <strong>replace panel mobil</strong> dengan kualitas suku cadang original dan pengerjaan sangat rapi."
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-3 text-center md:space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Testimoni Pelanggan Restorasi Mobil</h2>
                    <p className='text-muted-foreground'>Dengarkan pengalaman langsung dari pelanggan kami yang telah merasakan kualitas layanan <strong>restorasi mobil</strong> dan <strong>perbaikan interior mobil</strong> RR Restorasi di Surabaya.</p>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0">
                                    <Card className="mx-4 border-0 shadow-lg !p-0">
                                        <CardContent className="p-0">
                                            <div className="grid md:grid-cols-2 gap-0">
                                                {/* Activity Image */}
                                                <div className="relative h-64 md:h-full">
                                                    <Image
                                                        src={testimonial.activityImage}
                                                        alt={`Activity - ${testimonial.service}`}
                                                        fill
                                                        className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"></div>
                                                </div>
                                                
                                                {/* Testimonial Content */}
                                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                                    <div className="flex items-center gap-1 mb-4">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                    
                                                    <blockquote className="text-lg font-medium mb-6">
                                                        {/* Render HTML for review text */}
                                                        <div dangerouslySetInnerHTML={{ __html: testimonial.review }} />
                                                    </blockquote>
                                                    
                                                    <div className="flex items-center gap-4">
                                                        <Avatar className="size-12">
                                                            <AvatarImage
                                                                src={testimonial.image}
                                                                alt={testimonial.name}
                                                            />
                                                            <AvatarFallback>
                                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <cite className="text-sm font-semibold not-italic">
                                                                {testimonial.name}
                                                            </cite>
                                                            <span className="text-muted-foreground block text-sm">
                                                                {testimonial.service}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        onClick={prevSlide}
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#F5130E] hover:text-white text-gray-800 shadow-lg transition-all duration-300 hover:scale-110 border-[#039DEB]"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    
                    <Button
                        onClick={nextSlide}
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#F5130E] hover:text-white text-gray-800 shadow-lg transition-all duration-300 hover:scale-110 border-[#039DEB]"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => goToSlide(index)}
                                variant="ghost"
                                size="sm"
                                className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-[#F5130E] scale-125' 
                                        : 'bg-[#039DEB] hover:bg-[#F5130E]'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
