'use client'

import { CountUp } from './index'

export function CountUpDemo() {
  return (
    <div className="grid min-h-[400px] w-full grid-cols-2 gap-6 bg-slate-50 p-8 md:grid-cols-4 dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
        <div className="mb-2 text-4xl font-bold text-blue-600">
          <CountUp to={1234} />
        </div>
        <div className="text-xs text-slate-500">Default</div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
        <div className="mb-2 text-4xl font-bold text-purple-600">
          $<CountUp to={98765} />
        </div>
        <div className="text-xs text-slate-500">Currency</div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
        <div className="mb-2 text-4xl font-bold text-green-600">
          <CountUp to={99.5} decimals={1} suffix="%" />
        </div>
        <div className="text-xs text-slate-500">Percentage</div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
        <div className="mb-2 text-4xl font-bold text-orange-600">
          <CountUp to={1.5} from={0} decimals={2} suffix="M" />
        </div>
        <div className="text-xs text-slate-500">Decimals</div>
      </div>
    </div>
  )
}
