'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function GlitchTextPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Glitch Text</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        通过两个伪元素 + clip-path 模拟经典 VHS / 显示器故障效果,文字呈现 RGB 红蓝错位 + 随机抖动闪烁。
      </p>

      <Preview name="glitch-text" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="glitch-text/index.tsx" componentName="glitch-text" />
        <InstallTabs component="glitch-text" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        通过 CSS <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">data-text</code> 伪元素 + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">clip-path</code> 做横向裁切,主文字是 RGB 错位效果的两个叠加层,再用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">@keyframes</code> 让 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">clip-path</code> 在关键帧之间随机跳跃。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">enableShadows</code> 关闭后只剩文字不显示红蓝色。
      </p>
      <p className="mt-4 text-muted-foreground">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">speed</code> 是动画速度倍率,值越大跳得越慢;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">enableOnHover</code> 默认 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">false</code> 让动画持续播放,设为 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">true</code> 则只在 hover 时触发,适合作为页面标题的"点击看效果" 玩法。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'glitch-text',
          description: '故障艺术文字,RGB 错位、抖动、闪烁效果。',
          props: [
            { name: 'text', type: 'string', required: true, description: '要显示的文字' },
            { name: 'speed', type: 'number', defaultValue: 1, description: '动画速度倍率' },
            { name: 'enableShadows', type: 'boolean', defaultValue: true, description: '是否启用 RGB 阴影' },
            { name: 'enableOnHover', type: 'boolean', defaultValue: false, description: '是否仅在 hover 时触发动画' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { GlitchText } from '@sqing/registry/components/glitch-text'

export default function Page() {
  return (
    <h1 className="text-6xl font-black text-white">
      <GlitchText text="SYSTEM ERROR" enableOnHover speed={1.5} />
    </h1>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        源自 90s VHS 电视画面失真、Cyberpunk 2077 的 HUD 文字、以及 Magic UI 的 "Glitch Text" 组件;Travis Scott MV 的标题卡、Blade Runner 2049 的开机画面都用过类似故障文字。
      </p>
    </>
  )
}
