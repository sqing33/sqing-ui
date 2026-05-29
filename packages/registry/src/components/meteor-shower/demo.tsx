'use client'

import { MeteorShower } from './index'

export function MeteorShowerDemo() {
  return (
    <div className="space-y-6 bg-white p-8 dark:bg-slate-900">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          默认 - 20 条白色
        </h3>
        <MeteorShower className="min-h-[400px] w-full rounded-lg" />
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          8 条粉色 + 慢速
        </h3>
        <MeteorShower
          count={8}
          color="#fb7185"
          trailColor="rgba(251, 113, 133, 0.4)"
          speed={0.4}
          minDelay={0}
          maxDelay={3}
          className="min-h-[400px] w-full rounded-lg"
        />
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          30 条紫色 + 快速
        </h3>
        <MeteorShower
          count={30}
          color="#a78bfa"
          trailColor="rgba(167, 139, 250, 0.4)"
          speed={2}
          minDelay={0}
          maxDelay={0.6}
          className="min-h-[400px] w-full rounded-lg"
        />
      </div>
    </div>
  )
}
