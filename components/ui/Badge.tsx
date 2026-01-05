import { cn } from '@/lib/utils'

export type BadgeVariant = 'new' | 'bestseller' | 'outlet' | 'sale' | 'default'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const badgeVariants = {
  new: 'bg-green-500 text-white',
  bestseller: 'bg-orange-500 text-white',
  outlet: 'bg-purple-500 text-white',
  sale: 'bg-red-500 text-white',
  default: 'bg-gray-500 text-white',
}

const badgeLabels = {
  new: 'MỚI',
  bestseller: 'BÁN CHẠY',
  outlet: 'OUTLET',
  sale: 'SALE',
}

export default function Badge({ variant = 'default', children, className }: BadgeProps) {
  const label = variant !== 'default' ? badgeLabels[variant] : children

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-2 py-1 text-xs font-semibold rounded uppercase',
        badgeVariants[variant],
        className
      )}
    >
      {label}
    </span>
  )
}

