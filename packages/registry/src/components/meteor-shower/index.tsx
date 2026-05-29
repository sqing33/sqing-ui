'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface MeteorShowerProps {
  /** 流星数量 */
  count?: number
  /** 头部颜色 */
  color?: string
  /** 拖尾颜色 */
  trailColor?: string
  /** 速度倍率（越大越快） */
  speed?: number
  /** 最小延迟（秒），用于错开流星 */
  minDelay?: number
  /** 最大延迟（秒），用于错开流星 */
  maxDelay?: number
  /** 自定义 className */
  className?: string
}

interface MeteorData {
  id: number
  left: number
  top: number
  duration: number
  delay: number
  trailLength: number
  thickness: number
}

// 确定性伪随机数：避免 SSR/CSR 不一致，也避免每次渲染重新随机
function makeRng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

/**
 * MeteorShower - 流星雨背景
 *
 * 多条流星随机从天空划过，带渐变拖尾与淡入淡出效果。
 * 纯 CSS @keyframes 实现，零运行时开销。
 *
 * 灵感来源：Magic UI / shadcn registry
 */
export function MeteorShower({
  count = 20,
  color = '#ffffff',
  trailColor = 'rgba(255, 255, 255, 0.3)',
  speed = 1,
  minDelay = 0,
  maxDelay = 1.5,
  className,
}: MeteorShowerProps) {
  // 容器 ID：用于生成唯一的 keyframes，避免多个实例互相干扰
  const reactId = React.useId()
  const key = reactId.replace(/[^a-zA-Z0-9_-]/g, '')
  const keyframesName = `meteor-fall-${key}`

  const meteors = React.useMemo<MeteorData[]>(() => {
    const rand = makeRng(0x4d340071)
    const safeSpeed = Math.max(0.1, speed)
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      // 起始位置：集中在屏幕右半部分和上方
      left: rand() * 60 + 40, // 40% ~ 100%
      top: rand() * 60 - 20, // -20% ~ 40% (允许从屏幕外开始)
      // 单条流星持续时间 5~10 秒，受 speed 影响
      duration: (rand() * 5 + 5) / safeSpeed,
      // 错开延迟
      delay: rand() * (maxDelay - minDelay) + minDelay,
      // 拖尾长度随机
      trailLength: 120 + rand() * 160, // 120 ~ 280 px
      // 粗细随机
      thickness: 1 + rand() * 2, // 1 ~ 3 px
    }))
  }, [count, speed, minDelay, maxDelay])

  return (
    <div
      className={cn('relative overflow-hidden bg-slate-950', className)}
      data-meteor-shower
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {meteors.map((m) => (
          <span
            key={m.id}
            className="meteor"
            style={{
              top: `${m.top}%`,
              left: `${m.left}%`,
              width: `${m.trailLength}px`,
              height: `${m.thickness}px`,
              background: `linear-gradient(to right, ${color}, ${trailColor}, transparent)`,
              boxShadow: `0 0 ${m.thickness * 4}px 0 ${color}`,
              animation: `${keyframesName} ${m.duration}s linear infinite`,
              animationDelay: `${m.delay}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .meteor {
          position: absolute;
          border-radius: 9999px;
          transform: rotate(-45deg);
          opacity: 0;
          will-change: transform, opacity;
        }

        @keyframes ${keyframesName} {
          0% {
            transform: translate3d(0, 0, 0) rotate(-45deg);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-600px, 600px, 0) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
