import { Router } from 'express'
import { createGroup, getGroupByPermalink } from '../models/Group'

const create = Router().post('/', async (req, res) => {
  try {
    const group = await createGroup(req.body)
    return res.json({ group })
  } catch (error) {
    console.error(`Error: ${error}`)
    return JSON.stringify({ group: { id: null, error } })
  }
})

const get = Router().get('/:permalink', async (req, res) => {
  try {
    const { permalink } = req.params
    const user = await getGroupByPermalink(permalink)
    return res.json({ user })
  } catch (error) {
    console.error(`Error: ${error}`)
    return JSON.stringify({ user: { id: null, error } })
  }
})

export { create }
