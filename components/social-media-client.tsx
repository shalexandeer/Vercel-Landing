'use client'

import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SOCIAL_MEDIA_QUERY } from '@/sanity/lib/queries'

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

interface SocialMediaClientProps {
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
}

export function SocialMediaClient({ className = "", showLabel = false, labelClassName = "" }: SocialMediaClientProps) {
  const [socialMediaItems, setSocialMediaItems] = useState<SocialMedia[]>(fallbackSocialMedia)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSocialMedia() {
      try {
        const items = await client.fetch(SOCIAL_MEDIA_QUERY)
        if (items && items.length > 0) {
          setSocialMediaItems(items)
        }
      } catch (error) {
        console.error('Error fetching social media data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSocialMedia()
  }, [])

  if (loading) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {showLabel && (
          <p className={`text-muted font-semibold text-sm ${labelClassName}`}>Follow us on</p>
        )}
        <div className="flex items-center gap-3">
          {fallbackSocialMedia.map((item) => (
            <div key={item._id || item.name} className="w-9 h-9 bg-muted rounded-full animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && (
        <p className={`text-muted font-semibold text-sm ${labelClassName}`}>Follow us on</p>
      )}
      <div className="flex items-center gap-3">
        {socialMediaItems.map((item) => (
          <a
            key={item._id || item.name}
            href={item.url}
            className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://www.google.com/s2/favicons?sz=64&domain=${getDomain(item.url)}`}
              alt={item.name}
              className="w-5 h-5"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export function getDomain(url: string) {
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