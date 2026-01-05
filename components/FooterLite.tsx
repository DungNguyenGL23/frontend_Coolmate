'use client'

/**
 * Footer đơn giản dùng cho các trang client (đăng nhập, giỏ hàng, checkout)
 * Không dùng async/await, không phụ thuộc Server Component.
 */
export default function FooterLite() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} COOLMATE. Thương hiệu thời trang chất lượng từ Việt Nam.
          </p>
          <p className="text-center md:text-right">
            Hotline: 1900.272737 - 028.7777.2737 · Email: Cool@coolmate.me
          </p>
        </div>
      </div>
    </footer>
  )
}


