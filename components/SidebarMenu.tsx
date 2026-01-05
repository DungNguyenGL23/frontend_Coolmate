'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MenuSection {
  title: string
  items: string[]
  links: string[]
}

export default function SidebarMenu() {
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
        'Sản phẩm mới',
        'Bán chạy nhất',
        'ECC Collection',
        'Excool Collection',
        'Seamless',
        'Promax',
        'Đồ Thu Đông',
      ],
      links: [
        '/nam/san-pham-moi',
        '/nam/ban-chay-nhat',
        '/nam/ecc-collection',
        '/nam/excool-collection',
        '/nam/seamless',
        '/nam/promax',
        '/nam/do-thu-dong',
      ],
    },
    {
      title: 'ÁO NAM',
      items: [
        'Áo Tanktop',
        'Áo thun',
        'Áo Thể Thao',
        'Áo Polo',
        'Áo Sơ Mi',
        'Áo Dài Tay',
        'Áo Sweater',
        'Áo Hoodie',
        'Áo Khoác',
        'Áo thun Graphic',
      ],
      links: [
        '/nam/ao/tanktop',
        '/nam/ao/thun',
        '/nam/ao/the-thao',
        '/nam/ao/polo',
        '/nam/ao/so-mi',
        '/nam/ao/dai-tay',
        '/nam/ao/sweater',
        '/nam/ao/hoodie',
        '/nam/ao/khoac',
        '/nam/ao/graphic',
      ],
    },
    {
      title: 'QUẦN NAM',
      items: [
        'Quần Short',
        'Quần Jogger',
        'Quần Thể Thao',
        'Quần Dài',
        'Quần Pants',
        'Quần Jean',
        'Quần Kaki',
        'Quần Bơi',
      ],
      links: [
        '/nam/quan/short',
        '/nam/quan/jogger',
        '/nam/quan/the-thao',
        '/nam/quan/dai',
        '/nam/quan/pants',
        '/nam/quan/jean',
        '/nam/quan/kaki',
        '/nam/quan/boi',
      ],
    },
    {
      title: 'QUẦN LÓT NAM',
      items: [
        'Brief (Tam giác)',
        'Trunk (Boxer)',
        'Boxer Brief (Boxer dài)',
        'Long Leg',
        'Short mặc nhà',
      ],
      links: [
        '/nam/do-lot/brief',
        '/nam/do-lot/trunk',
        '/nam/do-lot/boxer-brief',
        '/nam/do-lot/long-leg',
        '/nam/do-lot/short-mac-nha',
      ],
    },
    {
      title: 'PHỤ KIỆN',
      items: ['Tất cả phụ kiện (Tất, mũ, túi...)'],
      links: ['/nam/phu-kien'],
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

