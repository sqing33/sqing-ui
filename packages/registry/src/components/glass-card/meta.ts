import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'glass-card',
  description: '玻璃态卡片，backdrop-filter 模糊背景 + 渐变边框。',
  category: 'visual',
  tags: ['glassmorphism', 'card', 'glass', '玻璃态'],
  props: [
    { name: 'blur', type: 'number', defaultValue: 12, description: '模糊强度（像素）' },
    { name: 'opacity', type: 'number', defaultValue: 0.2, description: '背景不透明度（0-1）' },
    { name: 'border', type: 'boolean', defaultValue: true, description: '是否显示渐变边框' },
    { name: 'children', type: 'ReactNode', required: true, description: '卡片内容' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
