/**
 * Content Service
 * Quản lý nội dung động: banners, policies, contact info
 */

import { getContentConfig, BannerConfig, PolicyConfig, ContactConfig } from '@/config/content.config'

export class ContentService {
  /**
   * Get all active banners
   */
  async getBanners(): Promise<BannerConfig[]> {
    const config = await getContentConfig()
    return config.banners
      .filter((banner) => banner.isActive)
      .sort((a, b) => a.order - b.order)
  }

  /**
   * Get banner by ID
   */
  async getBannerById(id: string): Promise<BannerConfig | null> {
    const config = await getContentConfig()
    return config.banners.find((banner) => banner.id === id && banner.isActive) || null
  }

  /**
   * Get all policies
   */
  async getPolicies(): Promise<PolicyConfig[]> {
    const config = await getContentConfig()
    return config.policies
      .filter((policy) => policy.isActive)
      .sort((a, b) => a.order - b.order)
  }

  /**
   * Get policies by category
   */
  async getPoliciesByCategory(category: PolicyConfig['category']): Promise<PolicyConfig[]> {
    const policies = await this.getPolicies()
    return policies.filter((policy) => policy.category === category)
  }

  /**
   * Get contact information
   */
  async getContactInfo(): Promise<ContactConfig> {
    const config = await getContentConfig()
    return config.contact
  }

  /**
   * Get footer sections
   */
  async getFooterSections() {
    const config = await getContentConfig()
    return config.footer.sections
  }
}

export const contentService = new ContentService()

