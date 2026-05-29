'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function AnimatedTabsPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Animated Tabs</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        基于 framer-motion <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">layoutId</code> 实现的弹性滑动指示器 Tabs,选中标签时高亮条像弹簧一样"粘"到新位置,顺滑自然。
      </p>

      <Preview name="animated-tabs" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="animated-tabs/index.tsx" componentName="animated-tabs" />
        <InstallTabs component="animated-tabs" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        用 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">motion.div layoutId="animated-tabs-indicator"</code> 共享一个 layout id,React 会在两个 DOM 之间做"layout 动画",视觉上就是高亮条从旧 tab 滑动到新 tab,带弹簧手感。
      </p>
      <p className="mt-4 text-muted-foreground">
        支持受控 (<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">value</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">onValueChange</code>) 和非受控 (<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">defaultValue</code>) 两种用法,带完整的 a11y: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">role=tablist</code> / <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">tab</code> / <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">tabpanel</code>、键盘方向键切换、Home/End 跳首尾、disabled 跳过、tabindex 焦点管理。适合文档站、Settings 页、产品对比 tab、复杂多视图切换。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'animated-tabs',
          description: '粘性指示器 tabs,基于 framer-motion layoutId 实现的弹性滑动指示器,选中标签时高亮条像弹簧一样"粘"到新位置,顺滑自然。',
          props: [
            { name: 'tabs', type: 'AnimatedTabItem[]', required: true, description: '标签数据,每项包含 id、label、content,可选 disabled' },
            { name: 'value', type: 'string', description: '受控:当前激活的 tab id' },
            { name: 'defaultValue', type: 'string', description: '非受控:默认激活的 tab id' },
            { name: 'onValueChange', type: '(id: string) => void', description: '激活项变化时的回调' },
            { name: 'indicatorColor', type: 'string', defaultValue: 'bg-[var(--primary)]', description: '指示器颜色 (Tailwind class),默认使用主题主色 CSS 变量' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: 'horizontal', description: '排列方向' },
            { name: 'className', type: 'string', description: '外层容器自定义 className' },
            { name: 'listClassName', type: 'string', description: 'tab 列表自定义 className' },
            { name: 'contentClassName', type: 'string', description: '内容容器自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { AnimatedTabs } from '@sqing/registry/components/animated-tabs'

export default function Page() {
  return (
    <AnimatedTabs
      defaultValue="overview"
      tabs={[
        { id: 'overview', label: '概览', content: <div>概览内容...</div> },
        { id: 'features', label: '特性', content: <div>特性内容...</div> },
        { id: 'pricing', label: '价格', content: <div>价格内容...</div> },
      ]}
    />
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        2026 UI 趋势"弹性微交互"的代表实现,layoutId 共享布局动画是 framer-motion 最优雅的 API 之一;Vercel Dashboard 顶部 Tabs、Linear 的 Issue 过滤器、Tailwind UI 的 "Tabs" 都是这套视觉原型。
      </p>
    </>
  )
}
