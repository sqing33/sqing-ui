'use client'

import { Marquee } from './index'

const items = ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite', 'shadcn/ui']

export function MarqueeDemo() {
  return (
    <div className="space-y-6 bg-white p-8 dark:bg-slate-900">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">默认横向滚动</h3>
        <Marquee className="rounded-lg border bg-slate-50 py-4 dark:bg-slate-800 dark:border-slate-700">
          {items.map((item) => (
            <div
              key={item}
              className="mx-4 flex h-12 w-32 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-semibold text-white shadow"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">反向 + 慢速</h3>
        <Marquee reverse speed={50} className="rounded-lg border bg-slate-50 py-4 dark:bg-slate-800 dark:border-slate-700">
          {items.map((item) => (
            <div
              key={item}
              className="mx-4 flex h-12 w-32 shrink-0 items-center justify-center rounded-md border-2 border-slate-300 bg-white text-sm font-semibold dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
