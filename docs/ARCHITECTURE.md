# Architecture Documentation

## Cấu trúc Enterprise

### 1. **Layered Architecture**

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│    (Components, Pages, UI)          │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│         Service Layer               │
│    (Business Logic)                 │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│         API Layer                   │
│    (api.service.ts)                 │
└─────────────────────────────────────┘
```

### 2. **Thư mục và chức năng**

#### `/app` - Next.js App Router
- **Server Components** mặc định (SSR cho SEO)
- **Client Components** khi cần interactivity ('use client')
- Mỗi route có metadata riêng cho SEO

#### `/components` - React Components
- **UI Components** (`components/ui/`): Reusable components
- **Feature Components**: Header, Footer, ProductCard, etc.
- **Icons** (`components/icons/`): Icon exports từ các thư viện

#### `/config` - Configuration
- **theme.config.ts**: Quản lý màu sắc và theme
- **content.config.ts**: Quản lý nội dung động (banners, policies, contact)

#### `/services` - Business Logic
- **api.service.ts**: Centralized API calls
- **product.service.ts**: Product business logic
- **content.service.ts**: Content management logic

#### `/lib` - Utilities
- **utils.ts**: Helper functions (cn, formatCurrency, etc.)
- **constants.ts**: Application constants

#### `/types` - TypeScript Types
- Shared type definitions
- Interfaces cho Product, User, Order, etc.

#### `/hooks` - Custom Hooks
- **useTheme.ts**: Theme management hook

## Quản lý Nội dung Động

### Banners
Chỉnh sửa trong `config/content.config.ts`:
```typescript
banners: [
  {
    id: '1',
    title: 'Banner Title',
    subtitle: 'Subtitle',
    link: '/link',
    bgColor: 'from-blue-500 to-purple-600',
    isActive: true,
    order: 1,
  }
]
```

### Chính sách
```typescript
policies: [
  {
    id: '1',
    title: 'Chính sách đổi trả',
    content: 'Nội dung chính sách...',
    category: 'return',
    isActive: true,
    order: 1,
  }
]
```

### Thông tin liên hệ
```typescript
contact: {
  hotline: '1900.272737',
  email: 'Cool@coolmate.me',
  // ...
}
```

## Theme System

### Cách chỉnh sửa màu chủ đạo

**Option 1: Chỉnh sửa config file**
```typescript
// config/theme.config.ts
export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#000000',  // Thay đổi ở đây
    secondary: '#666666',
    accent: '#ff6b6b',
  }
}
```

**Option 2: Environment Variables**
```env
NEXT_PUBLIC_THEME_PRIMARY=#ff0000
NEXT_PUBLIC_THEME_SECONDARY=#00ff00
```

**Option 3: Admin Panel**
Truy cập `/admin` để chỉnh sửa theme trực tiếp (cần authentication trong production)

## Icon Libraries

### Sử dụng Icons

**Từ lucide-react:**
```tsx
import { Search, User, ShoppingCart } from 'lucide-react'

<Search className="w-6 h-6" />
```

**Từ react-icons:**
```tsx
import { FaFacebook, FaInstagram } from 'react-icons/fa'

<FaFacebook className="w-6 h-6" />
```

**Từ components/icons:**
```tsx
import { Search, FaFacebook } from '@/components/icons'

<Search className="w-6 h-6" />
<FaFacebook className="w-6 h-6" />
```

## Best Practices

1. **Server Components**: Mặc định cho tất cả pages (SSR cho SEO)
2. **Client Components**: Chỉ khi cần useState, useEffect, event handlers
3. **Service Layer**: Tất cả API calls qua service layer
4. **Type Safety**: Sử dụng types từ `types/index.ts`
5. **Reusability**: Tạo UI components trong `components/ui/`

## Migration Path

### Từ Mock Data sang API

1. Cập nhật `services/*.service.ts` để call API thực tế
2. Thay thế mock data trong config files
3. Thêm error handling và loading states
4. Implement caching (React Cache, SWR, React Query)

### Tích hợp CMS

1. Tạo `services/cms.service.ts`
2. Update `contentService` để fetch từ CMS
3. Thêm admin panel để quản lý content
4. Implement caching strategy

