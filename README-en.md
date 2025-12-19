# Effective Cursor

English | [中文](README.md)

> 🎯 Cursor AI-Assisted Development Wiki — From beginner to expert, master AI-assisted programming best practices

## 📖 About This Project

This is a practical guide Wiki for **Cursor AI-assisted development**, based on real-world project experience, helping developers unleash the full power of Cursor.

- 🚀 [Read Online (中文)](https://effective-cursor.vercel.app/zh)
- 🚀 [Read Online (English)](https://effective-cursor.vercel.app/en)

## 🗂️ Content Structure

This Wiki is organized into **4 core modules with 13 pages**, forming a progressive path: "Basics → Engineering → Configuration → Mastery"

### 1. Basics & Getting Started
- **Quick Start with Cursor** — UI, core features, shortcuts, project indexing
- **Model Selection & Cost Optimization** — Model comparison, scenario selection, cost control

### 2. Engineering, Tech Stack & Adaptation
- **AI-Era Tech Stack Selection** — AI-friendly tech stack analysis & best practices
- **Engineering Practices: Lint, Format & CI/CD** — Quality assurance & automation
- **AI-Assisted Automated Testing** — Test generation & TDD practices

### 3. Core Features & Configuration
- **Cursor Rules Development Guide** — Rules writing principles & advanced techniques
- **Rules Examples Collection** — Reusable rule templates by tech stack

### 4. Prompt Engineering
- **Prompt Engineering Principles** — From basic to advanced prompt design
- **Structured PRD Prompting Practice** — Complete workflow from requirements to code
- **Prompt Template Library** — Ready-to-use template collection

## 🛠️ Local Development

### Prerequisites
- Node >= 20.x
- pnpm 9.x

### Installation & Running

```bash
# Install dependencies
pnpm install

# Local development
pnpm dev
```

Open http://localhost:8000 to access

## 📝 Contributing

Contributions are welcome! You can:

1. Submit [Issues](https://github.com/cyronlee/effective-cursor/issues) for feedback or suggestions
2. Submit PRs to contribute experiences, templates, or corrections

### Documentation Structure

```
src/content/
├── zh/                    # Chinese docs
│   ├── _meta.tsx          # Navigation config
│   ├── index.mdx          # Homepage
│   └── docs/              # Documentation content
│       ├── _meta.tsx      # Doc navigation
│       └── *.mdx          # Page content
└── en/                    # English docs (same structure)
```

## 📄 License

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — Attribution-NonCommercial-ShareAlike

## 🙏 Acknowledgments

- This project is built on the [nextjs-nextra-starter](https://github.com/Cyronlee/effective-cursor) template
- Thanks to all contributors for sharing their valuable experiences
