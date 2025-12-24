参考@src/content/zh/rules 目录结构，创建一个同级的prompts目录

### 添加index.mdc引言

这个目录用于分享已经沉淀后的解决方案提示词，或者是一些meta prompts来帮助你生成规则

介绍如何使用这些提示词，少许修改后即可使用

由于在主要的手册中，已经向大家介绍了如何为项目配置cursor rules，所以这些提示词直接用也不会有太多副作用，如果你担心，可以参考工作流中的prd-solution模式，为你的项目重新生成solution

#### ChatExample组件

参考给你的图片，创建一个ChatExample组件，用于展示如何使用这些提示词

参数
- 包含换行的文本，对于`@filename`的字符串，按照图中高亮显示
- 可以给出最大高度，超出内部滚动
- mode?: Agent
- model?: claude-4.5-sonnet

按钮部分均不可交互，画出UI即可

### 目录

暂时添加以下三个目录
- 前端
- 后端
- 博客
  - 里面暂时放 @prds/task-03-giscus/solution.md 的原文


