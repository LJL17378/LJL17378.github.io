---
title: 百度 2027 届算法笔试题解汇总：按日期整理的思路与 JavaScript ACM 解法
slug: >-
  bai-du-2027-jie-suan-fa-bi-shi-ti-jie-hui-zong-an-ri-qi-zheng-li-de-si-lu-yu-javascript-acm-jie-fa
publishedAt: '2026-09-23'
updatedAt: '2026-09-23'
summary: >-
  根据 2026 年 8 月 27 日至 9 月 17 日的百度 2027 届校招算法笔试截图与公开回忆，整理题意、识别方法、推导、复杂度、易错点和
  Node.js ACM 解法。
tags:
  - 百度笔试
  - 算法
  - JavaScript
  - 校招
draft: false
sourceFile: 百度2027届算法笔试题解汇总.md
---
这篇文章整理我目前收集到的百度 2027 届校招算法方向笔试题。目标不是只留下“单调队列”“二分答案”几个关键词，而是把每道题为什么这样做、代码如何落地、JavaScript 会在哪里出错讲完整。

## 资料边界与日期说明

题面来自考试截图和考后回忆，并非百度官方题库。截图发布文字与公开归档对两场考试的日期记录不完全一致：

- 截图标为 **9 月 10 日、第八批** 的三题，公开题解归档为 **9 月 3 日**；
- 截图标为 **9 月 16 日、第九批** 的三题，公开题解归档为 **9 月 10 日**。

下文按截图标注的日期排列，同时写出公开归档日期。题意以截图中能够确认的内容为准，公开资料只用于补齐约束、样例和验证推导。参考资料包括 [8 月 27 日公开整理](https://onefly.top/zero2Leetcode/04_real_interviews/baidu/algo-20260827/index.html)、[9 月 3 日公开整理](https://onefly.top/zero2Leetcode/04_real_interviews/baidu/algo-20260903/index.html)、[9 月 10 日公开整理](https://onefly.top/zero2Leetcode/04_real_interviews/baidu/algo-20260910/index.html) 与 [9 月 17 日公开整理](https://onefly.top/zero2Leetcode/04_real_interviews/baidu/algo-20260917/index.html)。

## 先看考点地图

| 截图日期 | 批次 | 题目 | 核心方法 |
| --- | --- | --- | --- |
| 8 月 27 日 | 第七批 | 刀盾分配最小伤害 | 排序、交换论证、贪心 |
| 8 月 27 日 | 第七批 | d-极峰 | 单调队列、滑动窗口最大值 |
| 8 月 27 日 | 第七批 | 雾幕与聚光 | 离线区间约束、线段树 |
| 9 月 10 日 | 第八批 | 可删去 01 串 | 不变量、充要条件 |
| 9 月 10 日 | 第八批 | 相邻异或路径和 | 位运算规律、BigInt |
| 9 月 10 日 | 第八批 | 循环血量怪物 | 阶段建模、排序前缀和、二分 |
| 9 月 16 日 | 第九批 | 区间平衡 01 串 | 构造、奇偶性 |
| 9 月 16 日 | 第九批 | 区间加一最大化最小值 | 二分答案、贪心、差分 |
| 9 月 16 日 | 第九批 | 无限木板染色 | 同余类、约数计数 |
| 9 月 17 日 | 第十批 | 区间异或最小右端点 | 前缀异或、模 4 周期 |
| 9 月 17 日 | 第十批 | 位数乘数位和 | 枚举位数、数位贪心 |
| 9 月 17 日 | 第十批 | 翻转加镜像最小串 | 字符串贪心；题面约束缺失 |

Node.js 做这类题时先记住两条：超过 `2^53 - 1` 的整数必须用 `BigInt`；位运算符会把 `Number` 转成 32 位有符号整数，处理 `10^18` 时绝对不能直接写 `n >> 1`。

---

## 8 月 27 日：第七批

### 第一题：刀盾分配后的最小总伤害

#### 完整题面整理

在一场冒险中，你会连续遭遇 `n` 轮怪物攻击，第 `i` 轮造成的伤害为 `a[i]`。你携带 `m` 把刀和 `k` 面盾，每件道具都是消耗品，使用一次后消失。每一轮必须从下面三种策略中选择一种：

- 用刀，本轮伤害变为 `0`；
- 用盾，本轮伤害变为 `max(0, a[i] - p)`；
- 不用道具，承受完整伤害。

请合理分配刀和盾，使 `n` 轮攻击受到的总伤害最小。

**输入格式：**第一行是测试组数 `T`。每组第一行输入 `n,m,k,p`，第二行输入 `n` 个伤害值 `a[1..n]`。

**数据范围：**`1 <= T <= 10^5`，`1 <= n <= 2×10^5`，`0 <= m,k <= n`，`1 <= p <= 10^9`，`0 <= a[i] <= 10^9`；所有测试组的 `n` 之和不超过 `2×10^5`。

**输出格式：**每组输出一个整数，表示最优策略下的最小总伤害。

> 当前截图没有展示本题样例，因此这里不补造样例。

#### 怎么想到排序贪心

把问题改成“最大化免掉的伤害”：

- 刀对伤害 `x` 的收益是 `x`；
- 盾对伤害 `x` 的收益是 `min(x, p)`。

假设一把刀给了较小伤害 `x`，较大伤害 `y` 使用盾。交换以后，刀给 `y`，盾给 `x`。收益变化为：

```text
[y + min(x, p)] - [x + min(y, p)]
= max(y - p, 0) - max(x - p, 0) >= 0
```

所以刀越应该给大的伤害。刀分完后，盾的收益 `min(x,p)` 也随 `x` 单调不减，因此盾继续给剩余伤害中的最大值。

排序降序后，前 `m` 个用刀，接下来 `k` 个用盾，其余不处理即可。这里“最多使用”不影响结论，因为刀和盾都不会增加伤害。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/)
let at = 0
const T = Number(data[at++])
const out = []

