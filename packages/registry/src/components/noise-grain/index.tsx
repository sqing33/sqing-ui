// NoiseGrain - 噪点质感层
// 通过 SVG feTurbulence 滤镜生成胶片噪点纹理，叠加在彩色背景上
// 增加胶片颗粒质感，支持混合模式与动态噪点。

'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface NoiseGrainProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 噪点不透明度（0-1） */
  opacity?: number
  /** 噪点密度（控制 baseFrequency，越大越细密） */
  density?: number
  /** 混合模式 */
  blendMode?: 'overlay' | 'multiply' | 'screen' | 'soft-light'
  /** 动画速度（秒），0 表示静态；> 0 时每隔 N 秒重新生成噪点 */
  speed?: number
  /** 自定义 className */
  className?: string
}

export function NoiseGrain({
  opacity = 0.15,
  density = 0.6,
  blendMode = 'overlay',
  speed = 0,
  className,
  style,
  ...props
}: NoiseGrainProps) {
  // React.useId 保证多个 NoiseGrain 实例的 filter id 不冲突
  const reactId = React.useId()
  const filterId = `noise-grain-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`

  // seed 用于动态切换噪点图案
  const [seed, setSeed] = React.useState(0)

  // speed > 0 时周期性更新 seed，让噪点看起来"流动"
  React.useEffect(() => {
    if (speed <= 0) return
    const timer = setInterval(() => {
      setSeed((prev) => (prev + 1) % 1000)
    }, speed * 1000)
    return () => clearInterval(timer)
  }, [speed])

  // 把 density (建议 0-1) 映射到 baseFrequency (0.2 - 1.5)
  const baseFrequency = Math.max(0.2, Math.min(1.5, density))

  return (
    <div
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{
        opacity,
        mixBlendMode: blendMode,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        style={{ display: 'block' }}
        aria-hidden="true"
      >
        <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={2}
            stitchTiles="stitch"
            seed={seed}
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
    </div>
  )
}
