'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import docsConfig from '@/content/docs.json'

type NavPage = string | { slug: string; title?: string }

function deriveTitle(slug: string) {
  return slug
    .split('/')
    .pop()!
    .split('-')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(' ')
}

function getPageInfo(page: NavPage) {
  const slug = typeof page === 'string' ? page : page.slug
  const title =
    typeof page === 'string'
      ? deriveTitle(page)
      : page.title ?? deriveTitle(page.slug)
  return { slug, title }
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto py-6 pr-4">
      <nav className="flex flex-col gap-6 text-sm">
        {docsConfig.navigation.map((section) => (
          <div key={section.group}>
            <h4 className="mb-2 px-2 text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              {section.group}
            </h4>
            <ul className="flex flex-col gap-1">
              {section.pages.map((page) => {
                const { slug, title } = getPageInfo(page)
                const href = `/${slug}`
                const isActive = pathname === href
                return (
                  <li key={slug}>
                    <Link
                      href={href}
                      className={cn(
                        'block rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
                        isActive && 'bg-accent text-foreground font-medium'
                      )}
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
