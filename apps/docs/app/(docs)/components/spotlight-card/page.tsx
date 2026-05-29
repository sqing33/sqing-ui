'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function SpotlightCardPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Spotlight Card</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        鼠标在卡片内移动时,会生成一个径向渐变光斑跟随光标,离开时光斑淡出,支持边框发光与键盘聚焦。
      </p>

      <Preview name="spotlight-card" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="spotlight-card/index.tsx" componentName="spotlight-card" />
        <InstallTabs component="spotlight-card" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        基于 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useMotionValue</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useSpring</code>,把鼠标坐标传给一个 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">radial-gradient</code> 的 background,在卡片 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mousemove</code> 时实时计算偏移;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mouseleave</code> 时把 opacity spring 淡出到 0,光斑自然消失。
      </p>
      <p className="mt-4 text-muted-foreground">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">enableBorder</code> 启用后会用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mask-composite: exclude</code> 裁出 1px 渐变边框,鼠标 hover 时边框会跟着指针发光;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">spotlightColor</code> 推荐用半透明色 (如 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">rgba(120, 119, 198, 0.3)</code>),可以叠加在彩色背景上不遮挡。传入 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">onClick</code> 会自动加上按钮语义 + tabIndex 0 + 键盘 focus 触发,适合做可点击特性卡片。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'spotlight-card',
          description: '聚光灯卡片,鼠标在卡片内移动时生成渐变光斑跟随光标,离开时光斑淡出。',
          props: [
            { name: 'children', type: 'ReactNode', required: true, description: '卡片内容' },
            { name: 'spotlightColor', type: 'string', defaultValue: 'rgba(120, 119, 198, 0.3)', description: '聚光灯颜色 (支持任意 CSS 颜色 / rgba)' },
            { name: 'spotlightSize', type: 'number', defaultValue: 400, description: '聚光灯半径 (像素)' },
            { name: 'enableBorder', type: 'boolean', defaultValue: true, description: '是否启用边框发光 (使用 mask 技术裁剪出 1px 边框)' },
            { name: 'className', type: 'string', description: '自定义 className' },
            { name: 'onClick', type: '(event: React.MouseEvent<HTMLDivElement>) => void', description: '点击事件 (传入后自动获得按钮语义和键盘焦点)' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { SpotlightCard } from '@sqing/registry/components/spotlight-card'

export default function Page() {
  return (
    <SpotlightCard
      spotlightColor="rgba(99, 102, 241, 0.25)"
      spotlightSize={500}
      enableBorder
      onClick={() => console.log('clicked')}
    >
      <div className="p-8">
        <h3 className="text-2xl font-semibold">Hover or focus me</h3>
        <p className="mt-2 text-slate-500">聚光灯卡片,带边框发光。</p>
      </div>
    </SpotlightCard>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        Aceternity UI "Spotlight"、GitHub Primer 的 "Hover Card"、Magic UI "Card Spotlight" 是这套组件的源头;Vercel Dashboard 列表项、Linear 团队切换器都用过类似的"鼠标光照"效果。
      </p>
    </>
  )
}
