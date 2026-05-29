import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'cursor-follow',
  description: '鼠标跟随自定义光标，支持多种样式、混合模式、移动端检测。',
  category: 'cursor',
  tags: ['cursor', 'mouse', 'pointer', '光标', '鼠标'],
  props: [
    {
      name: 'size',
      type: 'number',
      defaultValue: 24,
      description: '光标直径（像素）',
    },
    {
      name: 'color',
      type: 'string',
      defaultValue: '#ffffff',
      description: '光标颜色',
    },
    {
      name: 'blendMode',
      type: "'normal' | 'difference' | 'exclusion' | 'screen'",
      defaultValue: 'difference',
      description: '混合模式（difference 在白底黑字场景下反色显示）',
    },
    {
      name: 'trail',
      type: 'boolean',
      defaultValue: false,
      description: '是否显示拖尾效果',
    },
    {
      name: 'trailLength',
      type: 'number',
      defaultValue: 8,
      description: '拖尾长度（仅 trail=true 时生效）',
    },
    {
      name: 'disableOnMobile',
      type: 'boolean',
      defaultValue: true,
      description: '在移动端自动禁用（避免遮挡内容）',
    },
    {
      name: 'zIndex',
      type: 'number',
      defaultValue: 9999,
      description: 'z-index 值',
    },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