for (let tc = 0; tc < T; tc++) {
  const n = Number(data[at++])
  const m = Number(data[at++])
  const k = Number(data[at++])
  const p = BigInt(data[at++])
  const a = Array.from({ length: n }, () => BigInt(data[at++]))

  a.sort((x, y) => (x === y ? 0 : x > y ? -1 : 1))

  let answer = 0n
  for (let i = m; i < n; i++) {
    if (i < m + k) answer += a[i] > p ? a[i] - p : 0n
    else answer += a[i]
  }
  out.push(String(answer))
}

console.log(out.join('\n'))
```

排序占 `O(n log n)`，额外空间取决于排序实现。总伤害可能达到 `2 × 10^14`，虽然仍在安全整数范围内，这里统一使用 `BigInt`，减少迁移到更大约束时的风险。

---

### 第二题：d-极峰

#### 完整题面整理

给定长度为 `n` 的整数序列 `a[1..n]` 和非负整数窗口距离 `d`。当且仅当对所有满足下面条件的位置 `j`：

```text
1 <= j <= n
1 <= |j-i| <= d
```

都有 `a[i] > a[j]` 时，称位置 `i` 是一个 d-极峰。请找出所有 d-极峰的位置，并按照从小到大的顺序输出。特别地，当 `d=0` 时，每个位置都是 d-极峰。

**输入格式：**第一行输入测试组数 `T`。每组第一行输入 `n,d`，第二行输入 `n` 个整数 `a[1..n]`。

**数据范围：**`1 <= T <= 10^5`，`1 <= n <= 2×10^5`，`0 <= d <= 2×10^5`，`-10^9 <= a[i] <= 10^9`；所有测试组的 `n` 之和不超过 `2×10^5`。

**输出格式：**每组输出两行。第一行输出 d-极峰数量 `k`；第二行输出 `k` 个严格递增的位置下标。如果 `k=0`，第二行仍需输出一个空行。

**可核对样例：**

```text
输入
2
8 2
1 3 3 2 5 4 4 6
5 0
2 2 1 3 3

