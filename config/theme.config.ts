/**
 * Theme Configuration
 * Quản lý màu sắc và theme của website
 * Có thể chỉnh sửa để thay đổi màu chủ đạo
 */

export interface ThemeConfig {
  colors: {
    primary: string
    secondary: string
    accent: string
    success: string
    warning: string
    error: string
    info: string
    background: string
    surface: string
    text: {
      primary: string
      secondary: string
      disabled: string
    }
  }
  fonts: {
    heading: string
    body: string
  }
  spacing: {
    unit: number
  }
  borderRadius: {
    small: string
    medium: string
    large: string
  }
}

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#000000',
    secondary: '#666666',
    accent: '#ff6b6b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    background: '#ffffff',
    surface: '#f9fafb',
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      disabled: '#9ca3af',
    },
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  spacing: {
    unit: 4,
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
}

// Theme có thể được override từ environment variables hoặc admin panel
export const getTheme = (): ThemeConfig => {
  // Có thể đọc từ env hoặc API
  const customPrimary = process.env.NEXT_PUBLIC_THEME_PRIMARY
  const customSecondary = process.env.NEXT_PUBLIC_THEME_SECONDARY

  if (customPrimary || customSecondary) {
    return {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: customPrimary || defaultTheme.colors.primary,
        secondary: customSecondary || defaultTheme.colors.secondary,
      },
    }
  }

  return defaultTheme
}

