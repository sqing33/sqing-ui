import { z } from 'zod'

/**
 * 组件 prop 定义
 */
export const PropSchema = z.object({
  name: z.string(),
  type: z.string(),
  defaultValue: z.union([z.string(), z.number(), z.boolean(), z.null()]).optional(),
  description: z.string().optional(),
  required: z.boolean().optional(),
})

/**
 * 组件 meta 元数据（每个组件的 meta.ts）
 */
export const ComponentMetaSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.enum([
    'cursor',
    '3d',
    'visual',
    'background',
    'scroll',
    'data',
    'feedback',
    'form',
  ]),
  tags: z.array(z.string()).default([]),
  props: z.array(PropSchema).default([]),
  dependencies: z.array(z.string()).default([]),
  devDependencies: z.array(z.string()).default([]),
  registryDependencies: z.array(z.string()).default([]),
})

export type ComponentMeta = z.infer<typeof ComponentMetaSchema>
export type PropDef = z.infer<typeof PropSchema>

/**
 * Registry item（shadcn 风格）
 */
export const RegistryItemFileSchema = z.object({
  path: z.string(),
  target: z.string(),
  type: z.string().default('registry:component'),
})

export const RegistryItemSchema = z.object({
  name: z.string(),
  type: z.literal('registry:component'),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  files: z.array(RegistryItemFileSchema),
  dependencies: z.array(z.string()).default([]),
  devDependencies: z.array(z.string()).default([]),
  registryDependencies: z.array(z.string()).default([]),
})

export type RegistryItem = z.infer<typeof RegistryItemSchema>

/**
 * 完整 registry（registry.json）
 */
export const RegistrySchema = z.object({
  name: z.string(),
  version: z.string(),
  homepage: z.string().optional(),
  items: z.array(RegistryItemSchema),
})

export type Registry = z.infer<typeof RegistrySchema>
