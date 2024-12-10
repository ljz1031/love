"use client"

import React from 'react'
import { Question, Answer } from './types'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Heart, ThumbsUp, Brain, Sparkles } from 'lucide-react'

// 问题类型图标映射
const categoryIcons: Record<string, any> = {
  'personality': Brain,
  'emotion': Heart,
  'social': ThumbsUp,
  'default': Sparkles
}

interface QuestionCardProps {
  question: Question
  answer?: Answer
  onAnswer: (answer: Answer) => void
}

export default function QuestionCard({ question, answer, onAnswer }: QuestionCardProps) {
  const handleSingleChoice = (value: string) => {
    onAnswer({
      questionId: question.id,
      value
    })
  }

  const handleScaleChange = (value: number[]) => {
    onAnswer({
      questionId: question.id,
      value: value[0]
    })
  }

  const initialValue = React.useMemo(() => {
    if (answer?.value !== undefined) {
      return [answer.value as number]
    }
    return question.type === 'scale' && question.scaleRange 
      ? [question.scaleRange.min]
      : [1]
  }, [answer?.value, question])

  // 当前选中的量表值
  const currentScaleValue = answer?.value as number
  
  // 获取问题类型对应的图标
  const CategoryIcon = categoryIcons[question.category] || categoryIcons.default

  return (
    <div className="w-full max-w-2xl mx-auto animate-fadeIn">
      <div className="space-y-8">
        {/* 问题类型标签 */}
        <div className="flex items-center gap-2 text-primary/80 animate-scaleIn">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <CategoryIcon className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium capitalize">
            {question.category} 测试
          </span>
        </div>

        <div className="space-y-6 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-gray-900">{question.title}</h3>
          {question.description && (
            <p className="text-gray-600 text-lg">{question.description}</p>
          )}
        </div>

        <div className="mt-8">
          {question.type === 'single' && question.options && (
            <RadioGroup
              value={answer?.value as string}
              onValueChange={handleSingleChoice}
              className="space-y-4"
              aria-label={question.title}
            >
              {question.options.map((option, index) => (
                <label
                  key={option.value}
                  className={`
                    flex items-center space-x-3 p-6 rounded-xl border-2
                    ${answer?.value === option.value 
                      ? 'border-primary bg-primary/5 shadow-lg' 
                      : 'border-gray-100 hover:border-primary/30 hover:bg-primary/5'
                    } 
                    transition-all duration-200 cursor-pointer group
                    animate-fadeInUp
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                  <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${answer?.value === option.value
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-300 group-hover:border-primary/50'
                    }
                    transition-colors duration-200
                  `}>
                    {answer?.value === option.value && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-scaleIn" />
                    )}
                  </div>
                  <span className="flex-1 text-lg">
                    {option.label}
                  </span>
                </label>
              ))}
            </RadioGroup>
          )}

          {question.type === 'scale' && question.scaleRange && (
            <div className="space-y-8 p-8 rounded-xl border-2 border-gray-100 animate-fadeInUp">
              <div className="space-y-6">
                <Slider
                  value={initialValue}
                  min={question.scaleRange.min}
                  max={question.scaleRange.max}
                  step={1}
                  onValueChange={handleScaleChange}
                  className="cursor-pointer"
                  aria-label={`${question.title}的评分`}
                  aria-valuemin={question.scaleRange.min}
                  aria-valuemax={question.scaleRange.max}
                  aria-valuenow={currentScaleValue}
                />
                
                {/* 当前值显示 */}
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full px-6 py-3 animate-scaleIn">
                    <span className="text-3xl font-bold text-primary">
                      {currentScaleValue || question.scaleRange.min}
                    </span>
                    <span className="text-gray-500 ml-2">分</span>
                  </div>
                </div>

                {/* 量表说明 */}
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-lg font-medium text-gray-700">
                      {question.scaleRange.min}
                    </span>
                    <span>{question.scaleRange.minLabel}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-lg font-medium text-gray-700">
                      {question.scaleRange.max}
                    </span>
                    <span>{question.scaleRange.maxLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 