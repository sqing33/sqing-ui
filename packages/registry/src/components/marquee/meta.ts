import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'marquee',
  description: '无限滚动条，内容循环滚动，支持水平和垂直方向。',
  category: 'scroll',
  tags: ['marquee', 'scroll', 'infinite', '滚动', '无限'],
  props: [
    { name: 'direction', type: "'horizontal' | 'vertical'", defaultValue: 'horizontal', description: '滚动方向' },
    { name: 'speed', type: 'number', defaultValue: 30, description: '滚动速度（像素/秒）' },
    { name: 'pauseOnHover', type: 'boolean', defaultValue: true, description: '悬停时暂停' },
    { name: 'reverse', type: 'boolean', defaultValue: false, description: '反向滚动' },
    { name: 'children', type: 'ReactNode', required: true, description: '滚动内容' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
