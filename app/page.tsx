import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import FloatingWidget from '@/components/FloatingWidget'
import CoolClubCards from '@/components/CoolClubCards'
import CategorySection from '@/components/CategorySection'
import ProductSection from '@/components/ProductSection'
import CollectionBanner from '@/components/CollectionBanner'
import TrendingSection from '@/components/TrendingSection'
import { contentService } from '@/services/content.service'

// SEO Metadata cho trang chủ
export const metadata: Metadata = {
  title: 'COOLMATE - Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam',
  description: 'Mua sắm thời trang nam nữ chất lượng cao tại COOLMATE. Áo thun, quần áo thể thao, đồ lót và phụ kiện thời trang với giá tốt nhất. Giao hàng nhanh, đổi trả dễ dàng.',
  keywords: ['coolmate', 'thời trang nam', 'thời trang nữ', 'quần áo thể thao', 'áo thun nam', 'áo thun nữ', 'quần áo nam', 'quần áo nữ', 'đồ lót nam', 'phụ kiện thời trang'],
  openGraph: {
    title: 'COOLMATE - Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam',
    description: 'Mua sắm thời trang nam nữ chất lượng cao tại COOLMATE',
    url: 'https://www.coolmate.me',
  },
  alternates: {
    canonical: '/',
  },
}

// Server Component - Fetch data từ API (mock data hiện tại)
async function getHomePageData() {
  // Trong thực tế, đây sẽ là API call
  // const res = await fetch('https://api.coolmate.me/homepage')
  // return res.json()
  
  return {
    namCategories: [
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
    trendingItems: [
      {
        id: '1',
        name: 'Áo Nam',
        description: 'Form đẹp, dễ mặc, linh hoạt vận động',
        image: '',
        link: '/nam/ao',
      },
      {
        id: '2',
        name: 'Quần nam',
        description: 'Thoải mái, bền dáng, phù hợp mặc hằng ngày',
        image: '',
        link: '/nam/quan',
      },
      {
        id: '3',
        name: 'Áo nữ',
        description: 'Thiết kế dễ phối, phù hợp nhiều hoạt động',
        image: '',
        link: '/nu/ao',
      },
      {
        id: '4',
        name: 'Váy thể thao nữ',
        description: 'Thoáng nhẹ, linh hoạt, được chọn nhiều khi tập luyện',
        image: '',
        link: '/nu/vay-the-thao',
      },
    ],
    featuredProducts: [
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
        name: 'Tshirt chạy bộ graphic Blue Gradient',
        price: '219.000đ',
        originalPrice: '299.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/tshirt-blue-gradient',
      },
      {
        id: '5',
        name: 'Áo thun chạy bộ nam Ventra Gradient',
        price: '229.000đ',
        image: '',
        badge: 'new' as const,
        link: '/san-pham/ao-thun-ventra-gradient',
      },
    ],
    quanLotProducts: [
      {
        id: '1',
        name: 'Quần Long Leg Co giãn',
        price: '199.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/quan-long-leg',
      },
      {
        id: '2',
        name: 'Combo 3 Quần lót Nam Brief Ex-Comfort Modern Bamboo',
        price: '399.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/combo-3-brief-bamboo',
      },
      {
        id: '3',
        name: 'Combo 5 Quần Lót Nam Trunk Bamboo',
        price: '599.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/combo-5-trunk-bamboo',
      },
      {
        id: '4',
        name: 'Combo 3 Quần Lót Nam Trunk Bamboo',
        price: '399.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/combo-3-trunk-bamboo',
      },
      {
        id: '5',
        name: 'Combo 3 Quần Lót Nam Trunk Lenzing Modal',
        price: '449.000đ',
        image: '',
        badge: 'bestseller' as const,
        link: '/san-pham/combo-3-trunk-modal',
      },
    ],
  }
}

// Server Component - SSR cho SEO
export default async function Home() {
  const data = await getHomePageData()
  const banners = await contentService.getBanners()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner banners={banners} />
      <FloatingWidget />

      {/* Men & Women Promo Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollectionBanner
              title="MEN WEAR - Khuyến mãi hot"
              image=""
              link="/nam"
              buttonText="SHOP NOW"
            />
            <CollectionBanner
              title="WOMEN ACTIVE - Khuyến mãi hot"
              image=""
              link="/nu"
              buttonText="SHOP NOW"
            />
          </div>
        </div>
      </section>

      {/* CoolClub Cards */}
      <CoolClubCards />

      {/* Trending Section */}
      <TrendingSection items={data.trendingItems} />

      {/* Category Section */}
      <CategorySection title="Danh mục sản phẩm" categories={data.namCategories} />

      {/* Collection Banners */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollectionBanner title="ĐỒ THU ĐÔNG" image="" link="/dong-thu-dong" />
            <CollectionBanner title="ĐỒ CHẠY BỘ" image="" link="/do-chay-bo" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductSection
        title="Sản phẩm nổi bật"
        products={data.featuredProducts}
        viewMoreLink="/san-pham"
      />

      {/* Quần lót Section */}
      <ProductSection
        title="SẢN PHẨM QUẦN LÓT NAM"
        products={data.quanLotProducts}
        viewMoreLink="/nam/quan-lot"
      />

      {/* Care & Share Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Care&Share</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            COOLMATE - Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
