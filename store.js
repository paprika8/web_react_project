import { configureStore } from '@reduxjs/toolkit'
import { tasksReducer } from './tasksSlice.js'

function loadPreloadedState() {
  const tasks = { id: 0, items: [] }
  const maxId = localStorage.getItem('max_id')
  const saved = localStorage.getItem('appData')

  if (maxId) {
    tasks.id = Number(maxId)
  }
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      tasks.items = parsed.items || []
    } catch {
      // ignore invalid data
    }
  }

  return { tasks }
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: loadPreloadedState(),
})

store.subscribe(() => {
  const { tasks } = store.getState()
  localStorage.setItem('appData', JSON.stringify({ items: tasks.items }))
  localStorage.setItem('max_id', String(tasks.id))
})