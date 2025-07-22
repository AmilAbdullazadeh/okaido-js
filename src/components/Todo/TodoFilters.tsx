
import type { TodoFilter } from '../../types/generic'

interface TodoFiltersProps {
  currentFilter: TodoFilter
  onFilterChange: (filter: TodoFilter) => void
  onClearCompleted: () => void
  hasCompleted: boolean
}

export function TodoFilters({ 
  currentFilter, 
  onFilterChange, 
  onClearCompleted, 
  hasCompleted 
}: TodoFiltersProps) {
  const filters: { key: TodoFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ]

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 border border-gray-200 rounded">
      <div className="flex gap-1">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentFilter === filter.key
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
        >
          Clear Completed
        </button>
      )}
    </div>
  )
} 