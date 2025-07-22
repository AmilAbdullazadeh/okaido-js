import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Todo, TodoState, TodoFilter } from '../types/generic'

// Utility functions for localStorage persistence
const loadTodosFromStorage = (): Todo[] => {
  try {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const saveTodosToStorage = (todos: Todo[]) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos))
  } catch {
    // Handle storage errors silently
  }
}

const initialState: TodoState = {
  todos: loadTodosFromStorage(),
  filter: 'all',
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
      }
      state.todos.push(newTodo)
      saveTodosToStorage(state.todos)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        saveTodosToStorage(state.todos)
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      saveTodosToStorage(state.todos)
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
        saveTodosToStorage(state.todos)
      }
    },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed)
      saveTodosToStorage(state.todos)
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  editTodo, 
  setFilter, 
  clearCompleted 
} = todoSlice.actions

export default todoSlice.reducer 