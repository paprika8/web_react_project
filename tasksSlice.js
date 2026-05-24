import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  items: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.id += 1
      state.items.push({
        id: state.id,
        ...action.payload,
      })
    },
    toggleTaskStatus: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)
      if (task) {
        task.state = !task.state
      }
    },
    clearCompletedTasks: (state) => {
      state.items = state.items.filter((item) => !item.state)
    },
  },
})

export const { addTask, toggleTaskStatus, clearCompletedTasks } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer

const selectTasksState = (state) => state.tasks

export const selectAllTasks = createSelector(
  selectTasksState,
  (tasks) => tasks.items,
)

export const selectActiveTasks = createSelector(
  selectAllTasks,
  (items) => items.filter((item) => !item.state),
)

export const selectCompletedTasks = createSelector(
  selectAllTasks,
  (items) => items.filter((item) => item.state),
)

export const selectTasksByName = createSelector(
  [selectAllTasks, (_state, pattern) => pattern],
  (items, pattern) => {
    if (!pattern) {
      return items
    }
    const lowerPattern = pattern.toLowerCase()
    return items.filter((item) =>
      item.name.toLowerCase().includes(lowerPattern),
    )
  },
)
