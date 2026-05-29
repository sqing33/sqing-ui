'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

export function CodeBlock({ code, language = 'tsx', filename, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <div className={cn('relative group rounded-lg border bg-muted/30 overflow-hidden', className)}>
      {filename && (
        <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2 text-xs">
          <span className="font-mono text-muted-foreground">{filename}</span>
          <span className="text-muted-foreground">{language}</span>
        </div>
      )}
      <button
        onClick={onCopy}
        className="absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100 hover:bg-accent"
        aria-label="复制代码"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
      <pre className="m-0 border-0 bg-transparent p-4 overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
