'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BannerConfig } from '@/config/content.config'
import { ChevronRight } from 'lucide-react'

interface HeroBannerProps {
  banners: BannerConfig[]
}

export default function HeroBanner({ banners }: HeroBannerProps) {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    if (!banners || banners.length === 0) return
    
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [banners.length])

  if (!banners || banners.length === 0) return null

  const banner = banners[currentBanner]

  return (
    <div className={`relative w-full h-12 bg-gradient-to-r ${banner.bgColor || 'from-black to-gray-800'} text-white overflow-hidden`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link
          href={banner.link || '#'}
          className="flex-1 flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm font-medium">{banner.title}</span>
          {banner.subtitle && (
            <span className="text-xs underline">{banner.subtitle}</span>
          )}
        </Link>
        <button
          onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
          className="ml-4 hover:opacity-80 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
