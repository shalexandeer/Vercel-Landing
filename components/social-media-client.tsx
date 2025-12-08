'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { SocialMedia } from './social-media';

interface SocialMediaClientProps {
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
  socialMedia?: SocialMedia[];
}

export function SocialMediaClient({ className = "", showLabel = false, labelClassName = "", socialMedia }: SocialMediaClientProps) {

  return(
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && (
        <p className={`text-muted font-semibold text-sm ${labelClassName}`}>Follow us on</p>
      )}
      <div className="flex items-center gap-3">
        {socialMedia?.map((item) => (
          <a
            key={item._id || item.name}
            href={item.url}
            className="p-2 rounded-full bg-muted hover:bg-[#F5130E]/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`https://www.google.com/s2/favicons?sz=64&domain=${getDomain(item.url)}`}
              alt={item.name}
              width={20}
              height={20}
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