'use client'

import { useState } from 'react'
import { X, Phone } from 'lucide-react'

export default function FloatingWidget() {
  const [isZaloOpen, setIsZaloOpen] = useState(false)

  return (
    <>
      {/* Zalo / Hotline Floating Contact */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isZaloOpen && (
          <div className="mb-3 flex flex-col items-end gap-3">
            {/* Zalo bubble */}
            <a
              href="https://zalo.me/coolmate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white border border-blue-100 shadow-lg flex items-center justify-center"
              aria-label="Chat Zalo"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                Zalo
              </div>
            </a>

            {/* Hotline bubble */}
            <a
              href="tel:1900272737"
              className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Gọi hotline"
            >
              <Phone className="w-7 h-7" />
            </a>

            {/* Close bubble */}
            <button
              type="button"
              onClick={() => setIsZaloOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 shadow flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Đóng liên hệ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Collapsed Zalo button */}
        {!isZaloOpen && (
          <button
            type="button"
            onClick={() => setIsZaloOpen(true)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Liên hệ Zalo / Hotline"
          >
            <div className="w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-blue-600 leading-none">Zalo</span>
              <span className="mt-1 text-[10px] text-yellow-500 font-semibold">Hotline</span>
            </div>
          </button>
        )}
      </div>
    </>
  )
}
