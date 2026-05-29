'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface AnimatedTabItem {
  id: string
  label: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

export interface AnimatedTabsProps {
  // 标签数据
  tabs: AnimatedTabItem[]
  // 受控值
  value?: string
  // 非受控默认值
  defaultValue?: string
  // 值变化回调
  onValueChange?: (id: string) => void
  // 指示器颜色（默认使用主题主色）
  indicatorColor?: string
  // 排列方向
  orientation?: 'horizontal' | 'vertical'
  // 容器 className
  className?: string
  // 列表 className
  listClassName?: string
  // 内容容器 className
  contentClassName?: string
}

const INDICATOR_LAYOUT_ID = 'animated-tabs-indicator'

// 检测元素是否在视口内（用于 scroll-into-view，避免键盘切换时 tab 跑出可视区）
function useScrollIntoView<T extends HTMLElement>() {
  return React.useCallback((node: T | null) => {
    if (!node) return
    node.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
  }, [])
}

export function AnimatedTabs({
  tabs,
  value,
  defaultValue,
  onValueChange,
  indicatorColor = 'bg-[var(--primary)]',
  orientation = 'horizontal',
  className,
  listClassName,
  contentClassName,
}: AnimatedTabsProps) {
  const isHorizontal = orientation === 'horizontal'

  // 受控/非受控：内部始终记录一个活动 id
  const [internalValue, setInternalValue] = React.useState<string>(
    () => defaultValue ?? tabs[0]?.id ?? ''
  )

  const isControlled = value !== undefined
  const activeId = isControlled ? (value as string) : internalValue

  const setActiveId = React.useCallback(
    (id: string) => {
      if (!isControlled) setInternalValue(id)
      onValueChange?.(id)
    },
    [isControlled, onValueChange]
  )

  // 切到未识别的 id 时回退到第一个
  React.useEffect(() => {
    if (tabs.length === 0) return
    if (!tabs.some((t) => t.id === activeId)) {
      setActiveId(tabs[0].id)
    }
  }, [tabs, activeId, setActiveId])

  const triggerRefs = React.useRef<Array<HTMLButtonElement | null>>([])
  const scrollIntoView = useScrollIntoView<HTMLButtonElement>()

  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === activeId)
  )

  // 键盘左右 / 上下切换
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (tabs.length === 0) return
    const isNext = isHorizontal ? e.key === 'ArrowRight' : e.key === 'ArrowDown'
    const isPrev = isHorizontal ? e.key === 'ArrowLeft' : e.key === 'ArrowUp'

    if (isNext || isPrev) {
      e.preventDefault()
      const dir = isNext ? 1 : -1
      let next = activeIndex
      // 跳过 disabled
      for (let i = 1; i <= tabs.length; i++) {
        const candidate = (next + dir * i + tabs.length) % tabs.length
        if (!tabs[candidate].disabled) {
          next = candidate
          break
        }
      }
      const targetTab = tabs[next]
      setActiveId(targetTab.id)
      const node = triggerRefs.current[next]
      if (node) {
        node.focus()
        scrollIntoView(node)
      }
      return
    }

    if (e.key === 'Home') {
      e.preventDefault()
      const first = tabs.find((t) => !t.disabled) ?? tabs[0]
      setActiveId(first.id)
      triggerRefs.current[tabs.findIndex((t) => t.id === first.id)]?.focus()
      return
    }

    if (e.key === 'End') {
      e.preventDefault()
      const reversed = [...tabs].reverse()
      const last = reversed.find((t) => !t.disabled) ?? tabs[tabs.length - 1]
      setActiveId(last.id)
      triggerRefs.current[tabs.findIndex((t) => t.id === last.id)]?.focus()
      return
    }
  }

  return (
    <div
      className={cn(
        'flex w-full',
        isHorizontal ? 'flex-col' : 'flex-row',
        className
      )}
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={onKeyDown}
        className={cn(
          'relative flex',
          isHorizontal
            ? 'flex-row items-center gap-1 border-b border-slate-200 dark:border-slate-800'
            : 'flex-col items-stretch gap-1 border-r border-slate-200 pr-2 dark:border-slate-800',
          listClassName
        )}
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              ref={(el) => {
                triggerRefs.current[idx] = el
              }}
              role="tab"
              type="button"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => {
                if (tab.disabled) return
                setActiveId(tab.id)
              }}
              className={cn(
                'relative px-4 py-2 text-sm font-medium outline-none transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--primary)]/40 focus-visible:ring-offset-2',
                isHorizontal ? 'rounded-t-md' : 'rounded-l-md text-left',
                isActive
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
                tab.disabled && 'cursor-not-allowed opacity-40'
              )}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId={INDICATOR_LAYOUT_ID}
                  className={cn(
                    'absolute rounded-full',
                    indicatorColor,
                    isHorizontal
                      ? 'bottom-[-1px] left-2 right-2 h-0.5'
                      : 'top-2 bottom-2 right-[-3px] w-0.5'
                  )}
                  transition={{
                    type: 'spring',
                    stiffness: 480,
                    damping: 32,
                    mass: 0.6,
                  }}
                />
              )}
            </button>
          )
        })}
      </div>

      <div
        className={cn(
          'flex-1',
          isHorizontal ? 'mt-4' : 'ml-4',
          contentClassName
        )}
      >
        {tabs.map((tab) =>
          tab.id === activeId ? (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              tabIndex={0}
              className="focus:outline-none"
            >
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}
