'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function TiltCardPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Tilt Card</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        把任意内容包装成 3D 倾斜卡片,鼠标移动时卡片会跟随指针倾斜,呈现自然透视效果。
      </p>

      <Preview name="tilt-card" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="tilt-card/index.tsx" componentName="tilt-card" />
        <InstallTabs component="tilt-card" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        基于 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useMotionValue</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useSpring</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useTransform</code> 实现 rotateX/rotateY 的反向映射,卡片会朝指针方向倾斜。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">max</code> 控制最大倾斜角度,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">perspective</code> 控制透视深度 (值越小透视越夸张),<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">scale</code> 控制悬停时是否轻微放大。
      </p>
      <p className="mt-4 text-muted-foreground">
        开启 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glare</code> 后会在卡片上叠加一个光斑层,根据指针位置渐显,模拟玻璃反射质感。适合产品展示、特性卡片、Portfolio 作品墙。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'tilt-card',
          description: '3D 倾斜卡片,鼠标悬停时呈现透视倾斜效果,可选光斑反射。',
          props: [
            { name: 'max', type: 'number', defaultValue: 15, description: '最大倾斜角度 (度)' },
            { name: 'perspective', type: 'number', defaultValue: 1000, description: '透视距离 (像素)' },
            { name: 'scale', type: 'number', defaultValue: 1.02, description: '悬停时的缩放比例' },
            { name: 'glare', type: 'boolean', defaultValue: false, description: '是否显示光斑反射效果' },
            { name: 'glareMaxOpacity', type: 'number', defaultValue: 0.3, description: '光斑最大不透明度 (0-1)' },
            { name: 'children', type: 'ReactNode', required: true, description: '卡片内容' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { TiltCard } from '@sqing/registry/components/tilt-card'

export default function Page() {
  return (
    <TiltCard max={20} perspective={900} scale={1.05} glare>
      <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white">
        <h3 className="text-2xl font-bold">Premium Plan</h3>
        <p className="mt-2 opacity-80">解锁全部高级特性</p>
      </div>
    </TiltCard>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        Aceternity UI 的 "3D Card" 与 Vercel / Stripe 的产品矩阵卡片是这套组件的原型;光斑效果参考了 Atropos.js 早期 demo 与 Apple 产品页 hover 状态。
      </p>
    </>
  )
}
