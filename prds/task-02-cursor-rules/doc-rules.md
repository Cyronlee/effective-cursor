# 规则

规则为 Agent 提供系统级指令。它们将提示词、脚本等内容打包在一起，便于在团队内管理和共享工作流。

Cursor 支持四种类型的规则：

- [项目规则](): 存储在 .cursor/rules 中，受版本控制，作用范围限定在你的代码库内。
- [用户规则](): 在整个 Cursor 环境中全局生效，由 Agent（Chat）使用。
- [团队规则](): 在控制台集中管理的团队级规则。适用于 Team 和 Enterprise 方案。
- [AGENTS.md](): 以 Markdown 格式编写的 Agent 指令，是
.cursor/rules 的简洁替代方案。

## 规则的工作原理

大型语言模型在不同补全之间不会保留记忆。规则在提示级别提供持久、可重用的上下文。

应用后，规则内容会被加入到模型上下文的开头。这为 AI 在生成代码、理解编辑或协助处理工作流时提供一致的指导。

## 项目规则

项目规则位于 `.cursor/rules` 中。每条规则对应一个包含 `RULE.md` 文件的文件夹，并纳入版本控制。规则可以通过路径模式限定作用范围，可手动触发，或根据相关性自动引入。

使用项目规则可以：

- 沉淀与你代码库相关的领域知识
- 自动化项目特定的工作流或模板
- 统一风格或架构决策

### 规则文件夹结构

每个规则文件夹可以包含：

- **`RULE.md`** — 包含 frontmatter 元数据和指令的主规则文件
- **脚本和提示词** — 由该规则引用的其他文件

```
.cursor/rules/
  my-rule/
    RULE.md           # 主规则文件
    scripts/          # 辅助脚本(可选)
```

### 规则结构

每条规则对应一个文件夹，其中包含带有 frontmatter 元数据和正文内容的 `RULE.md` 文件。通过类型下拉菜单可以控制规则的应用方式，该菜单会修改 `description`、`globs`、`alwaysApply` 等属性。

规则类型描述`Always Apply`应用于每个聊天会话`Apply Intelligently`当 Agent 根据描述判断其相关时应用`Apply to Specific Files`当文件匹配指定模式时应用`Apply Manually`在对话中被 @ 提及时应用（例如：`@my-rule`）
```
---
globs:
alwaysApply: false
---

- 定义服务时使用我们内部的 RPC 模式
- 服务名称始终使用 snake_case 命名

@service-template.ts
```

### 创建规则

使用 `New Cursor Rule` 命令，或在 `Cursor Settings > Rules, Commands` 中创建规则。这会在 `.cursor/rules` 中创建一个新的规则文件夹。你可以在设置中查看所有规则及其状态。

## 最佳实践

好的规则应当聚焦、可操作且范围明确。

- 将规则控制在 500 行以内
- 将较大的规则拆分为多个可组合的规则
- 提供具体示例或参考文件
- 避免模糊的指导，像写清晰的内部文档那样写规则
- 在聊天中重复使用提示时，复用已有规则

## RULE.md 文件格式

`RULE.md` 文件是一个带有 frontmatter 元数据和正文内容的 Markdown 文件。frontmatter 元数据用于控制如何应用该规则，正文内容则是规则本身。

```
---
description: "This rule provides standards for frontend components and API validation"
alwaysApply: false
---

...rest of the rule content
```

如果 `alwaysApply` 为 true，则该规则会应用于每个聊天会话。否则，将把该规则的描述提供给 Cursor Agent，由其决定是否需要应用该规则。

