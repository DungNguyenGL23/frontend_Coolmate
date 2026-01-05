import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// SEO Metadata cho trang Blog
export const metadata: Metadata = {
  title: 'Blog - Kiến Thức Mặc Đẹp | COOLMATE',
  description: 'Blog Coolmate - Chia sẻ kiến thức mặc đẹp, hướng dẫn chọn size, xu hướng thời trang và tin tức mới nhất từ COOLMATE.',
  keywords: ['blog coolmate', 'kiến thức mặc đẹp', 'hướng dẫn chọn size', 'xu hướng thời trang', 'thời trang nam', 'thời trang nữ'],
  openGraph: {
    title: 'Blog - Kiến Thức Mặc Đẹp | COOLMATE',
    description: 'Chia sẻ kiến thức mặc đẹp và xu hướng thời trang',
    url: 'https://www.coolmate.me/blog',
  },
  alternates: {
    canonical: '/blog',
  },
}

// Server Component - Fetch data từ API
async function getBlogPosts() {
  // Trong thực tế: const res = await fetch('https://api.coolmate.me/blog')
  // return res.json()
  
  return [
    {
      id: '1',
      title: 'Hướng dẫn chọn size áo thun nam chuẩn nhất',
      excerpt: 'Bạn đang phân vân không biết chọn size áo thun như thế nào? Bài viết này sẽ giúp bạn chọn được size phù hợp nhất.',
      image: '',
      date: '15/01/2025',
      slug: 'huong-dan-chon-size-ao-thun',
      link: '/blog/huong-dan-chon-size-ao-thun',
    },
    {
      id: '2',
      title: 'Top 5 mẫu áo polo nam được yêu thích nhất 2025',
      excerpt: 'Khám phá những mẫu áo polo nam đang được săn đón nhiều nhất trong năm 2025.',
      image: '',
      date: '12/01/2025',
      slug: 'top-5-ao-polo-nam',
      link: '/blog/top-5-ao-polo-nam',
    },
    {
      id: '3',
      title: 'Cách phối đồ thể thao nữ đẹp và năng động',
      excerpt: 'Bí quyết phối đồ thể thao nữ để bạn luôn tự tin và năng động trong mọi hoạt động.',
      image: '',
      date: '10/01/2025',
      slug: 'cach-phoi-do-the-thao-nu',
      link: '/blog/cach-phoi-do-the-thao-nu',
    },
    {
      id: '4',
      title: 'Xu hướng thời trang nam 2025',
      excerpt: 'Cập nhật những xu hướng thời trang nam hot nhất trong năm 2025.',
      image: '',
      date: '08/01/2025',
      slug: 'xu-huong-thoi-trang-nam-2025',
      link: '/blog/xu-huong-thoi-trang-nam-2025',
    },
  ]
}

// Server Component - SSR cho SEO
export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Blog Coolmate</h1>
        <p className="text-gray-600 mb-8">Kiến thức mặc đẹp và tin tức thời trang</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id}>
              <Link
                href={post.link}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden block"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Hình ảnh</span>
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
                  <h2 className="text-xl font-semibold mb-2 hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
