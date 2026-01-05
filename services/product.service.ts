/**
 * Product Service
 * Business logic cho products
 */

import { Product, ApiResponse } from '@/types'
import { apiService } from './api.service'

export class ProductService {
  /**
   * Get all products với pagination và filters
   */
  async getProducts(params?: {
    page?: number
    pageSize?: number
    category?: string
    search?: string
    sort?: 'price-asc' | 'price-desc' | 'newest' | 'popular'
  }): Promise<ApiResponse<Product[]>> {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.pageSize) queryParams.append('pageSize', params.pageSize.toString())
    if (params?.category) queryParams.append('category', params.category)
    if (params?.search) queryParams.append('search', params.search)
    if (params?.sort) queryParams.append('sort', params.sort)

    return apiService.get<Product[]>(`/products?${queryParams.toString()}`)
  }

  /**
   * Get product by ID
   */
  async getProductById(id: string): Promise<ApiResponse<Product>> {
    return apiService.get<Product>(`/products/${id}`)
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(categorySlug: string): Promise<ApiResponse<Product[]>> {
    return apiService.get<Product[]>(`/products/category/${categorySlug}`)
  }

  /**
   * Get new products
   */
  async getNewProducts(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : ''
    return apiService.get<Product[]>(`/products/new${params}`)
  }

  /**
   * Get sale products
   */
  async getSaleProducts(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : ''
    return apiService.get<Product[]>(`/products/sale${params}`)
  }

  /**
   * Get bestseller products
   */
  async getBestsellerProducts(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : ''
    return apiService.get<Product[]>(`/products/bestseller${params}`)
  }

  /**
   * Search products
   */
  async searchProducts(query: string): Promise<ApiResponse<Product[]>> {
    return apiService.get<Product[]>(`/products/search?q=${encodeURIComponent(query)}`)
  }
}

export const productService = new ProductService()

