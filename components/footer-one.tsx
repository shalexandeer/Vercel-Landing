import { Logo } from '@/components/logo'
import Image from 'next/image'
import Link from 'next/link'

const links = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Solution',
        href: '#',
    },
    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#',
    },
    {
        title: 'Help',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer id="footer" className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className='flex flex-row items-center justify-center gap-2'>
                    <Image src="/logo1.svg" alt="logo" width={50} height={50} />
                    <h1>RR Restorasi</h1>
                </div>

                {/* <div className="my-8 flex flex-wrap justify-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div> */}
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
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
                                        className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://wa.me/6282245527366" 
                                        className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
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
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} RR Restorasi, All rights reserved</span>
            </div>
        </footer>
    )
}
