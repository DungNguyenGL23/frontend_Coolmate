import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingProps {
  rating: number
  maxRating?: number
  showNumber?: boolean
  showCount?: boolean
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

export default function Rating({
  rating,
  maxRating = 5,
  showNumber = false,
  showCount = false,
  reviewCount,
  size = 'md',
  className,
}: RatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')} />
        ))}
        {hasHalfStar && (
          <div className="relative inline-block">
            <Star className={cn(sizeClasses[size], 'text-gray-300')} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className={cn(sizeClasses[size], 'text-gray-300')} />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-gray-700 ml-1">{rating.toFixed(1)}</span>
      )}
      {showCount && reviewCount !== undefined && (
        <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
      )}
    </div>
  )
}

