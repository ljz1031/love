"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, Timer } from 'lucide-react'

interface ProgressBarProps {
  current: number
  total: number
  className?: string
}

export default function ProgressBar({ current, total, className }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-primary">
            {current}/{total}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Timer className="w-4 h-4" />
            <span>预计还需 {Math.ceil((total - current) * 0.5)} 分钟</span>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 text-primary transition-all duration-300 transform",
            percentage === 100 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-50"
          )}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-medium">测评完成！</span>
        </div>
      </div>

      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px]" />
        
        {/* 进度条 */}
        <div 
          className="relative h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        >
          {/* 光效 */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]" />
          
          {/* 进度提示 */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg px-2 py-1 text-xs font-medium text-primary transform -translate-x-1/2 transition-all duration-200"
          >
            {percentage}%
          </div>
        </div>
      </div>

      {/* 阶段提示 */}
      <div className="mt-4 text-sm text-gray-500 text-center">
        {percentage < 30 && "开始了解你的性格特征..."}
        {percentage >= 30 && percentage < 60 && "深入分析你的情感模式..."}
        {percentage >= 60 && percentage < 100 && "即将完成，继续加油！"}
        {percentage === 100 && (
          <span className="text-primary font-medium animate-fadeIn">
            太棒了！测评已完成，正在生成专业报告...
          </span>
        )}
      </div>
    </div>
  )
} 