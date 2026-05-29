import Link from 'next/link'

export const metadata = {
  title: '什么是 Sqing UI',
  description: '✨ 一个专门为"作品集加分"而生的创意组件库',
}

export default function IntroductionPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">什么是 Sqing UI</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        ✨ 一个专门为"作品集加分"而生的创意组件库。
      </p>

      <p className="mb-6 text-muted-foreground">
        shadcn/ui 给了你规范、效率、Copy-Paste 的自由,Sqing UI 把这份自由延伸到了"作品集最需要的部分":<strong>鼠标跟随、3D 倾斜、光斑、液态、噪点、极光、流星</strong>。
      </p>
      <p className="mb-6 text-muted-foreground">
        每一个组件都<strong>源码完整可见、可一键复制到你的项目</strong>,而不是一个 npm 依赖。我们相信:作品集应该展示你能写代码的能力,而不是你装了哪些库。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">我们和 shadcn/ui 有什么不同</h2>
      <div className="mb-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">维度</th>
              <th className="px-4 py-3 text-left font-semibold">shadcn/ui</th>
              <th className="px-4 py-3 text-left font-semibold">Sqing UI</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">定位</td>
              <td className="px-4 py-3 text-muted-foreground">企业级后台 / 通用 UI 基础</td>
              <td className="px-4 py-3 text-muted-foreground">营销页 / 作品集 / Hero 区创意特效</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">组件类型</td>
              <td className="px-4 py-3 text-muted-foreground">Button / Dialog / Form</td>
              <td className="px-4 py-3 text-muted-foreground">AuroraText / TiltCard / CursorFollow</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">使用方式</td>
              <td className="px-4 py-3 text-muted-foreground">CLI 复制源码到项目</td>
              <td className="px-4 py-3 text-muted-foreground">复制源码 + 完全可改</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">依赖</td>
              <td className="px-4 py-3 text-muted-foreground">Tailwind + Radix UI</td>
              <td className="px-4 py-3 text-muted-foreground">Tailwind + framer-motion</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">设计灵感</td>
              <td className="px-4 py-3 text-muted-foreground">Vercel / Linear 等后台系统</td>
              <td className="px-4 py-3 text-muted-foreground">Aceternity / Magic UI / 21st.dev</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">核心特性</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>🎨 14+ 创意组件</strong>:覆盖鼠标、3D、视觉、背景、数据、滚动、交互七大类</li>
        <li><strong>📋 源码即文档</strong>:每个组件都可以"查看源码"、"一键复制",源码完整属于你</li>
        <li><strong>🎯 零依赖锁死</strong>:不通过 npm 安装,组件直接复制到你的项目,可以自由修改</li>
        <li><strong>⚡ 现代技术栈</strong>:React 18 + TypeScript + TailwindCSS + framer-motion</li>
        <li><strong>🌗 暗色模式</strong>:所有组件都对暗色友好,自动适配</li>
        <li><strong>♿ 可访问性优先</strong>:键盘焦点、ARIA 标签、reduced-motion 兼容</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计理念</h2>
      <p className="mb-4 text-muted-foreground">
        Sqing UI 不追求"组件数量",只追求"作品集加分"。我们做了三件事:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>精选</strong>:每一个组件都经过"作品集加分"检验,不是炫技 demo</li>
        <li><strong>透明</strong>:代码完整可见,你可以学习、可以改造、可以拿去面试</li>
        <li><strong>克制</strong>:组件默认参数已经过调优,直接复制就能用,不需要再调</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">技术栈</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>React 18+</strong>:并发渲染、Suspense、Server Components</li>
        <li><strong>TypeScript</strong>:类型安全,API 一目了然</li>
        <li><strong>TailwindCSS 3+</strong>:原子化 CSS,主题通过 className 切换</li>
        <li><strong>framer-motion 11</strong>:声明式动画,worklet 加速</li>
        <li><strong>Next.js 15</strong>:App Router + MDX,文档站点直接跑</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">适用场景</h2>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-card p-5">
          <h3 className="mb-2 font-semibold">个人作品集</h3>
          <p className="text-sm text-muted-foreground">
            Hero 区用 AuroraText + MeteorShower,项目卡片用 TiltCard + SpotlightCard,About 页用 CursorFollow。
          </p>
        </div>
        <div className="rounded-lg border bg-card p-5">
          <h3 className="mb-2 font-semibold">产品落地页</h3>
          <p className="text-sm text-muted-foreground">
            Pricing 用 GlassCard,特性矩阵用 AnimatedTabs,数据展示用 CountUp,背景用 NoiseGrain。
          </p>
        </div>
        <div className="rounded-lg border bg-card p-5">
          <h3 className="mb-2 font-semibold">营销活动页</h3>
          <p className="text-sm text-muted-foreground">
            大标题用 GlitchText + AuroraText,客户 Logo 用 Marquee,首屏用 GradientMesh + NoiseGrain。
          </p>
        </div>
        <div className="rounded-lg border bg-card p-5">
          <h3 className="mb-2 font-semibold">创意机构 / 工作室</h3>
          <p className="text-sm text-muted-foreground">
            官网 Case 展示墙用 TiltCard,团队介绍用 GlassCard,博客用 AnimatedTabs + GlitchText。
          </p>
        </div>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">为什么选择 Sqing UI</h2>
      <p className="mb-4 text-muted-foreground">
        市面上已经有不少"特效库"(Aceternity UI / Magic UI / 21st.dev),我们不是要替代它们,而是提供一个<strong>中文友好、可本地化、文档完整的镜像</strong>:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>中文文档 + 中文示例</strong>:所有 prop 描述、设计灵感、API 文档都中文化</li>
        <li><strong>源码 100% 可访问</strong>:不锁死依赖,你可以学到每一行怎么写</li>
        <li><strong>作品集导向</strong>:我们只挑"作品集最有杀伤力"的那 14 个组件,不堆量</li>
        <li><strong>可定制</strong>:每个组件都暴露了颜色、尺寸、速度等参数,不会被"官方风格"锁死</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">跟其他"特效库"的对比</h2>
      <div className="mb-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">库</th>
              <th className="px-4 py-3 text-left font-semibold">特点</th>
              <th className="px-4 py-3 text-left font-semibold">差异</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Aceternity UI</td>
              <td className="px-4 py-3 text-muted-foreground">组件最丰富,英文社区</td>
              <td className="px-4 py-3 text-muted-foreground">Sqing UI 是中文精选子集 + 完整 API 文档</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Magic UI</td>
              <td className="px-4 py-3 text-muted-foreground">动画精致,可商用</td>
              <td className="px-4 py-3 text-muted-foreground">Sqing UI 提供源码所有权,改起来更自由</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">21st.dev</td>
              <td className="px-4 py-3 text-muted-foreground">社区驱动,组件量大</td>
              <td className="px-4 py-3 text-muted-foreground">Sqing UI 走"精选 14 个"路线,质量优先</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">shadcn/ui</td>
              <td className="px-4 py-3 text-muted-foreground">后台组件规范</td>
              <td className="px-4 py-3 text-muted-foreground">Sqing UI 是它的"前端创意补充"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">下一步</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>查看 <Link href="/installation" className="text-blue-600 hover:underline">安装指南</Link> 在你的项目中跑通第一个组件</li>
        <li>浏览 <Link href="/components" className="text-blue-600 hover:underline">所有组件</Link> 了解 14 个创意特效</li>
        <li>阅读 <Link href="/cli-usage" className="text-blue-600 hover:underline">CLI 使用</Link> 学会一键复制源码</li>
      </ul>
    </>
  )
}
