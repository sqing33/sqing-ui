#!/usr/bin/env tsx
//
// build-registry.ts
// 扫描 packages/registry/src/components/_/meta.ts
// 生成 1) src/registry.json (给 CLI 用的 shadcn 风格索引)
//      2) apps/docs/public/r/[name].json (给 CopySourceButton 读取源码)
//
// 注意: 不能用 块注释包裹含 _*_/_xxx 的字符串,esbuild 会把 _*_/_
// 当作注释结束符提前闭合,这里统一用行注释。
//

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ComponentMetaSchema, RegistrySchema } from '../src/schema'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')
const COMPONENTS_DIR = join(ROOT, 'src/components')
const OUTPUT = join(ROOT, 'src/registry.json')

// docs 站点的 public/r 目录 (供 CopySourceButton 读取)
const DOCS_ROOT = join(__dirname, '../../../apps/docs')
const PUBLIC_R_DIR = join(DOCS_ROOT, 'public/r')

interface ComponentEntry {
  name: string
  meta: any
  indexSource: string | null
  demoSource: string | null
}

async function scanComponentDir(name: string): Promise<ComponentEntry> {
  const dir = join(COMPONENTS_DIR, name)
  const metaPath = join(dir, 'meta.ts')
  const indexPath = join(dir, 'index.tsx')
  const demoPath = join(dir, 'demo.tsx')

  // 读取 meta.ts 源码，eval 提取 meta 对象
  const metaSource = await readFile(metaPath, 'utf-8')
  const meta = extractMeta(metaSource)

  // 校验 meta
  const parsed = ComponentMetaSchema.parse(meta)

  let indexSource: string | null = null
  let demoSource: string | null = null
  try {
    indexSource = await readFile(indexPath, 'utf-8')
  } catch {}
  try {
    demoSource = await readFile(demoPath, 'utf-8')
  } catch {}

  return { name, meta: parsed, indexSource, demoSource }
}

// 从 meta.ts 源码中提取 export const meta = { ... }
// 实现方式: 用 Function 构造器执行处理后的源码
function extractMeta(source: string): any {
  const cleaned = source
    .split('\n')
    .map((line) => {
      let l = line
      if (l.trim().startsWith('import ')) return ''
      // 去掉 export 关键字
      l = l.replace(/^\s*export\s+/, '')
      // 去掉 TS 类型注解 (例如: const meta: ComponentMeta = {...})
      l = l.replace(/:\s*[A-Z][A-Za-z0-9_]*(?:\s*\|\s*[A-Z][A-Za-z0-9_]*)*\s*=/, ' =')
      return l
    })
    .filter((line) => line.trim().length > 0)
    .join('\n')

  const fn = new Function(`
    ${cleaned}
    return meta;
  `)
  return fn()
}

async function main() {
  console.log('🔍 扫描 components 目录...')

  // 确保 public/r 目录存在
  await mkdir(PUBLIC_R_DIR, { recursive: true })

  // 清空旧的 r/*.json
  try {
    const old = await readdir(PUBLIC_R_DIR)
    for (const f of old) {
      if (f.endsWith('.json')) {
        await rm(join(PUBLIC_R_DIR, f))
      }
    }
  } catch {}

  const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true })
  const components: ComponentEntry[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('_')) continue // 跳过内部目录

    try {
      const comp = await scanComponentDir(entry.name)
      components.push(comp)
      console.log(`  ✓ ${comp.name} (${comp.meta.category})`)
    } catch (err) {
      console.warn(`  ✗ ${entry.name}:`, (err as Error).message)
    }
  }

  // 1) 生成 src/registry.json (给 CLI 用)
  const items = components.map((c) => ({
    name: c.name,
    type: 'registry:component' as const,
    title: c.meta.description.split('。')[0] || c.meta.description,
    description: c.meta.description,
    category: c.meta.category,
    files: [
      { path: `${c.name}/index.tsx`, target: `{{components}}/sqing-ui/${c.name}.tsx`, type: 'registry:component' },
      ...(c.demoSource
        ? [{ path: `${c.name}/demo.tsx`, target: `{{components}}/sqing-ui/${c.name}.demo.tsx`, type: 'registry:component' }]
        : []),
    ],
    dependencies: c.meta.dependencies,
    devDependencies: c.meta.devDependencies,
    registryDependencies: c.meta.registryDependencies,
  }))

  const registry = RegistrySchema.parse({
    name: 'sqing-ui',
    version: '0.1.0',
    homepage: 'https://sqing-ui.dev',
    items,
  })

  await writeFile(OUTPUT, JSON.stringify(registry, null, 2) + '\n', 'utf-8')
  console.log(`\n✅ 生成 ${OUTPUT}`)
  console.log(`   共 ${items.length} 个组件`)

  // 2) 生成 public/r/[name].json (给 CopySourceButton 读取源码)
  for (const c of components) {
    const payload = {
      name: c.name,
      title: c.meta.description.split('。')[0] || c.meta.description,
      description: c.meta.description,
      category: c.meta.category,
      dependencies: c.meta.dependencies,
      registryDependencies: c.meta.registryDependencies,
      files: [
        ...(c.indexSource
          ? [{ name: 'index.tsx', path: `${c.name}/index.tsx`, content: c.indexSource }]
          : []),
        ...(c.demoSource
          ? [{ name: 'demo.tsx', path: `${c.name}/demo.tsx`, content: c.demoSource }]
          : []),
      ],
    }
    await writeFile(
      join(PUBLIC_R_DIR, `${c.name}.json`),
      JSON.stringify(payload, null, 2) + '\n',
      'utf-8'
    )
  }
  console.log(`✅ 生成 ${PUBLIC_R_DIR} (${components.length} 个组件源码文件)`)
}

main().catch((err) => {
  console.error('❌ 构建失败:', err)
  process.exit(1)
})
