---
title:  OpenSpec 入门：别再让项目记忆只活在聊天窗口里
---

# OpenSpec 入门：别再让项目记忆只活在聊天窗口里

> 一份面向已有项目的 OpenSpec 技术分享与实操手册  
> 内容核对日期：2026 年 6 月 9 日

## 开场：代码还在，为什么项目却失忆了？

想象一个很常见的开发现场。

周一，你和一个 Agent 花了两小时讨论登录系统：

- 连续输错五次密码后锁定账号；
- 管理员可以提前解锁；
- 锁定时不能泄露账号是否存在；
- 旧客户端仍然需要收到兼容的错误码。

Agent 理解得很好，代码也写了一半。周二你打开了新会话，换了另一个 Agent，说：“继续昨天的登录改造。”

它读到了代码，却没有读到昨天那场讨论。于是问题来了：

- 它不知道“五次”是产品决策还是临时假设；
- 它不知道旧客户端兼容是硬性要求；
- 它不知道哪些任务已经完成，哪些只是写了一半；
- 它甚至可能把昨天刻意保留的行为当成技术债重构掉。

很多人会尝试用更长的 prompt、更完整的聊天记录或一个越来越大的 `AGENTS.md` 解决问题。但聊天记录不是可靠的项目状态：

- 它不一定进入下一个会话；
- 不同 Agent 读取上下文的方式不同；
- 决策、猜测、闲聊和最终结论混在一起；
- 它很难进行代码审查、版本比较和自动验证。

OpenSpec 要解决的并不是“让 Agent 更聪明”，而是把需求与开发状态从聊天窗口搬回 Git 仓库。

一句话概括：

> OpenSpec 把“当前系统是什么”和“准备把它改成什么”写成可版本化、可审查、可交接的项目文件。

它尤其适合已有项目。你不需要先为整个系统补齐百科全书式文档，只需要从下一次真实变更开始使用。

---

## 第一部分：先搞清楚 OpenSpec 是什么

OpenSpec 主要维护两类信息：

```text
openspec/
├── specs/                  # 当前已经生效的系统行为
└── changes/                # 正在讨论或实现的变更
    ├── add-account-lockout/
    └── archive/            # 已完成变更的历史记录
```

可以把它理解成：

- `specs/` 是现在的世界；
- `changes/` 是准备发生的变化；
- `archive/` 是变化为什么发生、如何实现的历史。

一个典型 change 通常包含：

```text
openspec/changes/add-account-lockout/
├── proposal.md             # 为什么改、改什么、不改什么
├── design.md               # 技术方案与关键决策
├── tasks.md                # 可执行任务及完成状态
└── specs/
    └── authentication/
        └── spec.md         # 对现有认证规范的增量修改
```

这里有一个关键点：OpenSpec 不是后台运行的任务调度器。

它不会自己定时醒来，也不会凭空启动 Agent。它提供的是一套项目内的“共享记忆”和操作流程。开发者仍然需要打开 Agent，发起一次任务；之后 Agent 可以读取 change、继续未完成任务并更新状态。

---

## 第二部分：两个输入位置，千万不要混

OpenSpec 同时提供终端 CLI 和 Agent 工作流命令。它们长得有点像，但输入位置完全不同。

### 终端命令

以下命令输入到 Terminal、PowerShell、IDE 终端等命令行环境：

```bash
openspec init
openspec list
openspec show add-account-lockout
openspec validate add-account-lockout
```

终端 CLI 主要负责：

- 安装与初始化；
- 查看项目状态；
- 验证 spec 结构；
- 脚本化或 CI 集成；
- 更新 OpenSpec 生成的 Agent 配置。

本文用下面的标记表示终端操作：

> **输入位置：终端**

### Agent 输入框命令

以下内容输入到 Codex、Claude Code、Cursor、Windsurf 等 AI 编程工具的聊天输入框：

```text
/opsx:propose add-account-lockout
/opsx:apply add-account-lockout
/opsx:archive add-account-lockout
```

这些不是 shell 命令。不要在终端里运行：

```bash
# 错误示范
/opsx:apply add-account-lockout
```

