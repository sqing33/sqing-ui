import Link from 'next/link'
import { MousePointer2, Layers, Sparkles, Zap, Box, Wand2 } from 'lucide-react'
import { ComponentCard } from '@/components/mdx/component-card'

export const metadata = {
  title: '所有组件',
  description: 'Sqing UI 的全部创意组件一览',
}

export default function ComponentsPage() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold tracking-tight">所有组件</h1>
      <p className="mb-12 text-lg text-muted-foreground">
        Sqing UI 目前提供 14 个创意组件,覆盖 7 大类。每个组件都有 <strong>Live Demo</strong>、<strong>源码复制</strong>、<strong>API 文档</strong> 三大特性。
      </p>

      <h2 className="mb-6 text-2xl font-semibold">按分类浏览</h2>
      <div className="not-prose mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/components/cursor-follow"
          className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-blue-500/50 hover:shadow-md"
        >
          <div className="mb-2 flex items-center gap-2 text-blue-500">
            <MousePointer2 className="h-4 w-4" />
            <span className="font-semibold">鼠标与光标</span>
          </div>
          <div className="text-sm text-muted-foreground">Cursor Follow · Magnetic Button</div>
        </Link>

        <Link
          href="/components/tilt-card"
          className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-purple-500/50 hover:shadow-md"
        >
          <div className="mb-2 flex items-center gap-2 text-purple-500">
            <Box className="h-4 w-4" />
            <span className="font-semibold">3D 与视差</span>
          </div>
          <div className="text-sm text-muted-foreground">Tilt Card · Spotlight Card</div>
        </Link>

        <Link
          href="/components/glass-card"
          className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-pink-500/50 hover:shadow-md"
        >
          <div className="mb-2 flex items-center gap-2 text-pink-500">
            <Layers className="h-4 w-4" />
            <span className="font-semibold">视觉特效</span>
          </div>
          <div className="text-sm text-muted-foreground">Glass Card · Glitch Text · Blob · Aurora Text</div>
        </Link>

        <Link
          href="/components/gradient-mesh"
          className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-orange-500/50 hover:shadow-md"
        >
          <div className="mb-2 flex items-center gap-2 text-orange-500">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">背景动画</span>
          </div>
          <div className="text-sm text-muted-foreground">Gradient Mesh · Noise Grain · Meteor Shower</div>
        </Link>

        <Link
          href="/components/count-up"
          className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-green-500/50 hover:shadow-md"
        >
          <div className="mb-2 flex items-center gap-2 text-green-500">
            <Zap className="h-4 w-4" />
            <span className="font-semibold">数据与滚动</span>
          </div>
          <div className="text-sm text-muted-foreground">Count Up · Marquee</div>
        </Link>

        <Link
          href="/components/animated-tabs"
          className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-md"
        >
          <div className="mb-2 flex items-center gap-2 text-cyan-500">
            <Wand2 className="h-4 w-4" />
            <span className="font-semibold">交互组件</span>
          </div>
          <div className="text-sm text-muted-foreground">Animated Tabs</div>
        </Link>
      </div>

      <h2 className="mb-6 text-2xl font-semibold">全部组件</h2>
      <div className="not-prose mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ComponentCard slug="cursor-follow" title="Cursor Follow" desc="鼠标跟随自定义光标,支持多种混合模式" tag="鼠标" />
        <ComponentCard slug="magnetic-button" title="Magnetic Button" desc="磁性按钮,鼠标靠近被吸引" tag="鼠标" />
        <ComponentCard slug="tilt-card" title="Tilt Card" desc="3D 倾斜卡片,带光斑反射" tag="3D" />
        <ComponentCard slug="spotlight-card" title="Spotlight Card" desc="聚光灯卡片,鼠标跟随光斑" tag="3D" />
        <ComponentCard slug="glass-card" title="Glass Card" desc="玻璃态卡片,backdrop-filter 模糊" tag="视觉" />
        <ComponentCard slug="glitch-text" title="Glitch Text" desc="故障艺术文字,RGB 错位抖动" tag="视觉" />
        <ComponentCard slug="blob" title="Blob" desc="液态斑点,SVG 路径持续变形" tag="视觉" />
        <ComponentCard slug="aurora-text" title="Aurora Text" desc="极光文字,流光渐变" tag="视觉" />
        <ComponentCard slug="gradient-mesh" title="Gradient Mesh" desc="渐变网格背景,模糊球体流动" tag="背景" />
        <ComponentCard slug="noise-grain" title="Noise Grain" desc="噪点质感层,胶片摄影感" tag="背景" />
        <ComponentCard slug="meteor-shower" title="Meteor Shower" desc="流星雨背景,带拖尾" tag="背景" />
        <ComponentCard slug="count-up" title="Count Up" desc="数字滚动动画,数字仪表板常用" tag="数据" />
        <ComponentCard slug="marquee" title="Marquee" desc="无限滚动条,支持水平和垂直" tag="滚动" />
        <ComponentCard slug="animated-tabs" title="Animated Tabs" desc="粘性指示器 Tabs,弹性滑动" tag="交互" />
      </div>

      <h2 className="mb-6 text-2xl font-semibold">想要更多?</h2>
      <p className="text-muted-foreground">
        这个库会持续更新,如果你有想要但还没做的组件,可以在 <Link href="https://github.com" className="text-blue-600 hover:underline">GitHub 提个 issue</Link> 或者直接自己提交 PR。
      </p>
    </>
  )
}
