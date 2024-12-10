import Link from "next/link"

export default function HomeFooter() {
  return (
    <footer className="border-t py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Love Predict</h3>
            <p className="text-sm text-gray-600">
              AI驱动的感情关系分析平台
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">产品</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">AI测评</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">关系分析</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">专业建议</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">关于</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">关于我们</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">联系我们</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">隐私政策</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li className="text-sm">邮箱：contact@lovepredict.com</li>
              <li className="text-sm">电话：400-123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 Love Predict. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 