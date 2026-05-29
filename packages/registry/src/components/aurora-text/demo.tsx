'use client'

import { AuroraText } from './index'

export function AuroraTextDemo() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Aurora · Default
        </span>
        <AuroraText
          text="AURORA TEXT"
          className="text-6xl font-extrabold tracking-tight md:text-7xl"
          speed={8}
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Aurora · Slow Gradient
        </span>
        <AuroraText
          text="极光流光"
          colors={['#22d3ee', '#a855f7', '#ec4899', '#facc15']}
          className="text-5xl font-bold md:text-6xl"
          speed={14}
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Aurora · Fast Sunset
        </span>
        <AuroraText
          text="HOVER ME"
          colors={['#f97316', '#ef4444', '#ec4899', '#8b5cf6']}
          className="text-4xl font-black uppercase tracking-widest md:text-5xl"
          speed={3}
          enableOnHover
        />
      </div>
    </div>
  )
}
