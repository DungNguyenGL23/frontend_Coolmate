import Link from 'next/link'
import ProductCard from './product/ProductCard'
import { Product } from '@/types'

interface ProductSectionProps {
  title: string
  products: Product[]
  viewMoreLink?: string
}

export default function ProductSection({ title, products, viewMoreLink }: ProductSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          {viewMoreLink && (
            <Link
              href={viewMoreLink}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              Xem thêm
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