Agent 命令的作用是给 AI 一套标准工作指令，让它创建或读取 OpenSpec 文件、修改代码、运行测试并更新任务状态。

本文用下面的标记表示 Agent 操作：

> **输入位置：Agent 对话框**

如果你的 Agent 工具没有显示 `/opsx:*` 命令，也可以使用自然语言：

```text
请按照 OpenSpec 工作流，为“增加账号锁定机制”创建一个 change。
先生成 proposal、spec delta、design 和 tasks，不要修改业务代码。
```

命令是快捷入口，不是唯一入口。

---

## 第三部分：在已有项目中安装和初始化

### 场景

假设我们维护一个已经上线两年的电商系统。仓库里有：

- 后端 API；
- Web 前端；
- 数据库迁移；
- 数百个测试；
- 一些过时的 README；
- 大量只存在于团队记忆里的业务规则。

现在我们要引入 OpenSpec，但不准备停工两周补文档。

这是正确的。已有项目最适合渐进式接入。

### 1. 检查 Node.js

OpenSpec 当前要求 Node.js `20.19.0` 或更高版本。

> **输入位置：终端**

```bash
node --version
```

### 2. 安装 OpenSpec

> **输入位置：终端**

```bash
npm install -g @fission-ai/openspec@latest
openspec --version
```

也可以使用 pnpm、yarn、bun 或 Nix。无论使用哪种安装方式，OpenSpec 当前仍需要可用的 Node.js 运行环境。

### 3. 在项目根目录初始化

交互式初始化：

> **输入位置：终端**

```bash
cd /path/to/existing-project
openspec init
```

初始化过程中选择正在使用的 Agent 工具。

也可以使用非交互命令：

> **输入位置：终端**

```bash
openspec init --tools codex
```

同时配置多个工具：

```bash
openspec init --tools codex,claude,cursor
```

初始化后，建议重启 Agent 工具。许多工具只会在启动时加载新生成的命令或 Skill。

### 4. 检查初始化结果

> **输入位置：终端**

```bash
openspec list
```

然后检查 Git 变更：

```bash
git status
```

OpenSpec 会创建 `openspec/` 目录，并根据所选工具生成相应的 Skill、命令或项目指引。Codex 的命令文件可能安装在 Codex 全局目录，而不一定出现在项目目录中，这是正常现象。

### 5. 提交初始化文件

OpenSpec 的价值来自跨会话、跨成员共享，因此项目级配置与 `openspec/` 内容通常应该进入 Git。

```bash
git add openspec AGENTS.md
git commit -m "chore: initialize OpenSpec"
```

不要机械照抄 `git add`。先通过 `git status` 确认 OpenSpec 实际生成了哪些文件，以及项目是否已有未提交修改。

---

## 第四部分：已有项目不要急着“补全宇宙”

### 痛点：Agent 很容易把推测写成事实

你可能会想：

> “既然已经装好了，不如让 Agent 扫描整个代码库，自动生成全部 specs。”

这通常不划算。

旧系统里经常同时存在：

- 代码已经实现但没人使用的行为；
- 测试依赖但文档没写的兼容逻辑；
- README 里写了但代码早已改变的设计；
- 只在生产配置中生效的规则；
- 明显像 bug、实际上是客户合同要求的特殊处理。

Agent 可以总结代码，但很难仅凭代码判断一项行为是“需求”“偶然结果”还是“历史包袱”。

### 推荐策略：触碰时补齐

第一次只为近期会修改的领域建立 baseline。

例如接下来准备修改认证模块，就让 Agent 先描述认证模块当前能够证实的行为。

> **输入位置：Agent 对话框**

```text
请分析当前 authentication 模块，为它建立 OpenSpec baseline。

阅读相关路由、服务、数据库 schema、测试和现有文档。
只记录代码或测试能够证实的当前行为，不要修改业务代码。
不要把理想设计写成现状。
无法确认的内容明确标记为 Unknown，并列出需要人工确认的问题。
每项 requirement 都提供可验证的 scenario。
```

生成后，开发者必须审查：

