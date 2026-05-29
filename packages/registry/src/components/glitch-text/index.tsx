'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'

export interface GlitchTextProps {
  /** 要显示的文字 */
  text: string
  /** 动画速度倍率 */
  speed?: number
  /** 是否启用 RGB 阴影 */
  enableShadows?: boolean
  /** 是否仅在 hover 时触发 */
  enableOnHover?: boolean
  /** 自定义 className */
  className?: string
}

/**
 * GlitchText - 故障艺术文字
 *
 * 通过 ::before 和 ::after 伪元素 + clip-path + 动画制造 RGB 错位故障效果。
 * 灵感来源：Magic UI Glitch Text
 */
export function GlitchText({
  text,
  speed = 1,
  enableShadows = true,
  enableOnHover = false,
  className,
}: GlitchTextProps) {
  const inlineStyles = enableShadows
    ? {
        textShadow: '0 0 0 transparent',
        '--shadow-length': '4px',
        '--shadow-color-1': '#00ffff',
        '--shadow-color-2': '#ff00ff',
      } as React.CSSProperties
    : {}

  return (
    <span
      className={cn(
        'relative inline-block font-mono font-bold uppercase',
        className
      )}
      style={inlineStyles}
      data-text={text}
    >
      <span className="glitch-text-main">{text}</span>
      {enableShadows && (
        <>
          <span className="glitch-text-before" aria-hidden="true">
            {text}
          </span>
          <span className="glitch-text-after" aria-hidden="true">
            {text}
          </span>
        </>
      )}
      <style jsx>{`
        .glitch-text-main {
          position: relative;
          z-index: 1;
        }
        .glitch-text-before,
        .glitch-text-after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text-before {
          color: #00ffff;
          animation: ${enableOnHover ? 'none' : `glitch-before ${2 / speed}s infinite linear alternate-reverse`};
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        .glitch-text-after {
          color: #ff00ff;
          animation: ${enableOnHover ? 'none' : `glitch-after ${3 / speed}s infinite linear alternate-reverse`};
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }
        @keyframes glitch-before {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes glitch-after {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(3px, 3px);
          }
          60% {
            transform: translate(-3px, 3px);
          }
          80% {
            transform: translate(-3px, -3px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        ${enableOnHover ? `
        &:hover .glitch-text-before {
          animation: glitch-before ${2 / speed}s infinite linear alternate-reverse;
        }
        &:hover .glitch-text-after {
          animation: glitch-after ${3 / speed}s infinite linear alternate-reverse;
        }
        ` : ''}
      `}</style>
    </span>
  )
}
