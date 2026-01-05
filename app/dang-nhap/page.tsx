'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import FooterLite from '@/components/FooterLite'
import LoginModal from '@/components/LoginModal'
import Link from 'next/link'

export default function DangNhapPage() {
  const [showLoginModal, setShowLoginModal] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Đăng nhập</h1>
          <p className="text-center text-gray-600 mb-8">
            Đăng nhập để trải nghiệm mua sắm tốt hơn
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Ghi nhớ đăng nhập</span>
              </label>
              <Link href="/quen-mat-khau" className="text-sm text-blue-600 hover:underline">
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Đăng nhập
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Chưa có tài khoản?{' '}
                <Link href="/dang-ky" className="text-blue-600 hover:underline font-semibold">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">Hoặc đăng nhập bằng</p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Google
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterLite />
    </main>
  )
}

