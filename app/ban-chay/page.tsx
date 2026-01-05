import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWidget from '@/components/FloatingWidget'
import SidebarMenu from '@/components/SidebarMenu'
import ProductSection from '@/components/ProductSection'
import CategoryCarousel from '@/components/CategoryCarousel'
import Link from 'next/link'

const banChayProducts = [
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
    name: 'Combo 3 Quần lót Nam Brief Ex-Comfort Modern Bamboo',
    price: '399.000đ',
    image: '',
    badge: 'bestseller' as const,
    link: '/san-pham/combo-3-brief-bamboo',
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
  {
    id: '6',
    name: 'Áo thun chạy bộ nam logo Coolmate',
    price: '199.000đ',
    image: '',
    badge: 'bestseller' as const,
    link: '/san-pham/ao-thun-logo-coolmate',
  },
]

const categoryCarouselItems = [
  { id: '1', name: 'ÁO THỂ THAO', image: '', link: '/nam/ao/the-thao' },
  { id: '2', name: 'QUẦN THỂ THAO', image: '', link: '/nam/quan/the-thao' },
  { id: '3', name: 'HOODIE & SWEATER', image: '', link: '/nam/ao/hoodie-sweater' },
  { id: '4', name: 'BRA & LEGGINGS', image: '', link: '/nu/bra-leggings' },
  { id: '5', name: 'VÁY THỂ THAO', image: '', link: '/nu/vay-the-thao' },
  { id: '6', name: 'PHỤ KIỆN', image: '', link: '/nam/phu-kien' },
]

export default function BanChayPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingWidget />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Sản phẩm bán chạy</h1>
        <p className="text-gray-600 mb-8">Những sản phẩm được yêu thích nhất tại Coolmate</p>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 flex gap-8">
        {/* Left Sidebar */}
        <SidebarMenu />

        {/* Right Content */}
        <div className="flex-1">
          {/* Featured Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/nam/do-thu-dong" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Đồ Thu Đông</h3>
                    <p className="text-gray-600">Áo khoác, Hoodie, Sweater</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </Link>
            <Link href="/the-thao/pickleball" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Pickleball Nam</h3>
                    <p className="text-gray-600">Trang phục thể thao</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </Link>
          </div>

          {/* Products Section */}
          <ProductSection
            title="Sản phẩm bán chạy"
            products={banChayProducts}
          />
        </div>
      </div>

      {/* Category Carousel */}
      <CategoryCarousel title="THEO NHU CẦU" categories={categoryCarouselItems} />

      <Footer />
    </main>
  )
}
