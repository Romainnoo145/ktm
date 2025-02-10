'use client'

import { ReactNode } from 'react'
import HeaderWrapper from './Header'
import { Footer } from '@/components/ui/footer-section'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWrapper />
      <main>{children}</main>
      <Footer />
    </div>
  )
} 