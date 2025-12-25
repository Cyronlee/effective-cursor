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

  // 六大核心模块（方法论六步走）
  categories: [
    {
      title: '0. 工具就绪',
      description: '安装配置、扩展程序、模型选择与 MCP 工具，让 Cursor 成为真正顺手的开发环境',
      icon: 'rocket',
      link: '/docs/0-tool-setup',
    },
    {
      title: '1. 技术选型',
      description: '探索 AI 友好的编程语言与前后端技术栈，选择对 AI 最友好的技术组合',
      icon: 'code',
      link: '/docs/1-tech-stack',
    },
    {
      title: '2. 工程架构',
      description: '项目结构、数据库 Schema、静态分析、自动化测试与 CI/CD，建立工程化基础',
      icon: 'stack',
      link: '/docs/2-scaffolding',
    },
    {
      title: '3. Cursor Rules',
      description: '理解 Rules 工作原理，掌握编写最佳实践，让 AI 自动遵守团队规范',
      icon: 'settings',
      link: '/docs/3-cursor-rules',
    },
    {
      title: '4. 规范工作流',
      description: '上下文管理、Direct/Document/Draft-Final 三种模式，把 AI 深度融入开发流程',
      icon: 'workflow',
      link: '/docs/4-workflow',
    },
    {
      title: '5. 反馈与迭代',
      description: '量化指标、反馈收集、复盘实践，持续迭代提升 AI 辅助效果',
      icon: 'sparkles',
      link: '/docs/5-feedback',
    },
  ],

  featureList: [
    {
      title: '安装与模型选择',
      description: 'Cursor 安装配置、扩展程序推荐、主流模型对比与场景选型指南',
    },
    {
      title: 'MCP 工具生态',
      description: 'Model Context Protocol 工具集成，扩展 AI 的能力边界',
    },
    {
      title: 'AI 友好技术栈',
      description: 'TypeScript、React、Next.js、NestJS/FastAPI 等 AI 时代的最佳技术选择',
    },
    {
      title: '工程架构设计',
      description: '项目结构优化、数据库 Schema 设计、ESLint/Prettier 等静态分析配置',
    },
    {
      title: '自动化测试与 CI/CD',
      description: 'AI 辅助生成测试、GitHub Actions 集成、持续集成部署流程',
    },
    {
      title: 'Cursor Rules 制定',
      description: 'Rules 工作原理、编写最佳实践、迭代沉淀与元提示词技巧',
    },
    {
      title: '上下文管理',
      description: '有效管理对话上下文，让 AI 始终保持对项目的准确理解',
    },
    {
      title: '三种工作模式',
      description: 'Direct 快速模式、Document 文档驱动、Draft-Final 两阶段协作',
    },
    {
      title: '持续反馈与迭代',
      description: '量化指标体系、反馈收集机制、复盘实践指南与实战经验分享',
    },
  ],
  featuresDesc: '30+ 篇精心编写的文档，覆盖 AI 辅助开发的完整流程',

  faqs: [
    {
      question: '这个 Wiki 适合什么人阅读？',
      answer: '适合所有想要提升 AI 辅助编程效率的开发者，无论你是 Cursor 新手还是有经验的用户，都能从中获得实用的技巧和最佳实践。',
    },
    {
      question: 'Wiki 的内容是如何组织的？',
      answer: '内容按照"六步方法论"组织：工具就绪 → 技术选型 → 工程架构 → Cursor Rules → 规范工作流 → 反馈迭代，形成从工具到流程的完整闭环。',
    },
    {
      question: '为什么要按这个顺序学习？',
      answer: '先把工具磨好、技术栈选对、工程基础打牢，才能避免"AI 写得快、后期修得惨"。Rules 是降低人工修正成本的最高杠杆，规范工作流让 AI 从"偶尔帮忙"变成"全程协作"。',
    },
    {
      question: 'Cursor Rules 和普通提示词有什么区别？',
      answer: 'Cursor Rules 是项目级别的持久化配置，会自动应用到所有对话中，适合定义编码规范、架构约束等。普通提示词则是单次对话的即时指令。',
    },
    {
      question: '如何选择合适的 AI 模型？',
      answer: '不同模型各有优劣：Claude 适合复杂推理和长上下文，GPT-4 擅长通用任务，而轻量模型适合简单补全。Wiki 中有详细的对比表格和选型建议。',
    },
    {
      question: '我可以贡献内容吗？',
      answer: '非常欢迎！你可以通过 GitHub Issue 反馈问题或建议，也可以直接提交 PR 贡献你的实践经验和模板。',
    },
  ],

  quickLinks: {
    title: '快速导航',
    items: [
      { label: '快速起步', link: '/docs' },
      { label: '模型选择', link: '/docs/0-tool-setup/model-selection' },
      { label: 'Rules 最佳实践', link: '/docs/3-cursor-rules/best-practices' },
      { label: '工作流实践', link: '/docs/4-workflow/workflow-practice' },
    ],
  },
}
