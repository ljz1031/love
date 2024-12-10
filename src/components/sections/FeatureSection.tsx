import { Brain, ChartPieIcon, Heart, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI测评系统",
    description: "基于先进AI技术的多维度性格分析和匹配系统"
  },
  {
    icon: <ChartPieIcon className="w-10 h-10" />,
    title: "智能分析报告",
    description: "详细的关系分析报告和改善建议"
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "个性化建议",
    description: "针对您的具体情况提供专业的改善方案"
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "社区互动",
    description: "与专家和其他用户分享经验和建议"
  }
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          为什么选择 Love Predict
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 