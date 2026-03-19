const { Router } = require('express')
const controller = require('../Controllers/tasksController')

const router = Router()

router.get('/', controller.getTasks)
router.get('/:id', controller.getTask)
router.post('/', controller.createTask)
router.put('/:id', controller.updateTask)
router.delete('/:id', controller.deleteTask)

module.exports = router
