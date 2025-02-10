'use client'

import { ReactNode, useState } from 'react'
import { Filter, X } from 'lucide-react'

interface FilterOption {
  id: string
  name: string
  options: string[]
}

interface PortfolioLayoutProps {
  children: ReactNode
  filters: FilterOption[]
  onFilterChange: (filterId: string, value: string) => void
}

export default function PortfolioLayout({
  children,
  filters,
  onFilterChange,
}: PortfolioLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({})

  const handleFilterChange = (filterId: string, value: string) => {
    const newFilters = {
      ...selectedFilters,
      [filterId]: value,
    }
    setSelectedFilters(newFilters)
    onFilterChange(filterId, value)
  }

  return (
    <div className="min-h-full">
      {/* Filter toolbar */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <button
                type="button"
                className="lg:hidden inline-flex items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-5 w-5" aria-hidden="true" />
                Filters
              </button>
              <div className="hidden lg:flex lg:gap-x-4">
                {filters.map((filter) => (
                  <select
                    key={filter.id}
                    className="rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#2B63D9] sm:text-sm sm:leading-6"
                    onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                    value={selectedFilters[filter.id] || ''}
                  >
                    <option value="">{filter.name}</option>
                    {filter.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter dialog */}
      {isFilterOpen && (
        <div className="relative z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="relative -mr-2 flex h-10 w-10 items-center justify-center"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4 border-t border-gray-200">
                {filters.map((filter) => (
                  <div key={filter.id} className="px-4 py-6">
                    <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
                    <div className="mt-2">
                      <select
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#2B63D9] sm:text-sm sm:leading-6"
                        onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                        value={selectedFilters[filter.id] || ''}
                      >
                        <option value="">{filter.name}</option>
                        {filter.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
} 