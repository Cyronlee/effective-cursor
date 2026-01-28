---
title: "使用 Agent 编码的最佳实践"
url: https://cursor.com/cn/blog/agent-best-practices
---

# 使用 Agent 编码的最佳实践

Jan 9, 2026 由 Cursor Team 在 [产品](/cn/blog/topic/product)

编码 Agent 正在改变构建软件的方式。

模型现在可以连续运行数小时，完成大规模的多文件重构，并持续迭代直到测试通过。但要充分发挥 Agent 的能力，你需要理解它们的工作原理，并形成新的使用范式。

本指南重点介绍如何使用 Cursor Agent 的各种技巧。无论你是刚开始尝试基于 Agent 的编码，还是想了解我们团队是如何使用 Cursor 的，我们都会系统性地讲解使用 Agent 编码的最佳实践。

## 了解 agent harness

一个 agent harness 建立在三个组件之上：

1. **Instructions** ：用于引导 agent 行为的 system prompt 和规则
2. **Tools** ：文件编辑、代码库搜索、终端执行等工具
3. **User messages** ：你用来指挥工作的提示词和后续交互

Cursor 的 agent harness 会为我们支持的每个模型编排这些组件。我们会基于内部评估和外部基准测试，为每个前沿模型专门 [调整 instructions](/blog/codex-model-harness) 和 [工具](/blog/semsearch) 。

harness 之所以重要，是因为不同模型对相同提示词的响应方式不同。一个在 shell 型工作流上大量训练过的模型，可能更偏好使用 `grep` 而不是专门的搜索工具；另一个模型可能需要明确的指令，在编辑后调用 linter 工具。Cursor 的 agent 会帮你处理这些细节，因此当新模型发布时，你可以把精力放在构建软件本身上。

## 从规划开始

你能做出的最大改变，就是在编写代码之前先进行规划。

来自芝加哥大学的 [一项研究](/blog/productivity) 发现，有经验的开发者更倾向于在生成代码之前先进行规划。规划会促使你更清晰地思考自己要构建的内容，并为 Agent 提供明确的目标去实现。

### 使用 Plan 模式

在 agent 输入框中按下 `Shift+Tab` 以切换 Plan 模式。agent 不会立即编写代码，而是会：

1. 分析你的代码库以查找相关文件
2. 就你的需求提出澄清问题
3. 创建包含文件路径和代码引用的详细实现计划
4. 在开始构建前等待你的确认

*Plan 模式实战：agent 会提出澄清问题并创建可审查的计划。*

计划会以 Markdown 文件的形式打开，你可以直接编辑它们，以删除不必要的步骤、调整实现方式，或补充 agent 遗漏的上下文。

> 提示：  
> 点击 “Save to workspace” 将计划存储到 `.cursor/plans/` 。这样可以为你的团队创建文档，方便在中断后继续工作，并为未来在同一特性上工作的 agent 提供上下文。

并不是每个任务都需要详细的计划。对于一些简单的小改动，或是你已经做过很多次的任务，直接交给 agent 处理就可以。

### 从计划重新开始

有时 agent 生成的内容并不符合你的预期。与其试图通过后续提示来修修补补，不如回到计划本身。

先回滚这些改动，重新细化计划，把你的需求描述得更具体，然后再运行一次。这样通常比修一个进行中的 agent 更快，生成的结果也更干净利落。

## 管理上下文

随着你越来越习惯由 agent 编写代码，你的主要工作就变成：为每个 agent 提供完成其任务所需的上下文。

### 让 agent 自行获取上下文

你不需要在提示里手动标记每一个文件。

Cursor 的 agent 具备强大的 [搜索工具](/blog/semsearch) ，并且可以按需获取上下文。比如，当你询问 “the authentication flow”（身份验证流程）时，agent 会通过 `grep` 和语义搜索找到相关文件，即使你的提示里没有包含这些完全相同的词语。

*即时 grep 让 agent 能在毫秒级搜索你的代码库。*

保持简单：如果你知道确切的文件，就在提示中引用它；如果不知道，就交给 agent 去查找。包含不相关的文件可能会让 agent 弄不清哪些内容才是重要的。

Cursor 的 agent 还提供了许多实用工具，比如 `@Branch` ，可以让你为 agent 提供你当前工作的上下文。诸如 “Review the changes on this branch” 或 “What am I working on?” 之类的请求，会成为引导 agent 了解你当前任务的自然方式。

### 什么时候开始一个新对话

许多人都会问：我应该继续这个对话，还是重新开始一个新的？

**在以下情况下开始新对话：**

- 你要切换到一个不同的任务或功能
- Agent 看起来很困惑，或者总是在犯同样的错误
- 你已经完成了一个逻辑完整的工作单元

**在以下情况下继续当前对话：**

