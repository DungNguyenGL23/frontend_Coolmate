# Theme Configuration Guide

## Cách chỉnh sửa màu chủ đạo

### Method 1: Chỉnh sửa Config File

Mở `config/theme.config.ts` và chỉnh sửa:

```typescript
export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#000000',      // Màu chủ đạo
    secondary: '#666666',    // Màu phụ
    accent: '#ff6b6b',       // Màu nhấn
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    // ...
  }
}
```

### Method 2: Environment Variables

Tạo file `.env.local`:

```env
NEXT_PUBLIC_THEME_PRIMARY=#ff0000
NEXT_PUBLIC_THEME_SECONDARY=#00ff00
NEXT_PUBLIC_THEME_ACCENT=#0000ff
```

### Method 3: Admin Panel

Truy cập `/admin` để chỉnh sửa theme trực tiếp (cần authentication trong production).

## Sử dụng Theme trong Components

### Với Tailwind Classes
```tsx
// Sử dụng màu từ theme
<div className="bg-primary text-white">
  Primary color
</div>

<div className="bg-accent">
  Accent color
</div>
```

### Với CSS Variables
```tsx
<div style={{ color: 'var(--color-primary)' }}>
  Using CSS variable
</div>
```

### Với useTheme Hook
```tsx
'use client'
import { useTheme } from '@/hooks/useTheme'

function MyComponent() {
  const { theme, updateTheme } = useTheme()
  
  return (
    <div style={{ color: theme.colors.primary }}>
      {theme.colors.primary}
    </div>
  )
}
```

## Theme Structure

```typescript
{
  colors: {
    primary: string        // Màu chủ đạo
    secondary: string      // Màu phụ
    accent: string         // Màu nhấn
    success: string       // Màu thành công
    warning: string       // Màu cảnh báo
    error: string         // Màu lỗi
    info: string          // Màu thông tin
    background: string    // Màu nền
    surface: string       // Màu surface
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
```

## Dynamic Theme Updates

Theme có thể được update runtime thông qua `useTheme` hook:

```tsx
const { updateTheme } = useTheme()

updateTheme({
  colors: {
    primary: '#ff0000'
  }
})
```

Changes sẽ được lưu vào localStorage và apply ngay lập tức.

