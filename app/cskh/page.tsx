import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CSKHPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Chăm sóc khách hàng</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Trải nghiệm mua sắm 100% hài lòng</h2>
            <p className="text-gray-600 mb-4">
              Coolmate cam kết mang đến trải nghiệm mua sắm tốt nhất cho khách hàng với chính sách đổi trả linh hoạt và dịch vụ chăm sóc khách hàng chuyên nghiệp.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Hỏi đáp - FAQs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Làm thế nào để đổi trả sản phẩm?</h3>
                <p className="text-gray-600 text-sm">
                  Bạn có thể đổi trả sản phẩm trong vòng 60 ngày kể từ ngày nhận hàng. Vui lòng liên hệ hotline hoặc email để được hỗ trợ.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phí vận chuyển như thế nào?</h3>
                <p className="text-gray-600 text-sm">
                  Miễn phí vận chuyển cho đơn hàng từ 199.000đ. Dưới 199.000đ phí ship là 30.000đ.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Làm sao để theo dõi đơn hàng?</h3>
                <p className="text-gray-600 text-sm">
                  Sau khi đặt hàng, bạn sẽ nhận được mã đơn hàng. Sử dụng mã này để theo dõi trạng thái đơn hàng trên website.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Liên hệ với chúng tôi</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Hotline: 1900.272737 - 028.7777.2737 (8:30 - 22:00)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email: Cool@coolmate.me</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