输出
2
5 8
5
1 2 3 4 5
```

第一组中，位置 5 的值为 5，严格大于距离不超过 2 的其他位置；位置 8 的值为 6，也满足条件。位置 2、3 的值相等，所以它们都不是严格极峰。

#### 为什么要计算左右窗口最大值

逐点查看最多 `2d` 个邻居会达到 `O(nd)`。条件其实只关心两个值：

```text
leftMax[i]  = max(a[i-d ... i-1])
rightMax[i] = max(a[i+1 ... i+d])
```

只要 `a[i] > leftMax[i]` 且 `a[i] > rightMax[i]`，它就是答案。固定长度滑动窗口最大值可以用单调队列在线性时间求出。

这里先解释为什么只比较最大值就够了。假设左边窗口是 `[2,1,4,3]`，当前位置是 `5`。既然窗口最大值 `4 < 5`，其余的 2、1、3 必然也小于 5；反过来，只要窗口最大值不小于 5，当前位置就不可能严格大于全部邻居。因此不用保存每个邻居的比较结果，只需快速得到左右两边的最大值。

#### 单调队列究竟保存了什么

以计算 `leftMax[i]` 为例。扫描到位置 `i` 时，有效的左窗口是：

```text
[i-d, i-1]
```

队列 `q` 保存的是**数组下标**，并始终满足三个条件：

1. 下标从队首到队尾递增，因为元素按扫描顺序入队；
2. 对应的数组值从队首到队尾单调不增；
3. 队列里只保留当前窗口范围内的下标。

于是队首对应的就是当前窗口最大值。

扫描到新元素 `a[i]` 时，需要做三件事：

```text
第一步：从队首删除已经跑出窗口的下标
第二步：读取队首，得到 leftMax[i]
第三步：从队尾删除所有不大于 a[i] 的元素，再把 i 入队
```

为什么第三步可以直接删？假设队尾旧元素是 `a[k]=3`，新元素是 `a[i]=5`，且 `k<i`。以后只要旧元素 `k` 还在某个滑动窗口里，更新的元素 `i` 也一定还在，而且 5 比 3 大。旧元素既更小，又会更早过期，从此不可能成为任何未来窗口的最大值，所以可以永久删除。

相等时也可以删旧下标。例如旧值和新值都是 3，新下标留在窗口里的时间更长，保留新的就够了。注意代码是在记录当前 `leftMax[i]` **之后**才删除相等旧值，因此当前位置仍然能正确发现左侧有一个与自己相等的元素。

#### 用完整例子走一遍

设：

```text
a = [1, 3, 3, 2, 5, 4, 4, 6]
d = 2
```

表格中的队列写成 `下标:值`，并展示插入当前位置后的状态：

| `i` | 当前左窗口 | `leftMax[i]` | 插入 `a[i]` 后的队列 |
| ---: | --- | ---: | --- |
| 0 | 空 | `-∞` | `[0:1]` |
| 1 | `[0]` | 1 | 新值 3 淘汰 1，得到 `[1:3]` |
| 2 | `[0,1]` | 3 | 新的 3 淘汰旧的 3，得到 `[2:3]` |
| 3 | `[1,2]` | 3 | 2 小于队尾 3，得到 `[2:3, 3:2]` |
| 4 | `[2,3]` | 3 | 5 淘汰 3 和 2，得到 `[4:5]` |
| 5 | `[3,4]` | 5 | 得到 `[4:5, 5:4]` |
| 6 | `[4,5]` | 5 | 新的 4 淘汰旧的 4，得到 `[4:5, 6:4]` |
| 7 | `[5,6]` | 4 | 下标 4 过期，6 淘汰 4，得到 `[7:6]` |

所以：

```text
leftMax = [-∞, 1, 3, 3, 3, 5, 5, 4]
```

右侧最大值完全对称。把数组反转后，“原数组右边的 d 个元素”就变成了“反转数组左边的 d 个元素”，因此可以复用同一个 `leftWindowMax`，算完再反转回来：

```text
rightMax = [3, 3, 5, 5, 4, 6, 6, -∞]
```

最后逐个判断：

```text
i=4，a[i]=5，左侧最大值=3，右侧最大值=4，所以是极峰
i=7，a[i]=6，左侧最大值=4，右侧为空，所以是极峰
```

换回题目的 1-based 下标，答案是位置 5 和位置 8。

#### 代码里的 `head` 和 `tail` 是什么

JavaScript 的 `Array.shift()` 会移动后面的所有元素，一次操作可能是 `O(n)`。代码没有真的从数组头部删除，而是用两个指针表示有效队列区间：

```text
q[head ... tail-1]
```

- 队首出队：`head++`；
- 队尾出队：`tail--`；
- 队尾入队：`q[tail++] = i`。

这就是一个用数组实现的双端队列。它确实会在两端删除，但它和“维护所有节点的普通双向链表”不是同一种解法。

#### 双向链表加 Map 能不能做

你的思路要看链表按什么顺序维护：

- 如果链表按原数组下标排列，移除窗口最左元素很方便，但找最大值仍要扫描整个窗口，最坏还是 `O(nd)`；
- 如果链表按数值从大到小排列，队首可以直接得到最大值，但新值插入到哪个位置仍要查找。普通 `Map` 只能按 key 找已有节点，不能快速找到“第一个比新值小的节点”，还要处理重复值；
- 使用支持有序多重集合的平衡树可以做到每次插入、删除、取最大值 `O(log d)`，总复杂度 `O(n log d)`，但 JavaScript 标准库没有现成的 `TreeMap`；
- 最大堆配合延迟删除也能做到 `O(n log d)`，是可行的替代方案。

单调队列之所以能做到 `O(n)`，是因为窗口只会从左向右移动。新元素可以永久淘汰所有“比它更旧而且不比它大”的元素。每个下标最多入队一次、从队首过期一次或从队尾被淘汰一次，所以全部循环加起来仍是线性时间。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)
let at = 0
const T = input[at++]
const out = []

function leftWindowMax(a, d) {
  const ans = Array(a.length).fill(-Infinity)
  const q = Array(a.length)
  let head = 0
  let tail = 0

  for (let i = 0; i < a.length; i++) {
    while (head < tail && q[head] < i - d) head++
    if (head < tail) ans[i] = a[q[head]]
    while (head < tail && a[q[tail - 1]] <= a[i]) tail--
    q[tail++] = i
  }
  return ans
}

for (let tc = 0; tc < T; tc++) {
  const n = input[at++]
  const d = input[at++]
  const a = input.slice(at, at + n)
  at += n

  const left = leftWindowMax(a, d)
  const reversed = [...a].reverse()
  const right = leftWindowMax(reversed, d).reverse()
  const peaks = []

  for (let i = 0; i < n; i++) {
    if (a[i] > left[i] && a[i] > right[i]) peaks.push(i + 1)
  }

  out.push(String(peaks.length))
  out.push(peaks.join(' ')) // 没有答案时也要保留空行
}

console.log(out.join('\n'))
```

易错点是“严格大于”：窗口内出现相同值时，两边都不能成为极峰。还要注意先读取当前窗口最大值，再把当前位置入队，否则会把自己也算进比较范围。

---

### 第三题：雾幕与聚光的最终亮度

#### 完整题面整理

一条直线舞台上依次放置编号为 `1..n` 的灯，第 `i` 个灯的初始亮度为整数 `a[i]`。现在有两类覆盖连续灯位的装置同时生效：

- 雾幕 `(l,r,p)`：限制区间 `[l,r]` 内每个灯的亮度不超过 `p`；
- 聚光 `(l,r,q)`：限制区间 `[l,r]` 内每个灯的亮度不低于 `q`。

对每个位置定义：

- `L[i]`：覆盖它的所有聚光下界的最大值，没有则为 `0`；
- `U[i]`：覆盖它的所有雾幕上界的最小值，没有则为正无穷。

最终亮度按照下面的公式计算：

```text
b[i] = min(max(a[i], L[i]), U[i])
```

请输出所有灯的最终亮度 `b[1..n]`。

**输入格式：**第一行是测试组数 `T`。每组第一行输入 `n,mf,ms`，分别表示灯数、雾幕数和聚光数；第二行输入 `n` 个初始亮度。随后 `mf` 行每行输入一个雾幕 `l,r,p`，再随后 `ms` 行每行输入一个聚光 `l,r,q`。

**数据范围：**`1 <= n <= 2×10^5`，`0 <= mf,ms <= 2×10^5`，`0 <= a[i],p,q <= 10^9`，且 `1 <= l <= r <= n`。公开整理给出的总量限制是各测试组的 `n`、`mf`、`ms` 之和分别不超过 `2×10^5`。

**输出格式：**每组输出一行 `n` 个整数，表示最终亮度。

> 当前截图没有完整显示样例，这里只保留能够核对的题面和约束。

#### 离线区间约束

