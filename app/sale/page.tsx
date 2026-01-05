import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductSection from '@/components/ProductSection'

// SEO Metadata cho trang SALE
export const metadata: Metadata = {
  title: 'Sale - Giảm Giá Lên Đến 50% | COOLMATE',
  description: 'Sale lớn tại COOLMATE - Giảm giá lên đến 50% cho tất cả sản phẩm. Áo thun sale, quần áo sale, đồ lót sale với giá cực tốt. Nhanh tay mua ngay!',
  keywords: ['sale coolmate', 'giảm giá', 'khuyến mãi', 'áo thun sale', 'quần áo sale', 'sale 50%'],
  openGraph: {
    title: 'Sale - Giảm Giá Lên Đến 50% | COOLMATE',
    description: 'Sale lớn tại COOLMATE - Giảm giá lên đến 50%',
    url: 'https://www.coolmate.me/sale',
  },
  alternates: {
    canonical: '/sale',
  },
}

// Server Component - Fetch data từ API
async function getSaleProducts() {
  // Trong thực tế: const res = await fetch('https://api.coolmate.me/products/sale')
  // return res.json()
  
  return [
    {
      id: '1',
      name: 'Áo thun chạy bộ nam logo Coolmate',
      price: '149.000đ',
      originalPrice: '199.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/ao-thun-logo-coolmate',
    },
    {
      id: '2',
      name: 'Tshirt chạy bộ graphic Blue Gradient',
      price: '159.000đ',
      originalPrice: '219.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/tshirt-blue-gradient',
    },
    {
      id: '3',
      name: 'Quần Short nam thể thao',
      price: '199.000đ',
      originalPrice: '249.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/quan-short-the-thao',
    },
    {
      id: '4',
      name: 'Áo Polo nam Promax',
      price: '239.000đ',
      originalPrice: '299.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/ao-polo-promax',
    },
    {
      id: '5',
      name: 'Combo 3 Quần lót Nam Brief',
      price: '299.000đ',
      originalPrice: '399.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/combo-3-brief',
    },
    {
      id: '6',
      name: 'Áo Hoodie nam',
      price: '449.000đ',
      originalPrice: '599.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/ao-hoodie',
    },
    {
      id: '7',
      name: 'Quần Legging nữ',
      price: '249.000đ',
      originalPrice: '349.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/quan-legging',
    },
    {
      id: '8',
      name: 'Áo Sport Bra nữ',
      price: '199.000đ',
      originalPrice: '279.000đ',
      image: '',
      badge: 'sale' as const,
      link: '/san-pham/ao-sport-bra',
    },
  ]
}

// Server Component - SSR cho SEO
export default async function SalePage() {
  const saleProducts = await getSaleProducts()

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">SALE -50%</h1>
          <p className="text-lg">Giảm giá cực sốc lên đến 50% cho tất cả sản phẩm</p>
        </div>
      </div>

      <ProductSection
        title="Sản phẩm đang giảm giá"
        products={saleProducts}
      />

      <Footer />
    </main>
  )
}
