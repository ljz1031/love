# 项目技术架构设计

## 技术栈

- **框架**: Next.js 15.0.4
- **语言**: TypeScript
- **UI 框架**: React 19
- **样式方案**: Tailwind CSS
- **组件库**: shadcn/ui
- **工具库**:
  - class-variance-authority (组件变体管理)
  - clsx (条件类名)
  - tailwind-merge (类名合并)
  - radix-ui (无障碍组件原语)

## 目录结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # UI 组件
│   └── ui/               
│       └── button.tsx     # Button 组件
└── lib/                   # 工具函数
    └── utils.ts           # 通用工具函数

配置文件:
├── next.config.ts         # Next.js 配置
├── tailwind.config.ts     # Tailwind 配置
├── postcss.config.mjs     # PostCSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json          # 项目依赖
```

## 技术要点

### 1. Next.js App Router
- 使用最新的 App Router 架构
- 支持布局系统
- 内置字体优化

### 2. UI 组件设计模式
- 采用 shadcn/ui 设计模式
- 使用 class-variance-authority 管理组件变体
- 组件支持主题定制
- 完整的 TypeScript 类型支持

### 3. 样式方案
- Tailwind CSS 实现样式
- 支持暗色模式
- 使用 CSS 变量管理主题
- PostCSS 处理样式转换

### 4. 工程化配置
- TypeScript 严格模式
- 路径别名支持
- ESLint 代码规范
- 完整的类型检查

## 开发规范

1. 组件开发
   - 使用函数组件
   - Props 类型声明
   - 支持组件变体
   - 遵循无障碍标准

2. 样式管理
   - 优先使用 Tailwind 类名
   - 遵循移动优先原则
   - 使用主题变量 