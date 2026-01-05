/**
 * Icon Component Wrapper
 * Unified interface cho icons từ các thư viện khác nhau
 */

import { cn } from '@/lib/utils'

export interface IconProps {
  className?: string
  size?: number | string
  color?: string
}

interface BaseIconProps extends IconProps {
  children?: React.ReactNode
}

export function Icon({ className, size = 20, color, children, ...props }: BaseIconProps) {
  return (
    <span
      className={cn('inline-flex items-center justify-center', className)}
      style={{
        width: size,
        height: size,
        color,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

