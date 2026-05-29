'use client'

import { GlitchText } from './index'

export function GlitchTextDemo() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-12 bg-black p-8">
      <GlitchText text="CREATIVE" className="text-6xl text-white" speed={1} />
      <GlitchText text="GLITCH EFFECT" className="text-5xl text-cyan-300" speed={2} />
      <GlitchText text="HOVER ME" className="text-4xl text-yellow-300" enableOnHover speed={1.5} />
    </div>
  )
}
