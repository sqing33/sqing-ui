'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function CursorFollowPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Cursor Follow</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        一个轻量的自定义光标组件,默认挂载到全局,跟随鼠标移动并支持混合模式反色显示。
      </p>

      <Preview name="cursor-follow" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="cursor-follow/index.tsx" componentName="cursor-follow" />
        <InstallTabs component="cursor-follow" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        Cursor Follow 监听 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mousemove</code> 事件,把一个圆形 div 通过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">transform</code> 定位到指针坐标,默认 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">blendMode="difference"</code> 在浅色背景下会把光标反色为深色,适合作为白底黑字页面的鼠标指示器。
      </p>
      <p className="mt-4 text-muted-foreground">
        开启 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">trail</code> 后会在指针后留下一串渐隐的旧位置,形成拖尾效果;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">trailLength</code> 控制拖尾长度。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">disableOnMobile</code> 默认 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">true</code>,在触屏设备上自动隐藏避免遮挡点击。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'cursor-follow',
          description: '鼠标跟随自定义光标,支持多种样式、混合模式、移动端检测。',
          props: [
            { name: 'size', type: 'number', defaultValue: 24, description: '光标直径 (像素)' },
            { name: 'color', type: 'string', defaultValue: '#ffffff', description: '光标颜色' },
            { name: 'blendMode', type: "'normal' | 'difference' | 'exclusion' | 'screen'", defaultValue: 'difference', description: '混合模式 (difference 在白底黑字场景下反色显示)' },
            { name: 'trail', type: 'boolean', defaultValue: false, description: '是否显示拖尾效果' },
            { name: 'trailLength', type: 'number', defaultValue: 8, description: '拖尾长度 (仅 trail=true 时生效)' },
            { name: 'disableOnMobile', type: 'boolean', defaultValue: true, description: '在移动端自动禁用 (避免遮挡内容)' },
            { name: 'zIndex', type: 'number', defaultValue: 9999, description: 'z-index 值' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { CursorFollow } from '@sqing/registry/components/cursor-follow'

export default function Page() {
  return (
    <div>
      <CursorFollow
        size={28}
        color="#ffffff"
        blendMode="difference"
        trail
        trailLength={10}
        disableOnMobile
      />
      <main>{/* 页面内容 */}</main>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        经典 Awwwards 获奖站点 (SOTD) 中常见 "反色光标" 玩法:Pointer 在浅色 hero 上变成深色,划过深色 footer 时又变回浅色;Magic UI / Framer 的早期组件库都用过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mix-blend-mode: difference</code> 实现这一招。
      </p>
    </>
  )
}
