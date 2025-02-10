'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []

  return (
    <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center space-x-2">
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-500"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join('/')}`
            const isLast = index === segments.length - 1
            const displayName = segment.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')

            return (
              <div key={segment} className="flex items-center">
                <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                {isLast ? (
                  <span className="ml-2 text-sm font-medium text-gray-500" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {displayName}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
} 