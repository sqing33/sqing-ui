#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'
import { init } from './commands/init.js'
import { add } from './commands/add.js'
import { list } from './commands/list.js'

const program = new Command()

program
  .name('sqing-ui')
  .description('Sqing UI CLI - 复制创意组件源码到你的项目')
  .version('0.1.0')

program
  .command('init')
  .description('初始化 components.json 配置')
  .action(init)

program
  .command('add [components...]')
  .description('添加组件到当前项目（支持多个，空参数进入交互模式）')
  .action(add)

program
  .command('list [category]')
  .description('列出所有可用组件')
  .action(list)

program.addHelpText(
  'after',
  `
${chalk.bold('示例：')}
  $ sqing-ui init
  $ sqing-ui add cursor-follow
  $ sqing-ui add cursor-follow magnetic-button tilt-card
  $ sqing-ui add                  ${chalk.dim('# 交互式选择')}
  $ sqing-ui list                 ${chalk.dim('# 列出所有')}
  $ sqing-ui list cursor          ${chalk.dim('# 按分类筛选')}
`
)

program.parseAsync(process.argv).catch((err) => {
  console.error(chalk.red('错误:'), err.message)
  process.exit(1)
})
