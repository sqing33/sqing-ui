'use client'

import { SpotlightCard } from './index'

export function SpotlightCardDemo() {
  return (
    <div className="grid min-h-[400px] w-full grid-cols-1 gap-6 bg-slate-950 p-8 md:grid-cols-3">
      <SpotlightCard className="border border-slate-800 bg-slate-900 p-6">
        <div className="mb-2 text-2xl">🌑</div>
        <h3 className="mb-2 font-semibold text-white">深色 + 默认</h3>
        <p className="text-sm text-slate-400">
          默认紫色 spotlight,边框发光,400px 半径。
        </p>
      </SpotlightCard>

      <SpotlightCard
        spotlightColor="rgba(255, 165, 80, 0.35)"
        spotlightSize={600}
        enableBorder
        className="border border-orange-500/20 bg-gradient-to-br from-rose-500 via-amber-500 to-orange-500 p-6"
      >
        <div className="mb-2 text-2xl">🌅</div>
        <h3 className="mb-2 font-semibold text-white">渐变 + 暖色</h3>
        <p className="text-sm text-white/80">
          暖色 spotlight,半径扩大到 600px,大光晕更醒目。
        </p>
      </SpotlightCard>

      <SpotlightCard
        spotlightColor="rgba(59, 130, 246, 0.25)"
        spotlightSize={350}
        enableBorder={false}
        className="border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-2 text-2xl">☀️</div>
        <h3 className="mb-2 font-semibold text-slate-900">亮色 + 蓝色</h3>
        <p className="text-sm text-slate-600">
          蓝色聚光灯打在白底上,关闭边框发光,更克制。
        </p>
      </SpotlightCard>
    </div>
  )
}
