import React from 'react'
import HomeHeader from '@/components/layout/HomeHeader'
import HomeFooter from '@/components/layout/HomeFooter'

export default function TestLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      <main className="flex-1">
        {children}
      </main>
      <HomeFooter />
    </div>
  )
} 