- Requirement 是否真的是当前行为；
- Scenario 是否可以通过测试或调用复现；
- 是否把未来需求混入了 baseline；
- 是否遗漏兼容性与错误路径。

不要追求第一天覆盖所有模块。更实际的节奏是：

1. 新需求触及某个领域；
2. 补齐该领域最小 baseline；
3. 创建 change；
4. 完成并归档；
5. `specs/` 逐渐成长为可信的系统说明。

---

## 第五部分：完整演示一次开发流程

现在进入这期分享的主线场景。

产品提出需求：

> 用户连续五次登录失败后，账号锁定 30 分钟。管理员可以提前解锁。接口不能泄露账号是否存在。

我们暂时不让 Agent 写代码。

### 阶段 A：需求还模糊，先探索

以下命令属于默认 `core` profile。

> **输入位置：Agent 对话框**

```text
/opsx:explore
```

然后描述问题：

```text
我们准备增加登录失败锁定。请分析现有认证实现、测试和数据库结构，
帮助我识别安全风险、兼容性约束和需要产品确认的问题。
先不要创建 change，也不要修改代码。
```

适合使用 `explore` 的场景：

- 需求只有一句话；
- 不确定会影响哪些模块；
- 技术方案存在明显分歧；
- 需要先阅读旧代码判断成本；
- 还没决定是否真的要做。

`explore` 的目标不是生成一堆文件，而是把未知问题暴露出来。

### 阶段 B：创建 change

需求澄清后，创建正式变更。

> **输入位置：Agent 对话框**

```text
/opsx:propose add-account-lockout
```

也可以直接带自然语言：

```text
/opsx:propose 为登录增加连续失败五次后锁定 30 分钟的机制，并支持管理员提前解锁
```

Agent 通常会创建：

```text
openspec/changes/add-account-lockout/
├── proposal.md
├── design.md
├── tasks.md
└── specs/
    └── authentication/
        └── spec.md
```

此时真正重要的动作不是马上输入 `/opsx:apply`，而是审查这些文件。

### 阶段 C：人工审查 proposal 和 spec

重点检查以下问题：

#### 范围是否明确

- 是否只修改密码登录，还是也影响短信、OAuth？
- 失败次数按账号、IP 还是设备累计？
- 账号不存在时是否记录失败？
- 管理员解锁是否需要审计日志？

#### 行为是否可验证

一个较好的 scenario 应该接近：

```markdown
#### Scenario: Fifth consecutive failure locks the account

- GIVEN an active account has four consecutive failed password attempts
- WHEN the user submits another invalid password
- THEN the account is locked for 30 minutes
- AND the response does not reveal whether the account exists
```

#### 非目标是否写清

例如：

- 本次不增加验证码；
- 不修改 OAuth 登录；
- 不实现按 IP 限流；
- 不改造现有后台权限模型。

非目标可以防止 Agent 在实现时“顺手升级整个认证系统”。

你可以直接让 Agent 修改文档：

> **输入位置：Agent 对话框**

```text
请修改 add-account-lockout：

1. 明确仅影响密码登录；
2. 管理员解锁必须写入现有审计日志；
3. 增加锁定到期后自动恢复的 scenario；
4. 将按 IP 限流列为 non-goal；
5. 仍然不要修改业务代码。
```

### 阶段 D：用 CLI 验证文档结构

> **输入位置：终端**

```bash
openspec validate add-account-lockout
```

严格验证：

```bash
openspec validate add-account-lockout --strict
```

查看 change：

```bash
openspec show add-account-lockout
```

`validate` 能检查结构和约定，但不能替代产品与技术审查。格式正确的错误需求，仍然是错误需求。

### 阶段 E：实现 change

确认 spec、design 和 tasks 后，再让 Agent 开始编码。

> **输入位置：Agent 对话框**

```text
/opsx:apply add-account-lockout
```

Agent 应当：

1. 读取 proposal、spec delta、design 和 tasks；
2. 找到未完成任务；
3. 修改代码并增加测试；
4. 运行相关验证；
5. 在验证通过后，把任务从 `[ ]` 更新为 `[x]`。

