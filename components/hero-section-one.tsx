import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ChevronRight, CirclePlay, MapPin, Instagram, Youtube, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="bg-linear-to-b to-muted from-background">
                    <div className="relative py-36">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className='flex flex-start flex-col'>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-green-50 border-green-200 group mb-6 flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-green-800 text-sm">🕒 Buka: Senin - Sabtu (08:00 - 17:00)</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-green-200 dark:bg-zinc-700"></span>

                                        <div className="bg-green-100 group-hover:bg-green-200 size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                    <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">RR Restorasi</h1>
                                    <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">Restorasi Interior Mobil Surabaya Bikin Mobilmu Fresh Lagi!</p>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pr-4.5">
                                            <Link href="https://wa.me/6282245527366">
                                                <span className="text-nowrap">Hubungi WA</span>
                                                <ChevronRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="pl-5">
                                            <Link href="#link">
                                                <CirclePlay className="fill-primary/25 stroke-primary" />
                                                <span className="text-nowrap">Watch video</span>
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="mt-8">
                                        <p className="text-muted-foreground text-sm mb-4">Follow us on</p>
                                        <div className="flex items-center gap-3">
                                            <Link 
                                                href="https://instagram.com/rrrestorasi" 
                                                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Instagram className="w-5 h-5" />
                                            </Link>
                                            <Link 
                                                href="https://youtube.com/@rrrestorasi" 
                                                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Youtube className="w-5 h-5" />
                                            </Link>
                                            <Link 
                                                href="https://tiktok.com/@rrrestorasi" 
                                                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                                </svg>
                                            </Link>
                                            <Link 
                                                href="https://wa.me/6282245527366" 
                                                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Section */}
                                <div className="space-y-4">
                                    <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                                        <GoogleMapsEmbed
                                            apiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao"
                                            height={400}
                                            width="100%"
                                            mode="place"
                                            q="Rungkut+Alang-Alang+189,+Surabaya,+Indonesia"
                                        />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        <p className="font-medium">Rungkut Alang-Alang 189, Surabaya</p>
                                        <p>Workshop RR Restorasi Surabaya</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                                    <Image
                                        src="/mist/tailark.png"
                                        alt="app screen"
                                        width="2880"
                                        height="1842"
                                        className="object-top-left size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </main>
        </>
    )
}
