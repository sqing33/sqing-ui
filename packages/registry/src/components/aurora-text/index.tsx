'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface AuroraTextProps {
  /** 要显示的文字 */
  text: string
  /** 极光渐变色数组（至少 2 个颜色） */
  colors?: string[]
  /** 动画时长（秒），数值越大动画越慢 */
  speed?: number
  /** 是否仅在 hover 时触发极光动画 */
  enableOnHover?: boolean
  /** 自定义 className */
  className?: string
}

/**
 * AuroraText - 极光文字
 *
 * 通过 background-clip:text + 多色线性渐变 + CSS 动画让文字呈现
 * 流光极光效果。颜色会在文字表面循环流动，形成极光般的光带。
 * 灵感来源：Magic UI / Aceternity UI Aurora Text。
 */
export function AuroraText({
  text,
  colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'],
  speed = 8,
  enableOnHover = false,
  className,
}: AuroraTextProps) {
  // 保证首尾颜色一致，避免循环时出现断层
  const safeColors = colors.length >= 2 ? colors : ['#ff006e', '#3a86ff']
  const head = safeColors[0]
  const tail = safeColors[safeColors.length - 1]
  const gradient = `linear-gradient(90deg, ${[...safeColors, head].join(', ')}, ${tail})`
  const gradientSize = `${Math.max(200, safeColors.length * 100)}% 100%`

  return (
    <span
      className={cn(
        'aurora-text inline-block bg-clip-text text-transparent will-change-background-position',
        enableOnHover ? 'aurora-text-hover' : 'aurora-text-animate',
        className
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: gradientSize,
        // 注入自定义速度变量
        ['--aurora-duration' as string]: `${speed}s`,
      }}
    >
      {text}
      <style jsx>{`
        .aurora-text-animate {
          animation: aurora-flow var(--aurora-duration, 8s) linear infinite;
        }
        .aurora-text-hover {
          animation: none;
        }
        .aurora-text-hover:hover {
          animation: aurora-flow var(--aurora-duration, 8s) linear infinite;
        }
        @keyframes aurora-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </span>
  )
}
