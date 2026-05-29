import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'magnetic-button',
  description: '磁性按钮，鼠标靠近时按钮被吸引，回弹有弹性。',
  category: 'cursor',
  tags: ['button', 'magnetic', 'mouse', '磁性', '按钮'],
  props: [
    {
      name: 'strength',
      type: 'number',
      defaultValue: 0.3,
      description: '磁性强度（0-1），越大越容易被吸引',
    },
    {
      name: 'range',
      type: 'number',
      defaultValue: 100,
      description: '影响范围（像素）',
    },
    {
      name: 'ease',
      type: 'number',
      defaultValue: 0.15,
      description: '回弹速度（0-1），越小越有惯性',
    },
    {
      name: 'children',
      type: 'ReactNode',
      required: true,
      description: '按钮内容',
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
