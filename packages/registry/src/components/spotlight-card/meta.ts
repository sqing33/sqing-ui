import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'spotlight-card',
  description: '聚光灯卡片，鼠标在卡片内移动时生成渐变光斑跟随光标，离开时光斑淡出。',
  category: '3d',
  tags: ['card', 'spotlight', 'mouse', 'cursor', '聚光灯', '卡片'],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      required: true,
      description: '卡片内容',
    },
    {
      name: 'spotlightColor',
      type: 'string',
      defaultValue: 'rgba(120, 119, 198, 0.3)',
      description: '聚光灯颜色（支持任意 CSS 颜色 / rgba）',
    },
    {
      name: 'spotlightSize',
      type: 'number',
      defaultValue: 400,
      description: '聚光灯半径（像素）',
    },
    {
      name: 'enableBorder',
      type: 'boolean',
      defaultValue: true,
      description: '是否启用边框发光（使用 mask 技术裁剪出 1px 边框）',
    },
    {
      name: 'className',
      type: 'string',
      description: '自定义 className',
    },
    {
      name: 'onClick',
      type: '(event: React.MouseEvent<HTMLDivElement>) => void',
      description: '点击事件（传入后自动获得按钮语义和键盘焦点）',
    },
  ],
  dependencies: ['framer-motion'],
  devDependencies: [],
  registryDependencies: [],
}
