import Link from 'next/link'

export const metadata = {
  title: '主题定制',
  description: '让 Sqing UI 组件匹配你的品牌色',
}

export default function ThemingPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">主题定制</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Sqing UI 不锁死品牌色,所有颜色都通过 Tailwind + CSS 变量控制,可以一行改全局。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">推荐方案:CSS 变量</h2>
      <p className="mb-4 text-muted-foreground">
        这是最灵活的方案,推荐使用。
      </p>
      <p className="mb-4 text-muted-foreground">
        在你的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">globals.css</code> 中定义一组 CSS 变量:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --border: 214 32% 91%;
}

.dark {
  --background: 222 47% 11%;
  --foreground: 210 40% 98%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --card: 222 47% 11%;
  --card-foreground: 210 40% 98%;
  --border: 217 33% 17%;
}`}</code>
      </pre>

      <p className="mb-4 text-muted-foreground">
        然后在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">tailwind.config.ts</code> 中引用这些变量:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
}

export default config`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">组件自定义颜色</h2>
      <p className="mb-4 text-muted-foreground">
        绝大多数组件都接受 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">className</code> prop,你可以传入 Tailwind 类覆盖默认颜色:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// 默认:紫色到粉色
<GradientMesh />

// 自定义:蓝色到青色
<GradientMesh className="[&>div]:from-blue-500 [&>div]:to-cyan-500" />

// 或者直接覆盖整个背景
<GradientMesh className="bg-gradient-to-br from-emerald-400 to-cyan-500" />`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">品牌色速查表</h2>
      <p className="mb-4 text-muted-foreground">
        不同品牌色对应的 Tailwind 类:
      </p>
      <div className="mb-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">品牌色</th>
              <th className="px-4 py-3 text-left font-semibold">Tailwind 类</th>
              <th className="px-4 py-3 text-left font-semibold">适合场景</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">紫粉</td>
              <td className="px-4 py-3 text-muted-foreground"><code>indigo-500 to pink-500</code></td>
              <td className="px-4 py-3 text-muted-foreground">创意机构 / 设计工作室</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">蓝青</td>
              <td className="px-4 py-3 text-muted-foreground"><code>blue-500 to cyan-500</code></td>
              <td className="px-4 py-3 text-muted-foreground">科技 / SaaS 产品</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">绿翠</td>
              <td className="px-4 py-3 text-muted-foreground"><code>emerald-400 to teal-500</code></td>
              <td className="px-4 py-3 text-muted-foreground">环保 / 健康 / 金融</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">暖橙</td>
              <td className="px-4 py-3 text-muted-foreground"><code>orange-400 to red-500</code></td>
              <td className="px-4 py-3 text-muted-foreground">餐饮 / 电商 / 营销</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">紫红</td>
              <td className="px-4 py-3 text-muted-foreground"><code>fuchsia-500 to rose-500</code></td>
              <td className="px-4 py-3 text-muted-foreground">社交 / 娱乐 / 时尚</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">暗黑</td>
              <td className="px-4 py-3 text-muted-foreground"><code>slate-900 to black</code></td>
              <td className="px-4 py-3 text-muted-foreground">极客 / 工具 / 开发者</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">组件级主题</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Aurora Text</h3>
      <p className="mb-4 text-muted-foreground">
        极光文字支持自定义渐变,通过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">className</code> 覆盖:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// 默认:紫蓝青绿黄红
<AuroraText>Hello</AuroraText>

// 自定义:只用蓝青
<AuroraText className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
  Hello
</AuroraText>`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Spotlight Card</h3>
      <p className="mb-4 text-muted-foreground">
        聚光灯颜色支持任意 rgba:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// 默认:淡紫
<SpotlightCard>...</SpotlightCard>

// 蓝色光斑
<SpotlightCard spotlightColor="rgba(59, 130, 246, 0.3)">...</SpotlightCard>

// 绿色光斑
<SpotlightCard spotlightColor="rgba(16, 185, 129, 0.3)">...</SpotlightCard>`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Gradient Mesh</h3>
      <p className="mb-4 text-muted-foreground">
        通过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">colors</code> prop 传入自定义球体颜色:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// 默认:3 个紫色系球
<GradientMesh />

// 自定义:红橙黄
<GradientMesh
  colors={['#ef4444', '#f97316', '#eab308']}
/>`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">暗色模式</h2>
      <p className="mb-4 text-muted-foreground">
        所有组件都对暗色模式友好,推荐用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">next-themes</code>:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  )
}`}</code>
      </pre>
      <p className="mb-4 text-muted-foreground">
        在 layout 中包一层:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">动画降级</h2>
      <p className="mb-4 text-muted-foreground">
        尊重用户的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">prefers-reduced-motion</code> 偏好:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// 在组件中检测
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (prefersReducedMotion) {
  // 提供静态 fallback
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">下一步</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>查看 <Link href="/components" className="text-blue-600 hover:underline">所有组件</Link> 实际感受不同主题效果</li>
        <li>阅读 <Link href="/contributing" className="text-blue-600 hover:underline">贡献指南</Link> 给组件添加新主题预设</li>
      </ul>
    </>
  )
}
