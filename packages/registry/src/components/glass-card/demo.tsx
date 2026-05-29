'use client'

import { GlassCard } from './index'

export function GlassCardDemo() {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative grid h-full grid-cols-1 gap-4 md:grid-cols-3">
        <GlassCard>
          <h3 className="mb-2 text-lg font-semibold text-white">Default</h3>
          <p className="text-sm text-white/80">blur=12, opacity=0.2</p>
        </GlassCard>

        <GlassCard blur={20} opacity={0.3}>
          <h3 className="mb-2 text-lg font-semibold text-white">Stronger</h3>
          <p className="text-sm text-white/80">blur=20, opacity=0.3</p>
        </GlassCard>

        <GlassCard border={false} opacity={0.1}>
          <h3 className="mb-2 text-lg font-semibold text-white">No Border</h3>
          <p className="text-sm text-white/80">No border gradient</p>
        </GlassCard>
      </div>
    </div>
  )
}
