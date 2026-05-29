import { writeFile, existsSync } from 'node:fs/promises'
import { join } from 'node:path'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { logger } from '../utils/logger.js'

const DEFAULT_CONFIG = {
  $schema: 'https://sqing-ui.dev/schema.json',
  style: 'new-york',
  rsc: true,
  tsx: true,
  tailwind: {
    config: '',
    css: 'app/globals.css',
    baseColor: 'neutral',
    cssVariables: true,
    prefix: '',
  },
  aliases: {
    components: '@/components',
    utils: '@/lib/utils',
    ui: '@/components/ui',
    lib: '@/lib',
    hooks: '@/hooks',
  },
  iconLibrary: 'lucide',
}

export async function init(cwd: string = process.cwd()) {
  const configPath = join(cwd, 'components.json')

  if (existsSync(configPath)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'components.json 已存在，是否覆盖？',
        default: false,
      },
    ])
    if (!overwrite) {
      logger.warn('已取消。')
      return
    }
  }

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'componentsAlias',
      message: '组件目录别名？',
      default: '@/components',
    },
    {
      type: 'input',
      name: 'utilsAlias',
      message: '工具函数目录别名？',
      default: '@/lib/utils',
    },
    {
      type: 'list',
      name: 'baseColor',
      message: '基础色？',
      choices: ['neutral', 'slate', 'zinc', 'stone', 'gray'],
      default: 'neutral',
    },
  ])

  const config = {
    ...DEFAULT_CONFIG,
    tailwind: { ...DEFAULT_CONFIG.tailwind, baseColor: answers.baseColor },
    aliases: {
      components: answers.componentsAlias,
      utils: answers.utilsAlias,
      ui: answers.componentsAlias, // ui 默认与 components 同目录
      lib: answers.utilsAlias.split('/').slice(0, -1).join('/') || '@/lib',
      hooks: '@/hooks',
    },
  }

  await writeFile(configPath, JSON.stringify(config, null, 2) + '\n', 'utf-8')

  logger.newline()
  logger.success('已创建 components.json')
  logger.dim(`  路径: ${configPath}`)
  logger.newline()
  logger.info('下一步：')
  logger.info(`  ${chalk.cyan('sqing-ui add cursor-follow')}  添加一个组件`)
  logger.newline()
}
