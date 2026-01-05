import Link from 'next/link'
import { contentService } from '@/services/content.service'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default async function Footer() {
  const footerSections = await contentService.getFooterSections()
  const contactInfo = await contentService.getContactInfo()

  const socialIcons = {
    facebook: FaFacebook,
    zalo: MessageCircle, // Icon chat tròn cho Zalo
    tiktok: FaTiktok,
    instagram: FaInstagram,
    youtube: FaYoutube,
  }

  return (
    <footer className="bg-black text-white mt-20">
      {/* Top Footer Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Feedback Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">COOLMATE lắng nghe bạn!</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
              </p>
              <Link
                href="/dong-gop-y-kien"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                ĐÓNG GÓP Ý KIẾN
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Center: Contact Info */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-4">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Hotline</p>
                  <p className="text-gray-400 text-sm">{contactInfo.hotline}</p>
                  <p className="text-gray-400 text-xs">({contactInfo.workingHours})</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-gray-400 text-sm">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Right: Social Media */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <p className="mb-4 font-semibold">Theo dõi chúng tôi trên:</p>
              <div className="flex gap-3">
                {Object.entries(contactInfo.socialMedia).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons]
                  if (!Icon || !url) return null

                  const isZalo = platform === 'zalo'

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                      aria-label={platform}
                    >
                      {isZalo ? (
                        <img
                          src="/Icon_of_Zalo.svg.webp"
                          alt="Zalo"
                          className="w-8 h-8 rounded-[15px] object-contain"
                        />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Address Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h4 className="font-bold mb-4">Địa chỉ liên hệ</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white mb-2">Văn phòng Hà Nội:</p>
              <p className="text-xs">{contactInfo.address.hanoi.office}</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Trung tâm vận hành Hà Nội:</p>
              <p className="text-xs">{contactInfo.address.hanoi.warehouse}</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Văn phòng và Trung tâm vận hành TP.HCM:</p>
              <p className="text-xs">{contactInfo.address.hcm.office}</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Trung tâm R&D:</p>
              <p className="text-xs">{contactInfo.address.hcm.rnd}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Certifications */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
            <p>
              @ CÔNG TY TNHH FASTECH ASIA<br />
              Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-2 py-1 bg-gray-800 rounded text-xs">NCSC CƠ BẢN TÍN NHIỆM MẠNG</div>
              <div className="px-2 py-1 bg-gray-800 rounded text-xs">PROTECTED BY DMCA</div>
              <div className="px-2 py-1 bg-gray-800 rounded text-xs">ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
