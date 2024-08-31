import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('tracks')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('project_id', 'serial', col => col.notNull())
    .addColumn('public_id', 'text', col => col.notNull())
    .addColumn('metadata', 'json')
    .addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .execute()

  await db.schema.createIndex('track_project_index').on('tracks').column('project_id').execute()
  await db.schema.createIndex('track_group_index').on('tracks').column('public_id').execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('tracks').execute()
}
