'use client'

import { cn } from '@/lib/utils'

interface PropDef {
  name: string
  type: string
  defaultValue?: string | number | boolean | null
  description?: string
  required?: boolean
}

interface ApiTableProps {
  meta: {
    name: string
    description: string
    props: PropDef[]
  }
}

/**
 * 从 meta.ts 渲染 API 表格
 */
export function ApiTable({ meta }: ApiTableProps) {
  if (!meta.props || meta.props.length === 0) {
    return (
      <p className="text-sm text-muted-foreground italic">
        该组件无 Props。
      </p>
    )
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Prop</th>
            <th className="px-4 py-3 text-left font-semibold">Type</th>
            <th className="px-4 py-3 text-left font-semibold">Default</th>
            <th className="px-4 py-3 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {meta.props.map((prop, idx) => (
            <tr
              key={prop.name}
              className={cn(
                'border-t',
                idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'
              )}
            >
              <td className="px-4 py-3 font-mono text-xs font-medium">
                {prop.name}
                {prop.required && (
                  <span className="ml-1 text-red-500">*</span>
                )}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                {prop.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                {prop.defaultValue === undefined
                  ? '—'
                  : JSON.stringify(prop.defaultValue)}
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {prop.description || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
