'use client'

import Link from 'next/link'
import Header, { Button } from '@/components/ui/21st-navbar'

const menuItems = [
  { text: 'Home', to: '/' },
  { 
    text: 'Diensten',
    to: '/services',
    items: [
      {
        text: 'Dakwerken',
        to: '/services/dakwerken'
      },
      {
        text: 'Timmerwerken',
        to: '/services/timmerwerken'
      },
      {
        text: 'Renovatie & Onderhoud',
        to: '/services/renovatie-onderhoud'
      }
    ]
  },
  { text: 'Projecten', to: '/project' },
  { text: 'Contact', to: '/contact-us' }
]

export default function HeaderWrapper() {
  return (
    <Header
      isSticky
      className="bg-white"
      logo={
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          KTM
        </Link>
      }
      menuItems={menuItems}
      rightContent={
        <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 ml-8">
          <Link href="/contact-us">
            Offerte Aanvragen
          </Link>
        </Button>
      }
    />
  )
} 