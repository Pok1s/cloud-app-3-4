const { z } = require('zod')

const createTaskDto = z.object({
  title: z.string().min(3).max(120),
  description: z.string().max(500).optional().default(''),
  completed: z.boolean().optional().default(false),
})

const updateTaskDto = z
  .object({
    title: z.string().min(3).max(120).optional(),
    description: z.string().max(500).optional(),
    completed: z.boolean().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: 'Przynajmniej jedno pole musi byc przekazane.',
  })

module.exports = { createTaskDto, updateTaskDto }
