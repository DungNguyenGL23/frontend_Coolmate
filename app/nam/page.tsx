import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWidget from '@/components/FloatingWidget'
import SidebarMenu from '@/components/SidebarMenu'
import CategorySection from '@/components/CategorySection'
import ProductSection from '@/components/ProductSection'

// SEO Metadata cho trang Nam
export const metadata: Metadata = {
  title: 'Đồ Nam - Quần Áo Nam, Đồ Lót Nam | COOLMATE',
  description: 'Mua sắm đồ nam chất lượng cao tại COOLMATE. Áo thun nam, quần áo nam, đồ lót nam và phụ kiện với giá tốt nhất. Giao hàng nhanh, đổi trả dễ dàng trong 60 ngày.',
  keywords: ['đồ nam', 'quần áo nam', 'áo thun nam', 'quần nam', 'đồ lót nam', 'áo polo nam', 'áo khoác nam', 'quần short nam', 'quần jogger nam'],
  openGraph: {
    title: 'Đồ Nam - Quần Áo Nam, Đồ Lót Nam | COOLMATE',
    description: 'Mua sắm đồ nam chất lượng cao tại COOLMATE',
    url: 'https://www.coolmate.me/nam',
  },
  alternates: {
    canonical: '/nam',
  },
}

// Server Component - Fetch data từ API
async function getNamPageData() {
  // Trong thực tế: const res = await fetch('https://api.coolmate.me/nam')
  // return res.json()
  
  return {
    categories: [
      { id: '1', name: 'ÁO KHOÁC', image: '', link: '/nam/ao-khoac' },
      { id: '2', name: 'HOODIE & SWEATER', image: '', link: '/nam/hoodie-sweater' },
      { id: '3', name: 'ÁO DÀI TAY', image: '', link: '/nam/ao-dai-tay' },
      { id: '4', name: 'ÁO POLO', image: '', link: '/nam/ao-polo' },
      { id: '5', name: 'SƠ MI', image: '', link: '/nam/so-mi' },
      { id: '6', name: 'ÁO THUN', image: '', link: '/nam/ao-thun' },
      { id: '7', name: 'QUẦN DÀI', image: '', link: '/nam/quan-dai' },
      { id: '8', name: 'QUẦN LÓT', image: '', link: '/nam/quan-lot' },
      { id: '9', name: 'PHỤ KIỆN', image: '', link: '/nam/phu-kien' },
    ],
    products: [
      {
        id: '1',
        name: 'Áo Polo Nam Thể Thao Promax-S1',
        price: '299.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/ao-polo-promax-s1',
      },
      {
        id: '2',
        name: 'Quần Shorts Nam Thể Thao Promax-S1',
        price: '249.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/quan-shorts-promax-s1',
      },
      {
        id: '3',
        name: 'Áo thun chạy bộ nam logo Coolmate',
        price: '199.000đ',
        image: '',
        badge: 'new' as const,
        link: '/san-pham/ao-thun-logo-coolmate',
      },
      {
        id: '4',
        name: 'Áo Hoodie nam Excool',
        price: '599.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/ao-hoodie-excool',
      },
      {
        id: '5',
        name: 'Quần Jogger nam',
        price: '349.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/quan-jogger',
      },
    ],
  }
}

// Server Component - SSR cho SEO
export default async function NamPage() {
  const data = await getNamPageData()

  return (
    <main className="min-h-screen">
      <Header />
      <FloatingWidget />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Khám phá đồ nam</h1>
        <p className="text-gray-600 mb-8">Thời trang nam chất lượng cao từ Coolmate</p>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 flex gap-8">
        {/* Left Sidebar */}
        <SidebarMenu />

        {/* Right Content */}
        <div className="flex-1">
          <CategorySection title="Danh mục sản phẩm nam" categories={data.categories} />

          <ProductSection
            title="Sản phẩm bán chạy"
            products={data.products}
            viewMoreLink="/nam/ban-chay-nhat"
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
