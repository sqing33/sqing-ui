import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'meteor-shower',
  description: '流星雨背景，多条流星随机从夜空划过，带渐变拖尾与淡入淡出效果，营造流星雨星空氛围。',
  category: 'background',
  tags: ['meteor', 'shower', 'background', 'star', 'sky', '流星雨', '星空', '背景'],
  props: [
    { name: 'count', type: 'number', defaultValue: 20, description: '流星数量' },
    { name: 'color', type: 'string', defaultValue: '#ffffff', description: '头部颜色' },
    {
      name: 'trailColor',
      type: 'string',
      defaultValue: 'rgba(255, 255, 255, 0.3)',
      description: '拖尾颜色',
    },
    { name: 'speed', type: 'number', defaultValue: 1, description: '速度倍率，越大越快' },
    { name: 'minDelay', type: 'number', defaultValue: 0, description: '最小延迟（秒）' },
    { name: 'maxDelay', type: 'number', defaultValue: 1.5, description: '最大延迟（秒）' },
    { name: 'className', type: 'string', description: '自定义 className' },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
