'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const menuItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Cabang', href: '#cabang' },
    { name: 'FAQ', href: '#faqs' },
    { name: 'Testimoni', href: '#testimonials' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn('fixed z-20 w-full transition-all duration-300', isScrolled && 'bg-background/75 border-b border-black/5 backdrop-blur-lg')}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
                        <div className="flex w-full justify-between gap-6 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image src="/logo1.svg" alt="logo" width={50} height={50} />
                                <h1>RR Restorasi</h1>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            {/* <div className="m-auto hidden size-fit lg:block">
                                <ul className="flex gap-1">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="sm">
                                                <Link
                                                    href={item.href}
                                                    className="text-base">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                onClick={() => setMenuState(false)}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full items-center justify-between sm:justify-end gap-4 md:w-fit">
                                <p className="text-muted-foreground text-sm">Follow us on</p> 
                                {/* Socials logo bar, as in hero-section-one.tsx */}
                                <div className="flex items-center gap-3">
                                    <a 
                                        href="https://instagram.com/rrrestorasi" 
                                        className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://youtube.com/@rrrestorasi" 
                                        className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.86.56a2.75 2.75 0 0 0-1.94 1.94C2.5 9.66 2.5 12 2.5 12s0 2.34.56 3.999a2.75 2.75 0 0 0 1.94 1.94C5.8 18.5 12 18.5 12 18.5s6.2 0 7.86-.56a2.75 2.75 0 0 0 1.94-1.94C21.5 14.34 21.5 12 21.5 12s0-2.34-.56-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://tiktok.com/@rrrestorasi" 
                                        className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://wa.me/6282245527366" 
                                        className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.32 4.84a1 1 0 0 0 1.22 1.22l4.84-1.32A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71-1.06-1.06a1 1 0 0 0-1.41 0l-.71.71a7 7 0 0 1-3.54-3.54l.71-.71a1 1 0 0 0 0-1.41l-1.06-1.06a1 1 0 0 0-1.41 0A5 5 0 0 0 7 12a5 5 0 0 0 5 5 5 5 0 0 0 3.54-1.46 1 1 0 0 0 0-1.41z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