这道题不是按操作顺序修改亮度，而是先汇总每个位置的上、下界。下界只做区间 `max`，上界只做区间 `min`。可以用两棵只存懒标记的线段树：

- 下界树的节点合并 `max`；
- 上界树的节点合并 `min`；
- 全部更新结束后，从根走到叶子，把路径上的标记合并起来。

无需维护区间和，也无需在每次更新后向下推标记。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const x = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)
let at = 0
const T = x[at++]
const out = []

function rangeApply(tree, node, lo, hi, ql, qr, value, merge) {
  if (ql <= lo && hi <= qr) {
    tree[node] = merge(tree[node], value)
    return
  }
  const mid = (lo + hi) >> 1
  if (ql <= mid) rangeApply(tree, node * 2, lo, mid, ql, qr, value, merge)
  if (qr > mid) rangeApply(tree, node * 2 + 1, mid + 1, hi, ql, qr, value, merge)
}

function collect(tree, node, lo, hi, inherited, merge, result) {
  const current = merge(inherited, tree[node])
  if (lo === hi) {
    result[lo] = current
    return
  }
  const mid = (lo + hi) >> 1
  collect(tree, node * 2, lo, mid, current, merge, result)
  collect(tree, node * 2 + 1, mid + 1, hi, current, merge, result)
}

for (let tc = 0; tc < T; tc++) {
  const n = x[at++]
  const fogCount = x[at++]
  const lightCount = x[at++]
  const a = x.slice(at, at + n)
  at += n

  const upperTree = Array(4 * n + 5).fill(Infinity)
  const lowerTree = Array(4 * n + 5).fill(0)

  for (let i = 0; i < fogCount; i++) {
    const l = x[at++] - 1
    const r = x[at++] - 1
    const p = x[at++]
    rangeApply(upperTree, 1, 0, n - 1, l, r, p, Math.min)
  }
  for (let i = 0; i < lightCount; i++) {
    const l = x[at++] - 1
    const r = x[at++] - 1
    const q = x[at++]
    rangeApply(lowerTree, 1, 0, n - 1, l, r, q, Math.max)
  }

  const upper = Array(n)
  const lower = Array(n)
  collect(upperTree, 1, 0, n - 1, Infinity, Math.min, upper)
  collect(lowerTree, 1, 0, n - 1, 0, Math.max, lower)

  const answer = a.map((v, i) => Math.min(Math.max(v, lower[i]), upper[i]))
  out.push(answer.join(' '))
}

console.log(out.join('\n'))
```

每次区间更新是 `O(log n)`，最终收集是 `O(n)`，总复杂度为 `O((n+m_f+m_s) log n)`。

---

## 9 月 10 日：第八批（公开资料归档为 9 月 3 日）

### 第一题：可删去的 01 字符串

#### 完整题面整理

给定若干个只由字符 `0` 和 `1` 组成的字符串。对一个字符串可以重复执行下面的操作：

- 从相邻位置中选择一对不同字符，也就是子串 `01` 或 `10`；
- 同时删除这两个字符，删除后左右剩余部分自动拼接。

如果一个字符串经过若干次操作后能够变成空串，就称它为“可删去”的。操作次数允许为 0。请统计输入的字符串中有多少个是可删去的。

输入格式：

```text
第一行输入整数 n，表示字符串数量。
接下来 n 行，每行输入一个仅由 0 和 1 组成的字符串。
```

截图可确认的数据范围为：`1 <= n <= 2×10^5`，单个字符串长度在 `[1,10^5]` 内，所有字符串的长度之和不超过 `5×10^5`。

输出格式：输出一个整数，表示可删去字符串的数量。

例如下面这组便于理解的示例：

```text
输入
5
0
1
01
0011
010

输出
2
```

`01` 可以一次删空；`0011` 先删除中间的 `01`，剩下的 `01` 再删一次。其余三个字符串的 0、1 数量不同，无法删空。这个示例用于解释题意；原截图没有展示完整官方样例。

#### 为什么只统计 0 和 1 就够了

每次操作恰好删掉一个 `0` 和一个 `1`，所以 `count(0)-count(1)` 永远不变。要变成空串，两个数量必须相等。

这个条件也充分：一个非空且 0、1 数量相等的串不可能全部字符相同，因此一定存在相邻的不同字符。删掉它们后仍然数量相等，反复执行就能删空。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/)
const n = Number(data[0])
let answer = 0

for (let i = 1; i <= n; i++) {
  let balance = 0
  for (const ch of data[i]) balance += ch === '0' ? 1 : -1
  if (balance === 0) answer++
}

console.log(answer)
```

若所有字符串总长度为 `L`，时间复杂度为 `O(L)`。只判断长度为偶数不够，例如 `0000` 仍然不能删空。

---

### 第二题：相邻整数异或的路径权值和

#### 完整题面整理

数轴上有 `1,2,3,...,n` 共 `n` 个点，只有相邻点之间有无向边。连接 `i` 与 `i+1` 的边权为：

```text
i xor (i+1)
```

其中 `xor` 表示按位异或。从点 1 到点 n 只有一条路径，请计算这条路径上所有边权之和，也就是：

```text
(1 xor 2) + (2 xor 3) + ... + ((n-1) xor n)
```

答案对 `10^9+7` 取模。

输入格式：第一行输入测试组数 `T`；接下来 `T` 行，每行输入一个整数 `n`。截图可确认 `1 <= T <= 2×10^5`、`1 <= n <= 10^18`。

输出格式：对每组数据输出一行，表示路径权值和取模后的结果。

下面是一组便于核对公式的示例：

```text
输入
4
1
2
3
4

输出
0
3
4
11
```

