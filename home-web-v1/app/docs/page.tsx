'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Book, ChevronRight, Menu, List } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

const documents = [
  {
    id: 1,
    title: '介绍',
    content: `
# 介绍

欢迎来到我们的文档中心。这里您可以找到所有关于我们产品的详细信息。

## 什么是我们的产品？

我们的产品是一个革命性的软件解决方案，旨在简化您的日常工作流程。

## 为什么选择我们？

我们提供：

1. 直观的用户界面
2. 强大的功能集
3. 出色的客户支持

### 我们的使命

我们的使命是为用户提供最佳的软件体验。

## 下一步

准备好开始了吗？查看我们的"快速开始"指南！
    `
  },
  {
    id: 2,
    title: '快速开始',
    content: `
# 快速开始

按照以下步骤快速上手我们的产品。

## 安装

首先，您需要安装我们的软件。

\`\`\`
npm install our-awesome-product
\`\`\`

## 配置

安装后，您需要进行一些基本配置。

### 设置API密钥

在使用我们的产品之前，您需要设置API密钥。

### 选择工作目录

选择一个合适的工作目录来存储您的项目文件。

## 运行

现在，您可以运行我们的产品了！

\`\`\`
npm start our-awesome-product
\`\`\`

## 下一步

恭喜！您已经成功启动了我们的产品。接下来，查看"高级主题"以了解更多功能。
    `
  },
  {
    id: 3,
    title: '高级主题',
    content: `
# 高级主题

这里是一些高级用法的说明。

## 自定义插件

学习如何为我们的产品创建自定义插件。

### 插件结构

了解插件的基本结构。

### API参考

查看我们完整的API参考文档。

## 性能优化

学习如何优化我们产品的性能。

### 缓存策略

了解不同的缓存策略及其使用场景。

### 并行处理

学习如何利用并行处理来提高效率。

## 安全最佳实践

保护您的应用程序安全的重要提示。

### 数据加密

学习如何正确加密敏感数据。

### 访问控制

实施强大的访问控制机制。

## 故障排除

常见问题的解决方案。

### 日志分析

学习如何分析日志以诊断问题。

### 常见错误

查看常见错误及其解决方法。

## 结语

通过掌握这些高级主题，您将能够充分利用我们产品的全部潜力。
    `
  },
]

function extractHeadings(markdown) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/[^\w]+/g, '-')
    });
  }

  return headings;
}

export default function Docs() {
  const [selectedDoc, setSelectedDoc] = useState(documents[0])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [headings, setHeadings] = useState([])
  const [activeHeading, setActiveHeading] = useState('')

  useEffect(() => {
    const extractedHeadings = extractHeadings(selectedDoc.content)
    setHeadings(extractedHeadings)
  }, [selectedDoc])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -80% 0px' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="flex h-screen overflow-hidden">
        {/* 侧边栏 */}
        <div className={`bg-white w-64 flex-shrink-0 border-r border-gray-200 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">文档目录</h2>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <nav className="mt-4">
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => {
                  setSelectedDoc(doc)
                  setSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 flex items-center ${
                  selectedDoc.id === doc.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Book className="h-5 w-5 mr-2" />
                {doc.title}
              </button>
            ))}
          </nav>
        </div>

        {/* 主内容区 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 flex items-center justify-between px-4 bg-white border-b border-gray-200">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="md:hidden mr-4">
                <Menu className="h-6 w-6 text-gray-500" />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">{selectedDoc.title}</h1>
            </div>
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">
              返回主页
            </Link>
          </header>
          <main className="flex-1 overflow-y-auto p-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 id={props.children[0].toLowerCase().replace(/[^\w]+/g, '-')} {...props} className="text-3xl font-bold mt-8 mb-4" />,
                  h2: ({node, ...props}) => <h2 id={props.children[0].toLowerCase().replace(/[^\w]+/g, '-')} {...props} className="text-2xl font-semibold mt-6 mb-3" />,
                  h3: ({node, ...props}) => <h3 id={props.children[0].toLowerCase().replace(/[^\w]+/g, '-')} {...props} className="text-xl font-medium mt-4 mb-2" />,
                }}
              >
                {selectedDoc.content}
              </ReactMarkdown>
              <div className="hidden lg:block fixed top-24 right-8 w-64 bg-white p-4 rounded-lg shadow-lg overflow-auto max-h-[calc(100vh-8rem)]">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <List className="mr-2" size={20} />
                  目录
                </h3>
                <nav>
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block py-1 pl-${(heading.level - 1) * 4} text-sm ${
                        activeHeading === heading.id ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

