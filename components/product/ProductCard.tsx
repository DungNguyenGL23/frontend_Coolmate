import Link from 'next/link'
import Image from '@/components/ui/Image'
import Badge from '@/components/ui/Badge'
import Price from '@/components/ui/Price'
import Rating from '@/components/ui/Rating'
import { Heart, ShoppingCart } from 'lucide-react'
import { Product } from '@/types'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
  showRating?: boolean
  showQuickActions?: boolean
  priority?: boolean
}

export default function ProductCard({
  product,
  className,
  showRating = true,
  showQuickActions = true,
  priority = false,
}: ProductCardProps) {
  // Product.price is defined as number in types
  const priceNum = product.price || 0
  const originalPriceNum = product.originalPrice

  return (
    <article
      className={cn(
        'group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg',
        className
      )}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Product Image */}
      <Link href={product.link} className="block relative aspect-square overflow-hidden">
        <Image
          src={product.image || '/images/placeholder.svg'}
          alt={product.name}
          aspectRatio="square"
          objectFit="cover"
          priority={priority}
          className="group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <Badge variant={product.badge}>{product.badge}</Badge>
          </div>
        )}

        {/* Quick Actions */}
        {showQuickActions && (
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Thêm vào yêu thích"
            >
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Thêm vào giỏ hàng"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-lg font-semibold text-sm">HẾT HÀNG</span>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <Link href={product.link}>
          <h3
            className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-gray-600 transition-colors"
            itemProp="name"
          >
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {showRating && product.rating && (
          <div className="mb-2">
            <Rating
              rating={product.rating}
              showNumber={false}
              showCount={true}
              reviewCount={product.reviewCount}
              size="sm"
            />
          </div>
        )}

        {/* Price */}
        <div className="mb-2" itemScope itemType="https://schema.org/Offer">
          <Price
            price={priceNum}
            originalPrice={originalPriceNum}
            size="md"
            showOriginal={!!originalPriceNum}
          />
          <meta itemProp="price" content={priceNum.toString()} />
          <meta itemProp="priceCurrency" content="VND" />
          {product.inStock && <link itemProp="availability" href="https://schema.org/InStock" />}
          {!product.inStock && <link itemProp="availability" href="https://schema.org/OutOfStock" />}
        </div>

        {/* Product Description */}
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-2" itemProp="description">
            {product.description}
          </p>
        )}

        {/* Stock Info */}
        {product.stock !== undefined && product.stock > 0 && product.stock < 10 && (
          <p className="text-xs text-orange-600 font-medium">
            Chỉ còn {product.stock} sản phẩm
          </p>
        )}
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.image,
            brand: {
              '@type': 'Brand',
              name: 'COOLMATE',
            },
            offers: {
              '@type': 'Offer',
              price: priceNum,
              priceCurrency: 'VND',
              availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
              url: product.link,
            },
            aggregateRating: product.rating
              ? {
                  '@type': 'AggregateRating',
                  ratingValue: product.rating,
                  reviewCount: product.reviewCount || 0,
                }
              : undefined,
          }),
        }}
      />
    </article>
  )
}

