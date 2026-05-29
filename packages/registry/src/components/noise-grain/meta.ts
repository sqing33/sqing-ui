import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'noise-grain',
  description:
    '噪点质感层（film grain），基于 SVG feTurbulence 滤镜生成胶片颗粒纹理，叠加在彩色背景上增加胶片颗粒感。支持自定义密度、透明度、混合模式与动态噪点。',
  category: 'visual',
  tags: [
    'noise',
    'grain',
    'film',
    'texture',
    'background',
    '噪点',
    '胶片',
    '质感',
  ],
  props: [
    {
      name: 'opacity',
      type: 'number',
      defaultValue: 0.15,
      description: '噪点不透明度（0-1）',
    },
    {
      name: 'density',
      type: 'number',
      defaultValue: 0.6,
      description: '噪点密度，控制 baseFrequency，越大越细密',
    },
    {
      name: 'blendMode',
      type: "'overlay' | 'multiply' | 'screen' | 'soft-light'",
      defaultValue: 'overlay',
      description: '混合模式',
    },
    {
      name: 'speed',
      type: 'number',
      defaultValue: 0,
      description: '动画速度（秒），0 表示静态；> 0 时每隔 N 秒重新生成噪点',
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
