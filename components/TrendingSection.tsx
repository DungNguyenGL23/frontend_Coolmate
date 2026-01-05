import Link from 'next/link'

interface TrendingItem {
  id: string
  name: string
  description: string
  image: string
  link: string
}

interface TrendingSectionProps {
  items: TrendingItem[]
}

export default function TrendingSection({ items }: TrendingSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Xu hướng mua sắm</h2>
          <Link
            href="/xem-them"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            Xem thêm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">{item.name}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

