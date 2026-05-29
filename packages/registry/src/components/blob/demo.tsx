'use client'

import { Blob } from './index'

export function BlobDemo() {
  return (
    <div className="grid min-h-[400px] w-full grid-cols-1 gap-6 bg-slate-900 p-8 md:grid-cols-3">
      <div className="flex flex-col items-center justify-center gap-3">
        <Blob color="#a855f7" size={200} />
        <span className="text-sm text-white/60">Purple</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Blob color="#06b6d4" size={200} speed={4} />
        <span className="text-sm text-white/60">Cyan · Fast</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Blob color="#f59e0b" size={200} speed={8} />
        <span className="text-sm text-white/60">Orange · Slow</span>
      </div>
    </div>
  )
}