当 `n=4` 时，三条边的权值分别是 `1 xor 2=3`、`2 xor 3=1`、`3 xor 4=7`，总和为 11。原截图没有完整显示官方样例，因此这里给出的是按题意构造的验证样例。

#### 从二进制进位找规律

如果 `i` 的二进制末尾有 `t` 个连续 1，加一会把这 `t` 个 1 清零，再把前一位 0 变成 1。因此：

```text
i xor (i+1) = 2^(t+1) - 1
```

继续整理可以得到一个更适合编码的等价公式。把 `n` 的每个二进制 1 位记为第 `j` 位，则：

```text
sum(i xor (i+1)), i=1..n-1
= Σ[(j+1) * 2^j] - 1
```

例如 `n=4=100₂`，答案是 `3*4-1=11`，对应 `3+1+7`。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/)
const T = Number(tokens[0])
const MOD = 1000000007n
const out = []

for (let tc = 1; tc <= T; tc++) {
  let n = BigInt(tokens[tc])
  let bit = 0n
  let power = 1n
  let answer = 0n

  while (n > 0n) {
    if (n & 1n) answer = (answer + (bit + 1n) * power) % MOD
    n >>= 1n
    bit++
    power = (power * 2n) % MOD
  }

  answer = (answer - 1n + MOD) % MOD
  out.push(String(answer))
}

console.log(out.join('\n'))
```

每组只扫描约 60 个二进制位，时间复杂度 `O(log n)`。`n` 必须从字符串直接转成 `BigInt`，不能先经过 `Number`。

---

### 第三题：循环血量怪物的最少讨伐天数

#### 完整题面整理

有 `m` 个怪物和一个长度为 `n` 的数组 `a`。从第 1 天开始计算，第 `D` 天所有仍然存活的怪物血量都会统一重置为：

```text
a[((D-1) mod n) + 1]
```

也就是说，怪物血量按照 `a1,a2,...,an,a1,a2,...` 循环变化，并不会保留前一天受到的伤害。

勇者初始攻击力为 `k`，攻击力每经过完整的 `n` 天增加 1，因此第 `D` 天的攻击力为：

```text
k + floor((D-1)/n)
```

每天可以选择一个仍然存活的怪物攻击一次：

- 若当天攻击力不小于当天血量，该怪物被直接击杀，怪物数量减一；
- 否则攻击失败，怪物不会死亡，下一天血量仍按循环规则重置。

求击杀全部 `m` 个怪物最少需要多少天。

输入格式：

```text
第一行输入测试组数 T。
每组第一行输入 n、m、k。
第二行输入 n 个整数 a1、a2、...、an。
```

截图可确认的数据范围为：`1 <= T <= 10^3`，`1 <= n <= 2×10^5`，`1 <= m <= 10^12`，`0 <= k <= 10^12`，`1 <= ai <= 10^12`，所有测试数据的 `n` 之和不超过 `2×10^5`。

输出格式：对每组数据输出一行，表示最少天数。

截图没有展示完整官方样例。理解题意时要抓住两点：一天最多杀一个怪物；攻击失败造成的伤害不会累积，因为第二天所有怪物都会重置血量。

#### 把每个数组位置变成“最早可击杀轮次”

每 `n` 天是一轮，轮次从 `q=0` 开始。位置 `i` 在第 `q` 轮能够击杀，当且仅当 `k+q >= a[i]`。定义：

```text
need[i] = max(0, a[i] - k)
```

它表示这个位置最早在哪一轮成为成功击杀日。

如果完整经过 `R` 轮，即轮次 `0..R-1`，位置 `i` 能贡献：

```text
max(0, R - need[i])
```

把 `need` 排序并做前缀和。对某个 `R`，二分找到所有 `need < R` 的元素个数 `c`，累计击杀数就是 `R*c - prefix[c]`。再二分最小的 `R` 使累计击杀数达到 `m`。最后回到第 `R-1` 轮，按原数组顺序寻找第几个可击杀位置，得到确切天数。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const t = fs.readFileSync(0, 'utf8').trim().split(/\s+/)
let at = 0
const T = Number(t[at++])
const out = []

function lowerBound(a, target) {
  let lo = 0
  let hi = a.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (a[mid] < target) lo = mid + 1
    else hi = mid
  }
  return lo
}

for (let tc = 0; tc < T; tc++) {
  const n = Number(t[at++])
  const monsters = BigInt(t[at++])
  const k = BigInt(t[at++])
  const needOriginal = Array(n)

  for (let i = 0; i < n; i++) {
    const hp = BigInt(t[at++])
    needOriginal[i] = hp > k ? hp - k : 0n
  }

  const need = [...needOriginal].sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))
  const prefix = Array(n + 1).fill(0n)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + need[i]

  function killsAfterRounds(rounds) {
    const c = lowerBound(need, rounds)
    return rounds * BigInt(c) - prefix[c]
  }

  let lo = 1n
  let hi = 1n
  while (killsAfterRounds(hi) < monsters) hi *= 2n
  while (lo < hi) {
    const mid = (lo + hi) >> 1n
    if (killsAfterRounds(mid) >= monsters) hi = mid
    else lo = mid + 1n
  }

  const rounds = lo
  const completed = killsAfterRounds(rounds - 1n)
  let remain = monsters - completed
  const currentRound = rounds - 1n
  let position = 0

  for (let i = 0; i < n; i++) {
    if (needOriginal[i] <= currentRound) {
      remain--
      if (remain === 0n) {
        position = i + 1
        break
      }
    }
  }

  const answer = currentRound * BigInt(n) + BigInt(position)
  out.push(String(answer))
}

console.log(out.join('\n'))
```

