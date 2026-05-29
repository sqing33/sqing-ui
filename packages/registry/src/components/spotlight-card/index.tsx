'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface SpotlightCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** 卡片内容 */
  children: React.ReactNode
  /** 聚光灯颜色（支持任意 CSS 颜色 / rgba） */
  spotlightColor?: string
  /** 聚光灯半径（像素） */
  spotlightSize?: number
  /** 是否启用边框发光 */
  enableBorder?: boolean
  /** 自定义 className */
  className?: string
  /** 点击事件（传入后会带按钮语义） */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

// SpotlightCard - 聚光灯卡片
//
// 鼠标在卡片内移动时生成一个径向渐变光斑跟随光标，
// 离开时光斑淡出。支持边框发光与键盘 focus 焦点聚光灯。
//
// 灵感来源: Aceternity UI Spotlight / GitHub Primer Hover Card
export function SpotlightCard({
  children,
  spotlightColor = 'rgba(120, 119, 198, 0.3)',
  spotlightSize = 400,
  enableBorder = true,
  className,
  onClick,
  style,
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  const opacity = useSpring(0, { ...springConfig, stiffness: 250 })

  // 鼠标位置 -> CSS radial-gradient 字符串
  const spotlightBackground = useTransform([x, y], ([latestX, latestY]) =>
    `radial-gradient(circle ${spotlightSize}px at ${latestX}px ${latestY}px, ${spotlightColor}, transparent 65%)`
  )

  // 边框发光使用相同的位置信息
  const borderBackground = useTransform([x, y], ([latestX, latestY]) =>
    `radial-gradient(circle ${spotlightSize}px at ${latestX}px ${latestY}px, ${spotlightColor}, transparent 65%)`
  )

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleEnter = () => {
    opacity.set(1)
  }

  const handleLeave = () => {
    opacity.set(0)
  }

  const interactive = typeof onClick === 'function'

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onClick={onClick}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'button' : undefined}
      className={cn(
        'group/spotlight relative isolate overflow-hidden rounded-2xl outline-none',
        'transition-shadow duration-300',
        interactive && 'cursor-pointer',
        className
      )}
      style={style}
      {...props}
    >
      {enableBorder && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: borderBackground,
            padding: '1px',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity,
          }}
        />
      )}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: spotlightBackground,
          opacity,
        }}
      />

      <div className="relative h-full w-full">{children}</div>
    </div>
  )
}
