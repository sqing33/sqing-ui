import { existsSync } from 'node:fs'
import { join } from 'node:path'

export type PackageManager = 'pnpm' | 'yarn' | 'npm' | 'bun'

/**
 * 检测项目使用的包管理器
 */
export function detectPackageManager(cwd: string = process.cwd()): PackageManager {
  if (existsSync(join(cwd, 'pnpm-lock.yaml'))) return 'pnpm'
  if (existsSync(join(cwd, 'bun.lockb')) || existsSync(join(cwd, 'bun.lock'))) return 'bun'
  if (existsSync(join(cwd, 'yarn.lock'))) return 'yarn'
  if (existsSync(join(cwd, 'package-lock.json'))) return 'npm'

  // 默认 pnpm（个人项目偏好）
  return 'pnpm'
}

export const installCommands: Record<PackageManager, string> = {
  pnpm: 'pnpm add',
  yarn: 'yarn add',
  npm: 'npm install',
  bun: 'bun add',
}

export const dlxCommands: Record<PackageManager, string> = {
  pnpm: 'pnpm dlx',
  yarn: 'npx',
  npm: 'npx',
  bun: 'bunx',
}