不要只看聊天窗口里一句“实现完成”。检查：

```bash
git diff
git status
```

再运行项目自己的测试和检查命令，例如：

```bash
npm test
npm run lint
npm run typecheck
```

OpenSpec 管理意图与任务状态，但不会替代项目自身的测试、类型检查和 CI。

### 阶段 F：实现中发现设计不对怎么办？

现实开发很少严格线性。

假设实现时发现数据库没有保存连续失败次数的合适位置。你不需要废弃整个 change，也不必硬着头皮按错误设计写完。

可以告诉 Agent：

> **输入位置：Agent 对话框**

```text
实现过程中发现当前 design 对并发登录失败处理不安全。
请先停止编码，分析竞态条件，更新 design.md 和相关 tasks。
等我确认后再继续 apply。
```

确认后再次运行：

```text
/opsx:apply add-account-lockout
```

`apply` 会读取 `tasks.md` 中仍未完成的任务继续工作。

这正是 OpenSpec 比“一次性大 prompt”更有价值的地方：计划可以更新，但更新后的计划仍然留在仓库里。

### 阶段 G：验证实现与规范是否一致

这里有一个容易踩坑的版本差异：

- 默认 `core` profile 包含 `propose`、`explore`、`apply`、`sync`、`archive`；
- `/opsx:verify` 属于 expanded workflow，默认不一定可用。

启用 expanded workflow：

> **输入位置：终端**

```bash
openspec config profile
openspec update
```

按照交互提示选择需要的 workflow，然后重启 Agent。

启用后：

> **输入位置：Agent 对话框**

```text
/opsx:verify add-account-lockout
```

`verify` 会从完整性、正确性和一致性角度检查实现证据。即使使用了它，仍然应该运行项目测试。

如果没有启用 `verify`，可以使用自然语言：

```text
请对照 add-account-lockout 的 proposal、design、tasks 和 spec delta 审查当前实现。
检查每个 requirement 和 scenario 是否有代码及测试证据。
列出缺失项，不要自动归档。
```

### 阶段 H：同步并归档

当实现和验证都完成后，可以归档 change。

> **输入位置：Agent 对话框**

```text
/opsx:archive add-account-lockout
```

归档过程通常会检查任务状态，并在需要时询问是否把 delta specs 同步到主 `openspec/specs/`。

也可以先显式同步：

```text
/opsx:sync add-account-lockout
```

再归档：

```text
/opsx:archive add-account-lockout
```

终端也提供归档命令，适合人工操作或脚本：

> **输入位置：终端**

```bash
openspec archive add-account-lockout --yes
```

归档完成后，确认：

- change 已进入带日期的 archive 目录；
- 主 specs 已反映新行为；
- 所有测试通过；
- Git diff 符合预期；
- 相关文件已经提交。

---

## 第六部分：跨会话如何继续

### 场景

昨天的 Agent 已经完成数据库迁移和服务层，还剩管理员解锁接口与集成测试。今天换了一个新会话。

最简单的恢复方式是：

> **输入位置：Agent 对话框**

```text
请继续 OpenSpec change `add-account-lockout`。

先阅读 proposal.md、design.md、tasks.md、spec delta 和当前 git diff。
确认已完成任务是否有代码与测试证据，然后从第一个未完成且未阻塞的任务继续。
不要重做已经验证完成的工作，不要覆盖无关的工作区修改。
```

如果上下文明确，也可以直接输入：

```text
/opsx:apply add-account-lockout
```

新 Agent 能否顺利接手，取决于仓库里的状态是否可信：

- `tasks.md` 是否及时更新；
- design 是否记录了实现中改变的决策；
- 测试是否能证明完成；
- 工作区是否留下无法解释的半成品；
- Git commit 是否形成清晰的恢复点。

因此，跨会话继承不是魔法。它依赖良好的工程卫生。

### 中断前的推荐动作

让 Agent 停止前做一次交接整理：

```text
准备结束本次会话。请不要开始新任务。

1. 更新 tasks.md，只勾选已经验证通过的任务；
2. 确保 design.md 记录本次新增的重要决策；
3. 列出已运行的测试及结果；
4. 说明当前未完成任务、阻塞原因和下一步；
5. 不要把聊天摘要当作唯一交接信息，关键状态必须写回仓库文件。
```

