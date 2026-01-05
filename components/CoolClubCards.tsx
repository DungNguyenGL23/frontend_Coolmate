import Link from 'next/link'

export default function CoolClubCards() {
  const cards = [
    {
      id: '1',
      title: 'Mời bạn bè hoàn tiền 10% CoolCash',
      icon: '∞',
      link: '/coolclub/moi-ban-be',
      bgColor: 'bg-blue-600',
    },
    {
      id: '2',
      title: 'Hoàn tiền đến 7%',
      icon: '👑',
      link: '/coolclub/hoan-tien',
      bgColor: 'bg-blue-600',
    },
    {
      id: '3',
      title: 'Quà tặng sinh nhật & dịp đặc biệt',
      icon: '🎁',
      link: '/coolclub/qua-tang',
      bgColor: 'bg-blue-600',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={card.link}
            className={`${card.bgColor} text-white p-6 rounded-lg hover:opacity-90 transition-opacity`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{card.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg leading-tight">{card.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Member activity feed */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">ÂN</span> vừa được nhận 1 phần quà sinh nhật đặc biệt.{' '}
              <span className="font-semibold">Nguyễn Thành Tây</span> vừa được nhận quà!{' '}
              Chào mừng <span className="font-semibold">Đông Đông</span> vừa gia nhập CoolClub!{' '}
              Chào mừng <span className="font-semibold">Vương Duy Hùng</span> vừa gia nhập CoolClub!
            </p>
          </div>
          <Link
            href="/dang-ky"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            GIA NHẬP COOLCLUB NGAY
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

