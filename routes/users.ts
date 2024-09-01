import { Router } from 'express'
import { createUser, getUser } from '../models/User'

const create = Router().post('/', async (req, res) => {
  try {
    const user = await createUser(req.body)
    return res.json({ user })
  } catch (error) {
    console.error(`Error: ${error}`)
    return JSON.stringify({ user: { id: null, error } })
  }
})

const get = Router().get('/:session_id', async (req, res) => {
  try {
    const { session_id } = req.params
    const user = await getUser({ session_id })
    return res.json({ user })
  } catch (error) {
    console.error(`Error: ${error}`)
    return JSON.stringify({ user: { id: null, error } })
  }
})

export { create }
