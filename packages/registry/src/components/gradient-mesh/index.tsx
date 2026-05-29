'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface GradientMeshProps {
  /** 渐变颜色数组 */
  colors?: string[]
  /** 动画时长（秒） */
  speed?: number
  /** 模糊半径 */
  blur?: number
  /** 自定义 className */
  className?: string
}

/**
 * GradientMesh - 渐变网格背景
 *
 * 多个模糊的渐变球体通过动画流动融合，
 * 形成丝滑的渐变背景。
 * 灵感来源：Magic UI / Aceternity UI
 */
export function GradientMesh({
  colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'],
  speed = 20,
  blur = 80,
  className,
}: GradientMeshProps) {
  return (
    <div className={cn('relative overflow-hidden bg-slate-950', className)}>
      <div className="absolute inset-0">
        {colors.map((color, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '50%',
              height: '50%',
              left: `${(i % 2) * 30}%`,
              top: `${Math.floor(i / 2) * 30}%`,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              filter: `blur(${blur}px)`,
              animation: `gradient-mesh-${i} ${speed}s ease-in-out infinite alternate`,
              mixBlendMode: 'screen',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gradient-mesh-0 {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          100% {
            transform: translate(50%, 30%) scale(1.2);
          }
        }
        @keyframes gradient-mesh-1 {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          100% {
            transform: translate(-30%, 50%) scale(1.3);
          }
        }
        @keyframes gradient-mesh-2 {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          100% {
            transform: translate(40%, -30%) scale(1.1);
          }
        }
        @keyframes gradient-mesh-3 {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          100% {
            transform: translate(-50%, 20%) scale(1.4);
          }
        }
      `}</style>
    </div>
  )
}
