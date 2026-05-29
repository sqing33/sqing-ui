'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function GlassCardPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Glass Card</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        玻璃态 (Glassmorphism) 风格的容器,半透明背景 + backdrop 模糊 + 渐变描边,适合叠加在彩色渐变 / 图片背景之上。
      </p>

      <Preview name="glass-card" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="glass-card/index.tsx" componentName="glass-card" />
        <InstallTabs component="glass-card" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        核心是 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">backdrop-filter: blur()</code> + 半透明白色 (或黑色) 背景,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">blur</code> 控制模糊强度、<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">opacity</code> 控制背景不透明度。开启 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">border</code> 时会用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mask-composite</code> 技术裁出 1px 渐变边框,边角会自然发光。
      </p>
      <p className="mt-4 text-muted-foreground">
        注意浏览器兼容性:Firefox 默认禁用 backdrop-filter,需要在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">about:config</code> 开启 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">layout.css.backdrop-filter.enabled</code>,Safari / Chrome 全版本支持。适合作为浮动面板、Modal、Dock 容器使用。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'glass-card',
          description: '玻璃态卡片,backdrop-filter 模糊背景 + 渐变边框。',
          props: [
            { name: 'blur', type: 'number', defaultValue: 12, description: '模糊强度 (像素)' },
            { name: 'opacity', type: 'number', defaultValue: 0.2, description: '背景不透明度 (0-1)' },
            { name: 'border', type: 'boolean', defaultValue: true, description: '是否显示渐变边框' },
            { name: 'children', type: 'ReactNode', required: true, description: '卡片内容' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { GlassCard } from '@sqing/registry/components/glass-card'

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-12">
      <GlassCard blur={16} opacity={0.25} border>
        <h2 className="text-2xl font-bold text-white">Hi, Sqing UI</h2>
        <p className="mt-2 text-white/80">玻璃态容器,自带模糊与渐变边框。</p>
      </GlassCard>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        Apple iOS 7 / macOS Sonoma 控制中心、Windows 11 Mica 材质、WWDC 23 之后的"虚拟玻璃"设计语言,都是 Glassmorphism 的代表;Apple Music 的 Now Playing 浮层就是典型应用场景。
      </p>
    </>
  )
}
