import { db } from '../db'
import { User, UserNew, UserUpdate } from '../db'

export async function createUser(user: UserNew) {
  return await db.insertInto('users').values(user).returningAll().executeTakeFirstOrThrow()
}

export async function getUser(user: User) {
  return db.selectFrom('users').select('name').where('session_id', '=', user.session_id)
}
