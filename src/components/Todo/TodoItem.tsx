import { useState } from 'react'
import type { Todo } from '../../types/generic'

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
  onEdit: (text: string) => void
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editText.trim()) {
      onEdit(editText.trim())
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-3 p-3 border border-gray-200 rounded bg-gray-50">
        <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
          >
            Cancel
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
      />
      
      <span 
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
      >
        {todo.text}
      </span>
      
      <div className="flex gap-1">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  )
} 