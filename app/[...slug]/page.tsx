import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface ComingSoonPageProps {
  params: { slug: string[] }
}

export default function ComingSoonPage({ params }: ComingSoonPageProps) {
  const path = '/' + (params.slug || []).join('/')

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-2 uppercase tracking-[0.2em]">
            COMING SOON
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Tính năng đang được phát triển
          </h1>
          <p className="text-gray-600 mb-8">
            Đường dẫn <span className="font-mono text-gray-800">{path}</span> hiện chưa được mở.
            Chúng tôi đang hoàn thiện để mang đến trải nghiệm tốt hơn cho bạn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Quay về trang chủ
            </Link>
            <Link
              href="/cs"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Xem thêm sản phẩm khác
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


