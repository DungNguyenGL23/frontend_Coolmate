import Link from 'next/link'

interface CollectionBannerProps {
  title: string
  image: string
  link: string
  buttonText?: string
}

export default function CollectionBanner({ title, image, link, buttonText = 'MUA NGAY' }: CollectionBannerProps) {
  return (
    <Link href={link} className="group relative block w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
        <span className="text-gray-500 text-sm">{title}</span>
      </div>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
        <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          {buttonText}
        </button>
      </div>
    </Link>
  )
}

