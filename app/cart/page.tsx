'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import FooterLite from '@/components/FooterLite'
import LoginModal from '@/components/LoginModal'
import Link from 'next/link'

export default function CartPage() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Áo Polo Nam Thể Thao Promax-S1',
      price: 299000,
      quantity: 1,
      image: '',
      size: 'M',
    },
  ])

  // Show login modal when cart is empty (as per design)
  useEffect(() => {
    if (items.length === 0) {
      const timer = setTimeout(() => {
        setShowLoginModal(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [items.length])

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 199000 ? 0 : 30000
  const total = subtotal + shipping

  return (
    <main className="min-h-screen">
      <Header />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Giỏ hàng</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Giỏ hàng của bạn đang trống</p>
            <Link
              href="/"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-4"
                >
                  <div className="w-full md:w-32 h-32 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 text-xs">Hình ảnh</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>
                    <p className="text-lg font-semibold text-red-600">
                      {item.price.toLocaleString('vi-VN')}đ
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Xóa
                    </button>
                    <div className="flex items-center gap-2 border rounded">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{subtotal.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">Miễn phí</span>
                      ) : (
                        `${shipping.toLocaleString('vi-VN')}đ`
                      )}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                    <span>Tổng cộng:</span>
                    <span className="text-red-600">{total.toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
                >
                  Thanh toán
                </Link>
                <Link
                  href="/"
                  className="block w-full text-center py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Tiếp tục mua sắm
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <FooterLite />
    </main>
  )
}

