import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VeCoolmatePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Về Coolmate</h1>

          <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Câu chuyện về Coolmate</h2>
              <p className="text-gray-600 mb-4">
                Coolmate được thành lập với sứ mệnh mang đến những sản phẩm thời trang chất lượng cao từ Việt Nam, 
                phù hợp với mọi hoạt động của người Việt trẻ hiện đại.
              </p>
              <p className="text-gray-600">
                Chúng tôi tin rằng mỗi sản phẩm không chỉ là trang phục mà còn là công cụ để bạn thể hiện phong cách 
                và tự tin trong mọi tình huống.
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Tầm nhìn 2030</h2>
              <p className="text-gray-600 mb-4">
                Coolmate hướng tới trở thành thương hiệu thời trang hàng đầu Việt Nam, được yêu thích bởi thế hệ trẻ 
                với các giá trị cốt lõi: Chất lượng - Bền vững - Đổi mới.
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Cam kết bền vững</h2>
              <p className="text-gray-600 mb-4">
                Coolmate cam kết phát triển bền vững với các hoạt động:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Sử dụng nguyên liệu thân thiện với môi trường</li>
                <li>• Quy trình sản xuất tiết kiệm năng lượng</li>
                <li>• Hỗ trợ các hoạt động cộng đồng thông qua Care & Share</li>
                <li>• Tái chế và tái sử dụng nguyên liệu</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Nhà máy</h2>
              <p className="text-gray-600">
                Coolmate tự hào sở hữu nhà máy sản xuất hiện đại tại Việt Nam, đảm bảo chất lượng sản phẩm 
                và kiểm soát toàn bộ quy trình từ nguyên liệu đến thành phẩm.
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Quy tắc ứng xử của Coolmate</h2>
              <p className="text-gray-600 mb-4">
                Coolmate cam kết tuân thủ các nguyên tắc đạo đức trong kinh doanh:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Tôn trọng nhân quyền và quyền lao động</li>
                <li>• Minh bạch trong hoạt động kinh doanh</li>
                <li>• Bảo vệ môi trường</li>
                <li>• Hỗ trợ cộng đồng</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

