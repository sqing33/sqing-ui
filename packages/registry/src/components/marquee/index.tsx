'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface MarqueeProps {
  /** 滚动方向 */
  direction?: 'horizontal' | 'vertical'
  /** 滚动速度（像素/秒） */
  speed?: number
  /** 悬停时暂停 */
  pauseOnHover?: boolean
  /** 反向滚动 */
  reverse?: boolean
  /** 滚动内容 */
  children: React.ReactNode
  /** 自定义 className */
  className?: string
}

/**
 * Marquee - 无限滚动条
 *
 * 使用 CSS @keyframes 实现无缝循环滚动。
 * 通过克隆内容两次 + translate 50% 制造无缝错觉。
 */
export function Marquee({
  direction = 'horizontal',
  speed = 30,
  pauseOnHover = true,
  reverse = false,
  children,
  className,
}: MarqueeProps) {
  const isHorizontal = direction === 'horizontal'

  return (
    <div
      className={cn(
        'group flex overflow-hidden',
        isHorizontal ? 'flex-row' : 'flex-col h-full',
        className
      )}
      style={{
        maskImage: isHorizontal
          ? 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          : 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: isHorizontal
          ? 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          : 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div
        className={cn('flex shrink-0', isHorizontal ? 'flex-row' : 'flex-col')}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: 'running',
        }}
      >
        {children}
        {children}
      </div>

      <style jsx>{`
        @keyframes marquee-horizontal {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
        .group:hover > div {
          animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
        }
      `}</style>
    </div>
  )
}
