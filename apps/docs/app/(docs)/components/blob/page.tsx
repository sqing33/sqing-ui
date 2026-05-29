'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function BlobPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Blob</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        一个 SVG 圆形 + 持续变形的 path 路径,呈现液态斑点的流动感,常作为 Hero 背景装饰。
      </p>

      <Preview name="blob" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="blob/index.tsx" componentName="blob" />
        <InstallTabs component="blob" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        使用 SVG <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;animate&gt;</code> 标签在多组 path 之间循环切换,每组 path 都是用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">d="M ... C ... C ... C ..."</code> cubic Bezier 曲线定义的"软轮廓",组合起来像液滴在变化形态。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">speed</code> 控制动画 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">dur</code>,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">size</code> 控制 SVG 的 width/height,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">color</code> 决定 fill 颜色。
      </p>
      <p className="mt-4 text-muted-foreground">
        零 JS、纯 SVG 动画,因此 SSR 友好、GPU 加速、CPU 占用极低。适合作为 landing page 的视觉锚点、或在卡片、按钮背景里放置一个流动的"彩色胶状物"。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'blob',
          description: '液态斑点 (Blob),SVG 路径持续变形的流体效果。',
          props: [
            { name: 'size', type: 'number', defaultValue: 200, description: '斑点尺寸 (像素)' },
            { name: 'color', type: 'string', defaultValue: '#a855f7', description: '斑点颜色' },
            { name: 'speed', type: 'number', defaultValue: 6, description: '变形动画时长 (秒)' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { Blob } from '@sqing/registry/components/blob'

export default function Page() {
  return (
    <div className="relative grid h-screen place-items-center">
      <Blob size={320} color="#ec4899" speed={8} />
      <h1 className="relative text-5xl font-bold text-white">Welcome</h1>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        Stripe 官网的 Hero 把"流动的彩色 Blob"做成品牌视觉标志,Linear 的启动页、Framer 的 Landing 都大量使用了 Blob 作为背景装饰;这套实现参考了 Magic UI "Blob" 与 shadcn 早期手稿。
      </p>
    </>
  )
}
