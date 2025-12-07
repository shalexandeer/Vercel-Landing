import { client } from '@/sanity/lib/client'
import { SOCIAL_MEDIA_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image';

// Define the Social Media type
interface SocialMedia {
  _id?: string;
  name: string;
  url: string;
  order?: number;
}

// Define fallback social media data
const fallbackSocialMedia: SocialMedia[] = [
  {
    _id: 'instagram',
    name: 'instagram',
    url: 'https://instagram.com/rrrestorasi',
  },
  {
    _id: 'youtube',
    name: 'youtube',
    url: 'https://youtube.com/@rrrestorasi',
  },
  {
    _id: 'tiktok',
    name: 'tiktok',
    url: 'https://tiktok.com/@rrrestorasi',
  },
  {
    _id: 'whatsapp',
    name: 'whatsapp',
    url: 'https://wa.me/6282245527366',
  },
]

async function getSocialMedia(): Promise<SocialMedia[]> {
  try {
    const socialMedia = await client.fetch(SOCIAL_MEDIA_QUERY);
    return socialMedia;
  } catch (error) {
    console.error('Error fetching social media data:', error);
    return [];
  }
}

interface SocialMediaProps {
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
}

export async function SocialMediaLinks({ className = "", showLabel = false, labelClassName = "" }: SocialMediaProps) {
  const socialMediaItems = await getSocialMedia();
  const displayItems = (socialMediaItems && socialMediaItems.length > 0) ? socialMediaItems : fallbackSocialMedia;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && (
        <p className={`text-muted font-semibold text-sm ${labelClassName}`}>Follow us on</p>
      )}
      <div className="flex items-center gap-3">
        {displayItems.map((item) => (
          <a
            key={item._id || item.name}
            href={item.url}
            className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`https://s.magecdn.com/social/tc-${item.name}.svg`}
              alt={item.name}
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
          </a>
        ))}
      </div>
    </div>
  );
}