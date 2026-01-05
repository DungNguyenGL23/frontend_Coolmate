'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string
  alt: string
  fallback?: string
  className?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto'
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

const aspectRatioClasses = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  auto: '',
}

export default function Image({
  src,
  alt,
  fallback = '/images/placeholder.svg',
  className,
  aspectRatio = 'square',
  objectFit = 'cover',
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn('relative overflow-hidden bg-gray-100', aspectRatioClasses[aspectRatio], className)}>
      <NextImage
        src={imgSrc || fallback}
        alt={alt}
        fill
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallback)
          setIsLoading(false)
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

