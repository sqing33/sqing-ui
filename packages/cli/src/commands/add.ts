import inquirer from 'inquirer'
import chalk from 'chalk'
import ora from 'ora'
import { execa } from 'execa'
import { logger } from '../utils/logger.js'
import { readComponentsConfig, installComponent } from '../utils/copy-files.js'
import { writeDependencies } from '../utils/resolve-deps.js'
import { detectPackageManager, installCommands } from '../utils/detect-package-manager.js'
import { registry } from '@sqing/registry/registry.json'

// Note: importing JSON with assertions may need flag in newer Node
import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// 解析到 packages/registry/src/registry.json
const REGISTRY_PATH = join(__dirname, '../../../registry/src/registry.json')

interface RegistryJSON {
  name: string
  version: string
  homepage?: string
  items: Array<{
    name: string
    type: string
    title: string
    description: string
    category: string
    dependencies: string[]
    devDependencies: string[]
    registryDependencies: string[]
    files: Array<{ path: string; target: string; type: string }>
  }>
}

async function loadRegistry(): Promise<RegistryJSON> {
  const content = await readFile(REGISTRY_PATH, 'utf-8')
  return JSON.parse(content)
}

export async function add(componentNames?: string[]) {
  const cwd = process.cwd()
  const pm = detectPackageManager(cwd)

  logger.newline()
  logger.info(`使用包管理器: ${chalk.cyan(pm)}`)
  logger.newline()

  // 1. 加载 registry
  const spinner = ora('加载 registry...').start()
  const registry = await loadRegistry()
  spinner.succeed(`已加载 registry (${registry.items.length} 个组件)`)

  // 2. 读取 components.json
  const config = await readComponentsConfig(cwd)

  // 3. 解析要安装的组件名
  let names: string[] = componentNames?.filter(Boolean) || []

  if (names.length === 0) {
    // 交互式选择
    const { selected } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selected',
        message: '选择要安装的组件：',
        choices: registry.items.map((item) => ({
          name: `${item.name.padEnd(24)} ${chalk.dim(item.title)}`,
          value: item.name,
        })),
        pageSize: 15,
      },
    ])
    names = selected
  }

  if (names.length === 0) {
    logger.warn('未选择任何组件。')
    return
  }

  // 4. 校验组件名
  const validNames: string[] = []
  const invalidNames: string[] = []
  for (const name of names) {
    if (registry.items.find((i) => i.name === name)) {
      validNames.push(name)
    } else {
      invalidNames.push(name)
    }
  }

  if (invalidNames.length > 0) {
    logger.error(`以下组件不存在：${invalidNames.join(', ')}`)
    logger.info(`可用组件：${chalk.dim(registry.items.map((i) => i.name).join(', '))}`)
    if (validNames.length === 0) return
  }

  // 5. 解析所有依赖
  const allDeps = new Set<string>()
  const allDevDeps = new Set<string>()
  for (const name of validNames) {
    const item = registry.items.find((i) => i.name === name)!
    item.dependencies.forEach((d) => allDeps.add(d))
    item.devDependencies.forEach((d) => allDevDeps.add(d))
  }

  // 6. 复制文件
  logger.newline()
  for (const name of validNames) {
    const fileSpinner = ora(`安装 ${chalk.cyan(name)}...`).start()
    try {
      const { filePath } = await installComponent(
        join(__dirname, '../../../registry'),
        config,
        name,
        cwd
      )
      fileSpinner.succeed(`${chalk.cyan(name)} 已创建`)
      logger.dim(`  ${filePath}`)
    } catch (err) {
      fileSpinner.fail(`${chalk.cyan(name)} 安装失败`)
      logger.error((err as Error).message)
    }
  }

  // 7. 写入依赖
  if (allDeps.size > 0 || allDevDeps.size > 0) {
    logger.newline()
    const depSpinner = ora('写入依赖...').start()
    if (allDeps.size > 0) {
      await writeDependencies([...allDeps], false, cwd)
    }
    if (allDevDeps.size > 0) {
      await writeDependencies([...allDevDeps], true, cwd)
    }
    depSpinner.succeed('依赖已写入 package.json')

    // 8. 安装依赖
    const installSpinner = ora(`运行 ${pm} install...`).start()
    try {
      await execa(pm, ['install'], { cwd, stdio: 'ignore' })
      installSpinner.succeed('依赖已安装')
    } catch (err) {
      installSpinner.fail('依赖安装失败，请手动运行')
      logger.dim(`  ${installCommands[pm]} ${[...allDeps].join(' ')}`)
    }
  }

  logger.newline()
  logger.success(`完成！已安装 ${validNames.length} 个组件`)
  logger.newline()
  logger.info('导入示例：')
  for (const name of validNames) {
    const pascal = name
      .split('-')
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join('')
    logger.dim(`  import { ${pascal} } from "@/components/sqing-ui/${name}"`)
  }
  logger.newline()
}
