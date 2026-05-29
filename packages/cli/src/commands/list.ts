import chalk from 'chalk'
import { logger } from '../utils/logger.js'
import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const REGISTRY_PATH = join(__dirname, '../../../registry/src/registry.json')

const CATEGORY_LABELS: Record<string, string> = {
  cursor: '鼠标与光标',
  '3d': '3D 与视差',
  visual: '视觉特效',
  background: '背景动画',
  scroll: '滚动动画',
  data: '数据展示',
  feedback: '反馈组件',
  form: '表单增强',
}

export async function list(category?: string) {
  const content = await readFile(REGISTRY_PATH, 'utf-8')
  const registry = JSON.parse(content)

  logger.newline()
  logger.bold(`Sqing UI Registry v${registry.version}`)
  logger.newline()

  // 按分类分组
  const grouped: Record<string, typeof registry.items> = {}
  for (const item of registry.items) {
    if (category && item.category !== category) continue
    if (!grouped[item.category]) grouped[item.category] = []
    grouped[item.category].push(item)
  }

  for (const [cat, items] of Object.entries(grouped)) {
    const label = CATEGORY_LABELS[cat] || cat
    logger.bold(chalk.cyan(`📁 ${label}`))
    for (const item of items) {
      console.log(
        `  ${chalk.green(item.name.padEnd(24))} ${chalk.dim(item.title)}`
      )
    }
    logger.newline()
  }

  logger.dim(`共 ${registry.items.length} 个组件`)
  logger.newline()
}
