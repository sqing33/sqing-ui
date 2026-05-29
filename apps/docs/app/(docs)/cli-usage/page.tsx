import Link from 'next/link'

export const metadata = {
  title: 'CLI 使用',
  description: '使用 CLI 一键添加组件到你的项目',
}

export default function CliUsagePage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">CLI 使用</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Sqing UI 提供了一个简单的 CLI 工具,可以在 monorepo 中快速添加组件源码到目标应用。
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">快速开始</h2>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`# 添加单个组件
pnpm --filter docs cli add aurora-text

# 添加多个组件
pnpm --filter docs cli add tilt-card spotlight-card

# 列出所有可用组件
pnpm --filter docs cli list`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">命令参考</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">add</h3>
      <p className="mb-4 text-muted-foreground">
        把指定组件的源码复制到目标应用的 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">src/components/ui/</code> 目录:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`pnpm --filter docs cli add <component-name> [...components]`}</code>
      </pre>
      <p className="mb-4 text-muted-foreground">
        <strong>参数</strong>:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;component-name&gt;</code>:组件名,可在 <Link href="/components" className="text-blue-600 hover:underline">组件列表</Link> 中查看</li>
      </ul>
      <p className="mb-4 text-muted-foreground">
        <strong>示例</strong>:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`# 添加极光文字
pnpm --filter docs cli add aurora-text

# 添加倾斜卡片 + 聚光灯卡片 + 玻璃卡片
pnpm --filter docs cli add tilt-card spotlight-card glass-card`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">list</h3>
      <p className="mb-4 text-muted-foreground">
        列出 registry 中所有可用的组件:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`pnpm --filter docs cli list`}</code>
      </pre>
      <p className="mb-4 text-muted-foreground">
        输出示例:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`sqing-ui registry
==================

[鼠标与光标]
  cursor-follow        鼠标跟随自定义光标
  magnetic-button      磁性按钮

[3D 与视差]
  tilt-card            3D 倾斜卡片
  spotlight-card       聚光灯卡片

[视觉特效]
  glass-card           玻璃态卡片
  glitch-text          故障文字
  blob                 液态斑点
  aurora-text          极光文字

[背景动画]
  gradient-mesh        渐变网格
  noise-grain          噪点质感
  meteor-shower        流星雨

[数据与滚动]
  count-up             数字滚动
  marquee              无限滚动条

[交互组件]
  animated-tabs        粘性指示器 Tabs

共 14 个组件`}</code>
      </pre>

      <h3 className="mt-6 mb-3 text-xl font-semibold">info</h3>
      <p className="mb-4 text-muted-foreground">
        查看指定组件的详细信息(API、依赖、源码大小):
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`pnpm --filter docs cli info tilt-card`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Registry 文件结构</h2>
      <p className="mb-4 text-muted-foreground">
        CLI 从 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/src/registry.json</code> 读取组件元数据,从 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/src/registry/&lt;name&gt;/index.tsx</code> 读取组件源码。
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`apps/docs/src/registry.json        # 索引
apps/docs/src/registry/
  aurora-text/index.tsx
  tilt-card/index.tsx
  spotlight-card/index.tsx
  ...`}</code>
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">构建 Registry</h2>
      <p className="mb-4 text-muted-foreground">
        修改组件源码后,需要重新构建 registry:
      </p>
      <pre className="mb-6 overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm">
        <code>{`pnpm --filter docs build:registry`}</code>
      </pre>
      <p className="mb-4 text-muted-foreground">
        该命令会同时生成:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/src/registry.json</code> — 索引文件</li>
        <li><code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">apps/docs/public/r/&lt;name&gt;.json</code> — 每个组件的独立 JSON(给 shadcn CLI 使用)</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">不用 CLI?手动复制也行</h2>
      <p className="mb-4 text-muted-foreground">
        CLI 只是方便开发时使用,完全不是必须的。打开任意组件详情页,点击右上角 <strong>"复制源码"</strong> 按钮,粘贴到你的项目即可。
      </p>
      <p className="mb-4 text-muted-foreground">
        这种方式的好处:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>零依赖</strong>:不需要安装 CLI,直接读源码</li>
        <li><strong>可控</strong>:你可以立刻根据需要改组件代码</li>
        <li><strong>可学习</strong>:看到每一行怎么写,而不是黑盒 npm 包</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">下一步</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>查看 <Link href="/contributing" className="text-blue-600 hover:underline">贡献指南</Link> 学会如何贡献新组件</li>
        <li>阅读 <Link href="/theming" className="text-blue-600 hover:underline">主题定制</Link></li>
        <li>浏览 <Link href="/components" className="text-blue-600 hover:underline">所有组件</Link></li>
      </ul>
    </>
  )
}
