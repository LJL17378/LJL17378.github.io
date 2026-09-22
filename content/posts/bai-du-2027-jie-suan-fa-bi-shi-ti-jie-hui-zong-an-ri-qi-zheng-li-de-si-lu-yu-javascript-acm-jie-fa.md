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

#### 题意

连续遭遇 `n` 次攻击，第 `i` 次伤害为 `a[i]`。有 `m` 把刀和 `k` 面盾，每件道具最多使用一次：

- 用刀，本轮伤害变为 `0`；
- 用盾，本轮伤害变为 `max(0, a[i] - p)`；
- 不用道具，承受完整伤害。

求最小总伤害。

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

#### 题意

给定数组 `a` 和距离 `d`。若位置 `i` 的值严格大于所有满足 `1 <= |j-i| <= d` 的 `a[j]`，则 `i` 是 d-极峰。输出所有位置；`d=0` 时所有位置都是答案。

#### 为什么要计算左右窗口最大值

逐点查看最多 `2d` 个邻居会达到 `O(nd)`。条件其实只关心两个值：

```text
leftMax[i]  = max(a[i-d ... i-1])
rightMax[i] = max(a[i+1 ... i+d])
```

只要 `a[i] > leftMax[i]` 且 `a[i] > rightMax[i]`，它就是答案。固定长度滑动窗口最大值可以用单调队列在线性时间求出。

队列保存下标，值从队首到队尾单调不增。每个下标只会入队一次、出队一次，因此总复杂度不是“每个位置都维护一次队列”的 `O(nd)`，而是 `O(n)`。

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

#### 题意

第 `i` 个灯初始亮度为 `a[i]`。雾幕操作 `(l,r,p)` 要求区间亮度不超过 `p`；聚光操作 `(l,r,q)` 要求区间亮度不低于 `q`。所有装置同时生效。

对每个位置定义：

- `L[i]`：覆盖它的所有聚光下界的最大值，没有则为 `0`；
- `U[i]`：覆盖它的所有雾幕上界的最小值，没有则为正无穷。

最终亮度是 `min(max(a[i], L[i]), U[i])`。

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

#### 题意与不变量

每次可以删除相邻的 `01` 或 `10`，删除后剩余部分拼接。问多少个字符串最终可以删成空串。

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

#### 题意

点 `1..n` 排在数轴上，边 `(i,i+1)` 的权值为 `i xor (i+1)`，求从 1 到 n 的路径权值和，对 `1e9+7` 取模。`n` 可到 `10^18`。

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

#### 题意

有 `m` 个怪物。第 `D` 天所有存活怪物的血量统一变为 `a[(D-1) mod n]`。勇者第 `D` 天的攻击力为：

```text
k + floor((D-1)/n)
```

每天最多攻击一次，攻击力不低于当天血量才能杀死一个怪物。求杀完 `m` 个怪物的最少天数。

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

#### 题意与一眼构造

给定长度 `n` 和若干闭区间，保证每个区间长度都是偶数。构造一个 01 串，使每个给定区间里的 0 和 1 数量相等。

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

#### 题意

长度为 `n` 的数组，每次可选一个长度恰为 `m` 的区间，让其中所有元素加一。最多操作 `k` 次，求最终数组最小值的最大可能值。

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

#### 题意

无限木板按整数编号。颜色 `i` 有步长 `a[i]`：若位置 `x` 涂了该颜色，则 `x-a[i]` 与 `x+a[i]` 也必须涂该颜色，递归后该颜色会占据同一个模 `a[i]` 的同余类。

选择正整数 `L` 作为整体节拍，只能使用满足 `a[i]` 整除 `L` 的颜色；不同颜色的起点模 `L` 必须不同。问最多能使用多少种颜色。

#### 转成约数计数

固定 `L` 后：

- 可选颜色数是 `count(a[i] | L)`；
- 模 `L` 只有 `L` 个不同余数，最多放 `L` 种颜色。

所以固定 `L` 的答案是：

```text
min(L, count(a[i] divides L))
```

统计每个数值出现次数 `freq[d]`。像埃氏筛一样，让 `d` 给它的所有倍数 `L` 贡献 `freq[d]`，就能求出每个 `L` 有多少个数组元素是它的约数。

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
  const divisorCount = new Int32Array(maxA + 1)

  for (const v of values) freq[v]++
  for (let d = 1; d <= maxA; d++) {
    if (freq[d] === 0) continue
    for (let multiple = d; multiple <= maxA; multiple += d) {
      divisorCount[multiple] += freq[d]
    }
  }

  let answer = 0
  for (let L = 1; L <= maxA; L++) {
    answer = Math.max(answer, Math.min(L, divisorCount[L]))
  }
  out.push(String(answer))
}

console.log(out.join('\n'))
```

复杂度约为 `O(A log A + n)`，其中 `A=max(a[i])`。相同的 `a[i]` 代表不同颜色，频次不能去重。

---

## 9 月 17 日：第十批

### 第一题：区间异或等式的最小右端点

#### 题意

给定 `x,z`，找最小的 `y>=x`，使：

```text
x xor (x+1) xor ... xor y = z
```

不存在则输出 `-1`。

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

#### 题意

在 `[1,10^16]` 中找最小正整数 `a`，使十进制位数 `len(a)` 乘以数位和 `sum(a)` 等于 `x`。不存在输出 `-1`。

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

截图能够确认的题意是：给定小写字符串，至多选择一个区间，先反转区间，再把每个字符替换为 `mirror(c)='a'+('z'-c)`，即 `a↔z`、`b↔y`。求操作后字典序最小的字符串。

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
