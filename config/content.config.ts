/**
 * Content Configuration
 * Quản lý nội dung động: banners, chính sách, liên hệ, etc.
 * Có thể chỉnh sửa hoặc fetch từ CMS/API
 */

export interface BannerConfig {
  id: string
  title: string
  subtitle?: string
  description?: string
  image?: string
  link?: string
  buttonText?: string
  bgColor?: string
  textColor?: string
  isActive: boolean
  order: number
}

export interface PolicyConfig {
  id: string
  title: string
  content: string
  category: 'return' | 'privacy' | 'shipping' | 'promotion' | 'other'
  isActive: boolean
  order: number
}

export interface ContactConfig {
  hotline: string
  email: string
  address: {
    hanoi: {
      office: string
      warehouse: string
    }
    hcm: {
      office: string
      rnd: string
    }
  }
  workingHours: string
  socialMedia: {
    facebook?: string
    zalo?: string
    tiktok?: string
    instagram?: string
    youtube?: string
  }
}

export interface ContentConfig {
  banners: BannerConfig[]
  policies: PolicyConfig[]
  contact: ContactConfig
  footer: {
    sections: Array<{
      title: string
      links: Array<{
        label: string
        href: string
      }>
    }>
  }
}

// Mock data - trong thực tế sẽ fetch từ API/CMS
export const getContentConfig = async (): Promise<ContentConfig> => {
  // Trong thực tế: const res = await fetch('https://api.coolmate.me/content')
  // return res.json()

  return {
    banners: [
      {
        id: '1',
        title: 'Cùng CoolGPT nhìn lại năm 2025 của bạn !',
        subtitle: 'Khám phá ngay',
        link: '/coolgpt',
        bgColor: 'from-blue-500 to-purple-600',
        isActive: true,
        order: 1,
      },
      {
        id: '2',
        title: 'Nhập COOL26NEWFR giảm 50K cho đơn đầu tiên từ 99K',
        subtitle: 'Mua ngay',
        link: '/promo',
        bgColor: 'from-red-500 to-pink-600',
        isActive: true,
        order: 2,
      },
      {
        id: '3',
        title: 'TIẾT KIỆM TỪ 20%++',
        description: 'Voucher giảm thêm 100k cho đơn từ 999K\nVoucher giảm thêm 200k cho đơn từ 1800K',
        buttonText: 'MUA NGAY',
        link: '/sale',
        bgColor: 'from-orange-500 via-orange-400 to-orange-300',
        isActive: true,
        order: 3,
      },
    ],
    policies: [
      {
        id: '1',
        title: 'Chính sách đổi trả tại cửa hàng',
        content: 'Khách hàng có thể đổi trả sản phẩm tại các cửa hàng Coolmate trong vòng 30 ngày kể từ ngày mua.',
        category: 'return',
        isActive: true,
        order: 1,
      },
      {
        id: '2',
        title: 'Chính sách đổi trả 60 ngày online',
        content: 'Khách hàng có thể đổi trả sản phẩm online trong vòng 60 ngày kể từ ngày nhận hàng.',
        category: 'return',
        isActive: true,
        order: 2,
      },
      {
        id: '3',
        title: 'Chính sách khuyến mãi',
        content: 'Các chương trình khuyến mãi có thể thay đổi tùy theo thời gian. Vui lòng xem chi tiết tại trang khuyến mãi.',
        category: 'promotion',
        isActive: true,
        order: 3,
      },
      {
        id: '4',
        title: 'Chính sách bảo mật',
        content: 'Coolmate cam kết bảo mật thông tin khách hàng theo tiêu chuẩn quốc tế.',
        category: 'privacy',
        isActive: true,
        order: 4,
      },
      {
        id: '5',
        title: 'Chính sách giao hàng',
        content: 'Miễn phí vận chuyển cho đơn hàng từ 199.000đ. Dưới 199.000đ phí ship là 30.000đ.',
        category: 'shipping',
        isActive: true,
        order: 5,
      },
    ],
    contact: {
      hotline: '1900.272737 - 028.7777.2737',
      email: 'Cool@coolmate.me',
      workingHours: '8:30 - 22:00',
      address: {
        hanoi: {
          office: 'Tầng 3-4, Tòa nhà BMM, Km2, Đường Phùng Hưng, Phường Hà Đông, Thành phố Hà Nội, Việt Nam',
          warehouse: 'Lô C8, KCN Lại Yên, Xã Lại Yên, Huyện Hoài Đức, Thành phố Hà Nội',
        },
        hcm: {
          office: 'Lô C3, đường D2, KCN Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh',
          rnd: 'T6-01, The Manhattan Vinhomes Grand Park, Long Bình, TP. Thủ Đức',
        },
      },
      socialMedia: {
        facebook: 'https://facebook.com/coolmate',
        zalo: 'https://zalo.me/coolmate',
        tiktok: 'https://tiktok.com/@coolmate',
        instagram: 'https://instagram.com/coolmate',
        youtube: 'https://youtube.com/coolmate',
      },
    },
    footer: {
      sections: [
        {
          title: 'CoolClub',
          links: [
            { label: 'Tài khoản CoolClub', href: '/coolclub/tai-khoan' },
            { label: 'Đăng kí thành viên', href: '/coolclub/dang-ky' },
            { label: 'Ưu đãi & Đặc quyền', href: '/coolclub/uu-dai' },
          ],
        },
        {
          title: 'Chính sách',
          links: [
            { label: 'Chính sách đổi trả tại cửa hàng', href: '/chinh-sach/doi-tra-cua-hang' },
            { label: 'Chính sách đổi trả 60 ngày online', href: '/chinh-sach/doi-tra-online' },
            { label: 'Chính sách khuyến mãi', href: '/chinh-sach/khuyen-mai' },
            { label: 'Chính sách bảo mật', href: '/chinh-sach/bao-mat' },
            { label: 'Chính sách giao hàng', href: '/chinh-sach/giao-hang' },
          ],
        },
        {
          title: 'Chăm sóc khách hàng',
          links: [
            { label: 'Trải nghiệm mua sắm 100% hài lòng', href: '/trai-nghiem' },
            { label: 'Hỏi đáp - FAQs', href: '/faqs' },
          ],
        },
        {
          title: 'Về COOLMATE',
          links: [
            { label: 'Quy tắc ứng xử của Coolmate', href: '/quy-tac-ung-xu' },
            { label: 'Coolmate 101', href: '/coolmate-101' },
            { label: 'DVKH xuất sắc', href: '/dvkh' },
            { label: 'Câu chuyện về Coolmate', href: '/cau-chuyen' },
            { label: 'Nhà máy', href: '/nha-may' },
            { label: 'Care & Share', href: '/care-share' },
            { label: 'Cam kết bền vững', href: '/cam-ket-ben-vung' },
            { label: 'Tầm nhìn 2030', href: '/tam-nhin-2030' },
          ],
        },
        {
          title: 'Tài liệu - Tuyển dụng',
          links: [
            { label: 'Tuyển dụng', href: '/tuyen-dung' },
            { label: 'Đăng ký bản quyền', href: '/dang-ky-ban-quyen' },
          ],
        },
        {
          title: 'Kiến thức mặc đẹp',
          links: [
            { label: 'Hướng dẫn chọn size', href: '/huong-dan-chon-size' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          title: 'Coolmate.me',
          links: [
            { label: 'Lịch sử thay đổi website', href: '/lich-su-thay-doi' },
          ],
        },
      ],
    },
  }
}

