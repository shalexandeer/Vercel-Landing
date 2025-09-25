import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react'
import { Video } from './video'
import { Marquee } from "./magicui/marquee";

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="bg-linear-to-b  to-muted from-background h-[558px] flex flex-col justify-end items-center relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hero-img.png')"}}>
                    {/* Dark overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="w-full flex flex-col pb-10 px-6 relative z-10 mx-auto max-w-5xl">
                        <div className="text-start">
                            <h1 className="font-boldtext-balance text-[18px] font-medium md:text-xl text-white">Lebih dari</h1>
                            <span className='text-2xl font-semibold md:text-2xl text-white'>SEKEDAR PERBAIKAN</span>
                        </div>
                        <Button
                            asChild
                            size="lg"
                            className="mt-4 bg-secondary hover:bg-secondary/90 w-full "
                        >
                            <Link href="https://wa.me/6282245527366" className="flex items-center gap-2 text-white">
                                <span className="text-nowrap text-base">HUBUNGI SEKARANG</span>
                            </Link>
                        </Button>
                    </div>
                </section>
                <div className='h-[96px] grid place-items-center mx-auto max-w-5xl'>
                    <Marquee className="relative z-10" pauseOnHover repeat={4}>
                        {/* Brand Logos from brand directory */}
                            <Image
                                src="/brand/image 111.png"
                                alt="Brand Logo 1"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                            <Image
                                src="/brand/image 112.png"
                                alt="Brand Logo 2"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                            <Image
                                src="/brand/image 113.png"
                                alt="Brand Logo 3"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                            <Image
                                src="/brand/image 114.png"
                                alt="Brand Logo 4"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                            <Image
                                src="/brand/image 115.png"
                                alt="Brand Logo 5"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                            <Image
                                src="/brand/image 116.png"
                                alt="Brand Logo 6"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                            <Image
                                src="/brand/image 117.png"
                                alt="Brand Logo 7"
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4 object-contain rounded"
                            />
                    </Marquee>
                </div>
            </main>
        </>
    )
}
