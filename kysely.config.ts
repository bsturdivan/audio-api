import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl'
import { dialect as kysely } from './db'

export default defineConfig({
  kysely,
  migrations: {
    getMigrationPrefix: getKnexTimestampPrefix,
    migrationFolder: './db/migrations',
  },
})
