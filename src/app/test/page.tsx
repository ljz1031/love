import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TestLayout from './components/TestLayout'
import { Brain, Heart, ChartPieIcon } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "多维度性格分析",
    description: "基于MBTI和Big Five模型的全面性格评估"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "情感认知测评",
    description: "深入分析您的情感表达和处理方式"
  },
  {
    icon: <ChartPieIcon className="w-8 h-8" />,
    title: "专业分析报告",
    description: "生成详细的分析报告和改善建议"
  }
]

export default function TestPage() {
  return (
    <TestLayout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              开始您的感情关系测评
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              通过科学的测评系统，深入了解自己的性格特征和情感模式，获取专业的分析和建议
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href="/test/questions">开始测评</Link>
              </Button>
              <p className="text-sm text-gray-500">
                预计用时 15-20 分钟 | 可随时保存进度
              </p>
            </div>
          </div>
        </div>
      </section>
    </TestLayout>
  )
} 