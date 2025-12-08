import Image from 'next/image'
import { SocialMedia, SocialMediaLinks } from './social-media'


export default function FooterSection({socialMedia}:{socialMedia: SocialMedia[]}) {
    return (
        <footer id="footer" className="bg-[#181818] py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className='flex flex-row items-center justify-center gap-2'>
                    <Image src="/logo.png" alt="logo" width={200} height={50} style={{ maxWidth: '200px', height: 'auto' }} />
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm text-whot">
                    <SocialMediaLinks socialMedia={socialMedia} showLabel={true} labelClassName="text-muted text-sm" />
                </div>
                <span className="text-muted block text-center text-sm"> © {new Date().getFullYear()} RR Restorasi, All rights reserved</span>
            </div>
        </footer>
    )
}
