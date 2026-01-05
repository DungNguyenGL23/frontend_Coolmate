# Components Structure - Atomic Design

## Cấu trúc thư mục Components

```
components/
├── ui/                          # Atomic Components (Atoms)
│   ├── Badge.tsx                # Badge component (new, bestseller, sale, etc.)
│   ├── Button.tsx               # Button component với variants
│   ├── Price.tsx                 # Price display với discount
│   ├── Rating.tsx                # Star rating component
│   ├── Image.tsx                 # Next.js Image wrapper với fallback
│   ├── VariantSelector.tsx       # Size/Color selector
│   ├── QuantitySelector.tsx      # Quantity input với +/- buttons
│   ├── Icon.tsx                  # Icon wrapper
│   └── index.ts                  # Barrel export
│
├── product/                      # Product-related Components (Molecules)
│   ├── ProductCard.tsx          # Product card với SEO & structured data
│   ├── ProductGrid.tsx          # Grid layout cho products
│   ├── ProductList.tsx          # List layout cho products
│   └── ProductDetail.tsx        # Product detail view
│
├── layout/                       # Layout Components (Organisms)
│   ├── Header.tsx               # Main header với navigation
│   ├── Footer.tsx               # Footer với links & contact
│   ├── Sidebar.tsx              # Sidebar navigation
│   └── Container.tsx           # Page container wrapper
│
├── sections/                     # Page Sections (Organisms)
│   ├── HeroBanner.tsx           # Hero banner section
│   ├── CategorySection.tsx      # Category grid section
│   ├── ProductSection.tsx      # Product listing section
│   ├── TrendingSection.tsx      # Trending items section
│   └── CollectionBanner.tsx     # Collection banner section
│
├── features/                     # Feature-specific Components
│   ├── cart/
│   │   ├── CartItem.tsx         # Cart item component
│   │   ├── CartSummary.tsx      # Cart summary sidebar
│   │   └── CartEmpty.tsx        # Empty cart state
│   ├── checkout/
│   │   ├── ShippingForm.tsx     # Shipping form
│   │   ├── PaymentMethod.tsx    # Payment method selector
│   │   └── OrderSummary.tsx     # Order summary
│   ├── auth/
│   │   ├── LoginModal.tsx       # Login modal
│   │   └── RegisterForm.tsx     # Registration form
│   └── search/
│       ├── SearchBar.tsx        # Search input
│       └── SearchResults.tsx    # Search results
│
└── common/                       # Common/Shared Components
    ├── FloatingWidget.tsx       # Floating action widgets
    ├── LoadingSpinner.tsx       # Loading indicator
    ├── ErrorBoundary.tsx        # Error boundary
    └── Modal.tsx                # Modal wrapper
```

## UI Components List (components/ui/)

### 1. **Badge** ✅
- Hiển thị badge cho sản phẩm (MỚI, BÁN CHẠY, SALE, OUTLET)
- Variants: `new`, `bestseller`, `outlet`, `sale`, `default`
- Customizable colors và labels

### 2. **Button** ✅
- Button component với nhiều variants
- Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`
- Sizes: `sm`, `md`, `lg`
- Loading state support

### 3. **Price** ✅
- Hiển thị giá với discount
- Format VNĐ tự động
- Hiển thị % giảm giá
- Responsive sizing

### 4. **Rating** ✅
- Star rating component
- Half stars support
- Review count display
- Multiple sizes

### 5. **Image** ✅
- Next.js Image wrapper
- Fallback image support
- Loading state với skeleton
- Aspect ratio presets
- Object-fit options

### 6. **VariantSelector** ✅
- Size selector
- Color selector với color swatches
- Other variant types
- Unavailable state handling

### 7. **QuantitySelector** ✅
- Quantity input với +/- buttons
- Min/max validation
- Keyboard accessible
- Multiple sizes

### 8. **Input** (Cần tạo)
- Text input với validation
- Error states
- Label và helper text
- Icon support

### 9. **Select** (Cần tạo)
- Dropdown select
- Searchable option
- Multi-select support
- Custom styling

### 10. **Checkbox** (Cần tạo)
- Checkbox với label
- Indeterminate state
- Custom styling

### 11. **Radio** (Cần tạo)
- Radio button group
- Custom styling
- Accessibility support

### 12. **Tabs** (Cần tạo)
- Tab navigation
- Active state
- Keyboard navigation

### 13. **Accordion** (Cần tạo)
- Collapsible sections
- Multiple open support
- Smooth animations

### 14. **Tooltip** (Cần tạo)
- Tooltip với positioning
- Trigger on hover/focus
- Custom content

### 15. **Toast/Notification** (Cần tạo)
- Toast notifications
- Success/Error/Warning/Info variants
- Auto-dismiss

### 16. **Skeleton** (Cần tạo)
- Loading skeleton
- Multiple shapes
- Animation

### 17. **Pagination** (Cần tạo)
- Page navigation
- Page size selector
- Jump to page

### 18. **Breadcrumb** (Cần tạo)
- Breadcrumb navigation
- Separator customization
- Link support

## ProductCard Component

### Features:
- ✅ Next.js Image với optimization
- ✅ SEO với Schema.org structured data
- ✅ Badge support
- ✅ Price với discount
- ✅ Rating display
- ✅ Quick actions (wishlist, add to cart)
- ✅ Out of stock overlay
- ✅ Hover effects
- ✅ Accessibility (ARIA labels)
- ✅ Responsive design

### Usage:
```tsx
import ProductCard from '@/components/product/ProductCard'
import { Product } from '@/types'

const product: Product = {
  id: '1',
  name: 'Áo Polo Nam Thể Thao',
  price: 299000,
  originalPrice: 399000,
  image: '/images/product.jpg',
  badge: 'bestseller',
  rating: 4.5,
  reviewCount: 120,
  inStock: true,
  link: '/san-pham/ao-polo',
}

<ProductCard product={product} showRating={true} priority={false} />
```

## Best Practices

1. **Atomic Design**: Tuân thủ nguyên tắc Atomic Design
   - Atoms: UI components nhỏ nhất (Button, Badge)
   - Molecules: Kết hợp atoms (ProductCard)
   - Organisms: Kết hợp molecules (Header, Footer)
   - Templates: Page layouts
   - Pages: Specific page instances

2. **Reusability**: Components nên reusable và configurable
3. **Type Safety**: Sử dụng TypeScript interfaces
4. **SEO**: Structured data cho products
5. **Accessibility**: ARIA labels và keyboard navigation
6. **Performance**: Next.js Image optimization
7. **Responsive**: Mobile-first design

