# Content Management Guide

## Quản lý Nội dung Động

Tất cả nội dung có thể chỉnh sửa được quản lý trong `config/content.config.ts` hoặc có thể fetch từ API/CMS.

## 1. Banners

### Cấu trúc Banner
```typescript
{
  id: string              // Unique ID
  title: string          // Tiêu đề banner
  subtitle?: string       // Phụ đề (optional)
  description?: string    // Mô tả (optional)
  image?: string         // URL hình ảnh (optional)
  link?: string          // Link khi click (optional)
  buttonText?: string    // Text trên button (optional)
  bgColor?: string       // Tailwind gradient classes
  textColor?: string     // Màu chữ (optional)
  isActive: boolean      // Hiển thị hay không
  order: number         // Thứ tự hiển thị
}
```

### Ví dụ
```typescript
{
  id: '1',
  title: 'TIẾT KIỆM TỪ 20%++',
  description: 'Voucher giảm thêm 100k cho đơn từ 999K',
  buttonText: 'MUA NGAY',
  link: '/sale',
  bgColor: 'from-orange-500 via-orange-400 to-orange-300',
  isActive: true,
  order: 1,
}
```

## 2. Chính sách (Policies)

### Categories
- `return`: Chính sách đổi trả
- `privacy`: Chính sách bảo mật
- `shipping`: Chính sách giao hàng
- `promotion`: Chính sách khuyến mãi
- `other`: Khác

### Cấu trúc
```typescript
{
  id: string
  title: string
  content: string
  category: 'return' | 'privacy' | 'shipping' | 'promotion' | 'other'
  isActive: boolean
  order: number
}
```

## 3. Thông tin Liên hệ

### Cấu trúc
```typescript
contact: {
  hotline: string
  email: string
  workingHours: string
  address: {
    hanoi: {
      office: string
      warehouse: string
    }
    hcm: {
      office: string
      rnd: string
    }
  }
  socialMedia: {
    facebook?: string
    zalo?: string
    tiktok?: string
    instagram?: string
    youtube?: string
  }
}
```

## 4. Footer Sections

Footer sections được quản lý trong `content.config.ts`:
```typescript
footer: {
  sections: [
    {
      title: 'Section Title',
      links: [
        { label: 'Link Text', href: '/link' }
      ]
    }
  ]
}
```

## Sử dụng trong Components

### Fetch Banners
```typescript
import { contentService } from '@/services/content.service'

const banners = await contentService.getBanners()
```

### Fetch Policies
```typescript
const policies = await contentService.getPolicies()
const returnPolicies = await contentService.getPoliciesByCategory('return')
```

### Fetch Contact Info
```typescript
const contact = await contentService.getContactInfo()
```

## Tích hợp với CMS

Để tích hợp với CMS (Contentful, Strapi, etc.):

1. Tạo `services/cms.service.ts`
2. Update `getContentConfig()` trong `config/content.config.ts` để fetch từ CMS
3. Implement caching để tối ưu performance

