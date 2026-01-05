# Coolmate Clone - Next.js Enterprise Structure

Dự án clone UI website Coolmate (https://www.coolmate.me/) sử dụng Next.js 14, TypeScript và Tailwind CSS với cấu trúc chuẩn enterprise.

## 🏗️ Cấu trúc dự án (Enterprise Structure)

```
coolmate/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout với metadata SEO
│   ├── page.tsx             # Homepage (SSR)
│   ├── globals.css          # Global styles với CSS variables
│   ├── [routes]/            # Các routes của ứng dụng
│   └── ...
├── components/              # React Components
│   ├── ui/                  # UI Components (reusable)
│   ├── icons/               # Icon components
│   ├── Header.tsx           # Header component
│   ├── Footer.tsx           # Footer component (SSR với dynamic content)
│   └── ...
├── config/                  # Configuration files
│   ├── theme.config.ts      # Theme configuration (màu chủ đạo)
│   └── content.config.ts    # Content configuration (banners, policies, contact)
├── lib/                     # Utility libraries
│   ├── utils.ts             # Utility functions
│   └── constants.ts        # Application constants
├── services/                # Business logic layer
│   ├── api.service.ts       # API service (centralized)
│   ├── product.service.ts   # Product business logic
│   └── content.service.ts   # Content management service
├── hooks/                   # Custom React hooks
│   └── useTheme.ts          # Theme management hook
├── types/                   # TypeScript type definitions
│   └── index.ts             # Shared types
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js       # Tailwind với theme integration
└── next.config.js
```

## ✨ Tính năng chính

### 1. **Quản lý nội dung động**
- ✅ Banners có thể chỉnh sửa qua `config/content.config.ts`
- ✅ Chính sách (policies) quản lý tập trung
- ✅ Thông tin liên hệ động
- ✅ Footer sections có thể cấu hình

### 2. **Theme System**
- ✅ Màu chủ đạo có thể chỉnh sửa qua `config/theme.config.ts`
- ✅ Hỗ trợ environment variables để override theme
- ✅ CSS variables cho dynamic theming
- ✅ Theme Provider với React Context

### 3. **Icon Libraries**
- ✅ **react-icons**: Font Awesome, Heroicons, etc.
- ✅ **lucide-react**: Modern icon library
- ✅ Unified Icon component wrapper

### 4. **SEO Optimization**
- ✅ Server-Side Rendering (SSR) cho các trang quan trọng
- ✅ Metadata đầy đủ cho mỗi trang
- ✅ Open Graph tags
- ✅ Structured data ready

### 5. **Enterprise Structure**
- ✅ **Layered Architecture**: Components → Services → API
- ✅ **Separation of Concerns**: Config, Types, Utils, Services
- ✅ **Type Safety**: TypeScript với shared types
- ✅ **Reusable Components**: UI components trong `components/ui/`
- ✅ **Service Layer**: Business logic tách biệt

## 📦 Dependencies

### Core
- **Next.js 14** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### Icons
- **react-icons** - Icon library (Font Awesome, Heroicons, etc.)
- **lucide-react** - Modern icon library

### Utilities
- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes

## 🚀 Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Development mode
npm run dev

# Build production
npm run build
npm start

# Type checking
npm run type-check
```

## ⚙️ Cấu hình

### Theme Configuration
Chỉnh sửa màu chủ đạo trong `config/theme.config.ts` hoặc sử dụng environment variables:

```env
NEXT_PUBLIC_THEME_PRIMARY=#000000
NEXT_PUBLIC_THEME_SECONDARY=#666666
NEXT_PUBLIC_THEME_ACCENT=#ff6b6b
```

### Content Configuration
Chỉnh sửa banners, policies, contact info trong `config/content.config.ts` hoặc fetch từ API/CMS.

## 📝 Các trang đã clone

- ✅ **Trang chủ** (`/`) - SSR với SEO
- ✅ **NEW** (`/new`) - SSR
- ✅ **SALE** (`/sale`) - SSR
- ✅ **Nam** (`/nam`) - SSR với sidebar menu
- ✅ **Nữ** (`/nu`) - SSR với sidebar menu
- ✅ **THỂ THAO** (`/the-thao`) - SSR
- ✅ **C&S** (`/cs`) - Care & Share với infographic
- ✅ **Blog** (`/blog`) - SSR với semantic HTML
- ✅ **CSKH** (`/cskh`) - Chăm sóc khách hàng
- ✅ **CoolClub** (`/coolclub`) - Chương trình thành viên
- ✅ **Về Coolmate** (`/ve-coolmate`)
- ✅ **Tuyển dụng** (`/tuyen-dung`)
- ✅ **Đăng nhập** (`/dang-nhap`) - Với LoginModal
- ✅ **Giỏ hàng** (`/cart`)
- ✅ **Checkout** (`/checkout`)

## 🎨 Customization

### Thay đổi màu chủ đạo
1. Chỉnh sửa `config/theme.config.ts`
2. Hoặc set environment variables
3. Theme sẽ tự động apply qua Tailwind config

### Thay đổi nội dung
1. Chỉnh sửa `config/content.config.ts`
2. Hoặc tích hợp với CMS/API
3. Sử dụng `contentService` để fetch data

### Thêm icon mới
```tsx
import { IconName } from 'lucide-react'
// hoặc
import { FaIconName } from 'react-icons/fa'
```

## 📚 Best Practices

1. **Server Components**: Sử dụng cho các trang cần SEO
2. **Client Components**: Chỉ khi cần interactivity ('use client')
3. **Service Layer**: Tất cả API calls qua service layer
4. **Type Safety**: Sử dụng shared types từ `types/`
5. **Reusability**: Tạo UI components trong `components/ui/`

## 🔄 Migration từ mock data sang API

1. Cập nhật `services/*.service.ts` để call API thực tế
2. Thay thế mock data trong config files
3. Thêm error handling và loading states
4. Implement caching strategy (React Cache, SWR, etc.)

## 📄 License

Private project
