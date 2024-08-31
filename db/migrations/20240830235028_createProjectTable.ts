import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('projects')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('permalink', 'varchar', col => col.notNull())
    .addColumn('group_id', 'serial', col => col.notNull())
    .addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .execute()

  await db.schema
    .createIndex('project_permalink_index')
    .on('projects')
    .column('permalink')
    .execute()
  await db.schema.createIndex('project_group_index').on('projects').column('group_id').execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('projects').execute()
}
