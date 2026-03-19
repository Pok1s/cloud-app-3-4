const repository = require('../Repositories/taskRepository')
const { toTaskModel } = require('../Models/taskModel')

const getAllTasks = async () => {
  const rows = await repository.getAllTasks()
  return rows.map(toTaskModel)
}

const getTaskById = async (id) => {
  const row = await repository.getTaskById(id)
  return row ? toTaskModel(row) : null
}

const createTask = async (payload) => {
  const row = await repository.createTask(payload)
  return toTaskModel(row)
}

const updateTask = async (id, payload) => {
  const row = await repository.updateTask(id, payload)
  return row ? toTaskModel(row) : null
}

const deleteTask = async (id) => repository.deleteTask(id)

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }
