import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'count-up',
  description: '数字滚动动画，从起始值滚动到目标值，常用于数据展示。',
  category: 'data',
  tags: ['count', 'number', 'animation', '数字', '滚动'],
  props: [
    { name: 'to', type: 'number', required: true, description: '目标值' },
    { name: 'from', type: 'number', defaultValue: 0, description: '起始值' },
    { name: 'duration', type: 'number', defaultValue: 2, description: '动画时长（秒）' },
    { name: 'decimals', type: 'number', defaultValue: 0, description: '小数位数' },
    { name: 'prefix', type: 'string', description: '前缀，如 "$"' },
    { name: 'suffix', type: 'string', description: '后缀，如 "%"' },
    { name: 'separator', type: 'string', defaultValue: ',', description: '千分位分隔符' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: ['framer-motion'],
  devDependencies: [],
  registryDependencies: [],
}
