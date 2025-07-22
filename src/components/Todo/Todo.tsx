import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { addTodo, toggleTodo, deleteTodo, editTodo, setFilter, clearCompleted } from '../../store/todoSlice'
import type { TodoFilter } from '../../types/generic'
import { TodoItem } from './TodoItem'
import { TodoFilters } from './TodoFilters'

export function Todo() {
  const { todos, filter } = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()
  const [newTodoText, setNewTodoText] = useState('')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeTodosCount = todos.filter(todo => !todo.completed).length
  const completedTodosCount = todos.filter(todo => todo.completed).length

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText.trim()))
      setNewTodoText('')
    }
  }

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id))
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id: string, text: string) => {
    dispatch(editTodo({ id, text }))
  }

  const handleFilterChange = (newFilter: TodoFilter) => {
    dispatch(setFilter(newFilter))
  }

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo App</h2>
        <div className="text-sm text-gray-600">
          {activeTodosCount} active, {completedTodosCount} completed
        </div>
      </div>

      {/* Add new todo form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-medium"
          >
            Add
          </button>
        </div>
      </form>

      {/* Filters */}
      <TodoFilters
        currentFilter={filter}
        onFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
        hasCompleted={completedTodosCount > 0}
      />

      {/* Todo list */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {filter === 'active' ? 'No active todos' : 
             filter === 'completed' ? 'No completed todos' : 'No todos yet'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => handleToggle(todo.id)}
              onDelete={() => handleDelete(todo.id)}
              onEdit={(text) => handleEdit(todo.id, text)}
            />
          ))
        )}
      </div>
    </div>
  )
} 