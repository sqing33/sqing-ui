'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface CursorFollowProps {
  /** 光标直径（像素） */
  size?: number
  /** 光标颜色 */
  color?: string
  /** 混合模式 */
  blendMode?: 'normal' | 'difference' | 'exclusion' | 'screen'
  /** 是否显示拖尾 */
  trail?: boolean
  /** 拖尾长度 */
  trailLength?: number
  /** 在移动端禁用 */
  disableOnMobile?: boolean
  /** z-index */
  zIndex?: number
  /** 自定义 className */
  className?: string
}

/**
 * CursorFollow - 鼠标跟随自定义光标
 *
 * 默认隐藏系统光标，使用一个圆点跟随鼠标移动。
 * 支持拖尾、混合模式、移动端自动禁用。
 *
 * 注意：此组件会自动给 body 添加 cursor: none 样式，
 * 如需在某些元素保留光标，给该元素加 class="cursor-auto" 即可。
 */
export function CursorFollow({
  size = 24,
  color = '#ffffff',
  blendMode = 'difference',
  trail = false,
  trailLength = 8,
  disableOnMobile = true,
  zIndex = 9999,
  className,
}: CursorFollowProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [trails, setTrails] = React.useState<Array<{ x: number; y: number; id: number }>>([])
  const [isMobile, setIsMobile] = React.useState(false)
  const [enabled, setEnabled] = React.useState(false)
  const idRef = React.useRef(0)

  // 检测移动端
  React.useEffect(() => {
    if (disableOnMobile) {
      const checkMobile = () => {
        setIsMobile(window.matchMedia('(pointer: coarse)').matches)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [disableOnMobile])

  // 控制 body 样式
  React.useEffect(() => {
    if (isMobile) return
    document.body.style.cursor = 'none'
    setEnabled(true)
    return () => {
      document.body.style.cursor = ''
    }
  }, [isMobile])

  // 监听鼠标移动
  React.useEffect(() => {
    if (!enabled) return
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (trail) {
        idRef.current += 1
        const id = idRef.current
        setTrails((prev) => [...prev.slice(-(trailLength - 1)), { x: e.clientX, y: e.clientY, id }])
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id))
        }, 500)
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [enabled, trail, trailLength])

  if (isMobile || !enabled) return null

  return (
    <>
      {trail &&
        trails.map((t, i) => (
          <div
            key={t.id}
            className="pointer-events-none fixed rounded-full"
            style={{
              left: t.x - size / 2,
              top: t.y - size / 2,
              width: size * (i / trails.length),
              height: size * (i / trails.length),
              backgroundColor: color,
              opacity: (i / trails.length) * 0.3,
              mixBlendMode: blendMode,
              zIndex: zIndex - 1,
              transition: 'opacity 0.3s, width 0.3s, height 0.3s',
            }}
          />
        ))}
      <div
        className={cn(
          'pointer-events-none fixed rounded-full transition-transform duration-100 ease-out',
          className
        )}
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
          backgroundColor: color,
          mixBlendMode: blendMode,
          zIndex,
        }}
      />
    </>
  )
}
