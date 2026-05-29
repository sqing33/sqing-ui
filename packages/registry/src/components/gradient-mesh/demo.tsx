'use client'

import { GradientMesh } from './index'

export function GradientMeshDemo() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-slate-950">
      <GradientMesh
        colors={['#ff006e', '#8338ec', '#3a86ff', '#06ffa5']}
        speed={15}
        blur={80}
        className="absolute inset-0"
      />
      <div className="relative flex h-full items-center justify-center">
        <h2 className="text-4xl font-bold text-white mix-blend-difference">
          Gradient Mesh
        </h2>
      </div>
    </div>
  )
}
