'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 模糊强度 */
  blur?: number
  /** 背景不透明度 */
  opacity?: number
  /** 是否显示渐变边框 */
  border?: boolean
  children?: React.ReactNode
}

/**
 * GlassCard - 玻璃态卡片
 *
 * 使用 backdrop-filter 实现毛玻璃效果，搭配半透明背景和可选的渐变边框。
 * 适合在彩色背景上展示内容卡片。
 */
export function GlassCard({
  blur = 12,
  opacity = 0.2,
  border = true,
  className,
  style,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-6',
        border && 'border border-white/20',
        className
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
