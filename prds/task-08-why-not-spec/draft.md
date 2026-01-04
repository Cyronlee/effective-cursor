在`@src/content/en/docs/4-workflow/_meta.tsx` 章节中，在`@src/content/en/docs/4-workflow/modes-overview.mdx` 后面添加一篇文章“不依赖Spec框架”

原因主要有：
- 我们是企业级项目团队，基于传统敏捷实践引入AI辅助开发，我们在开发开始之前已经使用了jira来管理story cards需求，我们的需求分析阶段仍然有固定的流程
- 我们也是基于spec的理念，但不被框架限制，探索最佳的spec组织方式
- 框架prompt不透明，会过多耗费token，而手动做这部分流程，可以更加灵活地控制token消耗，也能更好迭代prompt和rules
- cursor agent和rules已经是最佳实践，我们不想引入过多的工具，增加学习成本
- 我们也在探索最佳的spec组织方式，学习热门的spec框架，正在开发自己的spec框架

文章结构：
- 先讲述为什么我们不使用spec框架，而是手动做这部分流程
- 讲述spec框架的理念、优缺点
- 讲述个人开发者、小型新项目推荐使用spec框架，而企业级项目团队推荐手动做这部分流程