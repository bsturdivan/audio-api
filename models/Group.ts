import { db } from '../db'
import { Group, GroupNew, GroupUpdate } from '../db'

export async function createGroup(group: GroupNew) {
  return await db.insertInto('groups').values(group).returningAll().executeTakeFirstOrThrow()
}

export async function getGroupByPermalink(permalink: string) {
  return db
    .selectFrom('groups')
    .select(['groups.name', 'groups.permalink', 'groups.id'])
    .where('permalink', '=', permalink)
}