- 你还在对同一个功能进行迭代
- Agent 需要用到先前讨论中的上下文
- 你正在调试它刚刚构建出来的内容

过长的对话可能会让 Agent 失去焦点。经过多轮对话和多次总结后，上下文里会积累噪音，Agent 容易被分散注意力或切换到不相关的任务。如果你发现 Agent 的效果在下降，就是该开始一个新对话的时候了。

### 引用以往的工作成果

当你开始一段新对话时，可以使用 `@Past Chats` 引用之前的工作成果，而不是把整段对话原封不动地复制粘贴过来。Agent 可以有选择地读取聊天记录，只提取它所需要的上下文。

这样比重复整个对话要高效得多。

## 扩展 Agent

Cursor 提供两种主要方式来自定义 Agent 的行为： **Rules** 提供适用于每次对话的静态上下文， **Skills** 则提供 Agent 在需要时可以调用的动态能力。

### Rules：为你的项目提供静态上下文

Rules 提供持续生效的指令，用来塑造 agent 如何处理你的代码。可以把它们看作始终生效的上下文，agent 在每次对话开始时都会先看到这些内容。

在 `.cursor/rules/` 中以 markdown 文件形式创建规则：

```markdown
# Commands
`npm run build` : Build the project
`npm run typecheck` : Run the typechecker
`npm run test` : Run tests (prefer single test files for speed)

# 代码风格
使用 ES 模块(import/export),而非 CommonJS(require)
尽可能使用解构导入:
`import { foo } from 'bar'`

参考 `components/Button.tsx` 了解标准组件结构

# Workflow
Always typecheck after making a series of code changes
API routes go in `app/api/` following existing patterns
```

让规则聚焦在要点上：需要运行的命令、应遵循的模式，以及指向你代码库中规范示例的引用。引用文件而不是复制其内容；这样可以让规则保持简洁，并避免在代码变更后迅速过时。

在规则中应避免：

- 复制整份风格指南（改用 linter）
- 记录所有可能的命令（agent 已经了解常用工具）
- 为极少适用的边缘情况添加指令

> 提示：  
> 从简单开始。只有当你发现 agent 反复犯同样的错误时，再新增规则。在真正理解自己的模式之前，不要过度优化。

将规则提交到 Git，让整个团队都能受益。当你看到 agent 犯错时，更新对应的规则。你甚至可以在 GitHub issue 或 PR 中标记 `@cursor` ，让 agent 帮你更新规则。

### Skills：动态能力与工作流

