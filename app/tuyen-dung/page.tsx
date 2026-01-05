import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const jobOpenings = [
  {
    id: '1',
    title: 'Frontend Developer',
    department: 'Công nghệ',
    location: 'Hà Nội / TP.HCM',
    type: 'Full-time',
  },
  {
    id: '2',
    title: 'Backend Developer',
    department: 'Công nghệ',
    location: 'Hà Nội / TP.HCM',
    type: 'Full-time',
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    department: 'Thiết kế',
    location: 'Hà Nội',
    type: 'Full-time',
  },
  {
    id: '4',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'TP.HCM',
    type: 'Full-time',
  },
]

export default function TuyenDungPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Tuyển dụng</h1>
          <p className="text-center text-gray-600 mb-12">
            Tham gia cùng Coolmate để xây dựng tương lai của thời trang Việt Nam
          </p>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Tại sao chọn Coolmate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div>
                <div className="text-3xl font-bold mb-2">Môi trường</div>
                <p className="text-sm">Làm việc năng động, sáng tạo</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Phát triển</div>
                <p className="text-sm">Cơ hội thăng tiến rõ ràng</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Đãi ngộ</div>
                <p className="text-sm">Lương thưởng cạnh tranh</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Vị trí đang tuyển</h2>
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Link
                    href={`/tuyen-dung/${job.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block text-center"
                  >
                    Ứng tuyển
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Nộp hồ sơ</h3>
            <p className="text-gray-600 mb-4">
              Gửi CV và thư xin việc đến email: <strong>tuyendung@coolmate.me</strong>
            </p>
            <p className="text-sm text-gray-500">
              Hoặc liên hệ trực tiếp qua hotline: 1900.272737
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

