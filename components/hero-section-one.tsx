import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react'
import { Video } from './video'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="bg-linear-to-b to-muted from-background">
                    <div className="relative py-16 md:py-24">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="grid grid-cols-1 gap-12 items-center">
                                <div className='flex flex-start flex-col text-center  items-center  '>
                                    <Link
                                        href="#cabang"
                                        className="hover:bg-background dark:hover:border-t-border bg-primary/10 border-primary/20 group my-6 flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-primary text-sm">🕒 Buka: Senin - Sabtu (08:00 - 17:00)</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-primary/20 dark:bg-zinc-700"></span>

                                        <div className="bg-primary/20 group-hover:bg-primary/30 size-6 overflow-hidden rounded-full duration-500">
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
                                    <h1 className=" text-balance text-4xl font-medium md:text-6xl">Lebih dari Sekadar Perbaikan</h1>
                                    <p className="text-muted-foreground my-8 text-balance">Jangan biarkan kendaraan Anda termakan usia. RR Restorasi mengembalikan kilau dan performa optimal, membuat Anda bangga setiap kali melaju. Kami menawarkan kualitas tanpa kompromi untuk setiap detail. Hubungi kami sekarang dan saksikan perbedaannya.</p>
                                    <div className="flex flex-col md:flex-row items-center gap-6">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pr-4.5 bg-[#F5130E] hover:bg-[#F5130E]/90"
                                        >
                                            <Link href="https://wa.me/6282245527366" className="flex items-center gap-2 text-white">
                                                <MessageCircle className="w-5 h-5 text-white" />
                                                <span className="text-nowrap">Hubungi Sekarang</span>
                                                <ChevronRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        {/* Brand Logos */}
                                        <div className="flex flex-row items-center gap-3 ml-4">
                                            {/* BMW Logo */}
                                            <div className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="30" stroke="#222" strokeWidth="4" fill="#fff"/>
                                                    <circle cx="32" cy="32" r="20" fill="#222"/>
                                                    <path d="M32 12a20 20 0 0 1 20 20h-20V12z" fill="#1C69D4"/>
                                                    <path d="M32 52a20 20 0 0 1-20-20h20v20z" fill="#1C69D4"/>
                                                    <path d="M32 12a20 20 0 0 0-20 20h20V12z" fill="#fff"/>
                                                    <path d="M32 52a20 20 0 0 0 20-20H32v20z" fill="#fff"/>
                                                </svg>
                                            </div>
                                            {/* Mercedes Logo */}
                                            <div className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="30" stroke="#222" strokeWidth="4" fill="#fff"/>
                                                    <circle cx="32" cy="32" r="24" stroke="#222" strokeWidth="2" fill="none"/>
                                                    <g stroke="#222" strokeWidth="2" strokeLinecap="round">
                                                        <line x1="32" y1="32" x2="32" y2="14"/>
                                                        <line x1="32" y1="32" x2="48.78" y2="46"/>
                                                        <line x1="32" y1="32" x2="15.22" y2="46"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            {/* Range Rover Logo */}
                                            <div className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none">
                                                    <ellipse cx="32" cy="32" rx="28" ry="18" fill="#1A3C1A" stroke="#222" strokeWidth="4"/>
                                                    <ellipse cx="32" cy="32" rx="24" ry="14" fill="#fff" stroke="#1A3C1A" strokeWidth="2"/>
                                                    <rect x="18" y="28" width="28" height="8" rx="4" fill="#1A3C1A"/>
                                                    <text x="32" y="34" textAnchor="middle" fontSize="6" fill="#fff" fontFamily="Arial" fontWeight="bold" letterSpacing="1">RANGE</text>
                                                    <text x="32" y="40" textAnchor="middle" fontSize="6" fill="#fff" fontFamily="Arial" fontWeight="bold" letterSpacing="1">ROVER</text>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Video />
                               
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