[Agent Skills](https://cursor.com/docs/context/skills) 扩展了 agent 的能力范围。Skills 封装了特定领域的知识、工作流和脚本，agent 在需要时可以调用。

Skills 定义在 `SKILL.md` 文件中，并且可以包括：

- **Custom commands** ：通过在 agent 输入中使用 / 触发的可复用工作流
- **Hooks** ：在 agent 动作之前或之后运行的脚本
- **Domain knowledge** ：agent 可按需调用的针对特定任务的指令

与始终包含的 Rules 不同，Skills 会在 agent 认为相关时动态加载。这样既能保持你的上下文窗口简洁，又能为 agent 提供访问专业能力的途径。

### 示例：长时间运行的 agent 循环

一个常用且强大的模式是使用 Skills 来创建长时间运行的 agent，让它不断迭代直到实现某个目标。下面是一个示例，展示如何构建一个 hook，让 agent 一直工作，直到所有测试都通过。

首先，在 `.cursor/hooks.json` 中配置该 hook：

```json
{
  "version": 1,
  "hooks": {
    "stop": [{
      "command": "bun run .cursor/hooks/grind.ts"
    }]
  }
}
```

hook 脚本（`.cursor/hooks/grind.ts`）从标准输入（stdin）接收上下文，并返回一个 `followup_message`，用于继续循环：

```ts
import { readFileSync, existsSync } from "fs";

interface StopHookInput {
  conversation_id: string;
  status: "completed" | "aborted" | "error";
  loop_count: number;
}

const input: StopHookInput = await Bun.stdin.json();

const MAX_ITERATIONS = 5;

if (input.status !== "completed" || input.loop_count >= MAX_ITERATIONS) {
  console.log(JSON.stringify({}));
  process.exit(0);
}

const scratchpad = existsSync(".cursor/scratchpad.md")
  ? readFileSync(".cursor/scratchpad.md", "utf-8")
  : "";

if (scratchpad.includes("DONE")) {
  console.log(JSON.stringify({}));
} else {
  console.log(JSON.stringify({
    followup_message: `[迭代 ${input.loop_count + 1}/${MAX_ITERATIONS}] 继续工作。完成后在 .cursor/scratchpad.md 中更新为 DONE。`
  }));
}
```

这种模式适用于：

- 一直运行（并修复问题），直到所有测试通过
- 反复迭代 UI，直到与设计稿一致
- 任何目标导向且成功结果可验证的任务

> 提示：  
> 结合 hooks 的 Skills 可以集成安全工具、机密信息管理工具以及可观测性平台。有关合作伙伴集成，请参阅 hooks 文档 。

> Agent Skills 目前仅在 nightly 发布通道中可用。打开 Cursor 设置，选择 Beta，将更新通道设置为 Nightly，然后重启。

除了编写代码之外，你还可以把 agent 连接到你日常使用的其他工具。[MCP (Model Context Protocol)](https://cursor.com/docs/context/mcp/directory) 允许 agent 读取 Slack 消息、分析 Datadog 日志、调试来自 Sentry 的错误、查询数据库等。

## 包含图片

Agent 可以直接处理你在提示中提供的图片。你可以粘贴截图、拖入设计文件，或引用图片路径。

### 从设计到代码

粘贴设计稿并让 Agent 帮你实现。Agent 能识别图片，并匹配布局、颜色和间距。你也可以使用 [Figma MCP 服务器](https://cursor.com/docs/context/mcp/directory) 。

### 可视化调试

对错误状态或异常 UI 截图，然后让 Agent 帮你排查问题。这样通常比用文字描述要更高效。

Agent 还可以控制浏览器自行截屏、测试应用，并验证界面变化。详情请参阅 [Browser 文档](https://cursor.com/docs/agent/browser) 。

*浏览器侧边栏让你可以一边设计一边编码。*

## 常见工作流

以下是几种在不同类型任务中都非常有效的 Agent 使用模式。

### 测试驱动开发

智能体可以自动编写代码、运行测试并进行迭代：

1. **让智能体根据预期的输入/输出对编写测试。** 要明确说明你在做 TDD，这样它就会避免为尚不存在的功能编写模拟实现。
2. **让智能体运行测试并确认测试确实失败。** 明确说明在这个阶段不要编写实现代码。
3. **在你对测试满意后提交这些测试。**
4. **让智能体编写能通过测试的代码** ，并指示它不要修改测试。告诉它持续迭代，直到所有测试通过。
5. **在你对改动满意后提交实现代码。**

当智能体有清晰的迭代目标时，它的表现最好。测试可以让智能体在不断修改的同时评估结果，并逐步改进直到全部通过。

### 理解代码库

在接手一个新代码库时，可以使用 Agent 来进行学习和探索。像向队友请教一样提问：

- “这个项目里的日志是如何运作的？”
- “我该如何添加一个新的 API endpoint？”
- “`CustomerOnboardingFlow` 处理了哪些边界情况？”
- “为什么我们在第 1738 行调用的是 `setUser()` 而不是 `createUser()`？”

Agent 会同时使用 `grep` 和语义搜索在整个代码库中查找答案。这是快速上手陌生代码库的最高效方式之一。

### Git 工作流

Agent 智能体可以查找 Git 历史记录、解决合并冲突，并自动化你的 Git 工作流。

例如，一个 `/pr` 命令可以提交、推送代码并打开一个 pull request：

```markdown
为当前更改创建 Pull Request。
1. 使用 `git diff` 查看已暂存和未暂存的更改
2. 根据更改内容编写清晰的提交信息
3. 提交并推送到当前分支
4. 使用 `gh pr create` 创建 Pull Request,并提供标题和描述
5. 完成后返回 PR URL
```

命令非常适合你每天会多次运行的工作流。将它们保存为 Markdown 文件放在 `.cursor/commands/` 中，并提交到 git，这样整个团队都可以使用。

我们使用的其他命令示例：

- /fix-issue [number] ：使用 gh issue view 获取 issue 详情，查找相关代码，进行修复并打开一个 PR
- /review ：运行 linter 工具，检查常见问题，并总结可能需要关注的内容
- /update-deps ：检查过时依赖项并逐个更新，每次更新后运行测试

Agent 智能体可以自动使用这些命令，这样你就可以只通过一次 `/` 调用来委托多步工作流。

## 代码审查

AI 生成的代码同样需要代码审查，Cursor 提供了多种方式。

### 生成过程中

实时查看 agent 的工作过程。Diff 视图会在更改发生时即时显示。如果你发现 agent 的修改方向不对，可以按下 **Escape** 中断并重新引导。

### Agent Review

Agent 完成后，点击 **Review** → **Find Issues** 来运行一次专门的审查流程。Agent 会逐行分析建议的修改，并标记潜在问题。

对于所有本地更改，打开 Source Control 选项卡并运行 Agent Review，与主分支进行对比。

*AI 代码审查可在 Cursor 中直接发现并修复 bug。*

### 用于 Pull Request 的 Bugbot

推送到代码仓库后，即可为 Pull Request 获取自动化代码审查。[Bugbot](https://cursor.com/docs/bugbot) 会进行高级分析，以尽早发现问题，并为每个 PR 提出改进建议。

### 架构图

对于重大变更，可以让 agent 帮你生成架构图。可以这样提示它：

"Create a Mermaid diagram showing the data flow for our authentication system, including OAuth providers, session management, and token refresh."

这些图对编写文档非常有帮助，并且可以在代码评审之前提前发现架构问题。

## 并行运行 Agent

Cursor 让你可以轻松并行运行多个 Agent，而且它们之间不会互相干扰。我们发现，让多个模型同时尝试解决同一个问题，再从中选出最优结果，可以显著提升最终输出质量，尤其适用于更棘手的任务。

### 原生 worktree 支持

Cursor 会为并行运行的 agent 自动创建和管理 [git worktrees](/docs/configuration/worktrees) 。每个 agent 都在自己的 worktree 中运行，文件和更改彼此隔离，因此各个 agent 可以编辑、构建和测试代码，而不会相互干扰。

要在 worktree 中运行 agent，请在 agent 的下拉菜单中选择 worktree 选项。agent 完成后，点击 **Apply** ，将其更改合并回你当前的工作分支。

### 同时运行多个模型

一种非常强大的使用方式是：让同一个提示词同时在多个模型上运行。从下拉菜单中选择多个模型，提交你的提示词，然后将结果并排比较。Cursor 还会提示它认为最优的解决方案。

这在以下场景中特别有用：

- 棘手的问题，不同模型可能会采用不同的方法
- 比较不同模型家族之间的代码质量
- 发现某个模型可能遗漏的边缘情况

在并行运行大量 Agent 时，配置通知和声音提醒，以便在它们完成时获知进度。

## 将任务委托给云端 Agent

对于那些原本会被你丢进待办列表的任务，云端 Agent 非常适合处理：

- 在处理其他工作时顺带发现的 bug 修复
- 最近代码改动的重构
- 为现有代码生成测试
- 文档更新

你可以根据任务在本地 Agent 和云端 Agent 之间切换。可以从 [cursor.com/agents](https://cursor.com/agents) 、Cursor 编辑器或手机启动云端 Agent。离开工位时，可以通过网页或手机查看会话进度。云端 Agent 在远程沙箱中运行，因此你可以合上电脑，稍后再回来查看结果。

*在 cursor.com/agents 管理多个云端 Agent*

云端 Agent 在幕后是这样工作的：

1. 描述任务以及相关上下文
2. Agent 克隆你的仓库并创建一个分支
3. 它会自主工作，并在完成后打开一个 pull request
4. 任务完成后你会收到通知（通过 Slack、电子邮件或 Web 界面）
5. 审查改动并在准备好后合并

> 提示：  
> 你可以在 Slack 中通过“@Cursor”来触发 Agent。  
> 了解更多。

## 针对棘手 bug 的 Debug Mode

当标准 agent 交互难以解决某个 bug 时，Debug Mode 提供了一种不同的调试思路。

与其凭感觉猜测修复方案，Debug Mode 会：

1. 生成多个关于可能出错原因的假设
2. 使用日志语句对你的代码进行埋点
3. 要求你在收集运行时数据的同时复现该 bug
4. 分析实际行为来精准定位根本原因
5. 基于证据进行有针对性的修复

它最适合用于：

- 你能复现但搞不清原因的 bug
- 竞争条件和时序问题
- 性能问题和内存泄漏
- 之前能正常工作、但现在出现回归的问题

关键是提供如何复现问题的详细上下文信息。你描述得越具体，agent 添加的埋点就越有价值。

## 打造你的工作流程

那些能最大化利用 agent 的开发者通常有一些共同特点：

**他们会写具体的提示。** 指令越具体，agent 的成功率就越高。对比一下“add tests for auth.ts”和“Write a test case for auth.ts covering the logout edge case, using the patterns in `__tests__/` and avoiding mocks.”。

**他们会不断迭代自己的配置。** 从简单开始。只有当你发现 agent 一再犯同样的错误时，才添加规则。只有当你摸索出一个想要重复使用的工作流程时，才添加命令。在真正理解自己的模式之前，不要过度优化。

**他们会认真 review。** AI 生成的代码看起来可能是对的，但实际上可能存在细微错误。阅读 diff，并认真进行 review。agent 工作得越快，你的 review 流程就越重要。

**他们会提供可验证的目标。** agent 无法修复它“看不见”的问题。使用强类型语言，配置 linters，并编写测试。给 agent 明确的信号，以判断更改是否正确。

**他们把 agent 当作有能力的协作者。** 让它给出计划，要求它解释，对你不认可的方案要敢于提出质疑。

Agent 正在快速进化。即使模式会随着新模型而变化，我们也希望这些经验能帮助你在使用编程 agent 时更高效地完成工作。
