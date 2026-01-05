import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWidget from '@/components/FloatingWidget'
import ProductSection from '@/components/ProductSection'
import Link from 'next/link'

const csProducts = [
  {
    id: '1',
    name: 'Áo thun C&S "Việt Nam tiến bước"',
    price: '199.000đ',
    image: '',
    badge: 'bestseller' as const,
    link: '/san-pham/ao-thun-cs-vietnam',
  },
  {
    id: '2',
    name: 'Áo thun C&S Graphic',
    price: '219.000đ',
    image: '',
    badge: 'new' as const,
    link: '/san-pham/ao-thun-cs-graphic',
  },
]

export default function CSPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingWidget />
      
      {/* Care & Share Banner Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text and Infographic */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Care & Share</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Coolmate cam kết dành 10% doanh thu từ sản phẩm "Care & Share" đóng góp vào quỹ để tổ chức các hoạt động thiện nguyện dành cho trẻ em có hoàn cảnh khó khăn.
              </p>
              
              {/* Infographic */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  {/* Customer */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-center">Khách hàng</span>
                  </div>
                  
                  {/* Plus */}
                  <div className="text-2xl font-bold text-gray-400">+</div>
                  
                  {/* COOLMATE */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-xs font-bold text-purple-600">C&S</span>
                    </div>
                    <span className="text-xs text-center">COOLMATE</span>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-2xl font-bold text-gray-400">→</div>
                  
                  {/* 10% Revenue */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-lg font-bold text-green-600">10%</span>
                    </div>
                    <span className="text-xs text-center">10% doanh thu từ sản phẩm Care&Share</span>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-2xl font-bold text-gray-400">→</div>
                  
                  {/* Children */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-center">Trẻ em khó khăn được giúp đỡ</span>
                  </div>
                </div>
              </div>
              
              <Link
                href="/cs/san-pham"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                C&S
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👶👧👦</div>
                    <p className="text-xl font-semibold mb-2">Ấm áp cho em</p>
                    <p className="text-gray-600">Hình ảnh trẻ em được hỗ trợ</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 text-center">
                  <p className="font-semibold">Ấm áp cho em</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <ProductSection
          title="Sản phẩm C&S"
          products={csProducts}
        />
      </div>

      <Footer />
    </main>
  )
}
