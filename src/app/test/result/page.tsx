"use client"

import React from 'react'
import TestLayout from '../components/TestLayout'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight, Download, Share2 } from 'lucide-react'

export default function ResultPage() {
  const router = useRouter()

  return (
    <TestLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* 总体评分 */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              测评结果分析
            </h1>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-600 mb-2">整体契合度</p>
                <div className="text-5xl font-bold text-primary">85%</div>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-primary">
                  A+
                </div>
              </div>
            </div>
          </div>

          {/* 详细分析 */}
          <div className="grid gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                性格特征分析
              </h3>
              <p className="text-gray-600 leading-relaxed">
                您的性格偏向内向，善于观察和倾听。这种特质使您在感情中能够更好地理解伴侣的需求，但也需要注意主动表达自己的想法。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                </div>
                情感表达方式
              </h3>
              <p className="text-gray-600 leading-relaxed">
                您倾向于含蓄地表达情感，这种方式可能需要伴侣更多的理解和耐心。建议适当增加直接表达的比例，以减少沟通中的误解。
              </p>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white"
              onClick={() => router.push('/test')}
            >
              重新测评
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              下载报告
            </Button>
            <Button variant="outline" className="bg-white">
              <Share2 className="w-4 h-4 mr-2" />
              分享结果
            </Button>
          </div>
        </div>
      </div>
    </TestLayout>
  )
} 