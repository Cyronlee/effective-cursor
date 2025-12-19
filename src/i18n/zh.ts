export default {
  systemTitle: 'Effective Cursor',
  banner: {
    title: '👋 欢迎来到 Cursor AI 辅助开发实践 Wiki！',
    more: '了解详情',
  },
  pageTitle: '当前页面',
  backToTop: '返回顶部',

  search: {
    placeholder: '搜索...',
    noResults: '没有搜索结果',
    errorText: '搜索出错',
    loading: '加载中...',
  },

  badgeTitle: '让 AI 成为你的编程伙伴 🤖',
  featureSupport: `🔥 {{feature}}`,
  lastUpdated: '最后更新于:',

  getStarted: '开始学习',
  viewDocs: '浏览文档',

  themeSwitcher: {
    light: '浅色模式',
    dark: '深色模式',
    lightAria: '切换到浅色模式',
    darkAria: '切换到深色模式',
  },

  heroSubtitle: '从入门到精通，掌握 AI 辅助编程的最佳实践',
  heroDescription: '基于实战经验，助你充分发挥 Cursor 的强大能力',

  // 四大分类
  categories: [
    {
      title: '基础与上手',
      description: '快速入门 Cursor，掌握核心功能与快捷键，了解模型选择与成本优化策略',
      icon: 'rocket',
      link: '/docs/getting-started',
    },
    {
      title: '工程化与技术栈',
      description: '探索 AI 友好的技术栈选择，建立可靠的 Lint、Format 与 CI/CD 工程体系',
      icon: 'code',
      link: '/docs/engineering',
    },
    {
      title: '核心功能与配置',
      description: '深入 Cursor Rules 配置，学习编写高效规则，提升代码生成质量',
      icon: 'settings',
      link: '/docs/configuration',
    },
    {
      title: '提示工程',
      description: '掌握提示词设计原则，从 PRD 到代码的完整实践，构建你的 Prompt 模板库',
      icon: 'sparkles',
      link: '/docs/prompt-engineering',
    },
  ],

  featureList: [
    {
      title: '快速上手 Cursor',
      description: '界面导览、核心功能（Chat、Composer、Cmd+K、@引用）、快捷键速查、项目索引优化',
    },
    {
      title: '模型选择与成本优化',
      description: '主流模型对比、场景选型指南、实测数据与成本控制技巧',
    },
    {
      title: 'AI 时代技术栈选择',
      description: 'React + TS + Zod、NestJS/FastAPI、Next.js 等 AI 友好技术栈分析与最佳实践',
    },
    {
      title: '工程化实践',
      description: 'Cursor Rules 与 ESLint/Prettier 联动、GitHub Actions 集成、双重审查机制',
    },
    {
      title: '自动化测试辅助',
      description: 'AI 生成单元/集成/e2e 测试、测试驱动开发的 AI 变种、覆盖率审查',
    },
    {
      title: 'Cursor Rules 制定',
      description: 'Rules 编写原则、条件规则、动态引用、与工具链联动的进阶技巧',
    },
    {
      title: '提示工程核心原则',
      description: '清晰表达、上下文提供、迭代优化、角色扮演、结构化输出',
    },
    {
      title: '结构化 PRD 实战',
      description: '从模糊需求到技术方案、任务拆解、代码生成的完整链条',
    },
    {
      title: 'Prompt 模板库',
      description: 'PRD、新功能、重构、调试优化、测试生成、文档生成等模板集合',
    },
  ],
  featuresDesc: '13 个精心设计的页面，覆盖 AI 辅助开发的方方面面',

  faqs: [
    {
      question: '这个 Wiki 适合什么人阅读？',
      answer: '适合所有想要提升 AI 辅助编程效率的开发者，无论你是 Cursor 新手还是有经验的用户，都能从中获得实用的技巧和最佳实践。',
    },
    {
      question: 'Wiki 的内容是如何组织的？',
      answer: '内容按照"基础上手 → 工程化保障 → 配置优化 → 提示工程"的进阶路径组织，帮助你循序渐进地掌握 AI 辅助开发的各个方面。',
    },
    {
      question: '为什么要学习提示工程？',
      answer: '好的提示词能让 AI 输出更精准的代码，减少反复修改的时间。掌握提示工程是发挥 Cursor 最大威力的关键。',
    },
    {
      question: 'Cursor Rules 和普通提示词有什么区别？',
      answer: 'Cursor Rules 是项目级别的持久化配置，会自动应用到所有对话中，适合定义编码规范、架构约束等。普通提示词则是单次对话的即时指令。',
    },
    {
      question: '如何选择合适的 AI 模型？',
      answer: '不同模型各有优劣：Claude 适合复杂推理和长文档，GPT-4 擅长通用任务，而轻量模型适合简单补全。Wiki 中有详细的对比表格和选型建议。',
    },
    {
      question: '我可以贡献内容吗？',
      answer: '非常欢迎！你可以通过 GitHub Issue 反馈问题或建议，也可以直接提交 PR 贡献你的实践经验和模板。',
    },
  ],

  quickLinks: {
    title: '快速导航',
    items: [
      { label: '快捷键速查', link: '/docs/shortcuts' },
      { label: '模型对比表', link: '/docs/models' },
      { label: 'Rules 示例', link: '/docs/rules-examples' },
      { label: 'Prompt 模板', link: '/docs/prompt-templates' },
    ],
  },
}
