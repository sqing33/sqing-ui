'use client'

import { AnimatedTabs, type AnimatedTabItem } from './index'

export function AnimatedTabsDemo() {
  const tabs: AnimatedTabItem[] = [
    {
      id: 'overview',
      label: '标签 1',
      content: (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            欢迎使用 AnimatedTabs
          </h3>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            这是一个基于 framer-motion
            的粘性指示器 tabs 组件。当你在不同标签之间切换时,底部的高亮指示器会"粘"在当前位置,然后像被拉伸的弹簧一样"弹"到新位置,
            带来丝滑自然的过渡效果。
          </p>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            试试点击其他标签,或使用键盘 ← → 键进行切换。
          </p>
        </div>
      ),
    },
    {
      id: 'cards',
      label: '标签 2',
      content: (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { title: '特性 A', desc: '粘性指示器动画,顺滑跟随' },
            { title: '特性 B', desc: '支持受控与非受控两种用法' },
            { title: '特性 C', desc: '支持水平和垂直两种方向' },
            { title: '特性 D', desc: '完整的键盘导航与可访问性' },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <h4 className="mb-1 font-semibold text-slate-900 dark:text-slate-100">
                {card.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{card.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'code',
      label: '标签 3',
      content: (
        <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
          <code>{`import { AnimatedTabs } from '@sqing/registry'

const tabs = [
  { id: 'a', label: 'A', content: <div>Hello A</div> },
  { id: 'b', label: 'B', content: <div>Hello B</div> },
]

<AnimatedTabs
  tabs={tabs}
  defaultValue="a"
  indicatorColor="bg-[var(--primary)]"
/>`}</code>
        </pre>
      ),
    },
    {
      id: 'settings',
      label: '设置',
      content: (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              用户名
            </label>
            <input
              id="username"
              type="text"
              placeholder="请输入用户名"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              邮箱
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            保存设置
          </button>
        </form>
      ),
    },
  ]

  return (
    <div className="min-h-[400px] w-full bg-white p-8 dark:bg-slate-900">
      <div
        className="mx-auto max-w-2xl"
        style={{ ['--primary' as string]: 'oklch(0.65 0.24 280)' }}
      >
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
          AnimatedTabs 演示
        </h2>
        <AnimatedTabs tabs={tabs} defaultValue="overview" />
      </div>
    </div>
  )
}
