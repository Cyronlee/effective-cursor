# Agent Skills

Agent Skills 是一个用于为 AI 智能体扩展专门能力的开放标准。Skills 将特定领域的知识和工作流封装起来，智能体可以调用这些 Skills 来执行特定任务。

## 什么是技能？

技能是一个可移植、支持版本控制的包，用于让 Agent 学会如何执行特定领域的任务。技能既可以包含说明性指令，也可以包含 Agent 可运行的脚本或代码。

- [可移植](): 技能适用于任何支持 Agent Skills 标准的 Agent。
- [受版本控制](): 技能以文件形式存储，可以在你的代码仓库中追踪其变更，或通过 GitHub 仓库链接进行安装。
- [可执行](): 技能可以包含脚本和代码，由 Agent 执行以完成任务。
- [渐进式](): 技能按需加载资源，使上下文使用更加高效。

## 技能的工作原理

Cursor 启动时，会自动从技能目录中发现并加载技能，并将它们提供给 Agent 使用。Agent 会看到所有可用技能，并根据当前上下文决定何时调用它们。

你也可以在 Agent 对话中输入 `/` 并搜索技能名称来手动调用技能。

## 技能目录

技能会自动从以下位置加载：

位置作用域`.cursor/skills/`项目级`.claude/skills/`项目级（兼容 Claude）`.codex/skills/`项目级（兼容 Codex）`~/.cursor/skills/`用户级（全局）`~/.claude/skills/`用户级（全局，兼容 Claude）`~/.codex/skills/`用户级（全局，兼容 Codex）
每个技能应为一个包含 `SKILL.md` 文件的文件夹：

```
.cursor/
└── skills/
    └── my-skill/
        └── SKILL.md
```

技能还可以包含脚本、参考文件和资源等可选目录：

```
.cursor/
└── skills/
    └── deploy-app/
        ├── SKILL.md
        ├── scripts/
        │   ├── deploy.sh
        │   └── validate.py
        ├── references/
        │   └── REFERENCE.md
        └── assets/
            └── config-template.json
```

## SKILL.md 文件格式

每个 Skill 都在带有 YAML 前置信息（frontmatter）的 `SKILL.md` 文件中定义：

```
---
name: my-skill
description: 简要描述此技能的功能及使用时机。
---

# 我的技能

为 Agent 提供的详细指令。

## 使用时机

- 在以下情况使用此技能...
- 此技能适用于...

## 指令

- 为 Agent 提供的分步指导
- 特定领域的约定
- 最佳实践和模式
- 如需向用户澄清需求,请使用提问工具
```

### Frontmatter 字段

字段必填说明`name`Yes技能标识符。仅限小写字母、数字和连字符。必须与父文件夹名称一致。`description`Yes描述技能的作用及其使用场景。由代理用于判断相关性。`license`No许可证名称或对随附许可证文件的引用。`compatibility`No运行环境要求（系统软件包、网络访问等）。`metadata`No用于额外元数据的任意键值映射。`disable-model-invocation`No当为 `true` 时，该技能仅会在通过 `/skill-name` 显式调用时才会被使用。代理不会基于上下文自动调用它。
## 禁用自动调用

默认情况下，当 agent 判断某个 skill 相关时，会自动应用该 skill。将 `disable-model-invocation` 设为 `true`，可以让该 skill 的行为类似传统的斜杠命令（slash command），只有当你在聊天中显式输入 `/skill-name` 时，才会被包含进上下文。

## 在技能中包含脚本

技能可以包含 `scripts/` 目录，内含可由代理运行的可执行代码。在 `SKILL.md` 文件中使用相对于技能根目录的相对路径引用这些脚本。

```
---
name: deploy-app
description: 将应用部署到预发布或生产环境。在部署代码时使用,或当用户提及部署、发布或环境时使用。
---

# Deploy App

Deploy the application using the provided scripts.

## Usage

Run the deployment script: `scripts/deploy.sh <environment>`

Where `<environment>` is either `staging` or `production`.

## Pre-deployment Validation

Before deploying, run the validation script: `python scripts/validate.py`
```

当技能被调用时，agent 会读取这些指令并执行引用的脚本。脚本可以使用任何语言编写，例如 Bash、Python、JavaScript，或 agent 实现所支持的任何其他可执行格式。

脚本应是自包含的，提供有用的错误信息，并能优雅地处理各种边界情况。

## 可选目录

Skills 支持以下可选目录：

DirectoryPurpose`scripts/`Agents 可以运行的可执行代码`references/`按需加载的附加文档`assets/`模板、图片或数据文件等静态资源
请让主 `SKILL.md` 文件保持简洁，将详细参考资料放在单独的文件中。这样可以更高效地利用上下文，因为 Agents 会按需逐步加载资源——只在需要时才加载。

## 查看技能

要查看已发现的技能：

1. 打开 **Cursor Settings**（Mac 上为 Cmd+Shift+J，Windows/Linux 上为 Ctrl+Shift+J）
2. 前往 **Rules**
3. 技能会显示在 **Agent Decides** 部分中

## 从 GitHub 安装技能

可以从 GitHub 仓库导入技能：

1. 打开 **Cursor Settings → Rules**
2. 在 **Project Rules** 部分，点击 **Add Rule**
3. 选择 **Remote Rule (Github)**
4. 输入 GitHub 仓库的 URL

## 将规则和命令迁移到技能

Cursor 在 2.4 中内置了一个 `/migrate-to-skills` 技能，帮助你将现有的动态规则和斜杠命令转换为技能。

该迁移技能会转换：

- **Dynamic rules**：使用 "Apply Intelligently" 配置的规则——即 `alwaysApply: false`（或未定义）且未定义 `globs` 模式的规则。这些会被转换为标准技能。
- **Slash commands**：用户级和工作区级命令都会被转换为带有 `disable-model-invocation: true` 的技能，从而保留其显式调用行为。

迁移步骤：

1. 在 Agent 聊天中输入 `/migrate-to-skills`
2. Agent 会识别符合条件的规则和命令并将其转换为技能
3. 在 `.cursor/skills/` 中查看生成的技能

具有 `alwaysApply: true` 或特定 `globs` 模式的规则不会被迁移，因为它们有与技能行为不同的显式触发条件。用户规则也不会被迁移，因为它们不存储在文件系统中。

## 了解更多

Agent Skills 是一项开放标准。详见 [agentskills.io](https://agentskills.io)。