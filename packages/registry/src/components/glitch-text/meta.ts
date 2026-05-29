import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'glitch-text',
  description: '故障艺术文字，RGB 错位、抖动、闪烁效果。',
  category: 'visual',
  tags: ['glitch', 'text', 'rgb', '故障', '文字'],
  props: [
    { name: 'text', type: 'string', required: true, description: '要显示的文字' },
    { name: 'speed', type: 'number', defaultValue: 1, description: '动画速度倍率' },
    { name: 'enableShadows', type: 'boolean', defaultValue: true, description: '是否启用 RGB 阴影' },
    { name: 'enableOnHover', type: 'boolean', defaultValue: false, description: '是否仅在 hover 时触发动画' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
