'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

export type VariantType = 'size' | 'color' | 'other'

interface VariantOption {
  value: string
  label: string
  available?: boolean
  image?: string
}

interface VariantSelectorProps {
  type: VariantType
  label: string
  options: VariantOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const variantTypeStyles = {
  size: 'min-w-[40px] h-10',
  color: 'w-10 h-10 rounded-full',
  other: 'min-w-[80px] h-10',
}

export default function VariantSelector({
  type,
  label,
  options,
  value,
  onChange,
  className,
}: VariantSelectorProps) {
  const [selectedValue, setSelectedValue] = useState(value || options[0]?.value)

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue)
    }
    setSelectedValue(optionValue)
  }

  return (
    <div className={cn('space-y-2', className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedValue === option.value
          const isUnavailable = option.available === false

          if (type === 'color') {
            return (
              <button
                key={option.value}
                onClick={() => !isUnavailable && handleSelect(option.value)}
                disabled={isUnavailable}
                className={cn(
                  'rounded-full border-2 transition-all',
                  isSelected ? 'border-black scale-110' : 'border-gray-300',
                  isUnavailable && 'opacity-50 cursor-not-allowed relative',
                  !isUnavailable && 'hover:scale-105'
                )}
                style={{ backgroundColor: option.value }}
                title={option.label}
                aria-label={`${label}: ${option.label}`}
              >
                {isUnavailable && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-full h-0.5 bg-gray-400 rotate-45" />
                  </span>
                )}
              </button>
            )
          }

          return (
            <button
              key={option.value}
              onClick={() => !isUnavailable && handleSelect(option.value)}
              disabled={isUnavailable}
              className={cn(
                'px-3 py-2 border-2 rounded-lg text-sm font-medium transition-all',
                isSelected
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400',
                isUnavailable && 'opacity-50 cursor-not-allowed line-through'
              )}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

