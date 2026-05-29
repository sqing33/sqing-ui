'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function MagneticButtonPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Magnetic Button</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        把任意内容包装成磁性按钮,鼠标在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">range</code> 范围内时按钮会朝指针方向偏移,离开后平滑回弹。
      </p>

      <Preview name="magnetic-button" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="magnetic-button/index.tsx" componentName="magnetic-button" />
        <InstallTabs component="magnetic-button" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        基于 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useMotionValue</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useSpring</code> 实现,在父元素上监听 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mousemove</code>,把按钮位置平滑插值到指向指针的位移。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">strength</code> 越大越容易被吸过去,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">ease</code> 越小惯性越强。适合 CTA、Hero 主按钮这种希望用户视线聚焦的入口。
      </p>
      <p className="mt-4 text-muted-foreground">
        需要 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">framer-motion</code> 作为 peer dep,组件内部已用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">motion.div</code> 包裹,可以直接塞任意 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">children</code>。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'magnetic-button',
          description: '磁性按钮,鼠标靠近时按钮被吸引,回弹有弹性。',
          props: [
            { name: 'strength', type: 'number', defaultValue: 0.3, description: '磁性强度 (0-1),越大越容易被吸引' },
            { name: 'range', type: 'number', defaultValue: 100, description: '影响范围 (像素)' },
            { name: 'ease', type: 'number', defaultValue: 0.15, description: '回弹速度 (0-1),越小越有惯性' },
            { name: 'children', type: 'ReactNode', required: true, description: '按钮内容' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { MagneticButton } from '@sqing/registry/components/magnetic-button'

export default function Page() {
  return (
    <MagneticButton strength={0.4} range={120} ease={0.12}>
      <button className="rounded-full bg-blue-600 px-6 py-3 text-white">
        立即开始
      </button>
    </MagneticButton>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        Aceternity UI 的 "Magnetic Button" 与 Magic UI 的 "Mouse Tilt" 启发了这套交互;很多高级 SaaS hero (Vercel / Linear / Framer 官网) 的主按钮都用过类似效果来增加微交互质感。
      </p>
    </>
  )
}
