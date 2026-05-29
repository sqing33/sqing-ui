'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ComponentCardProps {
  slug: string
  title: string
  desc: string
  tag: string
}

export function ComponentCard({ slug, title, desc, tag }: ComponentCardProps) {
  return (
    <Link
      href={`/components/${slug}`}
      className="group rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md"
    >
      <div className="mb-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
        {tag}
      </div>
      <h3 className="mb-1 font-semibold group-hover:text-blue-600">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
      <div className="mt-3 flex items-center text-sm text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
        查看文档 <ArrowRight className="ml-1 h-3.5 w-3.5" />
      </div>
    </Link>
  )
}
