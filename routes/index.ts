import { Router } from 'express'
import { usersRouter } from './users.js'

const apiRouter = Router()
  .use('/users', usersRouter)

export { apiRouter }