排序 `O(n log n)`，轮数二分每次需要一次 `lowerBound`，约为 `O(log answer * log n)`。`m`、攻击力、血量和最终天数都应使用 `BigInt`。

---

## 9 月 16 日：第九批（公开资料归档为 9 月 10 日）

### 第一题：构造区间平衡 01 串

#### 完整题面整理

需要构造一个长度为 `n`、只由字符 `0` 和 `1` 组成的字符串 `s`。题目给出 `m` 个闭区间 `[l_i,r_i]`，并保证每个区间的长度 `r_i-l_i+1` 都是偶数。要求每个给定区间对应的子串 `s[l_i..r_i]` 中，字符 0 和字符 1 的数量相等。

输入格式：

```text
第一行输入 n 和 m，分别表示字符串长度和区间数量。
接下来 m 行，每行输入 l_i 和 r_i，表示一个闭区间。
```

截图可确认的数据范围为：`2 <= n <= 10^5`、`1 <= m <= 10^5`、`1 <= l_i < r_i <= n`，并保证每个区间长度为偶数。

输出格式：输出任意一个满足全部区间要求的 01 字符串。若有多个答案，输出任意一个即可；题目保证存在答案。

官方截图中的样例为：

```text
输入
3 2
1 2
2 3

输出
010
```

区间 `[1,2]` 对应 `01`，区间 `[2,3]` 对应 `10`，两段都恰好包含一个 0 和一个 1。

#### 为什么交替串能同时满足所有区间

直接输出交替串 `010101...`。交替串中任何连续偶数个字符都由若干个 `01` 或 `10` 组成，所以 0 和 1 必定一样多。区间怎样重叠完全不重要。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)
const n = data[0]
const m = data[1]

// 区间对构造没有影响，但 ACM 输入仍要完整读入；一次性读入时无需单独处理。
let answer = ''
for (let i = 0; i < n; i++) answer += i % 2 === 0 ? '0' : '1'
console.log(answer)
```

时间复杂度 `O(n)`。考试时看到“任意偶数长度区间”应先找一个对所有区间都成立的全局结构，不要急着逐区间修补。

---

### 第二题：至多 k 次区间加一后最大化最小值

#### 完整题面整理

给定长度为 `n` 的整数数组 `a`。最多可以执行 `k` 次操作，每次选择一个起点 `i`，要求 `1 <= i <= n-m+1`，然后让长度恰好为 `m` 的区间 `[i,i+m-1]` 中每个元素都加 1。

可以少于 `k` 次，也可以一次都不执行。请合理选择每次操作的区间，使最终数组的最小值尽可能大，并输出这个最大可能值。

输入格式：

```text
第一行输入 n、m、k。
第二行输入 n 个整数 a1、a2、...、an。
```

截图可确认的数据范围为：`1 <= n <= 2×10^5`、`1 <= m <= n`、`0 <= k <= 10^9`、`|a_i| <= 10^9`。

输出格式：输出一个整数，表示操作后能够得到的最大数组最小值。

官方截图中的第一组样例为：

```text
输入
5 3 4
1 2 3 2 1

输出
3
```

一种方案是对区间 `[1,3]` 操作两次、对区间 `[3,5]` 操作两次，数组变为 `[3,4,7,4,3]`，最小值为 3；无法用 4 次操作让所有位置都至少为 4。

#### 二分答案与最靠右补齐

“最大化一个最小值”通常适合二分答案。假设目标最小值为 `target`，从左向右检查：

- 已经达到 `target`，继续；
- 当前位置不足，就必须补 `delta` 次；
- 为了让这些操作尽量帮助后面的元素，只能从当前位置开始覆盖 `[i, i+m-1]`；
- 若区间越界，或者累计操作数超过 `k`，目标不可行。

用差分数组记录一批区间加法何时失效，单次可行性检查为 `O(n)`。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const a = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)
let at = 0
const n = a[at++]
const m = a[at++]
const k = a[at++]
const nums = a.slice(at, at + n)

function can(target) {
  const expire = Array(n + 1).fill(0)
  let active = 0
  let used = 0

  for (let i = 0; i < n; i++) {
    active += expire[i]
    const current = nums[i] + active
    if (current >= target) continue

    const delta = target - current
    if (i + m > n) return false
    used += delta
    if (used > k) return false

    active += delta
    expire[i + m] -= delta
  }
  return true
}

let lo = Math.min(...nums)
let hi = lo + k + 1 // [lo, hi)，hi 保证不可行
while (lo + 1 < hi) {
  const mid = Math.floor((lo + hi) / 2)
  if (can(mid)) lo = mid
  else hi = mid
}

console.log(lo)
```

复杂度为 `O(n log k)`，空间 `O(n)`。检查时不要真的修改原数组，也不要对每次操作逐个加一。

---

### 第三题：无限木板染色与整体节拍

#### 完整题面整理

有一排向正、负两个方向无限延伸的木板，木板用所有整数编号 `..., -2,-1,0,1,2,...`。现有 `n` 种颜色，第 `i` 种颜色对应一个正整数参数 `a_i`。其上色规则为：如果编号为 `x` 的木板被涂成颜色 `i`，那么编号为 `x-a_i` 和 `x+a_i` 的木板也必须涂成颜色 `i`，并递归应用同一规则。因此一种颜色最终会覆盖某个模 `a_i` 的同余类。

为了适配喷涂设备，可以选择一个正整数 `L` 作为“整体节拍”。选定 `L` 后需要同时满足：

- 只能使用满足 `L` 整除 `a_i` 的颜色，也就是 `a_i` 是 `L` 的整数倍；
- 每种被使用颜色的初始上色位置，在模 `L` 意义下必须两两不同；
- 每块木板至多涂一种颜色，允许存在没有被涂色的木板。

