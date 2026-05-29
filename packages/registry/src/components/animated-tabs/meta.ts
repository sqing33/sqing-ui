import type { ComponentMeta } from '../../schema'

export const meta: ComponentMeta = {
  name: 'animated-tabs',
  description:
    '粘性指示器 tabs,基于 framer-motion layoutId 实现的弹性滑动指示器,选中标签时高亮条像弹簧一样"粘"到新位置,顺滑自然。',
  category: 'feedback',
  tags: ['tabs', 'tab', 'indicator', 'animation', '粘性', '指示器'],
  props: [
    {
      name: 'tabs',
      type: 'AnimatedTabItem[]',
      required: true,
      description: '标签数据,每项包含 id、label、content,可选 disabled',
    },
    {
      name: 'value',
      type: 'string',
      description: '受控:当前激活的 tab id',
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: '非受控:默认激活的 tab id',
    },
    {
      name: 'onValueChange',
      type: '(id: string) => void',
      description: '激活项变化时的回调',
    },
    {
      name: 'indicatorColor',
      type: 'string',
      defaultValue: 'bg-[var(--primary)]',
      description: '指示器颜色(Tailwind class),默认使用主题主色 CSS 变量',
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      defaultValue: 'horizontal',
      description: '排列方向',
    },
    {
      name: 'className',
      type: 'string',
      description: '外层容器自定义 className',
    },
    {
      name: 'listClassName',
      type: 'string',
      description: 'tab 列表自定义 className',
    },
    {
      name: 'contentClassName',
      type: 'string',
      description: '内容容器自定义 className',
    },
  ],
  dependencies: ['framer-motion'],
  devDependencies: [],
  registryDependencies: [],
}
