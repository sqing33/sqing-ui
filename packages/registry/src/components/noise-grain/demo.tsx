'use client'

import { NoiseGrain } from './index'

export function NoiseGrainDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* 第一个：紫粉渐变背景，默认参数 */}
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
        <NoiseGrain />
        <div className="relative flex h-full flex-col justify-center">
          <span className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Noise · Default
          </span>
          <h3 className="mb-2 text-3xl font-bold text-white">胶片质感 · 默认</h3>
          <p className="max-w-md text-sm text-white/80">
            opacity=0.15, density=0.6, blendMode=overlay，紫粉渐变上的胶片噪点。
          </p>
        </div>
      </div>

      {/* 第二个：深色背景 + 高 opacity + multiply */}
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-2xl bg-slate-950 p-8">
        <NoiseGrain opacity={0.4} density={0.9} blendMode="multiply" />
        <div className="relative flex h-full flex-col justify-center">
          <span className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
            Noise · Dense & Multiply
          </span>
          <h3 className="mb-2 text-3xl font-bold text-white">暗夜 · 密噪点</h3>
          <p className="max-w-md text-sm text-white/60">
            opacity=0.4, density=0.9, blendMode=multiply，深色背景上更明显的颗粒。
          </p>
        </div>
      </div>

      {/* 第三个：亮色背景 + soft-light + 动态 */}
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100 p-8">
        <NoiseGrain opacity={0.35} density={0.4} blendMode="soft-light" speed={2} />
        <div className="relative flex h-full flex-col justify-center">
          <span className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">
            Noise · Soft Light & Animated
          </span>
          <h3 className="mb-2 text-3xl font-bold text-slate-800">柔光 · 流动噪点</h3>
          <p className="max-w-md text-sm text-slate-600">
            opacity=0.35, density=0.4, blendMode=soft-light, speed=2（动态）。
          </p>
        </div>
      </div>
    </div>
  )
}
