export default {
  systemTitle: 'Effective Cursor',
  banner: {
    title: '👋 Welcome to the Cursor AI-Assisted Development Wiki!',
    more: 'Learn more',
  },
  pageTitle: 'On This Page',
  backToTop: 'Back to top',

  search: {
    placeholder: 'Search...',
    noResults: 'No results found',
    errorText: 'Search error',
    loading: 'Loading...',
  },

  badgeTitle: 'Make AI Your Coding Partner 🤖',
  featureSupport: `🔥 {{feature}}`,
  lastUpdated: 'Last updated on:',

  getStarted: 'Get Started',
  viewDocs: 'Browse Docs',

  themeSwitcher: {
    light: 'Light Mode',
    dark: 'Dark Mode',
    lightAria: 'Switch to light mode',
    darkAria: 'Switch to dark mode',
  },

  heroSubtitle: 'From beginner to expert, master AI-assisted programming best practices',
  heroDescription: 'Based on real-world experience to help you unleash the full power of Cursor',

  // Six Core Modules (Six-Step Methodology)
  categories: [
    {
      title: '0. Tool Setup',
      description: 'Installation, extensions, model selection & MCP tools — make Cursor your truly handy dev environment',
      icon: 'rocket',
      link: '/docs/0-tool-setup',
    },
    {
      title: '1. Tech Stack',
      description: 'Explore AI-friendly programming languages & tech stacks, choose the most AI-compatible combinations',
      icon: 'code',
      link: '/docs/1-tech-stack',
    },
    {
      title: '2. Engineering',
      description: 'Project structure, database schema, static analysis, automated testing & CI/CD foundations',
      icon: 'stack',
      link: '/docs/2-scaffolding',
    },
    {
      title: '3. Cursor Rules',
      description: 'Understand how Rules work, master best practices, make AI automatically follow team standards',
      icon: 'settings',
      link: '/docs/3-cursor-rules',
    },
    {
      title: '4. Workflow',
      description: 'Context management, Direct/Document/Draft-Final modes — deeply integrate AI into your dev flow',
      icon: 'workflow',
      link: '/docs/4-workflow',
    },
    {
      title: '5. Feedback & Iteration',
      description: 'Metrics framework, feedback collection, retrospective practices — continuously improve AI effectiveness',
      icon: 'sparkles',
      link: '/docs/5-feedback',
    },
  ],

  featureList: [
    {
      title: 'Installation & Model Selection',
      description: 'Cursor setup, extension recommendations, model comparison & scenario-based selection guide',
    },
    {
      title: 'MCP Tool Ecosystem',
      description: 'Model Context Protocol tool integration, extending AI capabilities beyond boundaries',
    },
    {
      title: 'AI-Friendly Tech Stack',
      description: 'TypeScript, React, Next.js, NestJS/FastAPI — the best tech choices for the AI era',
    },
    {
      title: 'Engineering Architecture',
      description: 'Project structure optimization, database schema design, ESLint/Prettier static analysis setup',
    },
    {
      title: 'Testing & CI/CD',
      description: 'AI-assisted test generation, GitHub Actions integration, continuous integration & deployment',
    },
    {
      title: 'Cursor Rules Development',
      description: 'How Rules work, writing best practices, iteration & accumulation, meta-prompt techniques',
    },
    {
      title: 'Context Management',
      description: 'Effectively manage conversation context, keeping AI accurately informed about your project',
    },
    {
      title: 'Three Work Modes',
      description: 'Direct quick mode, Document-driven mode, Draft-Final two-stage collaboration',
    },
    {
      title: 'Continuous Feedback & Iteration',
      description: 'Metrics framework, feedback collection, retrospective guide & real-world experience sharing',
    },
  ],
  featuresDesc: '30+ carefully crafted docs covering the complete AI-assisted development workflow',

  faqs: [
    {
      question: 'Who is this Wiki for?',
      answer: 'For all developers looking to improve their AI-assisted programming efficiency. Whether you\'re new to Cursor or an experienced user, you\'ll find practical tips and best practices here.',
    },
    {
      question: 'How is the Wiki content organized?',
      answer: 'Content follows the "Six-Step Methodology": Tool Setup → Tech Stack → Engineering → Cursor Rules → Workflow → Feedback & Iteration, forming a complete loop from tools to process.',
    },
    {
      question: 'Why should I learn in this order?',
      answer: 'Get tools ready, choose the right tech stack, and build a solid engineering foundation first to avoid "AI writes fast, debugging is painful". Rules are the highest leverage for reducing manual corrections, and standardized workflows transform AI from occasional helper to full-time collaborator.',
    },
    {
      question: 'What\'s the difference between Cursor Rules and regular prompts?',
      answer: 'Cursor Rules are project-level persistent configurations that automatically apply to all conversations, ideal for defining coding standards and architectural constraints. Regular prompts are instant instructions for single conversations.',
    },
    {
      question: 'How do I choose the right AI model?',
      answer: 'Different models have different strengths: Claude excels at complex reasoning and long contexts, GPT-4 is great for general tasks, while lightweight models suit simple completions. The Wiki includes detailed comparison tables and selection guidelines.',
    },
    {
      question: 'Can I contribute content?',
      answer: 'Absolutely! You can submit issues on GitHub for feedback or suggestions, or directly submit PRs to contribute your practical experiences and templates.',
    },
  ],

  quickLinks: {
    title: 'Quick Links',
    items: [
      { label: 'Getting Started', link: '/docs' },
      { label: 'Model Selection', link: '/docs/0-tool-setup/model-selection' },
      { label: 'Rules Best Practices', link: '/docs/3-cursor-rules/best-practices' },
      { label: 'Workflow Practice', link: '/docs/4-workflow/workflow-practice' },
    ],
  },
}