短期项目可以把交接说明写进 change 的 `tasks.md` 或 design；复杂项目可以增加团队约定的 `handoff.md`。这不是 OpenSpec 强制文件，应由团队自行决定。

---

## 第七部分：多个 change 和多个 Agent

OpenSpec 能让多个任务的状态更清晰，但它本身不是并发调度系统。

### 场景一：一个 Agent，多个 change

项目同时存在：

```text
add-account-lockout
add-order-export
fix-tax-rounding
```

不要只输入模糊的：

```text
/opsx:apply
```

显式指定 change：

```text
/opsx:apply fix-tax-rounding
```

终端查看所有活动 change：

```bash
openspec list
```

查看特定 change：

```bash
openspec show fix-tax-rounding
```

### 场景二：多个 Agent 并行

两个 Agent 如果修改同一批文件，OpenSpec 不会自动给它们加锁。团队至少需要做到：

- 每个 Agent 负责不同 change；
- 或者为任务划分互不重叠的文件范围；
- 每个 Agent 使用独立 Git branch 或 worktree；
- 合并前由 CI 和人工审查判断真实完成状态；
- 不允许两个 Agent 同时编辑同一个 `tasks.md` 并各自宣称完成。

比较稳妥的分工：

```text
Agent A / worktree A:
  change: add-account-lockout
  ownership: authentication backend

Agent B / worktree B:
  change: add-order-export
  ownership: order export pipeline
```

风险较高的分工：

```text
Agent A:
  add-account-lockout task 2.1

Agent B:
  add-account-lockout task 2.2

Both:
  modify src/auth/service.ts and tasks.md
```

如果团队需要自动认领、超时续租、重试和任务队列，应在 OpenSpec 之外引入 GitHub Issues、项目管理系统或 Agent orchestrator。不要期待一个 Markdown checkbox 自动提供分布式锁。

---

## 第八部分：什么时候不值得使用 OpenSpec

OpenSpec 不是所有改动都必须经过的仪式。

以下工作通常不需要建立完整 change：

- 修正拼写；
- 更新一个没有行为变化的注释；
- 明确且低风险的依赖补丁；
- 纯格式化；
- 一次性实验，并且确定不会进入主分支。

以下工作非常适合使用：

- 修改对外 API 或数据结构；
- 涉及多个模块或团队；
- 有复杂边界条件；
- 需要兼容旧行为；
- 需求可能反复调整；
- 工作会跨越多个会话；
- 可能由不同开发者或 Agent 接手；
- 完成标准不能用一句“看起来能跑”概括。

一个简单判断标准：

> 如果三天后的另一个人会问“为什么这样做、到底做到哪了、怎样才算完成”，就值得建立 change。

---

## 第九部分：常见失败方式

### 1. 把 `/opsx:*` 输入终端

错误：

```bash
/opsx:propose add-dark-mode
```

正确：把它输入 Agent 对话框。

### 2. 把 `openspec validate` 输入 Agent 当成 Slash Command

`openspec validate` 是终端 CLI。Agent 当然也可能替你运行终端命令，但它不是 `/opsx:*` 工作流命令。

### 3. 初始化后看不到命令

尝试：

1. 确认初始化时选择了正确工具；
2. 运行 `openspec update`；
3. 重启 Agent 工具；
4. 使用自然语言要求 Agent 遵循 OpenSpec 工作流。

### 4. 默认找不到 `/opsx:verify`

它属于 expanded workflow。

```bash
openspec config profile
openspec update
```

然后重启 Agent。

### 5. proposal 一生成就立刻 apply

OpenSpec 最有价值的环节恰恰是实现前审查。如果不读 proposal、spec 和 tasks，它很容易退化成“把一个长 prompt 拆成几个文件”。

### 6. 任务勾选等于完成

checkbox 只是记录，不是证据。完成至少应有：

- 对应代码；
- 对应测试；
- 验证命令结果；
- 必要的人工审查。

