import { GeneratedAlways, ColumnType, JSONColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

interface GroupTable {
  id: GeneratedAlways<number>
  name: string
  permalink: string
  modified_at: ColumnType<Date, string | undefined, never>
  created_at: ColumnType<Date, string | undefined, never>
}

interface ProjectTable {
  id: GeneratedAlways<number>
  name: string
  permalink: string
  group_id: number
  modified_at: ColumnType<Date, string | undefined, never>
  created_at: ColumnType<Date, string | undefined, never>
}

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

interface Database {
  projects: ProjectTable
  groups: GroupTable
  tracks: TrackTable
}

export const dialect = createKysely<Database>()
