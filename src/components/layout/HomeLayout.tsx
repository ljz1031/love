import React from 'react'
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      <main className="flex-grow">
        {children}
      </main>
      <HomeFooter />
    </div>
  )
} 