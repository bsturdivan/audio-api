import {
  GeneratedAlways,
  ColumnType,
  JSONColumnType,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

interface GroupTable {
  id: GeneratedAlways<number>
  name: string
  permalink: string
  modified_at: ColumnType<Date, string | undefined, never>
  created_at: ColumnType<Date, string | undefined, never>
}

export type Group = Selectable<{ permalink?: string; id?: number }>
export type GroupNew = Insertable<GroupTable>
export type GroupUpdate = Updateable<GroupTable>

interface ProjectTable {
  id: GeneratedAlways<number>
  name: string
  permalink: string
  group_id: number
  modified_at: ColumnType<Date, string | undefined, never>
  created_at: ColumnType<Date, string | undefined, never>
}

export type Project = Selectable<{ permalink?: string; id?: number; group_id?: number }>
export type ProjectNew = Insertable<ProjectTable>
export type ProjectUpdate = Updateable<ProjectTable>

interface TrackTable {
  id: GeneratedAlways<number>
  name: string
  permalink: string
  project_id: number
  public_id: string
  metadata: JSONColumnType<TrackMetadata>
  modified_at: ColumnType<Date, string | undefined, never>
  created_at: ColumnType<Date, string | undefined, never>
}
interface TrackMetadata {
  track_id: number
  bin_count: number
  length: number
  name: string
  file_type: string
  size: string
}
export type Track = Selectable<TrackTable>
export type TrackNew = Insertable<TrackTable>
export type TrackUpdate = Updateable<TrackTable>

interface UserTable {
  id?: GeneratedAlways<number>
  name?: string
  session_id: string
  modified_at?: ColumnType<Date, string | undefined, never>
  created_at?: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<{ session_id: string }>
export type UserNew = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

interface Database {
  projects: ProjectTable
  groups: GroupTable
  tracks: TrackTable
  users: UserTable
}

export const db = createKysely<Database>()
