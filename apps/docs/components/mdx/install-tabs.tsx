'use client'

import * as React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/code-block'

interface InstallTabsProps {
  component: string
}

export function InstallTabs({ component }: InstallTabsProps) {
  return (
    <Tabs defaultValue="pnpm" className="my-4">
      <TabsList>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
        <TabsTrigger value="bun">bun</TabsTrigger>
      </TabsList>
      <TabsContent value="pnpm">
        <CodeBlock language="bash" code={`pnpm dlx sqing-ui@latest add ${component}`} />
      </TabsContent>
      <TabsContent value="npm">
        <CodeBlock language="bash" code={`npx sqing-ui@latest add ${component}`} />
      </TabsContent>
      <TabsContent value="yarn">
        <CodeBlock language="bash" code={`npx sqing-ui@latest add ${component}`} />
      </TabsContent>
      <TabsContent value="bun">
        <CodeBlock language="bash" code={`bunx sqing-ui@latest add ${component}`} />
      </TabsContent>
    </Tabs>
  )
}
