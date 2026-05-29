import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'aurora-text',
  description: '极光文字组件，多色线性渐变 + 流光动画，让文字呈现极光般的流光渐变效果。支持自定义颜色、动画速度和 hover 触发。',
  category: 'visual',
  tags: ['text', 'aurora', 'gradient', 'animation', '极光', '文字'],
  props: [
    {
      name: 'text',
      type: 'string',
      required: true,
      description: '要显示的文字',
    },
    {
      name: 'colors',
      type: 'string[]',
      description: '极光渐变色数组（至少 2 个颜色），默认 [#ff006e, #8338ec, #3a86ff, #06ffa5]',
    },
    {
      name: 'speed',
      type: 'number',
      defaultValue: 8,
      description: '动画时长（秒），数值越大动画越慢',
    },
    {
      name: 'enableOnHover',
      type: 'boolean',
      defaultValue: false,
      description: '是否仅在 hover 时触发极光动画',
    },
    {
      name: 'className',
      type: 'string',
      description: '自定义 className',
    },
  ],
  dependencies: [],
  devDependencies: [],
  registryDependencies: [],
}
