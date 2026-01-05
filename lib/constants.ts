/**
 * Application Constants
 */

export const APP_CONFIG = {
  name: 'COOLMATE',
  description: 'Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.coolmate.me',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.coolmate.me',
} as const

export const ROUTES = {
  home: '/',
  new: '/new',
  sale: '/sale',
  banChay: '/ban-chay',
  nam: '/nam',
  nu: '/nu',
  theThao: '/the-thao',
  cs: '/cs',
  blog: '/blog',
  cskh: '/cskh',
  coolclub: '/coolclub',
  veCoolmate: '/ve-coolmate',
  tuyenDung: '/tuyen-dung',
  dangNhap: '/dang-nhap',
  cart: '/cart',
  checkout: '/checkout',
} as const

export const PRODUCT_BADGES = {
  new: 'new',
  bestseller: 'bestseller',
  outlet: 'outlet',
  sale: 'sale',
} as const

export const SHIPPING_CONFIG = {
  freeShippingThreshold: 199000,
  shippingFee: 30000,
} as const

export const PAGINATION = {
  defaultPageSize: 20,
  maxPageSize: 100,
} as const

