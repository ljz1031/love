"use client"

import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "通过Love Predict的分析，我更好地理解了自己和伴侣的关系。现在我们的沟通更顺畅了。",
    author: "张小姐",
    title: "已婚两年",
  },
  {
    content: "AI分析报告非常专业，给出的建议都很实用。帮助我们解决了很多问题。",
    author: "王先生",
    title: "恋爱中",
  },
  {
    content: "使用这个平台让我对感情有了更深的认识，推荐给所有想要改善关系的人。",
    author: "李女士",
    title: "已婚五年",
  }
]

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50/30" id="testimonials">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            用户心得分享
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            听听其他用户是如何通过 Love Predict 改善他们的感情关系
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow relative group"
            >
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 ring-2 ring-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary/70">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 