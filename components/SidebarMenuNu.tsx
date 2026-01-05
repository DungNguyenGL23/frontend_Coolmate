'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MenuSection {
  title: string
  items: string[]
  links: string[]
}

export default function SidebarMenuNu() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedSections(newExpanded)
  }

  const menuSections: MenuSection[] = [
    {
      title: 'TẤT CẢ SẢN PHẨM',
      items: [
        'COOLMATE ACTIVE FOR WOMEN',
        'Sản phẩm mới',
        'Bán chạy nhất',
        'Chạy bộ',
        'Thể thao chung',
        'Pickleball',
        'Vital Seamless',
        'Đồ Thu Đông',
      ],
      links: [
        '/nu',
        '/nu/san-pham-moi',
        '/nu/ban-chay-nhat',
        '/nu/chay-bo',
        '/nu/the-thao-chung',
        '/nu/pickleball',
        '/nu/vital-seamless',
        '/nu/do-thu-dong',
      ],
    },
    {
      title: 'ÁO NỮ',
      items: [
        'Áo Sport Bra',
        'Áo Croptop',
        'Áo Polo',
        'Áo Singlet',
        'Áo Hoodie & Sweater',
        'Áo Dài Tay',
        'Áo Khoác',
        'Áo Thun',
      ],
      links: [
        '/nu/ao/sport-bra',
        '/nu/ao/croptop',
        '/nu/ao/polo',
        '/nu/ao/singlet',
        '/nu/ao/hoodie-sweater',
        '/nu/ao/dai-tay',
        '/nu/ao/khoac',
        '/nu/ao/thun',
      ],
    },
    {
      title: 'QUẦN NỮ',
      items: [
        'Quần Legging',
        'Quần Shorts',
        'Quần Biker Shorts',
        'Váy Thể Thao',
        'Quần Dài',
      ],
      links: [
        '/nu/quan/legging',
        '/nu/quan/shorts',
        '/nu/quan/biker-shorts',
        '/nu/quan/vay-the-thao',
        '/nu/quan/dai',
      ],
    },
    {
      title: 'PHỤ KIỆN',
      items: ['Tất cả phụ kiện'],
      links: ['/nu/phu-kien'],
    },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 pr-4">
      <nav className="sticky top-24">
        {menuSections.map((section) => {
          const isExpanded = expandedSections.has(section.title)
          return (
            <div key={section.title} className="mb-2">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded transition-colors text-left"
              >
                <span className="font-semibold text-sm">{section.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isExpanded && (
                <div className="pl-4 space-y-1">
                  {section.items.map((item, index) => (
                    <Link
                      key={item}
                      href={section.links[index]}
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

