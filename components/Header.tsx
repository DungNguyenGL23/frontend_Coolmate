'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, User, ShoppingCart, Menu, ChevronDown, X, 
  Activity, Footprints, Target, Zap, CircleDot, Dumbbell, 
  Waves, Mountain, Shirt, Sparkles, ShoppingBag, Heart, 
  Award, ArrowRight
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const mainMenuItems = [
    { 
      label: 'NEW', 
      href: '/new',
    },
    { 
      label: 'BÁN CHẠY', 
      href: '/ban-chay',
    },
    { 
      label: 'Nam', 
      href: '/nam',
      isMegaMenu: true,
      megaMenuType: 'nam',
    },
    { 
      label: 'Nữ', 
      href: '/nu',
      isMegaMenu: true,
      megaMenuType: 'nu',
    },
    { 
      label: 'THỂ THAO', 
      href: '/the-thao',
      isSportsMenu: true,
    },
    { 
      label: 'SALE', 
      href: '/sale', 
      badge: '-50%' 
    },
    { 
      label: 'C&S', 
      href: '/cs',
    },
  ]

  const namMegaMenu = {
    columns: [
      {
        title: 'TẤT CẢ SẢN PHẨM',
        items: [
          { label: 'Sản phẩm mới', href: '/nam/san-pham-moi' },
          { label: 'Bán chạy nhất', href: '/nam/ban-chay-nhat' },
          { label: 'ECC Collection', href: '/nam/ecc-collection' },
          { label: 'Excool Collection', href: '/nam/excool-collection' },
          { label: 'Seamless', href: '/nam/seamless' },
          { label: 'Promax', href: '/nam/promax' },
          { label: 'Đồ Thu Đông', href: '/nam/do-thu-dong' },
        ],
      },
      {
        title: 'ÁO NAM',
        items: [
          { label: 'Áo Tanktop', href: '/nam/ao/tanktop' },
          { label: 'Áo thun', href: '/nam/ao/thun' },
          { label: 'Áo Thể Thao', href: '/nam/ao/the-thao' },
          { label: 'Áo Polo', href: '/nam/ao/polo' },
          { label: 'Áo Sơ Mi', href: '/nam/ao/so-mi' },
          { label: 'Áo Dài Tay', href: '/nam/ao/dai-tay' },
          { label: 'Áo Sweater', href: '/nam/ao/sweater' },
          { label: 'Áo Hoodie', href: '/nam/ao/hoodie' },
          { label: 'Áo Khoác', href: '/nam/ao/khoac' },
          { label: 'Áo thun Graphic', href: '/nam/ao/graphic' },
        ],
      },
      {
        title: 'QUẦN NAM',
        items: [
          { label: 'Quần Short', href: '/nam/quan/short' },
          { label: 'Quần Jogger', href: '/nam/quan/jogger' },
          { label: 'Quần Thể Thao', href: '/nam/quan/the-thao' },
          { label: 'Quần Dài', href: '/nam/quan/dai' },
          { label: 'Quần Pants', href: '/nam/quan/pants' },
          { label: 'Quần Jean', href: '/nam/quan/jean' },
          { label: 'Quần Kaki', href: '/nam/quan/kaki' },
          { label: 'Quần Bơi', href: '/nam/quan/boi' },
        ],
      },
      {
        title: 'QUẦN LÓT NAM',
        items: [
          { label: 'Brief (Tam giác)', href: '/nam/do-lot/brief' },
          { label: 'Trunk (Boxer)', href: '/nam/do-lot/trunk' },
          { label: 'Boxer Brief (Boxer dài)', href: '/nam/do-lot/boxer-brief' },
          { label: 'Long Leg', href: '/nam/do-lot/long-leg' },
          { label: 'Short mặc nhà', href: '/nam/do-lot/short-mac-nha' },
        ],
      },
      {
        title: 'PHỤ KIỆN',
        items: [
          { label: 'Tất cả phụ kiện (Tất, mũ, túi...)', href: '/nam/phu-kien' },
        ],
      },
    ],
    banners: [
      {
        title: 'Đồ Thu Đông',
        href: '/nam/do-thu-dong',
        image: '',
      },
      {
        title: 'Pickleball Nam',
        href: '/the-thao/pickleball',
        image: '',
      },
    ],
  }

  const nuMegaMenu = {
    columns: [
      {
        title: 'TẤT CẢ SẢN PHẨM',
        items: [
          { label: 'Sản phẩm mới', href: '/nu/san-pham-moi' },
          { label: 'Bán chạy nhất', href: '/nu/ban-chay-nhat' },
          { label: 'Chạy bộ', href: '/nu/chay-bo' },
          { label: 'Thể thao chung', href: '/nu/the-thao-chung' },
          { label: 'Pickleball', href: '/nu/pickleball' },
          { label: 'Vital Seamless', href: '/nu/vital-seamless' },
          { label: 'Đồ Thu Đông', href: '/nu/do-thu-dong' },
        ],
      },
      {
        title: 'ÁO NỮ',
        items: [
          { label: 'Áo Sport Bra', href: '/nu/ao/sport-bra' },
          { label: 'Áo Croptop', href: '/nu/ao/croptop' },
          { label: 'Áo Polo', href: '/nu/ao/polo' },
          { label: 'Áo Singlet', href: '/nu/ao/singlet' },
          { label: 'Áo Hoodie & Sweater', href: '/nu/ao/hoodie-sweater' },
          { label: 'Áo Dài Tay', href: '/nu/ao/dai-tay' },
          { label: 'Áo Khoác', href: '/nu/ao/khoac' },
          { label: 'Áo Thun', href: '/nu/ao/thun' },
          { label: 'Áo thun Graphic', href: '/nu/ao/graphic' },
        ],
      },
      {
        title: 'QUẦN NỮ',
        items: [
          { label: 'Quần Legging', href: '/nu/quan/legging' },
          { label: 'Quần Shorts', href: '/nu/quan/shorts' },
          { label: 'Quần Biker Shorts', href: '/nu/quan/biker-shorts' },
          { label: 'Váy - Đầm', href: '/nu/quan/vay-dam' },
          { label: 'Quần Dài', href: '/nu/quan/dai' },
        ],
      },
      {
        title: 'PHỤ KIỆN',
        items: [
          { label: '#2 Amazon Best Seller', href: '/nu/phu-kien/best-seller' },
          { label: 'Tất cả phụ kiện (Tất, mũ, túi...)', href: '/nu/phu-kien' },
        ],
      },
      {
        title: 'KHÁM PHÁ',
        items: [
          { label: 'Hướng dẫn chọn Size nữ', href: '/huong-dan-chon-size-nu' },
          { label: 'Đại sứ của chúng tôi', href: '/dai-su' },
          { label: 'Câu lạc bộ đồng hành', href: '/cau-lac-bo-dong-hanh' },
        ],
      },
    ],
    banners: [
      {
        title: 'Đồ Thu Đông',
        href: '/nu/do-thu-dong',
        image: '',
      },
      {
        title: 'Pickleball Nữ',
        href: '/nu/pickleball',
        image: '',
      },
    ],
  }

  const sportsMenuNam = [
    { label: 'Thể thao chung', href: '/the-thao/chung', icon: Activity, color: 'bg-blue-500' },
    { label: 'Chạy bộ', href: '/the-thao/chay-bo', icon: Footprints, color: 'bg-green-500' },
    { label: 'Bóng đá', href: '/the-thao/bong-da', icon: Target, color: 'bg-purple-500' },
    { label: 'Cầu lông & Bóng bàn', href: '/the-thao/cau-long-bong-ban', icon: Zap, color: 'bg-orange-500' },
    { label: 'Pickleball', href: '/the-thao/pickleball', icon: CircleDot, color: 'bg-pink-500' },
    { label: 'Gym', href: '/the-thao/gym', icon: Dumbbell, color: 'bg-red-500' },
    { label: 'Quần Bơi', href: '/the-thao/quan-boi', icon: Waves, color: 'bg-cyan-500' },
    { label: 'Outdoor', href: '/the-thao/outdoor', icon: Mountain, color: 'bg-amber-500' },
  ]

  const sportsMenuNu = [
    { label: 'Pickleball', href: '/the-thao/pickleball-nu', icon: CircleDot, color: 'bg-pink-500' },
    { label: '#2 Amazon Best Seller', href: '/the-thao/best-seller', icon: Award, color: 'bg-yellow-500' },
    { label: 'Chạy bộ', href: '/the-thao/chay-bo-nu', icon: Footprints, color: 'bg-green-500' },
    { label: 'Áo thể thao nữ', href: '/the-thao/ao-nu', icon: Shirt, color: 'bg-blue-500' },
    { label: 'Thể thao chung', href: '/the-thao/chung-nu', icon: Activity, color: 'bg-purple-500' },
    { label: 'Quần thể thao nữ', href: '/the-thao/quan-nu', icon: ShoppingBag, color: 'bg-indigo-500' },
    { label: 'Yoga & Pilates', href: '/the-thao/yoga-pilates', icon: Heart, color: 'bg-rose-500' },
    { label: 'Váy Thể Thao', href: '/the-thao/vay-the-thao', icon: Sparkles, color: 'bg-fuchsia-500' },
    { label: 'Gym', href: '/the-thao/gym-nu', icon: Dumbbell, color: 'bg-red-500' },
    { label: 'Phụ kiện thể thao nữ', href: '/the-thao/phu-kien-nu', icon: ShoppingBag, color: 'bg-teal-500' },
  ]

  const renderMegaMenu = (menuData: typeof namMegaMenu | typeof nuMegaMenu) => {
    return (
      <div className="absolute top-full left-0 bg-white shadow-2xl border rounded-lg pt-4 pb-6 w-[900px] max-h-[600px] overflow-y-auto">
        <div className="grid grid-cols-5 gap-6 px-6">
          {/* Menu Columns */}
          <div className="col-span-4 grid grid-cols-4 gap-6">
            {menuData.columns.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-3 text-sm flex items-center gap-1">
                  {column.title}
                  <ChevronDown className="w-4 h-4" />
                </h4>
                <ul className="space-y-2">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors block py-1"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promotional Banners */}
          <div className="col-span-1 space-y-4">
            {menuData.banners.map((banner, idx) => (
              <Link
                key={idx}
                href={banner.href}
                className="block group"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-lg mb-1">{idx === 0 ? '🧥' : '🎾'}</p>
                      <p className="text-xs font-semibold">{banner.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-white border-b border-gray-200 text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/coolclub" className="flex items-center gap-1 hover:text-gray-600">
              <span className="text-yellow-500">★</span>
              <span>Coolclub</span>
            </Link>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <Link href="/cskh" className="hover:text-gray-600">CSKH</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dang-nhap" className="hover:text-gray-600">Đăng nhập</Link>
            <div className="relative">
              <button className="flex items-center gap-1 hover:text-gray-600">
                <span>VN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <div className="relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xl font-bold">
                +
              </div>
              <div className="text-2xl font-bold mt-2 leading-none">
                <span className="text-black">COOL</span>
                <span className="text-gray-400">.</span>
                <span className="text-black">MATE</span>
              </div>
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainMenuItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => (item.dropdown || item.isMegaMenu || item.isSportsMenu) && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative font-medium hover:text-gray-600 transition-colors flex items-center gap-1 ${
                    activeDropdown === item.href ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                  {(item.dropdown || item.isMegaMenu || item.isSportsMenu) && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
                
                {/* Mega Menu for Nam */}
                {item.isMegaMenu && item.megaMenuType === 'nam' && activeDropdown === item.href && (
                  renderMegaMenu(namMegaMenu)
                )}
                
                {/* Mega Menu for Nữ */}
                {item.isMegaMenu && item.megaMenuType === 'nu' && activeDropdown === item.href && (
                  renderMegaMenu(nuMegaMenu)
                )}
                
                {/* Sports Menu Dropdown */}
                {item.isSportsMenu && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl border rounded-lg pt-4 pb-6 w-[800px]">
                    <div className="grid grid-cols-3 gap-6 px-6">
                      {/* Left: Men's Sports */}
                      <div>
                        <h4 className="font-bold mb-4 text-sm flex items-center gap-2">
                          THỂ THAO NAM
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </h4>
                        <div className="space-y-2">
                          {sportsMenuNam.map((subItem) => {
                            const IconComponent = subItem.icon
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-gray-50 rounded-lg transition-all group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className={`w-10 h-10 rounded-full ${subItem.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <span className="flex-1 group-hover:text-blue-600 transition-colors">{subItem.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                      
                      {/* Center: Women's Sports */}
                      <div>
                        <h4 className="font-bold mb-4 text-sm flex items-center gap-2">
                          THỂ THAO NỮ
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </h4>
                        <div className="space-y-2">
                          {sportsMenuNu.map((subItem) => {
                            const IconComponent = subItem.icon
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-gray-50 rounded-lg transition-all group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className={`w-10 h-10 rounded-full ${subItem.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <span className="flex-1 group-hover:text-blue-600 transition-colors">{subItem.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                      
                      {/* Right: Promotional Images */}
                      <div className="space-y-4">
                        <Link href="/the-thao/pickleball" className="block group">
                          <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <p className="text-2xl mb-2">🎾</p>
                                <p className="font-semibold">Pickleball & Tennis</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link href="/the-thao/best-seller" className="block group">
                          <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg overflow-hidden relative">
                            <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                              BEST SELLING
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <p className="text-3xl font-bold mb-1">1M+</p>
                                <p className="text-xs">More than 1 Million+ Pairs Sold</p>
                                <p className="text-sm font-semibold mt-2">#2 Amazon Best Seller</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Search, User, Cart */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="flex-1 outline-none text-sm"
              />
            </div>
            
            {/* User icon */}
            <Link href="/dang-nhap" className="hover:text-gray-600">
              <User className="w-6 h-6" />
            </Link>
            
            {/* Cart */}
            <Link href="/cart" className="relative hover:text-gray-600">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t">
            {mainMenuItems.map((item) => (
              <div key={item.href} className="border-b">
                <Link
                  href={item.href}
                  className="block py-3 font-medium hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
