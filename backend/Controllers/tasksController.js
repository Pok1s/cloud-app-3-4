const taskService = require('../Services/taskService')
const { createTaskDto, updateTaskDto } = require('../DTOs/taskDtos')
const parseId = (value) => {
  const id = Number(value)
  return Number.isInteger(id) && id > 0 ? id : null
}
const getTasks = async (_req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks()
    res.status(200).json(tasks)
  } catch (error) {
    next(error)
  }
}
const getTask = async (req, res, next) => {
  try {
    const id = parseId(req.params.id)
    if (!id) {
      return res.status(400).json({ message: 'Nieprawidlowe id.' })
    }
    const task = await taskService.getTaskById(id)
    if (!task) {
      return res.status(404).json({ message: 'Zadanie nie istnieje.' })
    }
    res.status(200).json(task)
  } catch (error) {
    next(error)
  }
}
const createTask = async (req, res, next) => {
  try {
    const payload = createTaskDto.parse(req.body)
    const task = await taskService.createTask(payload)
    res.status(201).json(task)
  } catch (error) {
    next(error)
  }
}
const updateTask = async (req, res, next) => {
  try {
    const id = parseId(req.params.id)
    if (!id) {
      return res.status(400).json({ message: 'Nieprawidlowe id.' })
    }
    const payload = updateTaskDto.parse(req.body)
    const task = await taskService.updateTask(id, payload)
    if (!task) {
      return res.status(404).json({ message: 'Zadanie nie istnieje.' })
    }
    res.status(200).json(task)
  } catch (error) {
    next(error)
  }
}
const deleteTask = async (req, res, next) => {
  try {
    const id = parseId(req.params.id)
    if (!id) {
      return res.status(400).json({ message: 'Nieprawidlowe id.' })
    }
    const deleted = await taskService.deleteTask(id)
    if (!deleted) {
      return res.status(404).json({ message: 'Zadanie nie istnieje.' })
    }
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}
module.exports = { getTasks, getTask, createTask, updateTask, deleteTask }
