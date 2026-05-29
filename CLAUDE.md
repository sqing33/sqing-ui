# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 语言要求

- **始终使用中文回答用户**,包括解释、总结、进度汇报等所有非代码输出
- 代码、变量名、注释保持英文(符合项目已有风格)

## 项目概述

Sqing UI — 一套面向 React 的创意组件库,提供鼠标跟随、3D 视差、视觉特效、背景动画、滚动动画等"提升设计感"的开箱即用组件。采用 shadcn 风格的 copy-paste 安装模式,用户通过 CLI 把组件源码直接复制进自己的项目,不锁死品牌色。

前身:Creative UI。本仓库在 2026-05-29 统一改名。

## 架构

pnpm monorepo,三个 workspace:

```
apps/docs/                       # Next.js 15 文档站 (端口 3000)
  ├─ app/(docs)/                 # 文档路由组:introduction / installation / theming / contributing / components/*
  ├─ app/(docs)/components/      # 14 个组件的展示页
  ├─ components/                 # 站点级组件:sidebar / site-header / mdx/* / ui/*
  ├─ content/docs.json           # sidebar 导航配置(中文标题)
  └─ public/r/*.json             # shadcn registry 索引 (CLI 拉取用)

packages/registry/               # 组件源码 + 元数据 (核心包)
  ├─ src/components/<name>/      # 每个组件一个目录,含 index.tsx / demo.tsx / meta.ts
  ├─ src/_internal/              # 内部工具
  ├─ src/utils/cn.ts             # className 合并工具
  ├─ src/registry.json           # 组件总索引
  ├─ src/schema.ts               # 组件元数据 schema
  └─ scripts/build-registry.ts   # 扫描 src/components/ 生成 public/r/*.json

packages/cli/                    # 用户端 CLI (sqing-ui)
  └─ src/
      ├─ index.ts                # commander 入口:init / add / list 三个子命令
      ├─ commands/               # 各子命令实现
      └─ utils/                  # 包管理器检测 / 依赖解析 / 文件复制 / 日志
```

## 目录结构关键约定

- **新组件** = 在 `packages/registry/src/components/<kebab-name>/` 下建目录,必须有 `index.tsx`、`demo.tsx`、`meta.ts` 三个文件
- **组件展示页** = `apps/docs/app/(docs)/components/<name>/page.tsx`
- **sidebar 注册** = 在 `apps/docs/content/docs.json` 的 `navigation` 加 `{slug, title}` 条目(title 写中文)
- **改完组件源码后** = 跑 `pnpm registry:build` 重新生成 `apps/docs/public/r/*.json`

## 常用命令

```bash
# 启动 docs 开发服务器 (http://localhost:3000)
pnpm dev

# 完整构建 (registry + docs)
pnpm build

# 重新生成 registry JSON (改完组件源码后必跑)
pnpm registry:build

# 类型检查 / lint
pnpm typecheck
pnpm lint

# 构建 CLI 包 (发版时用)
pnpm build:cli

# 直接跑某个 workspace
pnpm --filter docs <script>
pnpm --filter @sqing/registry <script>
pnpm --filter @sqing/cli <script>
```

## 技术栈

- **框架**:Next.js 15 + React 18 + TypeScript 5
- **样式**:Tailwind CSS 4 + CSS 变量 + `tailwind-merge` / `clsx`
- **动画**:framer-motion 11(useMotionValue / useSpring / useTransform / layoutId)
- **UI 原语**:Radix UI(dialog / tabs / tooltip / popover / slot)
- **Markdown 渲染**:@next/mdx + next-mdx-remote + rehype-pretty-code(shiki 高亮)
- **CLI**:commander + chalk + tsx(运行时)
- **构建**:tsup (CLI 包)
- **包管理**:pnpm 10 workspaces
- **暗色模式**:next-themes

## Git 规范

- 提交信息使用**中文**
- 格式:`<type>(<scope>): <描述>`
- type:feat / fix / refactor / docs / test / chore / style / perf
- 禁止 `git reset --hard`、`git push --force`、`git rebase`、`git branch -D`、`git checkout -- .`
- 撤销用 `git revert`

## 关键设计决策

- **安装模式** = copy-paste(像 shadcn),不是 npm 包依赖;CLI 把 `packages/registry/src/components/<name>/` 下的源码原样复制到用户项目
- **品牌色** = 不锁死,通过 CSS 变量 + Tailwind tokens 控制,详见 `apps/docs/app/(docs)/theming/page.tsx`
- **a11y** = 所有交互组件(tabs / cursor-follow / spotlight-card / animated-tabs)都带完整键盘导航、role/aria 标签
- **移动端** = Cursor Follow 默认 `disableOnMobile: true`,避免在触屏上遮挡点击
- **prefers-reduced-motion** = 动画组件需尊重系统偏好,详见 theming 页
- **命名** = 组件目录 / 公开 API 用 kebab-case(cursor-follow / magnetic-button);React 组件名 PascalCase(CursorFollow / MagneticButton)

## 部署

- **Vercel** = 推荐部署 docs 站点
  - Root Directory:留空(仓库根)
  - Build Command:`pnpm registry:build && pnpm --filter docs build`
  - Output Directory:`apps/docs/.next`
  - Node.js 20.x
- **CLI 发布** = `pnpm build:cli` 后到 `packages/cli/dist` 用 npm publish 发布到 `@sqing/cli`
