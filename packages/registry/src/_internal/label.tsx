import * as React from 'react'
import { cn } from '../utils/cn'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn('text-xs font-medium uppercase tracking-wide', className)}
      {...props}
    />
  )
}