### 7. 一次为整个旧系统生成 baseline

结果通常是大量未经确认的推测，之后没人敢维护。优先采用“触碰时补齐”。

### 8. 把 OpenSpec 当成 Agent 调度器

OpenSpec 不会自动启动 Agent、分配 worker 或解决并发抢占。它解决的是 specification 和 change state，不是 runtime orchestration。

---

## 第十部分：一张可以照着走的流程卡

### 首次接入已有项目

> **终端**

```bash
node --version
npm install -g @fission-ai/openspec@latest
cd /path/to/project
openspec init --tools codex
openspec list
git status
```

### 新需求，但问题还不清楚

> **Agent 对话框**

```text
/opsx:explore
```

### 创建正式变更

> **Agent 对话框**

```text
/opsx:propose add-account-lockout
```

### 审查和修改文档

> **Agent 对话框**

```text
请审查并修改 add-account-lockout 的 proposal、design、tasks 和 spec delta。
在我确认之前不要修改业务代码。
```

> **终端**

```bash
openspec show add-account-lockout
openspec validate add-account-lockout --strict
```

### 开始实现

> **Agent 对话框**

```text
/opsx:apply add-account-lockout
```

### 中断后恢复

> **Agent 对话框**

```text
请读取 add-account-lockout 的全部 artifacts、tasks 和当前 git diff，
从第一个未完成且未阻塞的任务继续。
```

或者：

```text
/opsx:apply add-account-lockout
```

### 验证

> **终端**

```bash
openspec validate add-account-lockout --strict
npm test
```

> **Agent 对话框，需启用 expanded workflow**

```text
/opsx:verify add-account-lockout
```

### 归档

> **Agent 对话框**

```text
/opsx:archive add-account-lockout
```

或：

> **终端**

```bash
openspec archive add-account-lockout --yes
```

---

## 第十一部分：给团队的一套最小约定

工具真正产生价值，靠的不是安装成功，而是团队对状态含义达成一致。

建议至少约定：

1. 中高风险需求先创建 change，再修改业务代码。
2. `specs/` 只描述当前已经生效的行为。
3. `changes/` 描述尚未归档的未来变化。
4. `[x]` 只表示代码完成且验证通过。
5. 需求改变时先更新 artifacts，再继续实现。
6. 每个并行 Agent 使用独立 branch 或 worktree。
7. 归档前运行项目测试，并检查实现与 spec 一致。
8. 关键决策必须进入仓库，不能只留在聊天记录。

如果只能记住其中一条，请记住最后一条。

---

## 结尾：我们真正需要保存的不是对话，而是决策

AI 编程最初给人的感觉，像是终于拥有了一个不知疲倦的结对开发者。但当项目跨过一天、一个会话或一个 Agent，真正的问题就显现出来：

> 模型可以很聪明，但项目不能依赖它恰好记得昨天发生了什么。

OpenSpec 的价值不是让每次开发都变得隆重，而是为复杂变更留下几个可靠答案：

- 我们为什么要改？
- 我们同意改成什么？
- 明确不做什么？
- 现在完成到了哪里？
- 什么证据能够证明完成？

这些答案一旦进入 Git，它们就不再属于某一段聊天、某一个 Agent 或某一个开发者。

下一次换会话时，你不需要说“请相信我，昨天我们讨论过”。你只需要说：

```text
请继续 add-account-lockout。
```

而一个准备充分的项目，应该能让接手者自己找到剩下的答案。

---

## 官方资料

- [OpenSpec 官方仓库](https://github.com/Fission-AI/OpenSpec)
- [安装说明](https://github.com/Fission-AI/OpenSpec/blob/main/docs/installation.md)
- [OPSX 工作流](https://github.com/Fission-AI/OpenSpec/blob/main/docs/opsx.md)
- [Agent 命令参考](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)
- [终端 CLI 参考](https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md)
- [支持的 Agent 工具](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)

> OpenSpec 仍在快速迭代。若本地命令与本文存在差异，以当前安装版本的 `openspec --help`、Agent 中实际生成的命令以及官方文档为准。
