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

  // Four main categories
  categories: [
    {
      title: 'Basics & Getting Started',
      description: 'Quick start with Cursor, master core features & shortcuts, understand model selection & cost optimization',
      icon: 'rocket',
      link: '/docs/getting-started',
    },
    {
      title: 'Engineering & Tech Stack',
      description: 'Explore AI-friendly tech stacks, establish reliable Lint, Format & CI/CD engineering practices',
      icon: 'code',
      link: '/docs/engineering',
    },
    {
      title: 'Core Features & Config',
      description: 'Deep dive into Cursor Rules configuration, learn to write efficient rules, improve code generation quality',
      icon: 'settings',
      link: '/docs/configuration',
    },
    {
      title: 'Prompt Engineering',
      description: 'Master prompt design principles, complete practice from PRD to code, build your Prompt template library',
      icon: 'sparkles',
      link: '/docs/prompt-engineering',
    },
  ],

  featureList: [
    {
      title: 'Quick Start with Cursor',
      description: 'UI walkthrough, core features (Chat, Composer, Cmd+K, @references), shortcut cheat sheet, project indexing optimization',
    },
    {
      title: 'Model Selection & Cost Optimization',
      description: 'Model comparison, scenario-based selection guide, benchmarks and cost control tips',
    },
    {
      title: 'AI-Era Tech Stack Selection',
      description: 'React + TS + Zod, NestJS/FastAPI, Next.js and other AI-friendly tech stack analysis & best practices',
    },
    {
      title: 'Engineering Practices',
      description: 'Cursor Rules with ESLint/Prettier integration, GitHub Actions, dual review mechanism',
    },
    {
      title: 'Automated Testing Assistance',
      description: 'AI-generated unit/integration/e2e tests, AI-variant of TDD, coverage review',
    },
    {
      title: 'Cursor Rules Development',
      description: 'Rules writing principles, conditional rules, dynamic references, toolchain integration',
    },
    {
      title: 'Prompt Engineering Principles',
      description: 'Clear expression, context provision, iterative optimization, role-playing, structured output',
    },
    {
      title: 'Structured PRD Practice',
      description: 'Complete workflow from vague requirements to technical solutions, task breakdown, and code generation',
    },
    {
      title: 'Prompt Template Library',
      description: 'Templates for PRD, new features, refactoring, debugging, test generation, documentation, and more',
    },
  ],
  featuresDesc: '13 carefully crafted pages covering all aspects of AI-assisted development',

  faqs: [
    {
      question: 'Who is this Wiki for?',
      answer: 'For all developers looking to improve their AI-assisted programming efficiency. Whether you\'re new to Cursor or an experienced user, you\'ll find practical tips and best practices here.',
    },
    {
      question: 'How is the Wiki content organized?',
      answer: 'Content follows a progressive path: Getting Started → Engineering Practices → Configuration → Prompt Engineering, helping you master AI-assisted development step by step.',
    },
    {
      question: 'Why should I learn prompt engineering?',
      answer: 'Good prompts lead to more accurate AI-generated code, reducing time spent on revisions. Mastering prompt engineering is key to unleashing Cursor\'s full potential.',
    },
    {
      question: 'What\'s the difference between Cursor Rules and regular prompts?',
      answer: 'Cursor Rules are project-level persistent configurations that automatically apply to all conversations, ideal for defining coding standards and architectural constraints. Regular prompts are instant instructions for single conversations.',
    },
    {
      question: 'How do I choose the right AI model?',
      answer: 'Different models have different strengths: Claude excels at complex reasoning and long documents, GPT-4 is great for general tasks, while lightweight models are suitable for simple completions. The Wiki includes detailed comparison tables and selection guidelines.',
    },
    {
      question: 'Can I contribute content?',
      answer: 'Absolutely! You can submit issues on GitHub for feedback or suggestions, or directly submit PRs to contribute your practical experiences and templates.',
    },
  ],

  quickLinks: {
    title: 'Quick Links',
    items: [
      { label: 'Shortcut Cheat Sheet', link: '/docs/shortcuts' },
      { label: 'Model Comparison', link: '/docs/models' },
      { label: 'Rules Examples', link: '/docs/rules-examples' },
      { label: 'Prompt Templates', link: '/docs/prompt-templates' },
    ],
  },
}
