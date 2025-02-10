'use client'

import { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SideNavItem {
  name: string
  href: string
}

interface ContentLayoutProps {
  children: ReactNode
  sideNavItems: SideNavItem[]
  title: string
}

export default function ContentLayout({ children, sideNavItems, title }: ContentLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-full">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed inset-0 z-40 flex">
        <button
          type="button"
          className="fixed left-4 top-4 z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
          <nav className="space-y-1">
            {sideNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-[#2B63D9] text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
} 