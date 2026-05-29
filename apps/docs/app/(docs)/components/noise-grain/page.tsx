'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function NoiseGrainPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Noise Grain</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        基于 SVG <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">feTurbulence</code> 滤镜生成的胶片颗粒纹理层,通常覆盖在彩色背景上增加"高级感"的颗粒质感。
      </p>

      <Preview name="noise-grain" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="noise-grain/index.tsx" componentName="noise-grain" />
        <InstallTabs component="noise-grain" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        使用 SVG <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;feTurbulence type="fractalNoise" /&gt;</code> 配合 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;feColorMatrix type="saturate" values="0" /&gt;</code> 生成黑白噪点,然后用一个 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">mix-blend-mode</code> 把它叠加到下方背景上。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">density</code> 映射到 SVG 的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">baseFrequency</code>,值越大噪点越细密;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">opacity</code> 控制整体不透明度。
      </p>
      <p className="mt-4 text-muted-foreground">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">speed</code> 默认 0 (静态),大于 0 时每隔 N 秒重新生成一份噪点,产生"动态颗粒"效果。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">React.useId()</code> 保证多个实例的 filter id 不冲突。建议父容器用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">relative</code>,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">NoiseGrain</code> 会 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">absolute inset-0</code> 铺满,并 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">pointer-events-none</code> 不影响点击。适合 Hero / 营销页 / 作品集的高级感背景。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'noise-grain',
          description: '噪点质感层 (film grain),基于 SVG feTurbulence 滤镜生成胶片颗粒纹理。',
          props: [
            { name: 'opacity', type: 'number', defaultValue: 0.15, description: '噪点不透明度 (0-1)' },
            { name: 'density', type: 'number', defaultValue: 0.6, description: '噪点密度,控制 baseFrequency,越大越细密' },
            { name: 'blendMode', type: "'overlay' | 'multiply' | 'screen' | 'soft-light'", defaultValue: 'overlay', description: '混合模式' },
            { name: 'speed', type: 'number', defaultValue: 0, description: '动画速度 (秒),0 表示静态;> 0 时每隔 N 秒重新生成噪点' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { NoiseGrain } from '@sqing/registry/components/noise-grain'

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <NoiseGrain opacity={0.2} density={0.7} blendMode="overlay" speed={0} />
      <h1 className="relative grid h-full place-items-center text-6xl font-black text-white">
        Film Grain Hero
      </h1>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        胶片摄影 (Kodak Portra 400 / Fuji Pro 400H) 的颗粒感、Brutalism 设计风网站、Y2K 复古 UI、Bruno Simon 的 personal site 都是这种"胶片颗粒"质感的代表;底层 SVG <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">feTurbulence</code> 是 W3C SVG Filter 规范的"原生 CSS 工具",无需任何图片资源。
      </p>
    </>
  )
}
