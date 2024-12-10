"use client"

import React from 'react'
import TestLayout from '../components/TestLayout'
import QuestionCard from '../components/QuestionForm/QuestionCard'
import ProgressBar from '../components/Progress/ProgressBar'
import { Button } from '@/components/ui/button'
import { Question, Answer } from '../components/QuestionForm/types'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

// 示例问题数据
const questions: Question[] = [
  {
    id: '1',
    type: 'single',
    category: 'personality',
    title: '在社交场合中，你通常会：',
    options: [
      { value: 'E', label: '主动与他人交谈，享受社交' },
      { value: 'I', label: '保持安静，倾向于观察' }
    ]
  },
  {
    id: '2',
    type: 'scale',
    category: 'emotion',
    title: '你在感情中表达情感的程度：',
    description: '请根据你的实际情况选择合适的程度',
    scaleRange: {
      min: 1,
      max: 5,
      minLabel: '含蓄委婉',
      maxLabel: '直接表达'
    }
  }
]

// 本地存储键
const STORAGE_KEY = 'love-predict-answers'

export default function QuestionsPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [answers, setAnswers] = React.useState<Answer[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSaving, setIsSaving] = React.useState(false)

  // 从本地存储加载答案
  React.useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEY)
      if (savedAnswers) {
        const parsed = JSON.parse(savedAnswers)
        setAnswers(parsed)
        // 找到最后一个回答的问题索引
        const lastAnsweredIndex = questions.findIndex(q => 
          parsed.find((a: Answer) => a.questionId === q.id)
        )
        if (lastAnsweredIndex > -1) {
          setCurrentIndex(lastAnsweredIndex)
          toast.success('已恢复上次的答案')
        }
      }
    } catch (error) {
      console.error('Failed to load saved answers:', error)
      toast.error('加载保存的答案失败')
    }
  }, [])

  // 保存答案到本地存储
  const saveAnswers = React.useCallback((newAnswers: Answer[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers))
    } catch (error) {
      console.error('Failed to save answers:', error)
      toast.error('保存答案失败')
    }
  }, [])

  const handleAnswer = (answer: Answer) => {
    setAnswers(prev => {
      const newAnswers = [...prev]
      const index = newAnswers.findIndex(a => a.questionId === answer.questionId)
      if (index > -1) {
        newAnswers[index] = answer
      } else {
        newAnswers.push(answer)
      }
      // 保存到本地存储
      saveAnswers(newAnswers)
      return newAnswers
    })
  }

  const currentAnswer = answers.find(a => a.questionId === questions[currentIndex].id)
  const isLastQuestion = currentIndex === questions.length - 1
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
    }
  }

  const handleNext = () => {
    if (!currentAnswer) {
      toast.error('请先回答当前问题')
      return
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
    }
  }

  const handleComplete = async () => {
    if (answers.length !== questions.length) {
      toast.error('请完成所有问题')
      return
    }

    try {
      setIsSaving(true)
      // TODO: 保存答案到服务器
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟API调用
      router.push('/test/result')
    } catch (error) {
      console.error('Failed to save answers:', error)
      toast.error('保存答案失败，请重试')
    } finally {
      setIsSaving(false)
    }
  }

  // 添加键盘导航
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && !isLoading && currentIndex > 0) {
        handlePrevious()
      } else if (e.key === 'ArrowRight' && !isLoading && currentAnswer && currentIndex < questions.length - 1) {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, currentAnswer, isLoading])

  if (isLoading) {
    return (
      <TestLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>加载中...</span>
          </div>
        </div>
      </TestLayout>
    )
  }

  return (
    <TestLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* 进度条区域 */}
          <div className="bg-white rounded-xl p-6 shadow-md mb-8">
            <ProgressBar 
              current={currentIndex + 1} 
              total={questions.length} 
              className="mb-2"
            />
            <p className="text-sm text-gray-500 text-center">
              已完成 {progress}% · 共 {questions.length} 题
            </p>
          </div>
          
          {/* 问题卡片 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  问题 {currentIndex + 1}/{questions.length}
                </span>
                {!currentAnswer && (
                  <span className="text-sm text-amber-500">* 请选择答案继续</span>
                )}
              </div>
              <QuestionCard
                question={questions[currentIndex]}
                answer={currentAnswer}
                onAnswer={handleAnswer}
              />
            </div>
          </div>

          {/* 按钮区域 */}
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0 || isLoading}
              className="bg-white hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                ← 上一题
              </span>
            </Button>
            {isLastQuestion ? (
              <Button
                onClick={handleComplete}
                disabled={!currentAnswer || isSaving}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                {isSaving ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    保存中...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    完成测评 →
                  </span>
                )}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!currentAnswer || isLoading}
                className="bg-primary hover:bg-primary/90"
              >
                <span className="flex items-center gap-2">
                  下一题 →
                </span>
              </Button>
            )}
          </div>

          {/* 键盘提示 */}
          <div className="mt-6 text-center text-sm text-gray-500">
            提示：可使用键盘 ← → 方向键切换题目
          </div>
        </div>
      </div>
    </TestLayout>
  )
} 