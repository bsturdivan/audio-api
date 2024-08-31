import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('groups')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('permalink', 'varchar', col => col.notNull())
    .addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .execute()

  await db.schema.createIndex('group_permalink_index').on('groups').column('permalink').execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('groups').execute()
}
