'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function AuroraTextPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Aurora Text</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        通过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">background-clip: text</code> + 多色线性渐变 + CSS 动画让文字呈现流光极光效果,适合 Hero 标题、强调字、品牌字。
      </p>

      <Preview name="aurora-text" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="aurora-text/index.tsx" componentName="aurora-text" />
        <InstallTabs component="aurora-text" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        把文字的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">background-image</code> 设为一个多色线性渐变 (默认粉 → 紫 → 蓝 → 绿),<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">background-size</code> 拉宽到 200%-400% 之间,然后用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">@keyframes</code> 让 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">background-position</code> 从 0% 滑到 200%。为避免循环时出现断层,组件会把首尾颜色复制一份再 join 一次。
      </p>
      <p className="mt-4 text-muted-foreground">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">enableOnHover</code> 默认持续播放,设为 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">true</code> 后只在 hover 时启动动画,适合"静态低调、hover 高调"的页面;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">colors</code> 至少 2 个,推荐 3-5 个高饱和度互补色,会有更强的"极光流动"感。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'aurora-text',
          description: '极光文字组件,多色线性渐变 + 流光动画,让文字呈现极光般的流光渐变效果。',
          props: [
            { name: 'text', type: 'string', required: true, description: '要显示的文字' },
            { name: 'colors', type: 'string[]', description: '极光渐变色数组 (至少 2 个颜色), 默认 ["#ff006e", "#8338ec", "#3a86ff", "#06ffa5"]' },
            { name: 'speed', type: 'number', defaultValue: 8, description: '动画时长 (秒),数值越大动画越慢' },
            { name: 'enableOnHover', type: 'boolean', defaultValue: false, description: '是否仅在 hover 时触发极光动画' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { AuroraText } from '@sqing/registry/components/aurora-text'

export default function Page() {
  return (
    <h1 className="text-7xl font-black">
      <AuroraText
        text="Build the future"
        colors={['#ff006e', '#8338ec', '#3a86ff', '#06ffa5']}
        speed={6}
      />
    </h1>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        2026 设计趋势 "Aurora Gradient / Liquid Chrome" 的代表;Apple 官网 Vision Pro 标题、Magic UI "Aurora Text"、Linear / Vercel 2024-2025 的 Hero 都把多色渐变流动作为主视觉。色板源自 Carmen Czaderski "Aurora" 配色与色彩理论中的"分裂互补色"。
      </p>
    </>
  )
}
