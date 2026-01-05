import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CoolClubPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">CoolClub</h1>
          <p className="text-center text-gray-600 mb-12">
            Chương trình thành viên với nhiều ưu đãi đặc biệt
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1%</div>
              <h3 className="font-semibold mb-2">Hoàn tiền</h3>
              <p className="text-sm text-gray-600">Nhận 1% hoàn tiền cho mọi đơn hàng</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Ưu đãi</div>
              <h3 className="font-semibold mb-2">Đặc biệt</h3>
              <p className="text-sm text-gray-600">Giảm giá đặc biệt cho thành viên</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Miễn phí</div>
              <h3 className="font-semibold mb-2">Vận chuyển</h3>
              <p className="text-sm text-gray-600">Miễn phí ship cho mọi đơn hàng</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Đăng ký thành viên ngay</h2>
            <p className="mb-6">Nhận ngay nhiều ưu đãi hấp dẫn khi trở thành thành viên CoolClub</p>
            <Link
              href="/dang-ky"
              className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Đăng ký ngay
            </Link>
          </div>

          <div className="mt-12 space-y-6">
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tài khoản CoolClub</h3>
              <p className="text-gray-600 mb-4">
                Quản lý điểm tích lũy, lịch sử mua hàng và các ưu đãi đặc biệt của bạn.
              </p>
              <Link href="/dang-nhap" className="text-blue-600 hover:underline">
                Đăng nhập tài khoản →
              </Link>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ưu đãi & Đặc quyền</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hoàn tiền 1% cho mọi đơn hàng</li>
                <li>• Giảm giá đặc biệt cho thành viên</li>
                <li>• Miễn phí vận chuyển</li>
                <li>• Ưu tiên hỗ trợ khách hàng</li>
                <li>• Nhận thông báo sớm về sản phẩm mới</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

