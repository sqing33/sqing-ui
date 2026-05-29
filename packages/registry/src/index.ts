export * from './schema'

// Components are not re-exported here to keep the registry index lightweight.
// Users (and the docs site) import them explicitly via:
//   import { CursorFollow } from '@sqing/registry/components/cursor-follow'
//   import { meta } from '@sqing/registry/components/cursor-follow/meta'
