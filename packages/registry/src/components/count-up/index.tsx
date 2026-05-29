'use client'

import * as React from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface CountUpProps {
  /** 目标值 */
  to: number
  /** 起始值 */
  from?: number
  /** 动画时长（秒） */
  duration?: number
  /** 小数位数 */
  decimals?: number
  /** 前缀 */
  prefix?: string
  /** 后缀 */
  suffix?: string
  /** 千分位分隔符 */
  separator?: string
  /** 自定义 className */
  className?: string
}

/**
 * CountUp - 数字滚动动画
 *
 * 进入视口后从 from 滚动到 to。
 * 使用 framer-motion 的 spring 实现平滑过渡。
 */
export function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px' })

  const count = useMotionValue(from)
  const damping = 20 + 40 * (1 / duration)
  const stiffness = 100 / duration
  const springValue = useSpring(count, { damping, stiffness })
  const display = useTransform(springValue, (latest) => {
    const value = latest.toFixed(decimals)
    const [intPart, decPart] = value.split('.')
    const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return decPart !== undefined ? `${prefix}${formatted}.${decPart}${suffix}` : `${prefix}${formatted}${suffix}`
  })

  React.useEffect(() => {
    if (inView) {
      count.set(to)
    }
  }, [inView, to, count])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      <motion.span>{display}</motion.span>
    </span>
  )
}
