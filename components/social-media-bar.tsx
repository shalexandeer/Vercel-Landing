import { SocialMedia, SocialMediaLinks } from './social-media'

export async function SocialMediaBar({socialMedia}: {socialMedia: SocialMedia[]}) {
    return (
        <div className="flex w-full items-center justify-between sm:justify-end gap-4 md:w-fit">
            <SocialMediaLinks socialMedia={socialMedia} showLabel={true} labelClassName="text-muted font-semibold text-sm" />
        </div>
    )
}