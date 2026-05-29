import Link from 'next/link'
import { Github } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Sqing UI
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/guide/introduction" className="hover:text-foreground">
              文档
            </Link>
            <Link href="/components" className="hover:text-foreground">
              组件
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
