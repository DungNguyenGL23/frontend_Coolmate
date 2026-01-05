import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductSection from '@/components/ProductSection'
import CategorySection from '@/components/CategorySection'

const theThaoCategories = [
  { id: '1', name: 'THỂ THAO CHUNG', image: '', link: '/the-thao/chung' },
  { id: '2', name: 'CHẠY BỘ', image: '', link: '/the-thao/chay-bo' },
  { id: '3', name: 'GYM', image: '', link: '/the-thao/gym' },
  { id: '4', name: 'BÓNG ĐÁ', image: '', link: '/the-thao/bong-da' },
  { id: '5', name: 'CẦU LÔNG & BÓNG BÀN', image: '', link: '/the-thao/cau-long-bong-ban' },
  { id: '6', name: 'OUTDOOR', image: '', link: '/the-thao/outdoor' },
]

const theThaoProducts = [
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
    name: 'Áo thun chạy bộ nam Ventra Gradient',
    price: '229.000đ',
    image: '',
    badge: 'new' as const,
    link: '/san-pham/ao-thun-ventra-gradient',
  },
  {
    id: '4',
    name: 'Áo Sport Bra nữ Vital',
    price: '279.000đ',
    image: '',
    badge: 'bestseller' as const,
    link: '/san-pham/ao-sport-bra-vital',
  },
  {
    id: '5',
    name: 'Quần Legging nữ Seamless',
    price: '349.000đ',
    image: '',
    badge: 'bestseller' as const,
    link: '/san-pham/quan-legging-seamless',
  },
]

export default function TheThaoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">THỂ THAO</h1>
        <p className="text-gray-600 mb-8">Trang phục thể thao chất lượng cao cho mọi hoạt động</p>
      </div>

      <CategorySection title="Danh mục thể thao" categories={theThaoCategories} />

      <ProductSection
        title="Sản phẩm thể thao nổi bật"
        products={theThaoProducts}
        viewMoreLink="/the-thao/san-pham"
      />

      <Footer />
    </main>
  )
}

