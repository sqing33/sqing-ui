'use client'

import { Preview } from '@/components/mdx/preview'
import { ApiTable } from '@/components/mdx/api-table'
import { InstallTabs } from '@/components/mdx/install-tabs'
import { CopySourceButton } from '@/components/mdx/copy-source-button'

export default function MeteorShowerPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Meteor Shower</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        多个流星随机从夜空划过,每条带渐变拖尾 + 淡入淡出,纯 CSS @keyframes 实现,零运行时开销,适合做营销页 Hero / 404 页面背景。
      </p>

      <Preview name="meteor-shower" />

      <div className="my-6 flex items-center gap-2">
        <CopySourceButton sourcePath="meteor-shower/index.tsx" componentName="meteor-shower" />
        <InstallTabs component="meteor-shower" />
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">说明</h2>
      <p className="text-muted-foreground">
        每条流星是一个绝对定位的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;span&gt;</code>,宽度随机 120-280px,粗细 1-3px,rotate(-45deg) 倾斜;<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">background: linear-gradient(to right, color, trailColor, transparent)</code> 形成从白到透明渐变的尾巴;再通过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">box-shadow</code> 给头部加一层发光;最后用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">@keyframes</code> 让它 translate3d 飞到左下角,中间做 opacity 0 → 1 → 1 → 0 的淡入淡出。
      </p>
      <p className="mt-4 text-muted-foreground">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">count</code> 控制流星总数,<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">minDelay</code> / <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">maxDelay</code> 让各条流星错开进场避免同时划过。<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">React.useId()</code> + <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">makeRng(seed)</code> 保证 SSR/CSR 一致,多个实例不冲突。适合 marketing 落地页、404 page、Hero 背景夜空、节日主题页面。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">API</h2>
      <ApiTable
        meta={{
          name: 'meteor-shower',
          description: '流星雨背景,多条流星随机从夜空划过,带渐变拖尾与淡入淡出效果。',
          props: [
            { name: 'count', type: 'number', defaultValue: 20, description: '流星数量' },
            { name: 'color', type: 'string', defaultValue: '#ffffff', description: '头部颜色' },
            { name: 'trailColor', type: 'string', defaultValue: 'rgba(255, 255, 255, 0.3)', description: '拖尾颜色' },
            { name: 'speed', type: 'number', defaultValue: 1, description: '速度倍率,越大越快' },
            { name: 'minDelay', type: 'number', defaultValue: 0, description: '最小延迟 (秒)' },
            { name: 'maxDelay', type: 'number', defaultValue: 1.5, description: '最大延迟 (秒)' },
            { name: 'className', type: 'string', description: '自定义 className' },
          ],
        }}
      />

      <h2 className="mt-10 mb-4 text-2xl font-semibold">用法示例</h2>
      <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`import { MeteorShower } from '@sqing/registry/components/meteor-shower'

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <MeteorShower count={30} color="#ffffff" trailColor="rgba(255,255,255,0.2)" speed={1.2} />
      <h1 className="relative grid h-full place-items-center text-6xl font-black text-white">
        欢迎来到星空
      </h1>
    </div>
  )
}`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">设计灵感</h2>
      <p className="text-muted-foreground">
        经典夜空效果,营销页、404 页面、黑色星期五活动页常用;Magic UI "Meteors" 组件、shadcn registry 早期的 starfield 概念、Black Friday / Cyber Monday 主题 landing page 都是这套视觉原型。
      </p>
    </>
  )
}
