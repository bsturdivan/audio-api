import { Router } from 'express'

const usersRouter = Router()
  .get('/', (req, res) => {
    res.json({users: [{name: 'bsturd'}]});
  })

export { usersRouter }
