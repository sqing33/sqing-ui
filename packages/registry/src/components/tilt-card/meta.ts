import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'tilt-card',
  description: '3D 倾斜卡片，鼠标悬停时呈现透视倾斜效果，可选光斑反射。',
  category: '3d',
  tags: ['3d', 'tilt', 'card', 'perspective', '倾斜', '3D 卡片'],
  props: [
    {
      name: 'max',
      type: 'number',
      defaultValue: 15,
      description: '最大倾斜角度（度）',
    },
    {
      name: 'perspective',
      type: 'number',
      defaultValue: 1000,
      description: '透视距离（像素）',
    },
    {
      name: 'scale',
      type: 'number',
      defaultValue: 1.02,
      description: '悬停时的缩放比例',
    },
    {
      name: 'glare',
      type: 'boolean',
      defaultValue: false,
      description: '是否显示光斑反射效果',
    },
    {
      name: 'glareMaxOpacity',
      type: 'number',
      defaultValue: 0.3,
      description: '光斑最大不透明度（0-1）',
    },
    {
      name: 'children',
      type: 'ReactNode',
      required: true,
      description: '卡片内容',
    },
    {
      name: 'className',
      type: 'string',
      description: '自定义 className',
    },
  ],
  dependencies: ['framer-motion'],
  devDependencies: [],
  registryDependencies: [],
}
