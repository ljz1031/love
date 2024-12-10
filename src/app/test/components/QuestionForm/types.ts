export interface Question {
  id: string
  type: 'single' | 'multiple' | 'scale'
  category: 'personality' | 'values' | 'lifestyle' | 'emotion'
  title: string
  description?: string
  options?: {
    value: string
    label: string
  }[]
  scaleRange?: {
    min: number
    max: number
    minLabel: string
    maxLabel: string
  }
}

export interface Answer {
  questionId: string
  value: string | number | string[]
}

export interface QuestionFormProps {
  questions: Question[]
  currentIndex: number
  answers: Answer[]
  onAnswer: (answer: Answer) => void
  onNext: () => void
  onPrev: () => void
  onSave?: () => void
} 