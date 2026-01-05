'use client'

import { useState } from 'react'
import { X, ChevronUp, MessageCircle, Phone } from 'lucide-react'

export default function FloatingWidget() {
  const [isLookbackOpen, setIsLookbackOpen] = useState(false)

  return (
    <>
      {/* LOOKBACK 2025 Widget */}
      <div className="fixed bottom-24 right-6 z-50">
        {isLookbackOpen ? (
          <div className="bg-white rounded-lg shadow-2xl p-4 w-64 mb-4 border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm">LOOKBACK 2025</h3>
              <button
                onClick={() => setIsLookbackOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              <a
                href="https://zalo.me/coolmate"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Zalo
              </a>
              <a
                href="tel:1900272737"
                className="block w-full bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition-colors text-sm"
              >
                Hotline
              </a>
            </div>
          </div>
        ) : null}
        
        <button
          onClick={() => setIsLookbackOpen(!isLookbackOpen)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
        >
          <span className="font-semibold">LOOKBACK 2025</span>
          {!isLookbackOpen && (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Zalo Chat Widget */}
      <a
        href="https://zalo.me/coolmate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors flex flex-col items-center gap-1 group"
        aria-label="Chat Zalo"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs font-semibold hidden group-hover:block">Hỗ trợ</span>
      </a>
    </>
  )
}
