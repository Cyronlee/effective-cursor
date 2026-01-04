# Effective Cursor

English | [中文](README.md)

> 🎯 Cursor AI-Assisted Development Wiki — From beginner to expert, master AI-assisted programming best practices

## 📖 About This Project

This is a practical guide Wiki for **Cursor AI-assisted development**, based on real-world project experience, helping developers unleash the full power of Cursor.

- 🚀 [Read Online (中文)](https://effective-cursor.vercel.app/zh)
- 🚀 [Read Online (English)](https://effective-cursor.vercel.app/en)

## 🗂️ Content Structure

This Wiki is organized following the **Effective Cursor Methodology (Six Steps)**, forming a complete loop from tools to workflow:

| Step | Name              | Core Goal                                        |
|------|-------------------|--------------------------------------------------|
| 0    | Tool Setup        | Make Cursor your truly handy development environment |
| 1    | Tech Stack        | Choose the most AI-friendly tech stack           |
| 2    | Engineering       | Establish engineering foundation                 |
| 3    | Cursor Rules      | Make AI automatically follow team standards      |
| 4    | Workflow          | Deeply integrate AI into daily development       |
| 5    | Feedback & Iteration | Continuously iterate to improve AI effectiveness |

### Why This Order?

- Get tools ready, choose the right tech stack, and build a solid engineering foundation first to avoid "AI writes fast, debugging is painful"
- Rules are the highest leverage for reducing manual correction costs
- Standardized workflow transforms AI from "occasional helper" to "full-time collaborator"
- Feedback and iteration is key to maintaining productivity leadership

### Detailed Contents

```
0. Tool Setup
   ├── Installation & Configuration
   ├── Extensions
   ├── Model Selection
   ├── MCP Tools
   └── Collaboration Software

1. Tech Stack Selection
   ├── AI Era Favorites
   ├── Frontend Stack
   └── Backend Stack

2. Engineering Architecture
   ├── Project Structure Optimization
   ├── Database Schema
   ├── Static Analysis Tools
   ├── Automated Testing
   └── CI/CD Pipeline

3. Cursor Rules
   ├── How Rules Work
   ├── Rules Writing Best Practices
   ├── Rules Iteration & Accumulation
   └── Meta Prompts for Generating Rules

4. Workflow
   ├── Modes Overview
   ├── Context Management
   ├── Direct Mode
   ├── Document Mode
   ├── Draft-Final Mode
   └── Workflow Practice

5. Feedback & Iteration
   ├── Metrics Framework
   ├── Feedback Collection
   ├── Retrospective Guide
   └── Our Practice Feedback
```

## 🛠️ Local Development

### Prerequisites
- Node >= 20.x
- bun >= 1.1.0

### Installation & Running

```bash
# Install dependencies
bun install

# Local development
bun dev
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
│       ├── index.mdx      # Getting Started
│       ├── 0-tool-setup/  # Tool Setup
│       ├── 1-tech-stack/  # Tech Stack Selection
│       ├── 2-scaffolding/ # Engineering Architecture
│       ├── 3-cursor-rules/# Cursor Rules
│       ├── 4-workflow/    # Workflow
│       └── 5-feedback/    # Feedback & Iteration
└── en/                    # English docs (same structure)
```

## 📄 License

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — Attribution-NonCommercial-ShareAlike

## 🙏 Acknowledgments

- This project is built on the [nextjs-nextra-starter](https://github.com/pdsuwwz/nextjs-nextra-starter) template
- Thanks to all contributors for sharing their valuable experiences
