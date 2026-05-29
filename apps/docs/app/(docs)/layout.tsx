import { Sidebar } from '@/components/sidebar'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container mx-auto flex w-full max-w-screen-2xl flex-1 px-4">
        <Sidebar />
        <main className="flex-1 py-6 pl-6 lg:py-10 lg:pl-8">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
