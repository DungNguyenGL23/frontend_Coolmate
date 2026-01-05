import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/hooks/useTheme'

export const metadata: Metadata = {
  title: {
    default: 'COOLMATE - Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam',
    template: '%s | COOLMATE',
  },
  description: 'COOLMATE - Thương hiệu thời trang nam nữ chất lượng cao từ Việt Nam. Áo thun, quần áo thể thao, đồ lót và phụ kiện thời trang.',
  keywords: ['coolmate', 'thời trang nam', 'thời trang nữ', 'quần áo thể thao', 'áo thun', 'quần áo nam', 'quần áo nữ'],
  authors: [{ name: 'COOLMATE' }],
  creator: 'COOLMATE',
  publisher: 'COOLMATE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.coolmate.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.coolmate.me',
    siteName: 'COOLMATE',
    title: 'COOLMATE - Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam',
    description: 'Thương hiệu thời trang nam nữ chất lượng cao từ Việt Nam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'COOLMATE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COOLMATE - Thương Hiệu Thời Trang Chất Lượng Từ Việt Nam',
    description: 'Thương hiệu thời trang nam nữ chất lượng cao từ Việt Nam',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
