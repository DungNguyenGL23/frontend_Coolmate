'use client'

import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import Header from '@/components/Header'

/**
 * Admin Panel để chỉnh sửa theme và content
 * Trong production sẽ cần authentication
 */
export default function AdminPage() {
  const { theme, updateTheme } = useTheme()
  const [primaryColor, setPrimaryColor] = useState(theme.colors.primary)
  const [secondaryColor, setSecondaryColor] = useState(theme.colors.secondary)
  const [accentColor, setAccentColor] = useState(theme.colors.accent)

  const handleThemeUpdate = () => {
    updateTheme({
      colors: {
        ...theme.colors,
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor,
      },
    })
    alert('Theme đã được cập nhật!')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme Configuration */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Cấu hình Theme</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Màu chủ đạo (Primary)</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-16 h-10 rounded"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Màu phụ (Secondary)</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-16 h-10 rounded"
                  />
                  <input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Màu nhấn (Accent)</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-16 h-10 rounded"
                  />
                  <input
                    type="text"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <button
                onClick={handleThemeUpdate}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Cập nhật Theme
              </button>
            </div>
          </div>

          {/* Content Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Quản lý Nội dung</h2>
            <p className="text-gray-600 mb-4">
              Để chỉnh sửa banners, chính sách, và thông tin liên hệ, vui lòng chỉnh sửa file:
            </p>
            <code className="block bg-gray-100 p-3 rounded text-sm mb-4">
              config/content.config.ts
            </code>
            <p className="text-sm text-gray-600">
              Hoặc tích hợp với CMS/API để quản lý nội dung động.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

