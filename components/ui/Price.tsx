import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'

interface PriceProps {
  price: number | string
  originalPrice?: number | string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showOriginal?: boolean
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
}

export default function Price({
  price,
  originalPrice,
  className,
  size = 'md',
  showOriginal = true,
}: PriceProps) {
  const priceNum = typeof price === 'string' ? parseFloat(price.replace(/[^\d]/g, '')) : price
  const originalPriceNum =
    originalPrice && (typeof originalPrice === 'string' ? parseFloat(originalPrice.replace(/[^\d]/g, '')) : originalPrice)

  const hasDiscount = originalPriceNum && originalPriceNum > priceNum

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn('font-bold text-gray-900', sizeClasses[size])}>
        {formatPrice(priceNum)}
      </span>
      {hasDiscount && showOriginal && originalPriceNum && (
        <>
          <span className={cn('text-gray-400 line-through', sizeClasses[size])}>
            {formatPrice(originalPriceNum)}
          </span>
          <span className="text-red-500 text-xs font-semibold">
            -{Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100)}%
          </span>
        </>
      )}
    </div>
  )
}