请在可以自由选择 `L` 的前提下，求最多能同时使用多少种颜色。

输入格式：

```text
第一行输入测试组数 T。
每组第一行输入颜色数 n。
第二行输入 n 个正整数 a1、a2、...、an。
```

截图可确认的数据范围为：`1 <= T <= 2×10^5`、`1 <= n <= 2×10^5`、`1 <= a_i <= 2×10^5`，所有测试数据的 `n` 之和不超过 `3×10^5`。

输出格式：对每组数据输出一行，表示最多能使用的颜色种类数。

截图没有显示完整官方样例。可以用 `a=[2,4,6,9]` 理解规则：选择 `L=2` 时，可用参数为 2 的倍数的三种颜色 `2,4,6`，但模 2 只有两个不同初始位置，因此最多使用 `min(3,2)=2` 种颜色。

#### 转成约数计数

固定 `L` 后：

- 可选颜色数是 `count(L | a[i])`，也就是数组中有多少个 `a[i]` 是 `L` 的倍数；
- 模 `L` 只有 `L` 个不同余数，最多放 `L` 种颜色。

所以固定 `L` 的答案是：

```text
min(L, count(L divides a[i]))
```

统计每个数值出现次数 `freq[x]`。对每个候选节拍 `L`，枚举 `L,2L,3L,...`，把这些倍数的出现次数相加，就能得到有多少个 `a[i]` 能被 `L` 整除。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)
let at = 0
const T = data[at++]
const out = []

for (let tc = 0; tc < T; tc++) {
  const n = data[at++]
  const values = data.slice(at, at + n)
  at += n
  const maxA = Math.max(...values)
  const freq = new Int32Array(maxA + 1)

  for (const v of values) freq[v]++

  let answer = 0
  for (let L = 1; L <= maxA; L++) {
    let usable = 0
    for (let multiple = L; multiple <= maxA; multiple += L) {
      usable += freq[multiple]
    }
    answer = Math.max(answer, Math.min(L, usable))
  }
  out.push(String(answer))
}

console.log(out.join('\n'))
```

复杂度约为 `O(A log A + n)`，其中 `A=max(a[i])`。相同的 `a[i]` 代表不同颜色，频次不能去重。

---

## 9 月 17 日：第十批

### 第一题：区间异或等式的最小右端点

#### 完整题面整理

有一天，Zeeman 想到了下面的等式：

```text
x xor (x+1) xor ... xor y = z
```

其中 `xor` 表示按位异或。给定一组整数 `x` 和 `z`，请找出满足 `y >= x` 且使等式成立的最小非负整数 `y`；若不存在这样的 `y`，输出 `-1`。

输入格式：输入两个整数 `x` 和 `z`。截图可确认 `0 <= x < 2^20`、`0 <= z < 2^20`。

输出格式：若存在答案，输出最小的 `y`；否则输出 `-1`。

官方截图中可以看到样例输入：

```text
1 4
```

对应输出应为：

```text
4
```

因为 `1 xor 2 xor 3 xor 4 = 4`，而 `y=1、2、3` 都不能得到 4。

#### 前缀异或只有四种形态

定义 `F(n)=0 xor 1 xor ... xor n`，并规定 `F(-1)=0`。区间异或为：

```text
F(y) xor F(x-1)
```

所以目标变成 `F(y)=z xor F(x-1)`。前缀异或满足：

| `n mod 4` | `F(n)` |
| --- | --- |
| 0 | `n` |
| 1 | `1` |
| 2 | `n+1` |
| 3 | `0` |

当结果是变量时，`y` 只可能是 `target` 或 `target-1`；当结果是常量 0 或 1 时，`x..x+3` 一定覆盖完整的模 4 周期。因此检查 6 个候选就够了。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const [x, z] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)

function prefixXor(n) {
  if (n < 0) return 0
  if (n % 4 === 0) return n
  if (n % 4 === 1) return 1
  if (n % 4 === 2) return n + 1
  return 0
}

const target = z ^ prefixXor(x - 1)
const candidates = [x, x + 1, x + 2, x + 3, target - 1, target]
let answer = Infinity

for (const y of candidates) {
  if (y >= x && prefixXor(y) === target) answer = Math.min(answer, y)
}

console.log(answer === Infinity ? -1 : answer)
```

时间和空间都是 `O(1)`。这道题的输入小于 `2^20`，使用 JavaScript 32 位异或安全。

---

### 第二题：位数乘数位和等于 x 的最小数

#### 完整题面整理

给定正整数 `x`。用 `|a|` 表示正整数 `a` 的十进制位数，用 `sum(a)` 表示 `a` 的十进制数位和。例如：

```text
|7| = 1
|105| = 3
sum(105) = 1 + 0 + 5 = 6
```

请在闭区间 `[1,10^16]` 中找到满足下面等式的最小整数 `a`：

```text
|a| * sum(a) = x
```

如果不存在满足条件的 `a`，输出 `-1`。

输入格式：第一行输入测试组数 `T`；接下来 `T` 行，每行输入一个整数 `x`。截图可确认 `1 <= T <= 5×10^4`、`1 <= x <= 2500`。

输出格式：对每组测试数据输出一行，表示满足条件的最小 `a`；不存在则输出 `-1`。

下面给出一组按题意核对的示例：

```text
输入
4
9
20
23
18

输出
9
19
-1
18
```

例如 `19` 有 2 位、数位和为 10，所以 `2×10=20`；不存在位数与数位和乘积为 23 的合法整数。原截图没有完整显示官方样例，这组数据用于帮助理解和验证代码。

