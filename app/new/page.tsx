import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductSection from '@/components/ProductSection'

// SEO Metadata cho trang NEW
export const metadata: Metadata = {
  title: 'Sản Phẩm Mới - New Arrivals | COOLMATE',
  description: 'Khám phá những sản phẩm mới nhất từ COOLMATE. Áo thun mới, quần áo mới, đồ lót mới và phụ kiện mới với thiết kế hiện đại, chất lượng cao.',
  keywords: ['sản phẩm mới', 'new arrivals', 'áo thun mới', 'quần áo mới', 'đồ mới coolmate'],
  openGraph: {
    title: 'Sản Phẩm Mới - New Arrivals | COOLMATE',
    description: 'Khám phá những sản phẩm mới nhất từ COOLMATE',
    url: 'https://www.coolmate.me/new',
  },
  alternates: {
    canonical: '/new',
  },
}

// Server Component - Fetch data từ API
async function getNewProducts() {
  // Trong thực tế: const res = await fetch('https://api.coolmate.me/products/new')
  // return res.json()
  
  return [
    {
      id: '1',
      name: 'Áo thun chạy bộ nam Ventra Gradient',
      price: '229.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/ao-thun-ventra-gradient',
    },
    {
      id: '2',
      name: 'Áo Polo Nam Thể Thao Promax-S1',
      price: '299.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/ao-polo-promax-s1',
    },
    {
      id: '3',
      name: 'Quần Legging nữ Seamless',
      price: '349.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/quan-legging-seamless',
    },
    {
      id: '4',
      name: 'Áo Sport Bra nữ Vital',
      price: '279.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/ao-sport-bra-vital',
    },
    {
      id: '5',
      name: 'Áo Hoodie nam Excool',
      price: '599.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/ao-hoodie-excool',
    },
    {
      id: '6',
      name: 'Quần Short nam Promax',
      price: '249.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/quan-short-promax',
    },
    {
      id: '7',
      name: 'Áo thun Graphic Sky',
      price: '199.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/ao-thun-graphic-sky',
    },
    {
      id: '8',
      name: 'Váy thể thao nữ Seamless',
      price: '399.000đ',
      image: '',
      badge: 'new' as const,
      link: '/san-pham/vay-the-thao-seamless',
    },
  ]
}

// Server Component - SSR cho SEO
export default async function NewPage() {
  const newProducts = await getNewProducts()

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Sản phẩm mới</h1>
        <p className="text-gray-600 mb-8">Khám phá những sản phẩm mới nhất từ Coolmate</p>
      </div>

      <ProductSection
        title=""
        products={newProducts}
      />

      <Footer />
    </main>
  )
}
