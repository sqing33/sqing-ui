'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Search } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: '首页' },
  { href: '/guide/introduction', label: '指南' },
  { href: '/components', label: '组件' },
  { href: '/playground', label: 'Playground' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4">
        <Link href="/" className="mr-6 flex items-center gap-2 font-bold">
          <span className="text-xl">✨</span>
          <span className="text-lg">Sqing UI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href.split('/').slice(0, 2).join('/'))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded-md text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'text-foreground font-medium'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex items-center gap-2 text-muted-foreground"
            onClick={() => {
              // ⌘K 浮层触发（待实现）
              const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true })
              document.dispatchEvent(event)
            }}
          >
            <Search className="h-3.5 w-3.5" />
            <span>搜索</span>
            <kbd className="pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
