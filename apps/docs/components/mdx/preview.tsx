'use client'

import * as React from 'react'

interface PreviewProps {
  name: string
  className?: string
}

// 静态导入所有 demos
// 当新增组件时，需要在此处添加一行 import
import { CursorFollowDemo } from '@sqing/registry/components/cursor-follow/demo'
import { MagneticButtonDemo } from '@sqing/registry/components/magnetic-button/demo'
import { TiltCardDemo } from '@sqing/registry/components/tilt-card/demo'
import { GlassCardDemo } from '@sqing/registry/components/glass-card/demo'
import { CountUpDemo } from '@sqing/registry/components/count-up/demo'
import { MarqueeDemo } from '@sqing/registry/components/marquee/demo'
import { GlitchTextDemo } from '@sqing/registry/components/glitch-text/demo'
import { BlobDemo } from '@sqing/registry/components/blob/demo'
import { GradientMeshDemo } from '@sqing/registry/components/gradient-mesh/demo'
import { AuroraTextDemo } from '@sqing/registry/components/aurora-text/demo'
import { SpotlightCardDemo } from '@sqing/registry/components/spotlight-card/demo'
import { AnimatedTabsDemo } from '@sqing/registry/components/animated-tabs/demo'
import { NoiseGrainDemo } from '@sqing/registry/components/noise-grain/demo'
import { MeteorShowerDemo } from '@sqing/registry/components/meteor-shower/demo'

const DEMO_MAP: Record<string, React.ComponentType<any>> = {
  'cursor-follow': CursorFollowDemo,
  'magnetic-button': MagneticButtonDemo,
  'tilt-card': TiltCardDemo,
  'glass-card': GlassCardDemo,
  'count-up': CountUpDemo,
  marquee: MarqueeDemo,
  'glitch-text': GlitchTextDemo,
  blob: BlobDemo,
  'gradient-mesh': GradientMeshDemo,
  'aurora-text': AuroraTextDemo,
  'spotlight-card': SpotlightCardDemo,
  'animated-tabs': AnimatedTabsDemo,
  'noise-grain': NoiseGrainDemo,
  'meteor-shower': MeteorShowerDemo,
}

/**
 * 组件实时预览
 *
 * 用法: <Preview name="cursor-follow" />
 * 会渲染对应组件的 demo
 */
export function Preview({ name, className }: PreviewProps) {
  const Demo = DEMO_MAP[name]

  if (!Demo) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed bg-muted/30 p-12 text-sm text-muted-foreground">
        组件 <code className="rounded bg-muted px-1.5 py-0.5">{name}</code> 的 demo 尚未实现
      </div>
    )
  }

  return (
    <div className={`relative min-h-[300px] rounded-lg border bg-background overflow-hidden ${className ?? ''}`}>
      <Demo />
    </div>
  )
}
