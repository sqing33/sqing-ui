import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'gradient-mesh',
  description: '渐变网格背景，多个模糊的渐变球体流动融合。',
  category: 'background',
  tags: ['gradient', 'mesh', 'background', '渐变', '背景'],
  props: [
    { name: 'colors', type: 'string[]', defaultValue: "['#ff006e', '#8338ec', '#3a86ff']", description: '渐变颜色数组' },
    { name: 'speed', type: 'number', defaultValue: 20, description: '动画时长（秒）' },
    { name: 'blur', type: 'number', defaultValue: 80, description: '模糊半径' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
