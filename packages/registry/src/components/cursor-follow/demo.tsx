'use client'

import { CursorFollow } from './index'
import { useState } from 'react'
import { Label } from '../../_internal/label'

/**
 * CursorFollow 的文档站演示
 * - 默认展示基础效果
 * - 提供控制面板切换 blendMode、trail
 */
export function CursorFollowDemo() {
  const [blendMode, setBlendMode] = useState<'difference' | 'exclusion' | 'screen' | 'normal'>('difference')
  const [trail, setTrail] = useState(false)
  const [color, setColor] = useState('#ffffff')

  return (
    <div className="relative min-h-[400px] w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <CursorFollow color={color} blendMode={blendMode} trail={trail} />

      <div className="relative z-10 mx-auto max-w-md rounded-xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
        <h3 className="mb-2 text-lg font-semibold text-white">移动鼠标试试</h3>
        <p className="mb-4 text-sm text-white/70">
          自定义光标会跟随你的鼠标移动。支持拖尾和多种混合模式。
        </p>

        <div className="space-y-3">
          <div>
            <Label className="text-white/80">混合模式</Label>
            <div className="mt-1 flex flex-wrap gap-2">
              {(['difference', 'exclusion', 'screen', 'normal'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setBlendMode(mode)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                    blendMode === mode
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-white/80">颜色</Label>
            <div className="mt-1 flex gap-2">
              {['#ffffff', '#ff006e', '#06ffa5', '#ffbe0b'].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-6 w-6 rounded-full border-2 ${
                    color === c ? 'border-white scale-110' : 'border-white/30'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={trail}
              onChange={(e) => setTrail(e.target.checked)}
              className="h-4 w-4"
            />
            启用拖尾效果
          </label>
        </div>
      </div>
    </div>
  )
}
