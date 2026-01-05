'use client'

import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface QuantitySelectorProps {
  min?: number
  max?: number
  defaultValue?: number
  onChange?: (quantity: number) => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
}

export default function QuantitySelector({
  min = 1,
  max = 99,
  defaultValue = 1,
  onChange,
  className,
  size = 'md',
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(defaultValue)

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onChange?.(newQuantity)
    }
  }

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1
      setQuantity(newQuantity)
      onChange?.(newQuantity)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min
    const clampedValue = Math.max(min, Math.min(max, value))
    setQuantity(clampedValue)
    onChange?.(clampedValue)
  }

  return (
    <div className={cn('flex items-center border border-gray-300 rounded-lg overflow-hidden', className)}>
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className={cn(
          'flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          sizeClasses[size]
        )}
        aria-label="Giảm số lượng"
      >
        <Minus className="w-4 h-4" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        className={cn(
          'w-16 text-center border-0 focus:outline-none focus:ring-0',
          sizeClasses[size]
        )}
        aria-label="Số lượng"
      />
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={cn(
          'flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          sizeClasses[size]
        )}
        aria-label="Tăng số lượng"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}

