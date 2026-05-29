import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

interface PackageJson {
  name?: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  [key: string]: unknown
}

/**
 * 读取 package.json
 */
export async function readPackageJson(cwd: string = process.cwd()): Promise<PackageJson> {
  const path = join(cwd, 'package.json')
  if (!existsSync(path)) {
    throw new Error('当前目录不是 Node.js 项目（缺少 package.json）。')
  }
  const content = await readFile(path, 'utf-8')
  return JSON.parse(content)
}

/**
 * 把依赖写入 package.json（去重）
 */
export async function writeDependencies(
  deps: string[],
  dev: boolean = false,
  cwd: string = process.cwd()
): Promise<{ added: string[]; skipped: string[] }> {
  const pkg = await readPackageJson(cwd)
  const target = dev ? 'devDependencies' : 'dependencies'

  pkg[target] = pkg[target] || {}
  const added: string[] = []
  const skipped: string[] = []

  for (const dep of deps) {
    if (pkg[target]![dep]) {
      skipped.push(dep)
      continue
    }
    pkg[target]![dep] = 'latest'
    added.push(dep)
  }

  await writeFile(join(cwd, 'package.json'), JSON.stringify(pkg, null, 2) + '\n', 'utf-8')

  return { added, skipped }
}
