import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'

/**
 * 读取用户项目的 components.json 配置
 */
export interface ComponentsConfig {
  $schema?: string
  style?: string
  rsc?: boolean
  tsx?: boolean
  aliases?: {
    components?: string
    utils?: string
    ui?: string
    lib?: string
    hooks?: string
  }
}

export async function readComponentsConfig(cwd: string = process.cwd()): Promise<ComponentsConfig> {
  const path = join(cwd, 'components.json')
  if (!existsSync(path)) {
    throw new Error(
      '未找到 components.json。请先运行 `sqing-ui init` 初始化项目。'
    )
  }
  const content = await readFile(path, 'utf-8')
  return JSON.parse(content)
}

/**
 * 把 registry 中组件的源码复制到用户项目
 * @param registryRoot registry 包根目录
 * @param componentsConfig 用户项目的 components.json
 * @param componentName 组件名
 * @param cwd 用户项目目录
 */
export async function installComponent(
  registryRoot: string,
  componentsConfig: ComponentsConfig,
  componentName: string,
  cwd: string = process.cwd()
): Promise<{ filePath: string; sourceCode: string }> {
  const sourcePath = join(registryRoot, 'src/components', componentName, 'index.tsx')
  if (!existsSync(sourcePath)) {
    throw new Error(`组件 "${componentName}" 不存在于 registry 中。`)
  }

  const sourceCode = await readFile(sourcePath, 'utf-8')

  // 解析目标路径：{{components}}/sqing-ui/<name>.tsx
  const componentsAlias = componentsConfig.aliases?.components || '@/components'
  const targetRelative = `${componentsAlias.replace(/^@\//, '')}/sqing-ui/${componentName}.tsx`
  const targetPath = join(cwd, targetRelative)

  await mkdir(dirname(targetPath), { recursive: true })
  await writeFile(targetPath, sourceCode, 'utf-8')

  return { filePath: targetPath, sourceCode }
}
