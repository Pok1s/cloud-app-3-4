const { pool } = require('../config/db')

const getAllTasks = async () => {
  const result = await pool.query(
    'SELECT * FROM tasks ORDER BY created_at DESC, id DESC',
  )
  return result.rows
}

const getTaskById = async (id) => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  return result.rows[0] ?? null
}

const createTask = async ({ title, description, completed }) => {
  const result = await pool.query(
    `INSERT INTO tasks (title, description, completed)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [title, description, completed],
  )
  return result.rows[0]
}

const updateTask = async (id, payload) => {
  const fields = []
  const values = []
  let paramIndex = 1

  Object.entries(payload).forEach(([key, value]) => {
    fields.push(`${key} = $${paramIndex}`)
    values.push(value)
    paramIndex += 1
  })

  values.push(id)

  const result = await pool.query(
    `UPDATE tasks
     SET ${fields.join(', ')}, updated_at = NOW()
     WHERE id = $${paramIndex}
     RETURNING *`,
    values,
  )

  return result.rows[0] ?? null
}

const deleteTask = async (id) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id])
  return result.rowCount > 0
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }
