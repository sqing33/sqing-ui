'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function GradientMeshPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Gradient Mesh</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        把若干个模糊大球体放在容器里,每个球体一个颜色 + 一个不规则流动动画,叠加后形成 Figma / Stripe 风格的"渐变网格"背景。
      </p>

      <Preview name="gradient-mesh" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="gradient-mesh/index.tsx" componentName="gradient-mesh" />
        <InstallTabs component="gradient-mesh" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        每个小球都是一个 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">div</code> (绝对定位) 加 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">filter: blur()</code>,然后通过 framer-motion 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">animate</code> 让 x/y/scale 在若干关键帧之间循环。每个小球随机延迟 + 随机时长,整体看起来就是"几个彩色光斑在缓慢流动"。
      </p>
      <p className="mt-4 text-muted-foreground">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">colors</code> 控制球体颜色数组,推荐 3-4 个高饱和度互补色;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">blur</code> 越大越柔,适合做 Hero / 卡片背景;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">speed</code> 控制动画时长。SSR 友好,只渲染若干个空 div 不依赖 JS。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'gradient-mesh',
          description: '渐变网格背景,多个模糊的渐变球体流动融合。',
          props: [
            { name: 'colors', type: 'string[]', defaultValue: "['#ff006e', '#8338ec', '#3a86ff']", description: '渐变颜色数组' },
            { name: 'speed', type: 'number', defaultValue: 20, description: '动画时长 (秒)' },
            { name: 'blur', type: 'number', defaultValue: 80, description: '模糊半径' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { GradientMesh } from '@sqing/registry/components/gradient-mesh'

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950">
      <GradientMesh
        colors={['#ff006e', '#8338ec', '#3a86ff', '#06ffa5']}
        speed={24}
        blur={90}
      />
      <h1 className="relative grid h-full place-items-center text-6xl font-black text-white">
        Hello, Sqing UI
      </h1>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        Figma 官网的 Hero、Magic UI 的 "Gradient Mesh"、Aceternity UI 的 "Background Gradient Animation" 是这套组件的视觉原型;Apple 官网新品发布页、Linear 的启动页也有大量同款配色。
      </p>
    </>
  )
}
