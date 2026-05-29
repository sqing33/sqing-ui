'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function MarqueePage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Marquee</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        把任意内容装进一个会"无限循环滚动"的容器里,经典跑马灯组件,支持水平 / 垂直两个方向和悬停暂停。
      </p>

      <Preview name="marquee" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="marquee/index.tsx" componentName="marquee" />
        <InstallTabs component="marquee" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        通过 CSS <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">@keyframes</code> 把内容 translateX/Y 到 -50% (因为容器内会把 children 复制一遍),然后 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">animation: infinite linear</code>,实现无缝循环。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">speed</code> 控制动画时长 (越大越慢),<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">pauseOnHover</code> 启用后 hover 时会暂停,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">reverse</code> 可以反向滚动。
      </p>
      <p className="mt-4 text-muted-foreground">
        支持水平与垂直两种方向,垂直时容器需要显式 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">height</code>,常用于 Logo 墙、合作伙伴展示、公告栏、股票 ticker 等场景。无 JS、纯 CSS,性能极佳。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'marquee',
          description: '无限滚动条,内容循环滚动,支持水平和垂直方向。',
          props: [
            { name: 'direction', type: "'horizontal' | 'vertical'", defaultValue: 'horizontal', description: '滚动方向' },
            { name: 'speed', type: 'number', defaultValue: 30, description: '滚动速度 (像素/秒)' },
            { name: 'pauseOnHover', type: 'boolean', defaultValue: true, description: '悬停时暂停' },
            { name: 'reverse', type: 'boolean', defaultValue: false, description: '反向滚动' },
            { name: 'children', type: 'ReactNode', required: true, description: '滚动内容' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { Marquee } from '@sqing/registry/components/marquee'

export default function Page() {
  const logos = ['Vercel', 'Linear', 'Stripe', 'Notion', 'Figma']
  return (
    <Marquee speed={40} pauseOnHover reverse>
      <div className="flex gap-12 px-6">
        {logos.map((l) => (
          <span key={l} className="text-2xl font-bold text-white/80">
            {l}
          </span>
        ))}
      </div>
    </Marquee>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        源自 shadcn Marquee 组件、magic-ui Marquee 与经典 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;marquee&gt;</code> HTML 标签;Vercel / Linear 官网的客户 Logo 墙、shadcn 文档页的 Tech Stack 跑马灯都是这套模式的代表。
      </p>
    </>
  )
}
