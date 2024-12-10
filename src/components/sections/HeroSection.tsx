"use client"

import React from 'react'
import { Button } from "../ui/button"
import Link from "next/link"
import { Heart, Sparkles, ChevronRight, Clock, CheckCircle, Brain, Lightbulb } from "lucide-react"
import { toast } from "sonner"

// 测评流程数据
const steps = [
  {
    icon: Brain,
    title: "个性测评",
    description: "了解你的性格特质"
  },
  {
    icon: Heart,
    title: "情感分析",
    description: "探索你的情感模式"
  },
  {
    icon: Lightbulb,
    title: "专业建议",
    description: "获取个性化指导"
  }
]

export default function HeroSection() {
  const handleUnderDevelopment = () => {
    toast.info("功能开发中，敬请期待...", {
      position: "top-center",
    })
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,182,193,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
      
      {/* 装饰图形 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-200/30 to-pink-200/20 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* 标题区域 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary/80">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">AI 智能情感分析</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-primary/60">
                AI驱动的感情关系分析专家
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto whitespace-nowrap">
              通过先进的AI技术，为您提供
              <span className="text-primary font-medium">科学的感情关系分析</span>
              和
              <span className="text-primary font-medium">专业的建议指导</span>
            </p>

            {/* 测评信息 */}
            <div className="flex items-center justify-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>约10分钟完成</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>准确率95%以上</span>
              </div>
            </div>
          </div>
          
          {/* 操作按钮 */}
          <div className="flex gap-4 justify-center items-center">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" asChild>
              <Link href="/test" className="flex items-center gap-2">
                立即开始测评
                <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
              onClick={handleUnderDevelopment}
            >
              <span className="flex items-center gap-2">
                了解更多
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* 测评流程 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
                )}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 