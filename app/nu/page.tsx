import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWidget from '@/components/FloatingWidget'
import SidebarMenuNu from '@/components/SidebarMenuNu'
import CoolClubCards from '@/components/CoolClubCards'
import CategorySection from '@/components/CategorySection'
import ProductSection from '@/components/ProductSection'

// SEO Metadata cho trang Nữ
export const metadata: Metadata = {
  title: 'Đồ Nữ - Quần Áo Nữ, Phụ Kiện | COOLMATE ACTIVE FOR WOMEN',
  description: 'Mua sắm đồ nữ thể thao chất lượng cao tại COOLMATE. Áo sport bra, quần legging, váy thể thao và phụ kiện nữ với giá tốt nhất. Giao hàng nhanh, đổi trả dễ dàng.',
  keywords: ['đồ nữ', 'quần áo nữ', 'áo sport bra', 'quần legging nữ', 'váy thể thao', 'áo croptop', 'quần shorts nữ', 'đồ thể thao nữ'],
  openGraph: {
    title: 'Đồ Nữ - Quần Áo Nữ, Phụ Kiện | COOLMATE ACTIVE FOR WOMEN',
    description: 'Mua sắm đồ nữ thể thao chất lượng cao tại COOLMATE',
    url: 'https://www.coolmate.me/nu',
  },
  alternates: {
    canonical: '/nu',
  },
}

// Server Component - Fetch data từ API
async function getNuPageData() {
  // Trong thực tế: const res = await fetch('https://api.coolmate.me/nu')
  // return res.json()
  
  return {
    categories: [
      { id: '1', name: 'ÁO SPORT BRA', image: '', link: '/nu/ao/sport-bra' },
      { id: '2', name: 'ÁO CROPTOP', image: '', link: '/nu/ao/croptop' },
      { id: '3', name: 'ÁO POLO', image: '', link: '/nu/ao/polo' },
      { id: '4', name: 'ÁO SINGLET', image: '', link: '/nu/ao/singlet' },
      { id: '5', name: 'HOODIE & SWEATER', image: '', link: '/nu/ao/hoodie-sweater' },
      { id: '6', name: 'ÁO DÀI TAY', image: '', link: '/nu/ao/dai-tay' },
      { id: '7', name: 'QUẦN LEGGING', image: '', link: '/nu/quan/legging' },
      { id: '8', name: 'QUẦN SHORTS', image: '', link: '/nu/quan/shorts' },
      { id: '9', name: 'VÁY THỂ THAO', image: '', link: '/nu/quan/vay-the-thao' },
    ],
    products: [
      {
        id: '1',
        name: 'Áo Sport Bra nữ Vital Seamless',
        price: '279.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/ao-sport-bra-vital',
      },
      {
        id: '2',
        name: 'Quần Legging nữ Seamless',
        price: '349.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/quan-legging-seamless',
      },
      {
        id: '3',
        name: 'Váy thể thao nữ',
        price: '399.000đ',
        image: '',
        badge: 'new' as const,
        link: '/san-pham/vay-the-thao',
      },
      {
        id: '4',
        name: 'Áo Croptop nữ',
        price: '199.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/ao-croptop',
      },
      {
        id: '5',
        name: 'Quần Biker Shorts nữ',
        price: '249.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/quan-biker-shorts',
      },
    ],
  }
}

// Server Component - SSR cho SEO
export default async function NuPage() {
  const data = await getNuPageData()

  return (
    <main className="min-h-screen">
      <Header />
      <FloatingWidget />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">COOLMATE ACTIVE FOR WOMEN</h1>
        <p className="text-gray-600 mb-8">Thời trang thể thao nữ chất lượng cao</p>
      </div>

      {/* CoolClub Cards */}
      <CoolClubCards />

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 flex gap-8">
        {/* Left Sidebar */}
        <SidebarMenuNu />

        {/* Right Content */}
        <div className="flex-1">
          <CategorySection title="Danh mục sản phẩm nữ" categories={data.categories} />

          <ProductSection
            title="Sản phẩm bán chạy"
            products={data.products}
            viewMoreLink="/nu/ban-chay-nhat"
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
