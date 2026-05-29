'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface MagneticButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  /** 磁性强度（0-1） */
  strength?: number
  /** 影响范围（像素） */
  range?: number
  /** 回弹速度（0-1） */
  ease?: number
  /** 按钮内容 */
  children: React.ReactNode
  /** 自定义 className */
  className?: string
}

/**
 * MagneticButton - 磁性按钮
 *
 * 鼠标靠近按钮时，按钮会向鼠标位置"被吸引"，移开后回弹到原位。
 * 适合用作 CTA 主按钮、关键交互按钮。
 *
 * 灵感来源：Magic UI / Aceternity UI
 */
export function MagneticButton({
  strength = 0.3,
  range = 100,
  ease = 0.15,
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const onMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < range) {
        // 在范围内，按钮被吸引
        x.set(distanceX * strength)
        y.set(distanceY * strength)
      } else {
        // 超出范围，回弹
        x.set(0)
        y.set(0)
      }
    }

    const onLeave = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener('pointermove', onMove)
    element.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      element.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, range, x, y])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className={cn('inline-block cursor-pointer', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
