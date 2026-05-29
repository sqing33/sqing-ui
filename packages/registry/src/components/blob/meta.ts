import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'blob',
  description: '液态斑点（Blob），SVG 路径持续变形的流体效果。',
  category: 'visual',
  tags: ['blob', 'liquid', 'svg', '流体', '斑点'],
  props: [
    { name: 'size', type: 'number', defaultValue: 200, description: '斑点尺寸（像素）' },
    { name: 'color', type: 'string', defaultValue: '#a855f7', description: '斑点颜色' },
    { name: 'speed', type: 'number', defaultValue: 6, description: '变形动画时长（秒）' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
