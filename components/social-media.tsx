import { client } from '@/sanity/lib/client'
import { SOCIAL_MEDIA_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image';

// Define the Social Media type
export interface SocialMedia {
  _id?: string;
  name: string;
  url: string;
  order?: number;
}

// Define fallback social media data
export const fallbackSocialMedia: SocialMedia[] = [
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

interface SocialMediaProps {
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
  socialMedia: SocialMedia[];
}

export async function SocialMediaLinks({ className = "", showLabel = false, labelClassName = "", socialMedia}: SocialMediaProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && (
        <p className={`text-muted font-semibold text-sm ${labelClassName}`}>Follow us on</p>
      )}
      <div className="flex items-center gap-3">
        {socialMedia.map((item) => (
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