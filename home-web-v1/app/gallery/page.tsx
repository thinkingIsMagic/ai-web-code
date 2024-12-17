import Image from 'next/image'
import Link from 'next/link'

const images = [
  { id: 1, src: '/placeholder.svg?height=400&width=600', alt: '精美图片 1', width: 600, height: 400 },
  { id: 2, src: '/placeholder.svg?height=400&width=600', alt: '精美图片 2', width: 600, height: 400 },
  { id: 3, src: '/placeholder.svg?height=400&width=600', alt: '精美图片 3', width: 600, height: 400 },
  { id: 4, src: '/placeholder.svg?height=400&width=600', alt: '精美图片 4', width: 600, height: 400 },
  { id: 5, src: '/placeholder.svg?height=400&width=600', alt: '精美图片 5', width: 600, height: 400 },
  { id: 6, src: '/placeholder.svg?height=400&width=600', alt: '精美图片 6', width: 600, height: 400 },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            精美图片展示
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            欣赏一些令人惊叹的图片集合
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {images.map((image) => (
            <div key={image.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    图片 {image.id}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{image.alt}</p>
                    <p className="mt-3 text-base text-gray-500">这是一张精美的图片,展示了令人惊叹的视觉效果。</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            返回主页
          </Link>
        </div>
      </div>
    </div>
  )
}

