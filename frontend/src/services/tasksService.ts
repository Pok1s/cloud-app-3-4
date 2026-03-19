import { api } from './api'

export type Task = {
  id: number
  title: string
  completed: boolean
}

export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get<Task[]>('/tasks')
  return response.data
}
