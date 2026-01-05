'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import FooterClient from '@/components/FooterClient'
import FloatingWidget from '@/components/FloatingWidget'
import LoginModal from '@/components/LoginModal'
import Link from 'next/link'

export default function CheckoutPage() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null)

  // Show login modal when page loads (as per design)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginModal(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const vouchers = [
    {
      id: '1',
      code: 'COOL50DONGOLANH',
      remaining: 90,
      discount: 'Giảm 10% đơn sản phẩm Thu Đông từ 499k (Giảm tối đa 70K)',
      expiry: '31/01/2026',
      condition: 'Đơn hàng chưa thỏa mãn điều kiện áp dụng mã',
    },
    {
      id: '2',
      code: 'COOLSET200',
      remaining: 97,
      discount: 'Giảm 200K đơn từ 1800K',
      expiry: '08/01/2026',
      condition: 'Đơn hàng chưa thỏa mãn điều kiện áp dụng mã',
    },
    {
      id: '3',
      code: 'COOLSET1',
      remaining: 100,
      discount: 'Giảm 100K cho đơn từ 999K',
      expiry: '08/01/2026',
      condition: 'Đơn hàng chưa thỏa mãn điều kiện áp dụng mã',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <FloatingWidget />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* CoolClub Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link
              href="/coolclub/dang-ky"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              GIA NHẬP COOLCLUB NGAY
            </Link>
            <p className="text-sm text-gray-600 text-center md:text-left">
              Tham gia CoolClub để nhận Voucher - 15% cho đơn hàng đầu tiên và ghi nhận hoàn tiền trên từng đơn hàng.{' '}
              <Link href="/coolclub" className="text-blue-600 hover:underline">
                Tìm hiểu thêm
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Shipping Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Thông tin vận chuyển</h2>
              
              <div className="space-y-4">
                {/* Full Name */}
                <div className="flex gap-2">
                  <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Anh/Chị</option>
                    <option>Chị</option>
                    <option>Anh</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Nhập họ tên của bạn"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Address */}
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Province/City */}
                <input
                  type="text"
                  placeholder="Chọn tỉnh/thành phố"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Notes */}
                <textarea
                  placeholder="Nhập ghi chú"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Checkboxes */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Gọi người khác nhận hàng (nếu có)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Xuất hoá đơn VAT</span>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>

                {/* Payment Method */}
                <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span className="font-semibold">Thanh toán khi nhận hàng</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              {/* Empty Cart Message */}
              <div className="text-center py-8 mb-6">
                <p className="text-gray-600 mb-4">Giỏ hàng của bạn trống, hãy mua thêm nhé</p>
                <Link
                  href="/"
                  className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
                >
                  MUA SẮM NGAY
                </Link>
              </div>

              {/* Vouchers */}
              <div className="border-t pt-6 mb-6">
                <h3 className="font-semibold mb-4">Mã giảm giá</h3>
                <div className="space-y-3 mb-4">
                  {vouchers.map((voucher) => (
                    <div
                      key={voucher.id}
                      className="border border-gray-300 rounded-lg p-3 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <input
                          type="radio"
                          name="voucher"
                          id={voucher.id}
                          checked={selectedVoucher === voucher.id}
                          onChange={() => setSelectedVoucher(voucher.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <label htmlFor={voucher.id} className="font-semibold text-sm cursor-pointer">
                              {voucher.code}
                            </label>
                            <span className="text-xs text-gray-500">(Còn {voucher.remaining})</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{voucher.discount}</p>
                          <p className="text-xs text-gray-500">HSD: {voucher.expiry}</p>
                          <p className="text-xs text-red-600 mt-1">** {voucher.condition}</p>
                        </div>
                      </div>
                      <Link href="#" className="text-xs text-blue-600 hover:underline">
                        Điều kiện
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Enter Discount Code */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm">
                    ÁP DỤNG
                  </button>
                </div>

                {/* Referral Code */}
                <div className="mb-6">
                  <p className="text-sm mb-2">Mã giới thiệu bạn bè</p>
                  <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
                    Nhập mã
                  </button>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="border-t pt-6">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Tạm tính:</span>
                    <span>0đ</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Voucher giảm giá:</span>
                    <span>0đ</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Thành tiền:</span>
                    <span className="text-red-600">0đ</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-4 text-center">
                  Đăng nhập để hoàn CoolCash Tiết kiệm 0đ
                </p>

                <button
                  disabled
                  className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold cursor-not-allowed"
                >
                  ĐẶT HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterClient />
    </main>
  )
}

