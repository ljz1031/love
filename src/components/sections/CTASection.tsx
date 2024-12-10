import React from 'react'
import { Button } from "../../components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          开始你的感情关系分析之旅
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          立即体验AI驱动的感情关系分析，获取专业的建议指导
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">免费注册</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10" asChild>
            <Link href="/about">了解更多</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 