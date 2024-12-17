# Home Web Project V1

这是一个基于 [Next.js](https://nextjs.org) 构建的个人网站项目。

## 项目结构

```
home-web-v1/
├── app/                    # Next.js 应用主目录
│   ├── docs/              # 文档页面
│   ├── gallery/           # 图库页面
│   ├── fonts/            # 自定义字体文件
│   ├── layout.tsx        # 全局布局组件
│   └── page.tsx          # 首页组件
├── lib/                   # 工具库
└── public/               # 静态资源目录
```

## 主要功能

- 📝 文档展示
- 🖼️ 图片画廊
- 🎨 使用 Tailwind CSS 构建的现代化 UI
- 🔤 集成 Geist 字体优化

## 开发指南

1. 安装依赖：

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

2. 启动开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果

## 技术栈

- [Next.js](https://nextjs.org) - React 框架
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [TypeScript](https://www.typescriptlang.org) - 类型安全的 JavaScript
- [Geist Font](https://vercel.com/font) - Vercel 设计的现代字体

## 部署

本项目可以轻松部署到 [Vercel 平台](https://vercel.com)。

```bash
vercel
```

## 开发环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 或 pnpm

## 许可证

[MIT](LICENSE)
