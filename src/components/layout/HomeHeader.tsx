"use client"

import Link from 'next/link'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function HomeHeader() {
  const handleUnderDevelopment = () => {
    toast.info("还没开发完，等等我哈", {
      position: "top-center",
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Love Predict
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Button variant="ghost" onClick={handleUnderDevelopment}>首页</Button>
            <Button variant="ghost" onClick={handleUnderDevelopment}>关于我们</Button>
            <Button variant="ghost" onClick={handleUnderDevelopment}>帮助中心</Button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={handleUnderDevelopment}>登录</Button>
            <Button onClick={handleUnderDevelopment}>注册</Button>
          </div>
        </div>
      </div>
    </header>
  )
} 