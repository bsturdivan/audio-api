import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { apiRouter } from './routes/index.js'

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/v1', apiRouter);

export default app
