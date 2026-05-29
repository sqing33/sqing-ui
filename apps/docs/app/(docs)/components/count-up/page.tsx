'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function CountUpPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Count Up</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        从 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">from</code> 滚动到 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">to</code> 的数字动画组件,使用 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">animate</code> 函数做插值,常用于 Dashboard、统计页、Hero 数字展示。
      </p>

      <Preview name="count-up" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="count-up/index.tsx" componentName="count-up" />
        <InstallTabs component="count-up" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        通过 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useMotionValue</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useTransform</code> 把一个连续变化的小数值映射为格式化字符串。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">decimals</code> 控制小数位,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">prefix</code> / <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">suffix</code> 用于加 "$" / "%" 等前缀后缀,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">separator</code> 决定千分位分隔符。
      </p>
      <p className="mt-4 text-muted-foreground">
        支持进入视口自动触发的 IntersectionObserver 钩子 (可选,默认直接播放);动画时长由 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">duration</code> 控制。建议放一个 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">font-variant-numeric: tabular-nums</code> 让数字等宽,防止滚动时抖动。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'count-up',
          description: '数字滚动动画,从起始值滚动到目标值,常用于数据展示。',
          props: [
            { name: 'to', type: 'number', required: true, description: '目标值' },
            { name: 'from', type: 'number', defaultValue: 0, description: '起始值' },
            { name: 'duration', type: 'number', defaultValue: 2, description: '动画时长 (秒)' },
            { name: 'decimals', type: 'number', defaultValue: 0, description: '小数位数' },
            { name: 'prefix', type: 'string', description: '前缀, 如 "$"' },
            { name: 'suffix', type: 'string', description: '后缀, 如 "%"' },
            { name: 'separator', type: 'string', defaultValue: ',', description: '千分位分隔符' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { CountUp } from '@sqing/registry/components/count-up'

export default function Page() {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-6xl font-bold text-white">
        <CountUp to={12480} duration={2.5} separator="," />
      </span>
      <span className="text-lg text-white/60">用户</span>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        经典 dashboard 组件,Apple WWDC Keynote 数字滚动、Vercel / Stripe / Notion 的统计页都在用;底层思路来自 react-countup,但我们用 framer-motion 实现,与项目内其他动画组件一致。
      </p>
    </>
  )
}
