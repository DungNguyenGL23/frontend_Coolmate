/**
 * Shared Types
 */

export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  badge?: 'new' | 'bestseller' | 'outlet' | 'sale'
  category: string
  categorySlug: string
  description?: string
  inStock: boolean
  stock?: number
  sizes?: string[]
  colors?: string[]
  rating?: number
  reviewCount?: number
  link: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image?: string
  description?: string
  parentId?: string
  order: number
  link: string
}

export interface CartItem {
  id: string
  productId: string
  productName: string
  price: number
  quantity: number
  size?: string
  color?: string
  image: string
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  address?: Address[]
  isMember: boolean
}

export interface Address {
  id: string
  name: string
  phone: string
  address: string
  city: string
  district: string
  ward?: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  shipping: number
  discount: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
  views?: number
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}