#### 枚举位数，再贪心填数字

固定长度 `L` 后，目标数位和被唯一确定为 `S=x/L`。可行条件是：

```text
x % L === 0
1 <= S <= 9L
```

位数更少的正整数一定更小，所以从 `L=1` 开始尝试。固定 `L,S` 后，从高位向低位填。当前位要尽可能小，但必须保证剩余位全填 9 时仍能凑够剩余数位和：

```text
digit = max(首位下界, S - 9 * 剩余位数)
```

注意上界 `10^16` 本身是合法的 17 位数，因此要枚举到 17 位；17 位候选中只有不超过该上界的结果能保留。

#### JavaScript ACM 解法

```javascript
const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number)
const T = input[0]
const LIMIT = 10000000000000000n
const out = []

function build(length, sum) {
  let text = ''
  for (let i = 0; i < length; i++) {
    const rest = length - i - 1
    const low = i === 0 ? 1 : 0
    const digit = Math.max(low, sum - 9 * rest)
    if (digit > 9) return null
    text += String(digit)
    sum -= digit
  }
  return sum === 0 ? text : null
}

function solve(x) {
  for (let length = 1; length <= 17; length++) {
    if (x % length !== 0) continue
    const sum = x / length
    if (sum < 1 || sum > 9 * length) continue
    const text = build(length, sum)
    if (text !== null && BigInt(text) <= LIMIT) return text
  }
  return '-1'
}

for (let i = 1; i <= T; i++) out.push(solve(input[i]))
console.log(out.join('\n'))
```

答案以字符串构造，比较上界时转 `BigInt`，避免 `10^16` 超出 JavaScript 安全整数范围。

---

### 第三题：一次翻转加镜像后的最小字符串（资料不完整）

#### 目前能够确认的完整题面片段

给定一个只由小写英文字母组成的字符串 `s`。至多可以执行一次下面的“翻转加镜像”操作，也可以选择不执行任何操作：

1. 选择一个连续区间 `[l,r]`；
2. 先将子串 `s[l..r]` 的字符顺序反转；
3. 再把反转后的每个字符 `c` 替换成它的镜像字符 `mirror(c)`。

镜像函数定义为：

```text
mirror(c) = 'a' + ('z' - c)
```

因此有 `a↔z`、`b↔y`、`c↔x`、……、`m↔n`。区间外的字符保持不变。请让最终得到的字符串字典序尽可能小，并输出这个最小结果。

字典序按照通常的字母顺序从左到右逐字符比较；第一次出现不同字符时，字符更小的字符串字典序更小；若一个字符串是另一个字符串的前缀，则较短者更小。

#### 为什么这里没有伪造输入输出和代码

公开的 9 月 17 日完整归档只收录了前两道编程题，截图也没有显示本题的输入规模。输入上限决定了可以使用区间枚举、字符串哈希比较还是更复杂的后缀结构，因此这里不伪造一份“肯定能过”的代码。

可以先掌握三个判断：

1. 操作后的区间是 `mirror(reverse(s[l..r]))`，镜像和反转可交换；
2. 字典序先由最早变化位置决定，若某个方案在更靠左的位置变小，它一定优于所有只在更靠右位置变化的方案；
3. 固定左端点以后，选择右端点等价于比较 `mirror(s[r]), mirror(s[r-1]), ...` 与随后未修改的后缀，不能只比较一个字符就草率停止。

社交平台回忆把它概括成“寻找第一个能变小的位置并贪心扩展”，但缺少完整约束与严格证明。拿到完整题面后，应先用 `O(n^2)` 暴力生成小规模答案，随机对拍贪心；确认性质后再提交线性或 `O(n log n)` 版本。这样的处理比把未经证明的贪心直接当标准答案更可靠。

---

## 按算法方向复习

### 构造与不变量

- 可删去 01 串：寻找操作保持不变的量，再证明必要条件也充分；
- 区间平衡串：不要被大量区间吓住，先寻找一个对所有合法区间都成立的全局构造；
- 数位构造：固定长度，把全局最小转成从高位到低位的局部最小。

### 二分答案

二分的关键不是“答案是整数”，而是存在单调判定：

- 区间加一中，能达到 `x` 就一定能达到更小值；
- 怪物题中，经过 `R` 轮能击杀的数量随 `R` 单调不减。

写二分前先明确：搜索的是第一个可行还是最后一个可行；区间是闭区间还是半开区间；判定函数有没有溢出。

### 区间与滑动窗口

- 固定窗口最大值：单调队列；
- 离线区间 `min/max` 约束：线段树标记、扫描线加堆都可以；
- 固定长度区间重复加一：差分数组记录影响何时结束。

三类题表面都含“区间”，维护的量却完全不同。先问清楚操作是否在线、是否要求顺序、查询的是和还是最值，再选数据结构。

### JavaScript 考场检查表

1. `10^18`、`10^16` 和大规模乘法使用 `BigInt`；
2. 不要混合 `Number` 与 `BigInt` 运算；
3. `Array.shift()` 是线性操作，单调队列使用数组加 `head` 指针；
4. 大输入一次性读取并用指针解析；
5. 自定义 BigInt 排序比较器，不能写 `Number(a-b)`；
6. 输出 `BigInt` 时使用 `String(value)`，不要带结尾的 `n`；
7. 提交前专门测试空答案、`n=1`、`d=0`、所有值相等和边界上限。

这几场题的共同特点是：模板本身不算偏，但需要把题意迅速翻译成不变量、单调性、贡献或离线区间约束。复习时应重复练习“读题后先写数学表达式”，而不是只背代码模板。
