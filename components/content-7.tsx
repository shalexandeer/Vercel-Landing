'use client'

import { Branch } from '@/types/branch'
import { GoogleMapsEmbed } from '@next/third-parties/google'

interface ContentSectionProps {
    branches: Branch[]
}

export default function ContentSection({ branches }: ContentSectionProps) {

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
                        <li className='flex justify-between items-center px-6'>
                            <h1 className="font-semibold text-base text-center text-white">Instagram</h1>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="p-2 rounded-full bg-muted  transition-colors"
                                title="Kunjungi Instagram"
                                href="https://instagram.com/rrrestorasi"
                            >
                                {/* Instagram Logo */}
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                               {/* <Image src={'iconig.png'} alt="Instagram Icon" width={380} height={380} className="size-[38px]" /> */}
                            </a>
                        </li>
                        <li className='flex justify-between items-center px-6 max-md:mt-6'>
                            <h1 className="font-semibold text-base text-center text-white">Tiktok</h1>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="pr-2 pl-1 py-2 rounded-full bg-muted  transition-colors"
                                title="Kunjungi TikTok"
                                href="https://www.tiktok.com/@rrrestorasi"
                            >
                                {/* TikTok Logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="size-6" fill="black" viewBox="0 0 24 24">
                                    <path d="M21 8.306c-1.237 0-2.418-.404-3.385-1.146V15.5a5.5 5.5 0 1 1-5.5-5.5c.172 0 .34.014.507.033v2.07A3.5 3.5 0 1 0 15.5 15.5V2h2.018c.13 2.01 1.77 3.606 3.982 3.806v2.5zm-8.5 7.194a1.5 1.5 0 1 0 0 3v-3z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
