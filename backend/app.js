require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { ZodError } = require('zod')
const tasksRoutes = require('./routes/tasksRoutes')
const { pool } = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/tasks', tasksRoutes)

app.use((err, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Bledne dane wejsciowe.',
      errors: err.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    })
  }

  console.error(err)
  return res.status(500).json({ message: 'Wewnetrzny blad serwera.' })
})

const port = Number(process.env.PORT || 8081)

app.listen(port, async () => {
  try {
    await pool.query('SELECT 1')
    console.log(`API dziala na porcie ${port}. Polaczenie z DB: OK.`)
  } catch (error) {
    console.error('Nie mozna polaczyc sie z baza danych.', error.message)
  }
})
