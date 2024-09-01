import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl'
import { db as kysely } from './db'

export default defineConfig({
  kysely,
  migrations: {
    getMigrationPrefix: getKnexTimestampPrefix,
    migrationFolder: './db/migrations',
  },
})
