'use client'

import { TiltCard } from './index'

export function TiltCardDemo() {
  return (
    <div className="grid min-h-[400px] w-full grid-cols-1 gap-6 bg-gradient-to-br from-slate-100 to-slate-200 p-8 md:grid-cols-3 dark:from-slate-900 dark:to-slate-800">
      <TiltCard max={15} glare>
        <div className="rounded-xl border bg-white p-6 shadow-lg dark:bg-slate-800 dark:border-slate-700">
          <div className="mb-2 text-2xl">✨</div>
          <h3 className="mb-2 font-semibold dark:text-white">Basic Card</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Hover me to see 3D tilt with glare effect.
          </p>
        </div>
      </TiltCard>

      <TiltCard max={25} scale={1.05}>
        <div className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white shadow-xl">
          <div className="mb-2 text-2xl">🚀</div>
          <h3 className="mb-2 font-semibold">Stronger Tilt</h3>
          <p className="text-sm opacity-90">
            This one has max=25° and scale=1.05.
          </p>
        </div>
      </TiltCard>

      <TiltCard max={8} scale={1.01}>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
          <div className="mb-2 text-2xl">🍃</div>
          <h3 className="mb-2 font-semibold dark:text-white">Subtle</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Subtle 8° tilt for a more refined look.
          </p>
        </div>
      </TiltCard>
    </div>
  )
}
