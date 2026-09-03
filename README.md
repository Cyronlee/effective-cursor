# Effective Cursor

中文 | [English](README-en.md)

> 🎯 Cursor AI 辅助开发实践 Wiki — 从入门到精通，掌握 AI 辅助编程的最佳实践

## 📖 关于本项目

这是一个关于 **Cursor AI 辅助开发**的实践指南 Wiki，基于真实项目经验，帮助开发者充分发挥 Cursor 的强大能力。

- 🚀 [在线阅读 (中文)](https://effective-cursor.vercel.app/zh)
- 🚀 [在线阅读 (English)](https://effective-cursor.vercel.app/en)

## 🗂️ 内容结构

| 步骤 | 名称              | 核心目标                          |
|------|-------------------|-----------------------------------|
| 0    | 工具就绪          | 让 Cursor 成为真正顺手的开发环境  |
| 1    | 技术选型          | 选择对 AI 最友好的技术栈          |
| 2    | 工程架构          | 建立工程化基础保障                |
| 3    | Agent Harness     | 系统性构建 Agent 运行环境         |
| 4    | 规范工作流        | 把 AI 深度融入日常开发流程        |
| 5    | 反馈与迭代        | 持续迭代，提升 AI 辅助效果        |

### 为什么按这个顺序？

- 先把工具磨好、技术栈选对、工程基础打牢，才能避免"AI 写得快、后期修得惨"
- Rules 是降低人工修正成本的最高杠杆
- 规范工作流让 AI 从"偶尔帮忙"变成"全程协作"
- 反馈更新是持续保持生产力领先的关键

### 详细目录

```
0. 工具就绪
   ├── 安装与配置
   ├── 扩展程序
   ├── 模型选择
   ├── MCP 工具
   └── 协作软件

1. 技术选型
   ├── AI 友好的技术
   ├── 前端技术栈
   └── 后端技术栈

2. 工程架构
   ├── 项目结构优化
   ├── 数据库 Schema
   ├── 静态分析工具
   ├── 自动化测试
   └── CI/CD 流程

3. Agent Harness
   ├── Rules 的工作原理
   ├── Rules 编写最佳实践
   ├── Rules 迭代与沉淀
   ├── 生成 Rules 的元提示词
   ├── AGENTS.md
   ├── Hooks
   ├── Subagents
   └── 验证闭环

4. 规范工作流
   ├── 模式总览
   ├── 上下文管理
   ├── Direct 模式
   ├── Document 模式
   ├── Draft-Final 模式
   └── 工作流实践

5. 反馈与迭代
   ├── 量化指标体系
   ├── 反馈收集机制
   ├── 复盘实践指南
   └── 我们的实践反馈
```

## 🛠️ 本地开发

### 前置条件
- Node >= 20.x
- bun >= 1.1.0

### 安装与运行

```bash
# 安装依赖
bun install

# 本地开发
bun dev
```

打开 http://localhost:8000 即可访问

## 📝 贡献指南

欢迎贡献内容！你可以：

1. 通过 [Issue](https://github.com/cyronlee/effective-cursor/issues) 反馈问题或建议
2. 提交 PR 贡献实践经验、模板或修正错误

### 文档结构

```
src/content/
├── zh/                    # 中文文档
│   ├── _meta.tsx          # 导航配置
│   ├── index.mdx          # 首页
│   └── docs/              # 文档内容
│       ├── _meta.tsx      # 文档导航
│       ├── index.mdx      # 快速起步
│       ├── 0-tool-setup/  # 工具就绪
│       ├── 1-tech-stack/  # 技术选型
│       ├── 2-scaffolding/ # 工程架构
│       ├── 3-agent-harness/# Agent Harness（Rules、AGENTS.md、Hooks、Subagents、验证闭环）
│       ├── 4-workflow/    # 规范工作流
│       └── 5-feedback/    # 反馈与迭代
└── en/                    # 英文文档 (结构同上)
```

## 📄 许可证

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — 署名-非商业性使用-相同方式共享

## 🙏 致谢

- 本项目基于 [nextjs-nextra-starter](https://github.com/pdsuwwz/nextjs-nextra-starter) 模板构建
- 感谢所有贡献者的宝贵经验分享
