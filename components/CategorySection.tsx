import Link from 'next/link'

interface Category {
  id: string
  name: string
  image: string
  link: string
}

interface CategorySectionProps {
  title: string
  categories: Category[]
  gender?: 'nam' | 'nu'
}

export default function CategorySection({ title, categories, gender }: CategorySectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 relative">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <span className="text-gray-400 text-sm">{category.name}</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-sm group-hover:text-gray-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

