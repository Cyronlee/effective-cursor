# Project Rules - AI 文档编写指南

## 中文版

### 项目概述
这是一个 Cursor AI 辅助开发实践 Wiki，使用 Next.js + Nextra 构建，支持中英双语。

### 文档结构
```
src/content/
├── zh/                    # 中文文档
│   ├── _meta.tsx          # 导航菜单配置
│   ├── index.mdx          # 首页 (使用 HomepageHero 组件)
│   └── docs/              # 文档目录
│       ├── _meta.tsx      # 子导航配置
│       └── *.mdx          # 文档页面
└── en/                    # 英文文档 (结构完全相同)
```

### 添加新文档的步骤

1. **创建 MDX 文件**: 在 `src/content/zh/docs/` 和 `src/content/en/docs/` 下同时创建同名文件
2. **更新导航**: 修改对应的 `_meta.tsx` 文件添加导航项
3. **双语同步**: 确保中英文版本内容结构一致

### 文档编写规范

- **文件命名**: 使用 kebab-case，如 `getting-started.mdx`
- **Frontmatter**: 每个 MDX 文件必须包含 `title` 字段
- **组件导入**: 可在 MDX 中导入 `@/components/` 下的组件
- **图片存放**: 放在 `public/img/` 目录下

### 四大核心模块（按此结构组织内容）

1. **基础与上手** (`/docs/getting-started/`)
   - 快速上手 Cursor
   - 模型选择与成本优化

2. **工程化与技术栈** (`/docs/engineering/`)
   - AI 时代技术栈选择
   - 工程化实践
   - 自动化测试辅助

3. **核心功能与配置** (`/docs/configuration/`)
   - Cursor Rules 制定指南
   - Rules 示例合集

4. **提示工程** (`/docs/prompt-engineering/`)
   - 提示工程核心原则
   - 结构化 PRD 实战
   - Prompt 模板库

### i18n 翻译
- 页面文案: 修改 `src/i18n/zh.ts` 和 `src/i18n/en.ts`
- 使用 `useLocale()` hook 获取翻译函数 `t()`

---

## English Version

### Project Overview
This is a Cursor AI-assisted development Wiki built with Next.js + Nextra, supporting both Chinese and English.

### Documentation Structure
```
src/content/
├── zh/                    # Chinese docs
│   ├── _meta.tsx          # Navigation menu config
│   ├── index.mdx          # Homepage (uses HomepageHero component)
│   └── docs/              # Documentation directory
│       ├── _meta.tsx      # Sub-navigation config
│       └── *.mdx          # Documentation pages
└── en/                    # English docs (same structure)
```

### Steps to Add New Documentation

1. **Create MDX file**: Create files with the same name under both `src/content/zh/docs/` and `src/content/en/docs/`
2. **Update navigation**: Modify the corresponding `_meta.tsx` file to add navigation items
3. **Bilingual sync**: Ensure Chinese and English versions have consistent content structure

### Documentation Guidelines

- **File naming**: Use kebab-case, e.g., `getting-started.mdx`
- **Frontmatter**: Each MDX file must include a `title` field
- **Component imports**: Can import components from `@/components/` in MDX
- **Images**: Store in `public/img/` directory

### Four Core Modules (Organize content by this structure)

1. **Basics & Getting Started** (`/docs/getting-started/`)
   - Quick Start with Cursor
   - Model Selection & Cost Optimization

2. **Engineering & Tech Stack** (`/docs/engineering/`)
   - AI-Era Tech Stack Selection
   - Engineering Practices
   - Automated Testing Assistance

3. **Core Features & Configuration** (`/docs/configuration/`)
   - Cursor Rules Development Guide
   - Rules Examples Collection

4. **Prompt Engineering** (`/docs/prompt-engineering/`)
   - Prompt Engineering Principles
   - Structured PRD Practice
   - Prompt Template Library

### i18n Translation
- Page content: Modify `src/i18n/zh.ts` and `src/i18n/en.ts`
- Use `useLocale()` hook to get translation function `t()`

