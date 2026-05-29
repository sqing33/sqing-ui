import * as React from 'react'
import { Preview } from './preview'
import { ApiTable } from './api-table'
import { InstallTabs } from './install-tabs'
import { CopySourceButton } from './copy-source-button'
import { CodeBlock } from '@/components/code-block'

interface MDXComponentsProps {
  [key: string]: React.ComponentType<any>
}

/**
 * MDX 自定义组件映射
 */
export const mdxComponents: MDXComponentsProps = {
  Preview,
  ApiTable,
  InstallTabs,
  CopySourceButton,
  // CodeBlock 用于在 MDX 中直接使用
  pre: ({ children, ...props }: { children?: React.ReactNode }) => {
    // rehype-pretty-code 输出的 <pre><code>...</code></pre> 结构
    return <>{children}</>
  },
  code: ({ children, className, ...props }: { children?: React.ReactNode; className?: string }) => {
    // 行内代码（无 className）
    if (!className) {
      return (
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm" {...props}>
          {children}
        </code>
      )
    }
    // 代码块内的 code
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}
