const toTaskModel = (row) => ({
  id: row.id,
  title: row.title,
  description: row.description,
  completed: row.completed,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
})

module.exports = { toTaskModel }
