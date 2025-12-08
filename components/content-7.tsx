'use client'

import { Branch } from '@/types/branch'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import React from 'react'
import Image from 'next/image'

interface SocialMedia {
  _id?: string;
  name: string;
  url: string;
  order?: number;
}

interface ContentSectionProps {
    branches: Branch[]
    socialMedia: SocialMedia[]
}

export default function ContentSection({ branches, socialMedia }: ContentSectionProps) {
    const filteredItems = socialMedia.filter((item) => item.name === 'tiktok' || item.name === 'instagram')
    return (
        <section className="py-6 bg-[#303030] " id='cabang'>
            <div className="mx-auto max-w-5xl space-y-8 md:space-y-8">
                 <div 
                    className="flex flex-col justify-between cursor-pointer transition-colors h-full px-6 mb-6"
                >
                    <h3 className="text-base font-semibold text-white ">WHERE?</h3>
                    <h3 className="text-xl font-semibold text-white uppercase">OUR LOCATION</h3>
                </div>
                <div className="relative space-y-4 w-full">
                    <ul className="grid sm:space-y-3 sm:grid-cols-3">
                            {branches.map((branch, idx) => (
                                <li
                                    key={branch.mapQuery}
                                    // onClick={() => setActiveBranch(branch)}
                                    className={`cursor-pointer rounded transition-all duration-300 gap-2`}
                                >
                                <div className='px-6 py-4 space-y-5'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className="font-semibold text-base text-center text-white">{branch.name}</h1>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=${branch.phone.replace(/[^0-9]/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                                            title="Hubungi via WhatsApp"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" className="sm:size-6"
                                                fill="white"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.451-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.643a11.93 11.93 0 005.826 1.489h.005c6.615 0 11.988-5.373 11.993-11.987a11.86 11.86 0 00-3.497-8.386z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <GoogleMapsEmbed
                                        apiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao"
                                        height={120}
                                        width="100%"
                                        mode="place"
                                        q={branch.mapQuery}
                                    />
                                </div>
                                {idx !== 2 && <div className="my-4 h-px w-full bg-[#4B4B4B]" />}
                            </li>
                        ))}
                        {filteredItems?.map((item) => (
                            <li key={item._id || item.name} className='flex justify-between items-center px-6 max-md:mt-6'>
                                <h1 className="font-semibold text-base text-center text-white capitalize">{item.name}</h1>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className={`p-2 rounded-full bg-muted transition-colors`}
                                    title={`Kunjungi ${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`}
                                    href={item.url}
                                >
                                   
                                    <Image
                                        src={`https://www.google.com/s2/favicons?sz=64&domain=${getDomain(item.url)}`}
                                        alt={item.name}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

// Helper function to extract domain from URL
function getDomain(url: string) {
    try {
        const lowerUrl = url.toLowerCase()
        const urlWithProtocol =
            lowerUrl.startsWith("http://") || lowerUrl.startsWith("https://")
                ? lowerUrl
                : "http://" + lowerUrl
        const urlObj = new URL(urlWithProtocol)
        const parts = urlObj.hostname.split(".")
        const domain = parts.slice(-2).join(".")
        return domain.toLowerCase()
    } catch (error) {
        console.error("Error parsing URL:", error)
        return ""
    }
}
