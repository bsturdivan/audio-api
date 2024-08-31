import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users_groups')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('user_id', 'serial', col => col.notNull())
    .addColumn('group_id', 'serial', col => col.notNull())
    .execute()
  await db.schema
    .createIndex('users_groups_user_index')
    .on('users_groups')
    .column('user_id')
    .execute()
  await db.schema
    .createIndex('users_groups_group_index')
    .on('users_groups')
    .column('group_id')
    .execute()
  await db.schema
    .createIndex('users_groups_composite_index')
    .on('users_groups')
    .column('user_id')
    .column('group_id')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('users_groups').execute()
}
