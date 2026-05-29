# Sqing UI

> 创意 React 组件库 — 鼠标效果、3D 视差、视觉特效、背景动画、滚动动画,开箱即用

一套面向 React 的创意组件库,采用 shadcn 风格的 **copy-paste 安装模式**,组件源码直接复制进你的项目,不锁死品牌色,不依赖黑盒 npm 包。

## 特性

- 🎨 **14 个创意组件** — 鼠标跟随、3D 倾斜、聚光灯、故障文字、毛玻璃、极光文字、渐变网格、噪点、流星雨等
- 📦 **Copy-paste 安装** — 源码进项目,可改可学,不像 shadcn 那样依赖 CLI 黑盒
- 🎯 **完整 a11y** — 所有交互组件都带键盘导航、role/aria 标签
- 🌓 **暗色模式** — 所有组件对 dark mode 友好,配合 `next-themes` 即用
- 🎨 **不锁死品牌色** — 通过 CSS 变量 + Tailwind tokens 控制,一行改全局
- 📱 **移动端降级** — `CursorFollow` 等遮挡型组件默认 `disableOnMobile: true`
- ⚡ **Framer Motion** — 全部基于 framer-motion 的 useMotionValue / useSpring / layoutId 等现代 API
- ♿ **prefers-reduced-motion** — 推荐实现,尊重系统动画偏好

## 快速开始

### 安装 CLI 工具

```bash
npx sqing-ui@latest init
```

### 添加组件到你的项目

```bash
# 添加单个组件
npx sqing-ui@latest add cursor-follow

# 一次添加多个
npx sqing-ui@latest add cursor-follow magnetic-button tilt-card

# 交互式选择
npx sqing-ui@latest add

# 列出所有可用组件
npx sqing-ui@latest list

# 按分类筛选
npx sqing-ui@latest list cursor
```

## 组件列表

### 鼠标与光标
- `cursor-follow` — 自定义光标,跟随鼠标并支持混合模式反色
- `magnetic-button` — 磁吸按钮,鼠标靠近时按钮被吸附

### 3D 与视差
- `tilt-card` — 3D 倾斜卡片,跟随指针倾斜
- `spotlight-card` — 聚光灯卡片,鼠标光照 + 边框发光

### 视觉特效
- `glass-card` — 毛玻璃卡片
- `glitch-text` — 故障文字
- `blob` — 液态形变
- `aurora-text` — 极光文字

### 背景动画
- `gradient-mesh` — 渐变网格
- `noise-grain` — 噪点颗粒
- `meteor-shower` — 流星雨

### 数据与滚动
- `count-up` — 数字滚动
- `marquee` — 无限滚动

### 交互组件
- `animated-tabs` — 粘性指示器 Tabs(基于 framer-motion layoutId)

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动 docs 开发服务器 (http://localhost:3000)
pnpm dev

# 完整构建 (registry + docs)
pnpm build

# 改完组件源码后重新生成 registry JSON
pnpm registry:build

# 类型检查 / lint
pnpm typecheck
pnpm lint
```

## 项目结构

```
.
├── apps/docs/                 # Next.js 15 文档站
│   ├── app/(docs)/            # 文档路由组
│   ├── components/            # 站点级组件
│   └── public/r/              # shadcn registry JSON
├── packages/registry/         # 组件源码 (核心)
│   ├── src/components/        # 14 个组件
│   └── scripts/build-registry.ts
└── packages/cli/              # 用户端 CLI
    └── src/commands/          # init / add / list
```

## 技术栈

- **框架** — Next.js 15 + React 18 + TypeScript 5
- **样式** — Tailwind CSS 4 + CSS 变量
- **动画** — Framer Motion 11
- **UI 原语** — Radix UI
- **包管理** — pnpm 10 workspaces

## 致谢

- [shadcn/ui](https://ui.shadcn.com/) — 组件分发与 registry 模式灵感
- [Aceternity UI](https://ui.aceternity.com/) — 多个组件的视觉参考
- [Magic UI](https://magicui.design/) — 部分动效设计参考
- [Framer Motion](https://www.framer.com/motion/) — 动画引擎
- [Atropos.js](https://atroposjs.com/) — 早期光斑反射效果参考

## 许可证

[MIT](./LICENSE)
