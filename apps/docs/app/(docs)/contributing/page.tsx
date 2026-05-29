import Link from 'next/link'

export const metadata = {
  title: '贡献指南',
  description: '如何向 Sqing UI 贡献新组件',
}

export default function ContributingPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">贡献指南</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        欢迎贡献!Sqing UI 是开源的,你贡献的组件会被所有使用者看到。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">我应该贡献什么?</h2>
      <p className="mb-4 text-muted-foreground">
        我们只接受"作品集加分"型的创意组件,不是所有组件都合适。一个组件应该:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>有视觉冲击</strong>:鼠标 / 3D / 视觉 / 背景 / 数据 / 滚动 / 交互 类</li>
        <li><strong>可演示</strong>:有明确可演示的 Live Demo(不只是静态样式)</li>
        <li><strong>有差异化</strong>:和已有 14 个组件不重复,有自己的"设计原点"</li>
        <li><strong>源码完整</strong>:可以完整复制到用户项目,不依赖内部 API</li>
        <li><strong>性能可控</strong>:在移动端也能跑,不卡顿、不爆内存</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">快速贡献流程</h2>
      <ol className="mb-6 list-decimal space-y-3 pl-6 text-muted-foreground">
        <li>
          <strong>Fork 仓库</strong>,创建一个新分支:
          <pre className="mt-2 overflow-x-auto rounded-lg border bg-muted/30 p-3 text-sm">
            <code>{`git checkout -b feat/<component-name>`}</code>
          </pre>
        </li>
        <li>
          <strong>创建组件目录</strong>在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/src/registry/&lt;name&gt;/</code>:
          <pre className="mt-2 overflow-x-auto rounded-lg border bg-muted/30 p-3 text-sm">
            <code>{`apps/docs/src/registry/
  your-component/
    index.tsx      # 组件源码
    preview.tsx    # docs 站点的预览 demo`}</code>
          </pre>
        </li>
        <li>
          <strong>写组件</strong>:遵循以下规范
        </li>
        <li>
          <strong>写预览</strong>:在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">preview.tsx</code> 中写一个完整的演示 demo
        </li>
        <li>
          <strong>更新 registry</strong>:
          <pre className="mt-2 overflow-x-auto rounded-lg border bg-muted/30 p-3 text-sm">
            <code>{`pnpm --filter docs build:registry`}</code>
          </pre>
        </li>
        <li>
          <strong>写文档页</strong>:在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/app/(docs)/components/&lt;name&gt;/page.tsx</code> 中写组件详情页
        </li>
        <li>
          <strong>提交 PR</strong>,描述组件的设计灵感和 API 选择
        </li>
      </ol>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">组件编写规范</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">1. 文件结构</h3>
      <p className="mb-4 text-muted-foreground">
        每个组件使用以下结构:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils' // 如果需要

export interface YourComponentProps {
  // 必填 prop 优先,可选 prop 用 ?
  children: React.ReactNode
  className?: string
  // ...其他 props
  /**
   * 简要说明
   * @default 100
   */
  someProp?: number
}

export function YourComponent({
  children,
  className,
  someProp = 100,
}: YourComponentProps) {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  )
}`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">2. TypeScript 规范</h3>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>所有 props 必须有 TypeScript 类型</li>
        <li>使用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">interface</code> 而不是 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">type</code>(更易扩展)</li>
        <li>所有可选 prop 必须有 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">@default</code> JSDoc 注释</li>
        <li>导出组件名(用 PascalCase)+ props interface(组件名 + Props)</li>
      </ul>

      <h3 className="mt-6 mb-3 text-xl font-semibold">3. 可访问性</h3>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>如果是可点击元素,必须接受 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">onClick</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">tabIndex</code></li>
        <li>支持键盘导航(Enter / Space 触发)</li>
        <li>动画组件要检测 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">prefers-reduced-motion</code> 并提供静态 fallback</li>
      </ul>

      <h3 className="mt-6 mb-3 text-xl font-semibold">4. 样式规范</h3>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>使用 TailwindCSS,不要内联 style(除非必要)</li>
        <li>支持 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">className</code> 注入,允许外部覆盖</li>
        <li>暗色模式必须测试通过</li>
      </ul>

      <h3 className="mt-6 mb-3 text-xl font-semibold">5. 性能要求</h3>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>避免 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useEffect</code> 无限循环</li>
        <li>动画使用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">framer-motion</code> 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useMotionValue</code> 而不是 state 避免 re-render</li>
        <li>移动端降级:在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">window.innerWidth &lt; 768</code> 时减少粒子数 / 关闭某些效果</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Preview 编写规范</h2>
      <p className="mb-4 text-muted-foreground">
        Preview 是 docs 站点的实时演示,要求:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>必须有可视化内容(不能是空 div)</li>
        <li>包含组件的核心功能演示</li>
        <li>展示 1-2 个 props 变化的对比</li>
        <li>背景需要和组件形成对比(浅色组件用深色背景,反之亦然)</li>
      </ul>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`// apps/docs/src/registry/your-component/preview.tsx
'use client'

import { YourComponent } from './index'

export default function Preview() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center bg-slate-950 p-8">
      <YourComponent someProp={100}>
        <span className="text-white">Hello</span>
      </YourComponent>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">组件文档页规范</h2>
      <p className="mb-4 text-muted-foreground">
        每个组件都需要在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/app/(docs)/components/&lt;name&gt;/page.tsx</code> 写一个详情页,内容:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>标题 + 一句话介绍</strong></li>
        <li><strong>Live Demo</strong>(自动从 preview.tsx 加载)</li>
        <li><strong>复制源码按钮</strong> + 安装 tabs</li>
        <li><strong>说明</strong>:实现原理 + props 含义</li>
        <li><strong>API 表格</strong>:用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">ApiTable</code> 组件</li>
        <li><strong>用法示例</strong>:真实可运行代码</li>
        <li><strong>设计灵感</strong>:参考的设计来源</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Pull Request 检查清单</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>组件源码位于 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/src/registry/&lt;name&gt;/index.tsx</code></li>
        <li>Preview 文件位于 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/src/registry/&lt;name&gt;/preview.tsx</code></li>
        <li>运行 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">pnpm --filter docs build:registry</code> 成功</li>
        <li>文档页位于 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/app/(docs)/components/&lt;name&gt;/page.tsx</code></li>
        <li>在 <Link href="/components" className="text-blue-600 hover:underline">组件列表</Link> 中可以找到新组件</li>
        <li><code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">pnpm build</code> 跑通(没有 TypeScript / ESLint 错误)</li>
        <li>在暗色 / 浅色模式下都正常</li>
        <li>在移动端(375px)下不会崩</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">不需要贡献</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>❌ 通用后台组件(Button / Dialog / Form)— 用 shadcn/ui</li>
        <li>❌ 依赖大型库的特效(Three.js / WebGL / Lottie)— 体积过大</li>
        <li>❌ 业务组件(Login Form / Pricing Table)— 不通用</li>
        <li>❌ 没有视觉差异的封装(只是包了层 div)— 没价值</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">下一步</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>查看 <Link href="/cli-usage" className="text-blue-600 hover:underline">CLI 使用</Link> 了解 registry 机制</li>
        <li>阅读 <Link href="/theming" className="text-blue-600 hover:underline">主题定制</Link></li>
        <li>浏览 <Link href="/components" className="text-blue-600 hover:underline">所有组件</Link> 找灵感</li>
      </ul>
    </>
  )
}
