'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

interface CopySourceButtonProps {
  /** registry 包中的相对路径，例如 "cursor-follow/index.tsx" */
  sourcePath: string
  /** 组件名 */
  componentName: string
}

/**
 * 复制组件源码按钮
 *
 * 通过 fetch 读取 docs 站点的静态资源 /r/<component>.json（由 build-registry 脚本生成）
 * 然后复制其中的 source 字段到剪贴板
 */
export function CopySourceButton({ sourcePath, componentName }: CopySourceButtonProps) {
  const [copied, setCopied] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onCopy = async () => {
    setLoading(true)
    try {
      // 从 public/r/<component>.json 读取源码
      const response = await fetch(`/r/${componentName}.json`)
      if (!response.ok) throw new Error('Failed to load source')
      const data = await response.json()
      const sourceCode = data.files?.[0]?.content || data.source
      if (!sourceCode) throw new Error('No source in response')

      await navigator.clipboard.writeText(sourceCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={onCopy} variant="outline" size="sm" disabled={loading} className="gap-2">
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          已复制
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {loading ? '加载中...' : '复制源码'}
        </>
      )}
    </Button>
  )
}
