import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: 'Sqing UI',
    template: '%s · Sqing UI',
  },
  description: 'Sqing UI - 创意组件库，鼠标跟随、3D 卡片、粒子背景、滚动动画等，一键复制源码即用。',
  keywords: ['React', 'UI', 'Components', 'Creative', 'Animation', '创意组件', '鼠标跟随', '3D 卡片'],
  authors: [{ name: 'Sqing UI' }],
  openGraph: {
    title: 'Sqing UI',
    description: '创意组件库，一键复制即用',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
