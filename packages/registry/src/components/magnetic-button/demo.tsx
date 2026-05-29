'use client'

import { MagneticButton } from './index'
import { useState } from 'react'

export function MagneticButtonDemo() {
  const [strength, setStrength] = useState(0.3)
  const [range, setRange] = useState(120)

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-8 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8">
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
        <MagneticButton strength={strength} range={range}>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:shadow-2xl">
            Hover Me
          </button>
        </MagneticButton>

        <MagneticButton strength={0.5} range={150}>
          <button className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg">
            Stronger
          </button>
        </MagneticButton>

        <MagneticButton strength={0.1} range={80}>
          <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
            Subtle
          </button>
        </MagneticButton>
      </div>

      <div className="w-full max-w-md rounded-lg border border-white/10 bg-black/30 p-4 text-white backdrop-blur">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">
          第一个按钮参数
        </div>
        <label className="mb-3 block text-sm">
          强度: {strength.toFixed(2)}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={strength}
            onChange={(e) => setStrength(parseFloat(e.target.value))}
            className="mt-1 w-full"
          />
        </label>
        <label className="block text-sm">
          范围: {range}px
          <input
            type="range"
            min="50"
            max="300"
            step="10"
            value={range}
            onChange={(e) => setRange(parseInt(e.target.value))}
            className="mt-1 w-full"
          />
        </label>
      </div>
    </div>
  )
}
