'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface TiltCardProps {
  /** 最大倾斜角度（度） */
  max?: number
  /** 透视距离（像素） */
  perspective?: number
  /** 悬停时缩放 */
  scale?: number
  /** 是否显示光斑 */
  glare?: boolean
  /** 光斑最大不透明度 */
  glareMaxOpacity?: number
  /** 卡片内容 */
  children: React.ReactNode
  /** 自定义 className */
  className?: string
}

/**
 * TiltCard - 3D 倾斜卡片
 *
 * 鼠标悬停时根据位置计算 rotateX/rotateY，呈现透视倾斜效果。
 * 可选 glare 光斑反射。
 *
 * 灵感来源：Aceternity UI 3D Card
 */
export function TiltCard({
  max = 15,
  perspective = 1000,
  scale = 1.02,
  glare = false,
  glareMaxOpacity = 0.3,
  children,
  className,
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [max, -max]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-max, max]), springConfig)
  const scaleValue = useSpring(1, { ...springConfig, stiffness: 300 })

  // Glare 光斑
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])
  const glareOpacity = useSpring(0, springConfig)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const xPct = (e.clientX - rect.left) / width - 0.5
    const yPct = (e.clientY - rect.top) / height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
    if (glare) glareOpacity.set(glareMaxOpacity)
  }

  const handleEnter = () => {
    scaleValue.set(scale)
  }

  const handleLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    scaleValue.set(1)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className={cn('relative', className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: scaleValue,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full w-full"
      >
        {children}

        {glare && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.8), transparent 50%)`,
              opacity: glareOpacity,
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
          />
        )}
      </motion.div>
    </motion.div>
  )
}
