import Link from 'next/link'

export const metadata = {
  title: '安装',
  description: '在你的项目中使用 Sqing UI 组件',
}

export default function InstallationPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">安装</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Sqing UI 的所有组件都通过"复制源码"的方式使用,不通过 npm 安装,完全属于你。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">前置条件</h2>
      <p className="mb-4 text-muted-foreground">
        你的项目需要满足以下条件:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>React 18+</strong> 或 <strong>React 19+</strong></li>
        <li><strong>TailwindCSS 3+</strong> 已配置</li>
        <li><strong>TypeScript 5+</strong> (可选,但推荐)</li>
        <li><strong>framer-motion 11+</strong> (大多数动画组件需要)</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">快速开始</h2>
      <p className="mb-4 text-muted-foreground">
        整个使用流程只有三步:
      </p>
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-muted-foreground">
        <li>在 <Link href="/components" className="text-blue-600 hover:underline">组件列表</Link> 中找到你想要的组件</li>
        <li>点击组件页右上角的 <strong>"复制源码"</strong> 按钮</li>
        <li>把源码保存为 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">components/ui/&lt;component&gt;.tsx</code> 并按需修改</li>
      </ol>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">手动安装步骤</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">1. 初始化项目(如果没有)</h3>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`# Next.js 项目
npx create-next-app@latest my-portfolio
cd my-portfolio

# Vite 项目
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">2. 安装 TailwindCSS</h3>
      <p className="mb-4 text-muted-foreground">
        如果你的项目还没装 Tailwind,按照官方文档安装:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code>
      </pre>
      <p className="mb-4 text-muted-foreground">
        然后在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">tailwind.config.ts</code> 中启用暗色模式 + 启用 class 策略:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // shadcn 风格的颜色变量
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
}

export default config`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">3. 安装 framer-motion</h3>
      <p className="mb-4 text-muted-foreground">
        大部分创意组件基于 framer-motion 实现:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`npm install framer-motion`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">4. 复制组件源码</h3>
      <p className="mb-4 text-muted-foreground">
        在 <Link href="/components" className="text-blue-600 hover:underline">组件列表</Link> 中点击任意组件,点击右上角的 <strong>"复制源码"</strong> 按钮,把内容粘贴到你项目的:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`components/ui/aurora-text.tsx`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">5. 使用组件</h3>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { AuroraText } from '@/components/ui/aurora-text'

export default function Page() {
  return (
    <h1 className="text-6xl font-black">
      Hi, I'm <AuroraText>Chongqing</AuroraText>
    </h1>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">依赖对照表</h2>
      <div className="mb-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">组件</th>
              <th className="px-4 py-3 text-left font-semibold">所需依赖</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Aurora Text</td>
              <td className="px-4 py-3 text-muted-foreground">无外部依赖(纯 CSS 动画)</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Tilt Card</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Spotlight Card</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Animated Tabs</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Noise Grain</td>
              <td className="px-4 py-3 text-muted-foreground">无外部依赖(SVG feTurbulence)</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Meteor Shower</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Count Up</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Glass Card</td>
              <td className="px-4 py-3 text-muted-foreground">无外部依赖(纯 CSS backdrop-filter)</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Glitch Text</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Blob</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Cursor Follow</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Magnetic Button</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Gradient Mesh</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Marquee</td>
              <td className="px-4 py-3 text-muted-foreground">framer-motion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">暗色模式支持</h2>
      <p className="mb-4 text-muted-foreground">
        所有组件都对暗色模式友好,只需要在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;html&gt;</code> 标签上加 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">dark</code> 类即可:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`<html className="dark">
  <body>{children}</body>
</html>`}</code>
      </pre>
      <p className="mb-4 text-muted-foreground">
        推荐使用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">next-themes</code> 来管理主题切换:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`npm install next-themes`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">下一步</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>查看 <Link href="/cli-usage" className="text-blue-600 hover:underline">CLI 使用</Link> 学会更高效的复制方式</li>
        <li>阅读 <Link href="/theming" className="text-blue-600 hover:underline">主题定制</Link> 让组件匹配你的品牌色</li>
        <li>直接浏览 <Link href="/components" className="text-blue-600 hover:underline">所有组件</Link></li>
      </ul>
    </>
  )
}
