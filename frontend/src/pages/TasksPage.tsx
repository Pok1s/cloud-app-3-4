import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { getTasks, type Task } from '../services/tasksService'

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks()
        setTasks(data)
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrorMessage(
            `Blad API (${error.response?.status ?? 'siec'}): ${error.message}`,
          )
        } else {
          setErrorMessage('Nieoczekiwany blad podczas ladowania zadan.')
        }
      } finally {
        setIsLoading(false)
      }
    }
    void loadTasks()
  }, [])
  return (
    <main className="page">
      <section className="card">
        <h1>Zadania</h1>
        <p className="subtitle">Lista pobrana z API przy uzyciu Axios GET.</p>

        {isLoading && <p>Ladowanie danych...</p>}

        {errorMessage && <p className="error">{errorMessage}</p>}

        {!isLoading && !errorMessage && (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.title}</span>
                <strong>{task.completed ? 'Wykonane' : 'W trakcie'}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
