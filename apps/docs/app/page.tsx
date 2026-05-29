import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, MousePointer2, Layers } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const categories = [
  {
    icon: MousePointer2,
    title: '鼠标与光标',
    description: '鼠标跟随、磁性按钮、3D 倾斜',
    href: '/components/cursor-follow',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Layers,
    title: '视觉特效',
    description: '玻璃态、新拟态、故障艺术',
    href: '/components/glass-card',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Sparkles,
    title: '背景动画',
    description: '渐变网格、流体斑点、流星雨',
    href: '/components/gradient-mesh',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: Zap,
    title: '数据与滚动',
    description: '数字滚动、无限滚动条',
    href: '/components/count-up',
    color: 'from-green-500/20 to-emerald-500/20',
  },
]

const featuredComponents = [
  { name: 'Aurora Text', category: '视觉特效', slug: 'aurora-text' },
  { name: 'Spotlight Card', category: '3D 与视差', slug: 'spotlight-card' },
  { name: 'Animated Tabs', category: '交互组件', slug: 'animated-tabs' },
  { name: 'Meteor Shower', category: '背景动画', slug: 'meteor-shower' },
  { name: 'Cursor Follow', category: '鼠标与光标', slug: 'cursor-follow' },
  { name: 'Count Up', category: '数据与滚动', slug: 'count-up' },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-background to-background" />
        <div className="container mx-auto max-w-screen-2xl px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6">
              ✨ Sqing UI v0.1.0
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                创意组件
              </span>
              <br />
              一键复制即用
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              鼠标跟随 · 3D 卡片 · 粒子背景 · 滚动动画
              <br />
              不是标准 UI，是给作品集加分的视觉魔法
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/components">
                  浏览所有组件
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/guide/installation">快速开始</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <code className="rounded-md border bg-muted/50 px-3 py-1.5 font-mono">
                pnpm dlx sqing-ui@latest add cursor-follow
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto max-w-screen-2xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            按交互类型分类
          </h2>
          <p className="text-muted-foreground">
            每个组件都有 Live Demo、源码复制、API 文档
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${cat.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <cat.icon className="mb-3 h-6 w-6 text-foreground" />
              <h3 className="mb-2 font-semibold">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Components */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto max-w-screen-2xl px-4 py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                Featured Components
              </h2>
              <p className="text-muted-foreground">精选最受欢迎的创意组件</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link href="/components">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredComponents.map((comp) => (
              <Link
                key={comp.slug}
                href={`/components/${comp.slug}`}
                className="group rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md"
              >
                <Badge variant="outline" className="mb-3">
                  {comp.category}
                </Badge>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-blue-600">
                  {comp.name}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground">
                  查看文档
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
