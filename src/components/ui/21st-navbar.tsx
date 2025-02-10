"use client"

import * as React from "react"
import clsx from 'clsx'

interface NavButton {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline'
  onClick?: () => void
}

const Button: React.FC<NavButton> = ({ 
  className, 
  children, 
  variant = 'default',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'h-10 px-4 py-2',
        variant === 'default' && [
          'bg-primary text-white hover:bg-primary/90',
        ],
        variant === 'outline' && [
          'border border-current',
          'hover:bg-primary/10'
        ],
        className
      )}
    >
      {children}
    </button>
  )
}

interface NavItem {
  to?: string
  text: string
  items?: {
    text: string
    description?: string
    to: string
  }[]
}

interface HeaderProps {
  className?: string
  isSticky?: boolean
  logo?: React.ReactNode
  menuItems?: NavItem[]
  rightContent?: React.ReactNode
}

const ChevronIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-2.5 opacity-60 [&_path]:stroke-2"
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Navigation: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <nav className="flex-1">
    <ul className="flex justify-end gap-x-8 pr-8">
      {items.map(({ to, text, items }, index) => {
        const Tag = to ? 'a' : 'button'
        return (
          <li
            className={clsx('relative [perspective:2000px]', items?.length > 0 && 'group')}
            key={index}
          >
            <Tag
              className={clsx(
                'flex items-center gap-x-1 whitespace-pre text-sm font-medium',
                'text-gray-600 hover:text-primary transition-colors'
              )}
              href={to}
            >
              {text}
              {items?.length > 0 && <ChevronIcon />}
            </Tag>
            {items?.length > 0 && (
              <div
                className={clsx(
                  'absolute -left-5 top-full w-[300px] pt-5',
                  'pointer-events-none opacity-0',
                  'origin-top-left transition-[opacity,transform] duration-200 [transform:rotateX(-12deg)_scale(0.9)]',
                  'group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:[transform:none]'
                )}
              >
                <ul
                  className={clsx(
                    'relative flex min-w-[248px] flex-col gap-y-0.5 rounded-[14px] border p-2.5',
                    'bg-white border-gray-200 shadow-lg'
                  )}
                >
                  {items.map(({ text, description, to }, index) => (
                    <li key={index}>
                      <a
                        className={clsx(
                          'group/link relative flex items-center overflow-hidden whitespace-nowrap rounded-[14px] p-2',
                          'text-gray-600 hover:text-primary hover:bg-gray-50'
                        )}
                        href={to}
                      >
                        <div className="relative z-10 ml-3">
                          <span className="block text-sm font-medium">{text}</span>
                          {description && (
                            <span className="mt-0.5 block text-sm text-gray-500">
                              {description}
                            </span>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  </nav>
)

export const Header: React.FC<HeaderProps> = ({
  className,
  isSticky = false,
  logo,
  menuItems = [],
  rightContent,
}) => {
  return (
    <header
      className={clsx(
        'relative z-40 w-full',
        isSticky && 'sticky top-0',
        'bg-white',
        className
      )}
    >
      <div className="mx-auto max-w-[1760px] px-5 py-4">
        <div className="flex items-center justify-between">
          {logo}
          <div className="flex items-center flex-1">
            <Navigation items={menuItems} />
            <div className="flex items-center">
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Button }
export default Header 