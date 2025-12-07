import { SocialMediaLinks } from './social-media'

export async function SocialMediaBar() {
    return (
        <div className="flex w-full items-center justify-between sm:justify-end gap-4 md:w-fit">
            <SocialMediaLinks showLabel={true} labelClassName="text-muted font-semibold text-sm" />
        </div>
    )
}