import { Github, Twitter, Youtube, Linkedin, Mail, Globe, Search, Calculator, Calendar, Clock, Cloud, Image, FileText } from 'lucide-react'
import Link from 'next/link'

const links = [
  { name: 'GitHub', url: 'https://github.com', icon: Github, gradient: 'from-gray-700 to-gray-900' },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter, gradient: 'from-blue-400 to-blue-600' },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube, gradient: 'from-red-500 to-red-700' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin, gradient: 'from-blue-600 to-blue-800' },
  { name: 'Email', url: 'mailto:example@example.com', icon: Mail, gradient: 'from-green-400 to-green-600' },
  { name: '个人网站', url: 'https://example.com', icon: Globe, gradient: 'from-purple-400 to-purple-600' },
  { name: '图片展示', url: '/gallery', icon: Image, gradient: 'from-yellow-400 to-orange-500' },
  { name: '文档', url: '/docs', icon: FileText, gradient: 'from-teal-400 to-teal-600' },
]

const tools = [
  { name: '计算器', icon: Calculator },
  { name: '日历', icon: Calendar },
  { name: '时钟', icon: Clock },
]

export default function GradientNav() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">我的导航</h1>
        
        {/* 搜索栏 */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索..."
              className="w-full py-3 px-4 rounded-full bg-white/50 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        
        {/* 主要链接 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-r ${link.gradient} transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-between group overflow-hidden relative`}
            >
              <span className="text-white font-semibold z-10 transition-transform group-hover:translate-x-1">{link.name}</span>
              <link.icon className="text-white/80 z-10 transition-transform group-hover:translate-x-1 group-hover:scale-110" size={28} />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
        
        {/* 工具和天气 */}
        <div className="flex flex-wrap justify-between items-start">
          {/* 常用工具 */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">常用工具</h2>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <button
                  key={tool.name}
                  className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <tool.icon size={20} className="mr-2 text-indigo-600" />
                  <span className="text-gray-700">{tool.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* 简易天气组件 */}
          <div className="w-full md:w-1/3">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-semibold mb-2">今日天气</h2>
              <div className="flex items-center">
                <Cloud size={48} className="mr-4" />
                <div>
                  <p className="text-3xl font-bold">23°C</p>
                  <p>多云</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

