'use client'

import { GoogleMapsEmbed } from '@next/third-parties/google'
import { branches } from './branches'
import { useState } from 'react'

export default function ContentSection() {
    const [activeBranch, setActiveBranch] = useState(branches[0])
    return (
        <section className="py-16 bg-muted/50 " id='cabang'>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-8">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                    Solusi Lengkap Restorasi Mobil & Perbaikan Interior
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Kami menawarkan layanan komprehensif <strong>restorasi mobil</strong> dan <strong>perbaikan interior mobil</strong> untuk mengembalikan kendaraan Anda ke kondisi terbaik. Spesialis <strong>recondition mobil</strong>, <strong>repair interior</strong>, <strong>retrim jok mobil</strong>, <strong>repaint interior</strong>, dan <strong>replace panel mobil</strong> dengan fokus pada kualitas dan detail di setiap tahap.
                        </p>
                        <div className="sm:hidden">
                            <ul className="grid grid-cols-3 gap-2 sm:space-y-3 sm:grid-cols-1">
                                {branches.map((branch) => (
                                    <li
                                        key={branch.id}
                                        onClick={() => setActiveBranch(branch)}
                                        className={`cursor-pointer p-4 rounded transition-all duration-300 border flex flex-col items-center gap-2
                                            ${activeBranch.id === branch.id
                                                ? 'bg-[#F5130E] text-white scale-105 shadow-lg'
                                                : 'bg-white text-black hover:bg-[#039DEB]/10 border-[#039DEB]/20'}
                                        `}
                                    >
                                        <div className="font-semibold text-xs sm:text-base text-center">{branch.name}</div>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=${branch.phone.replace(/[^0-9]/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="mt-2 p-1 sm:p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                                            title="Hubungi via WhatsApp"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16" height="16" className="sm:w-5 sm:h-5"
                                                fill="white"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.451-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.643a11.93 11.93 0 005.826 1.489h.005c6.615 0 11.988-5.373 11.993-11.987a11.86 11.86 0 00-3.497-8.386z"/>
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                       <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                            <GoogleMapsEmbed
                                apiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao"
                                height={300}
                                width="100%"
                                mode="place"
                                q={activeBranch.mapQuery}
                            />
                        </div>
                    </div>
                    <div className="hidden sm:block relative mt-6 sm:mt-0">
                         <div className="lg:pt-6">
                            <ul className="space-y-3">
                                {branches.map((branch) => (
                                    <li
                                        key={branch.id}
                                        onClick={() => setActiveBranch(branch)}
                                        className={`cursor-pointer p-4 rounded transition-all duration-300 border flex items-start gap-3
                                            ${activeBranch.id === branch.id
                                                ? 'bg-[#F5130E] text-white scale-105 shadow-lg'
                                                : 'bg-white text-black hover:bg-[#039DEB]/10 border-[#039DEB]/20'}
                                        `}
                                    >
                                        <div className="flex-1">
                                            <div className="font-semibold">{branch.name}</div>
                                            <div className="text-sm">{branch.address}</div>
                                        </div>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=${branch.phone.replace(/[^0-9]/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="ml-2 p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                                            title="Hubungi via WhatsApp"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.451-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.643a11.93 11.93 0 005.826 1.489h.005c6.615 0 11.988-5.373 11.993-11.987a11.86 11.86 0 00-3.497-8.386z"/>
                                        </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
