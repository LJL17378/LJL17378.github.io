---
title: LeetCode Interview 150
slug: leetcode-interview-150
publishedAt: '2026-02-02'
updatedAt: '2026-03-18'
summary: >-
  88. 合并两个有序数组 https://leetcode.cn/problems/merge-sorted-array/description/
  给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2 ，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。 
tags:
  - 面试
draft: false
sourceFile: leetcode interview 150.md
---
# [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/description/)

给你两个按 **非递减顺序**  排列的整数数组<code>nums1</code> 和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。

请你 **合并**  <code>nums2</code> 到 <code>nums1</code> 中，使合并后的数组同样按 **非递减顺序**  排列。

**注意：** 最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。

**示例 1：** 

> **输入：** nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
**输出：** [1,2,2,3,5,6]
**解释：** 需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [**1** ,**2** ,2,**3** ,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

**示例 2：** 

> **输入：** nums1 = [1], m = 1, nums2 = [], n = 0
**输出：** [1]
**解释：** 需要合并 [1] 和 [] 。
合并结果是 [1] 。

**示例 3：** 

> **输入：** nums1 = [0], m = 0, nums2 = [1], n = 1
**输出：** [1]
**解释：** 需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。

**提示：** 

- <code>nums1.length == m + n</code>
- <code>nums2.length == n</code>
- <code>0 <= m, n <= 200</code>
- <code>1 <= m + n <= 200</code>
- <code>-10^9 <= nums1[i], nums2[j] <= 10^9</code>

**进阶：** 你可以设计实现一个时间复杂度为 <code>O(m + n)</code> 的算法解决此问题吗？

**思路**： 
由于nums1尾部是空着的（长度m+n），可以直接当作这是一个另外的数组，双指针比较然后插入就得了

# [26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 **非严格递增排列**  的数组 <code>nums</code> ，请你**<a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a>**  删除重复出现的元素，使每个元素 **只出现一次**  ，返回删除后数组的新长度。元素的 **相对顺序**  应该保持 **一致**  。然后返回 <code>nums</code> 中唯一元素的个数。

考虑 <code>nums</code> 的唯一元素的数量为 <code>k</code>。去重后，返回唯一元素的数量 <code>k</code>。

<code>nums</code> 的前 <code>k</code> 个元素应包含 **排序后**  的唯一数字。下标<code>k - 1</code> 之后的剩余元素可以忽略。

**判题标准:** 

系统会用下面的代码来测试你的题解:

> int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

如果所有断言都通过，那么您的题解将被 **通过** 。

<strong class="example">示例 1：** 

> **输入：** nums = [1,1,2]
**输出：** 2, nums = [1,2,_]
**解释：** 函数应该返回新的长度 **<code>2</code>**  ，并且原数组 nums 的前两个元素被修改为 **<code>1</code>** , **<code>2 </code>** <code>。</code>不需要考虑数组中超出新长度后面的元素。

<strong class="example">示例 2：** 

> **输入：** nums = [0,0,1,1,1,2,2,3,3,4]
**输出：** 5, nums = [0,1,2,3,4,_,_,_,_,_]
**解释：** 函数应该返回新的长度 **<code>5</code>**  ， 并且原数组 nums 的前五个元素被修改为 **<code>0</code>** , **<code>1</code>** , **<code>2</code>** , **<code>3</code>** , **<code>4</code>**  。不需要考虑数组中超出新长度后面的元素。

**提示：** 

- <code>1 <= nums.length <= 3 * 10^4</code>
- <code>-10<font size="1">0<= nums[i] <= 10<font size="1">0</code>
- <code>nums</code> 已按 **非递减** 顺序排列。

**思路**：
left right 指针初始值为 0 和 1 ，left 所指和 right 相等则 left 不动, 不相等的时候 left ++ 并赋值为 right所指，right ++
k为left + 1
**题解**：
```js
var removeDuplicates = function(nums) {
    // 根据题意 nums 长度至少为 1，所以不需要判空
    let left = 0; 
    
    // right 从 1 开始，因为第 0 个元素肯定是唯一的，不用动
    for (let right = 1; right < nums.length; right++) {
        // 当发现“新大陆”（不相等）时
        if (nums[left] !== nums[right]) {
            left++;             // 慢指针先往前挪一个坑位
            nums[left] = nums[right]; // 把新发现的数字填进去
        }
        // 如果相等，right 继续循环自动 ++，left 不动
    }
    
    // left 是下标，长度 = 下标 + 1
    return left + 1;
};
```

# [80. 删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个有序数组 <code>nums</code> ，请你**<a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a>**  删除重复出现的元素，使得出现次数超过两次的元素**只出现两次**  ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 **<a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地 </a>修改输入数组 ** 并在使用 O(1) 额外空间的条件下完成。

**说明：** 

为什么返回数值是整数，但输出的答案是数组呢？

请注意，输入数组是以**「引用」** 方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

> // **nums**  是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中** 该长度范围内**  的所有元素。
for (int i = 0; i < len; i++) {
  print(nums[i]);
}

**示例 1：** 

> **输入：** nums = [1,1,1,2,2,3]
**输出：** 5, nums = [1,1,2,2,3]
**解释：** 函数应返回新长度 length = **<code>5</code>** , 并且原数组的前五个元素被修改为 **<code>1, 1, 2, 2, 3</code>** 。 不需要考虑数组中超出新长度后面的元素。

**示例 2：** 

> **输入：** nums = [0,0,1,1,1,1,2,3,3]
**输出：** 7, nums = [0,0,1,1,2,3,3]
**解释：** 函数应返回新长度 length = **<code>7</code>** , 并且原数组的前七个元素被修改为**<code>0, 0, 1, 1, 2, 3, 3</code>** 。不需要考虑数组中超出新长度后面的元素。

**提示：** 

- <code>1 <= nums.length <= 3 * 10^4</code>
- <code>-10^4 <= nums[i] <= 10^4</code>
- <code>nums</code> 已按升序排列

**思路**：
fast 指针和 slow 指针的初始值都是 2。在 fast 指针向右遍历的过程中，如果 nums[fast] 和 nums[slow - 2] 的值不相等，此时就将 slow 所指的位置赋值为当前 fast 所指的位置，然后让 slow 自增。

之所以可以这样做，主要原因在于：
1. 如果此时 fast 和 slow - 2 所指位置的值相等，那么当前数组中肯定已经有了两个及以上重复的值，这个当前 fast 指向的值就是不可取的。
2. 如果它和 slow - 2 所对应的值不相等，说明这个值是可取的。我们可以直接将其赋值给 slow 所指的位置，并让 slow 继续加 1。

最终，这道题要求的 K 值就是 slow 所对应的数值。
**题解**：
```js
// 初始值都是 2
let slow = 2; 

for (let fast = 2; fast < nums.length; fast++) {
    // 逻辑 2：如果不相等，说明是可取的
    if (nums[fast] !== nums[slow - 2]) {
        nums[slow] = nums[fast]; // 赋值
        slow++;                  // slow 自增
    }
    // 逻辑 1：如果相等，说明不可取，什么都不做，fast 继续走
}
// 最终返回 slow
return slow;
```

# [169. 多数元素](https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个大小为 <code>n</code> 的数组<code>nums</code> ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** <code>⌊ n/2 ⌋</code>的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例1：** 

> **输入：** nums = [3,2,3]
**输出：** 3

**示例2：** 

> **输入：** nums = [2,2,1,1,1,2,2]
**输出：** 2

**提示：** 

- <code>n == nums.length</code>
- <code>1 <= n <= 5 * 10^4</code>
- <code>-10^9 <= nums[i] <= 10^9</code>
- 输入保证数组中一定有一个多数元素。

**进阶：** 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

**思路**：
由于多数元素出现的次数已经大于 n/2，所以可以用两个变量——一个是候选人（candidate），一个是 count 变量——来记录当前的候选人以及票数。

具体执行流程如下：
1. 如果当前没有候选人，那么下一个遍历到的元素就成为候选人，票数设为 1。
2. 后面每次遍历：
   (a) 如果碰到相同的元素，票数加 1。
   (b) 如果碰到不相同的元素，票数减 1。
3. 当票数为 0 时，当前候选人失效，再重新进行上述流程。

一直遍历到最后，由于多数元素的出现次数肯定大于 n/2，这就保证了就算它和其他所有票数抵消，也至少能剩下一票，最后一定会当选。
**题解**：
```js
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        // 1. 如果票数为0，当前数字当选候选人，重置票数
        if (count === 0) {
            candidate = num;
        }

        // 2. 投票环节
        if (num === candidate) {
            count++; // 友军，票数+1
        } else {
            count--; // 敌军，一换一，票数-1
        }
    }

    // 因为题目保证一定存在多数元素，所以剩下的 candidate 一定是答案
    return candidate;
};
```

# [189. 轮转数组](https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个整数数组 <code>nums</code>，将数组中的元素向右轮转 <code>k</code>个位置，其中<code>k</code>是非负数。

**示例 1:** 

> **输入:**  nums = [1,2,3,4,5,6,7], k = 3
**输出:**  <code>[5,6,7,1,2,3,4]</code>
**解释:** 
向右轮转 1 步: <code>[7,1,2,3,4,5,6]</code>
向右轮转 2 步: <code>[6,7,1,2,3,4,5]
</code>向右轮转 3 步: <code>[5,6,7,1,2,3,4]</code>

**示例2:** 

> **输入：** nums = [-1,-100,3,99], k = 2
**输出：** [3,99,-1,-100]
**解释:**  
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]

**提示：** 

- <code>1 <= nums.length <= 10^5</code>
- <code>-2^31 <= nums[i] <= 2^31 - 1</code>
- <code>0 <= k <= 10^5</code>

**进阶：** 

- 尽可能想出更多的解决方案，至少有 **三种**  不同的方法可以解决这个问题。
- 你可以使用空间复杂度为<code>O(1)</code> 的**原地** 算法解决这个问题吗？

**思路**：
利用 JavaScript 的 splice 方法来修改数组内容。splice 可以从索引 0 的位置开始，删除 0 个数据，然后拼接并插入 nums.splice(len - k) 展开后的内容。

具体做法是从 0 开始的地方，插入通过展开运算符处理后的 nums.splice(len - k)。

为什么可以把 nums.slice(len - k) 作为一个往右平移后被剪切掉的子数组呢？因为 splice 会修改原数组，并将剪切掉的数组作为返回值，所以它可以这样实现。
**题解**：
```js
var rotate = function(nums, k) {
    const len = nums.length;
    k = k % len; 
    if (k === 0) return;
    nums.splice(0, 0, ...nums.splice(len - k));
};
```

# [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个数组 <code>prices</code> ，它的第<code>i</code> 个元素<code>prices[i]</code> 表示一支给定股票第 <code>i</code> 天的价格。

你只能选择 **某一天**  买入这只股票，并选择在 **未来的某一个不同的日子**  卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 <code>0</code> 。

**示例 1：** 

> **输入：** [7,1,5,3,6,4]
**输出：** 5
**解释：** 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

**示例 2：** 

> **输入：** prices = [7,6,4,3,1]
**输出：** 0
**解释：** 在这种情况下, 没有交易完成, 所以最大利润为 0。

**提示：** 

- <code>1 <= prices.length <= 10^5</code>
- <code>0 <= prices[i] <= 10^4</code>

**思路**：
创建一个最低价变量 min_price，然后遍历一遍这个数组。

每遍历到一个元素时，先把它跟目前的最低价进行比较：
1. 如果它当前的值比最低价小，那么就更新当前的最低价值。
2. 如果不是的话，我就计算一下今天的价格减去 min_price 的差值。如果这个差值比当前得到的最大收益要大，那我就将最大收益更新为“今天的价格减去 min_price”。

这样就可以实现一次遍历就能算出最大收益。
**题解**：
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 初始化最低价为无穷大，确保第一个数字肯定能比它小
    let minPrice = Infinity; 
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            // 1. 发现更低的价格，更新买入点
            // （既然今天价格最低，肯定不能今天卖，所以不用算利润了）
            minPrice = price;
        } else {
            // 2. 价格比最低价高，尝试卖出看看能不能赚更多
            let currentProfit = price - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
            // 可以简写为: maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};
```

# [122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>prices</code> ，其中<code>prices[i]</code> 表示某支股票第 <code>i</code> 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候**最多** 只能持有 **一股**  股票。然而，你可以在 **同一天**  多次买卖该股票，但要确保你持有的股票不超过一股。

返回 你能获得的 **最大**  利润。

**示例 1：** 

> **输入：** prices = [7,1,5,3,6,4]
**输出：** 7
**解释：** 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
最大总利润为 4 + 3 = 7 。

**示例 2：** 

> **输入：** prices = [1,2,3,4,5]
**输出：** 4
**解释：** 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
最大总利润为 4 。

**示例3：** 

> **输入：** prices = [7,6,4,3,1]
**输出：** 0
**解释：** 在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。

**提示：** 

- <code>1 <= prices.length <= 3 * 10^4</code>
- <code>0 <= prices[i] <= 10^4</code>

**思路**：
直接一次遍历。你先初始化两个变量：
1. total_profit：作为一个总利润
2. min_price：初始化为当前数组的第一个元素

然后把这个数组从头到尾遍历一遍。每次遍历的时候，如果当前的元素比前一个小，给 total_profit 加上“前一个元素的值减去的 min_price”, 然后更新这个 min_price 为当前元素的值。
如果此时是最后一个元素，那么直接将当前元素减去 minPrice 的值加到 totalProfit 里面，也就是直接卖出。
这样通过多次买卖，就可以实现利润的最大化
**题解**：
```js
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    let totalProfit = 0;
    let minPrice = prices[0]; // 初始化买入价

    // 从第二个元素开始遍历
    for (let i = 1; i < prices.length; i++) {
        // 1. 如果发现跌了（当前 < 前一个），说明前一个是高点
        if (prices[i] < prices[i - 1]) {
            // 结算利润：前一天的高点 - 买入价
            totalProfit += prices[i - 1] - minPrice;
            // 重新买入：当前的低点设为新的买入价
            minPrice = prices[i];
        } 
        
        // 2. 特殊处理：如果是最后一天，不管涨跌，都要强制结算一次
        // 注意：如果最后一天是跌的，上面已经结算过了并更新了 minPrice，
        // 这里再结算一次 (prices[i] - prices[i]) 是 0，不影响结果，逻辑是安全的。
        if (i === prices.length - 1) {
            totalProfit += prices[i] - minPrice;
        }
    }

    return totalProfit;
}
```
# [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个非负整数数组<code>nums</code> ，你最初位于数组的 **第一个下标**  。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**示例1：** 

> **输入：** nums = [2,3,1,1,4]
**输出：** true
**解释：** 可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

**示例2：** 

> **输入：** nums = [3,2,1,0,4]
**输出：** false
**解释：** 无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

**提示：** 

- <code>1 <= nums.length <= 10^4</code>
- <code>0 <= nums[i] <= 10^5</code>

**思路**：
维护 maxReach，对于 nums 中的元素进行挨个遍历。maxReach 的初始值是 0。

在遍历过程中有两种情况：
1. 如果当前元素的索引 i 大于 maxReach，那么此时这个元素是不能到达的，我们直接返回 false。
2. 否则的话，我们可以更新 maxReach 的值为 max(maxReach, nums[i] + i)，也就是当前位置可以到达的最远距离。

就这样一直更新这个最远距离。只需要进行一次遍历，就可以知道它能否到达最后一个下标。当 maxReach 大于等于最后一个下标的时候，直接返回 true。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0; 
    const target = nums.length - 1; // 目标是最后一个下标

    for (let i = 0; i < nums.length; i++) {
        // 情况 1：当前位置 i 已经超过了你能跳到的极限
        // 说明前面断档了，这里不可达
        if (i > maxReach) {
            return false;
        }

        // 情况 2：更新 maxReach
        // i + nums[i] 是从当前点起跳能到的位置
        // 我们取 max 是为了保留历史上能跳得更远的那个记录
        maxReach = Math.max(maxReach, i + nums[i]);

        // 优化：一旦发现 maxReach 已经超过或等于终点，直接收工
        if (maxReach >= target) {
            return true;
        }
    }
    
    // 如果遍历结束还没返回 true (虽然一般会在循环里返回)
    return false;
};
```



# [45. 跳跃游戏 II](https://leetcode.cn/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。

每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：

	0 <= j <= nums[i] 且
	i + j < n

返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。

 

示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

示例 2:

输入: nums = [2,3,0,1,4]
输出: 2

 

提示:

	1 <= nums.length <= 104
	0 <= nums[i] <= 1000
	题目保证可以到达 n - 1

**思路**：
反向贪心：
设置 position 为 n - 1，steps 为 0。

1. 进行一个循环，从前往后查找第一个可以到达position的位置，并且将 position 更新为该位置。
2. 为什么可以这么做呢？
   (a) 因为其实每次跳跃可以到达的地方是一个范围。
   (b) 那么从头到尾第一个可以到达position的下标，其实就是一个最优的位置。
   (c) 因为右边的位置哪怕也能到达，它同样也是一步到位，但到达右边位置所需要的总步数只可能更多，不会更少。
3. 所以说，这第一个可以一步到达终点的位置就是最优位置。更新 position 后，再进行多次循环。
4. 每次找到新的 position 之后，都要给 steps 加 1。
5. 一直循环到 position 等于 0 为止，此时的 steps 就是我们所需要的返回值。

正向贪心： 
先维护 steps、currentEnd、nextEnd 三个变量值，初始均设置为 0。

进行一次循环，在循环中遍历到每个元素时，先更新 nextEnd 为 max(nextEnd, i + nums[i])。

当且仅当走到当前步数的边界时，steps++。因为这时候被迫需要跳一步，于是将 currentEnd 赋值为 nextEnd。

之所以可以这样做，是因为我们一直维护的 nextEnd 表示在当前范围内，下一步可以跳到的最远边界，实际上已经达到了局部最优。

注意不要循环到最后一个元素，如果刚好可以跳到最后一个下标可能会多一步

如果 currentEnd 大于等于 nums.length - 1，则结束循环，最后将 steps 作为返回值返回。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0;
    let curEnd = 0;  // 当前这一步的最远边界
    let nextEnd = 0; // 下一步能到的最远位置

    // 注意：我们不需要访问最后一个元素，
    // 因为在访问倒数第二个元素时，如果 boundary 到了终点，步数已经加了
    for (let i = 0; i < nums.length - 1; i++) {
        // 1. 在当前覆盖范围内，寻找下一跳能到的最远距离
        nextEnd = Math.max(nextEnd, i + nums[i]);

        // 2. 如果走到了当前步数的边界
        if (i === curEnd) {
            steps++;        // 被迫跳一步
            curEnd = nextEnd; // 更新边界
            
            // 优化：如果新的边界已经覆盖了终点，可以直接结束（不写也行，循环会自然结束）
            if (curEnd >= nums.length - 1) break;
        }
    }

    return steps;
};
```
# [274. H 指数](https://leetcode.cn/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>citations</code> ，其中 <code>citations[i]</code> 表示研究者的第 <code>i</code> 篇论文被引用的次数。计算并返回该研究者的 **<code>h</code>指数** 。

根据维基百科上<a href="https://baike.baidu.com/item/h-index/3991452?fr=aladdin" target="_blank">h 指数的定义</a>：<code>h</code> 代表“高引用次数” ，一名科研人员的 <code>h</code>** 指数 ** 是指他（她）至少发表了 <code>h</code> 篇论文，并且**至少** 有 <code>h</code> 篇论文被引用次数大于等于 <code>h</code> 。如果 <code>h</code> 有多种可能的值，**<code>h</code> 指数 ** 是其中最大的那个。

**示例 1：** 

> **输入：** <code>citations = [3,0,6,1,5]</code>
**输出：** 3 
**解释：** 给定数组表示研究者总共有 <code>5</code> 篇论文，每篇论文相应的被引用了 <code>3, 0, 6, 1, 5</code> 次。
    由于研究者有 <code>3 </code>篇论文每篇 **至少 ** 被引用了 <code>3</code> 次，其余两篇论文每篇被引用 **不多于**  <code>3</code> 次，所以她的 h 指数是 <code>3</code>。

**示例 2：** 

> **输入：** citations = [1,3,1]
**输出：** 1

**提示：** 

- <code>n == citations.length</code>
- <code>1 <= n <= 5000</code>
- <code>0 <= citations[i] <= 1000</code>

**思路**：
先维护一个 count 数组。对于 citations 数组中的每一个元素进行一次循环，设置 count 数组的长度为 n + 1（n 即 citations 数组的长度），并给它填充初始值0。

在遍历 citations 数组时，将元素值和 n 中的最小值作为 key，把 count 数组中该 key 对应的值进行加 1。这实际上是为了记录被引用次数对应的论文篇数。碍于论文总数，引用次数超过 n 的都被归类到 n，因为它们在计算 H 指数时是等价的。

然后再进行一次循环：
1. 从 n 开始递减遍历下标。
2. 每个循环开始时，先把当前引用次数对应的论文数进行累加。
3. 将当前的累加和与当前的下标进行比较。
4. 如果累加和大于等于当前下标，则直接返回该下标值。
**题解**：
```js
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const n = citations.length;
    // 1. 初始化 count 数组，长度 n + 1，初始值 0
    const count = new Array(n + 1).fill(0);

    // 2. 遍历 citations，填充 count 数组
    for (let c of citations) {
        // 引用次数超过 n 的，都按 n 算
        if (c >= n) {
            count[n]++;
        } else {
            count[c]++;
        }
    }

    let total = 0; // 记录引用次数 >= i 的论文总数

    // 3. 从 n 开始倒序遍历
    for (let i = n; i >= 0; i--) {
        total += count[i]; // 累加：引用次数为 i 的也属于 >= i 的范畴
        
        // 4. 判断条件：如果有 total 篇论文至少有 i 次引用
        if (total >= i) {
            return i; // 找到了最大的 i，直接返回
        }
    }

    return 0;
};
```

# [380. O(1) 时间插入、删除和获取随机元素](https://leetcode.cn/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150)

实现<code>RandomizedSet</code> 类：

<div class="original__bRMd">

- <code>RandomizedSet()</code> 初始化 <code>RandomizedSet</code> 对象
- <code>bool insert(int val)</code> 当元素 <code>val</code> 不存在时，向集合中插入该项，并返回 <code>true</code> ；否则，返回 <code>false</code> 。
- <code>bool remove(int val)</code> 当元素 <code>val</code> 存在时，从集合中移除该项，并返回 <code>true</code> ；否则，返回 <code>false</code> 。
- <code>int getRandom()</code> 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 **相同的概率**  被返回。

你必须实现类的所有函数，并满足每个函数的 **平均**  时间复杂度为 <code>O(1)</code> 。

**示例：** 

> **输入** 
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
**输出** 
[null, true, false, true, 2, true, false, 2]

**解释** 
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。

**提示：** 

- <code>-2^31 <= val <= 2^31 - 1</code>
- 最多调用 <code>insert</code>、<code>remove</code> 和 <code>getRandom</code> 函数 <code>2 *</code><code>10^5</code> 次
- 在调用 <code>getRandom</code> 方法时，数据结构中 **至少存在一个**  元素。

**思路**：
在 JavaScript 中使用一个 Map 来存值以及它的索引：
1. Map 中的 key 就是 val。
2. Map 中的 value 就是 index（即这个 val 在 nums 数组中的索引）。

这个类有两个变量，一个是 nums 数组，一个是 Map。在初始化对象的时候，这两个都是空的。

具体操作实现：

1. insert 操作：
   我们先在 Map 中检查元素 val 是否存在：
   (a) 如果存在，直接返回 false。
   (b) 如果不存在，就在 Map 中 set 一个键值对，key 为 val，value 为此时 nums 的长度，然后再将 val push 进 nums 数组，返回 true。

2. remove 操作：
   我们先检查 val 是否在 Map 中存在：
   (a) 如果不存在，直接返回 false。
   (b) 如果存在，先从 Map 中获取当前 val 对应的 index。接着将 nums 中 index 位置的值设置为 nums 的最后一个元素，然后对 nums 进行 pop 操作把最后一个元素弹出。同时在 Map 中修改数组原最后一个元素（key）对应的 index 值为当前被删除元素的 index，最后再把 val 元素从 Map 中除去，返回 true。

3. getRandom 操作：
   对于随机返回集合中的一项，可以直接使用 random 生成一个 nums 索引范围内的随机数字并返回。
**题解**：
```js
var RandomizedSet = function() {
    this.nums = [];      // 用于存储具体的值，支持 O(1) 随机访问
    this.map = new Map(); // 用于存储 值 -> 索引 的映射，支持 O(1) 查找
};

/** * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // 1. 如果已存在，返回 false
    if (this.map.has(val)) {
        return false;
    }

    // 2. 存入 Map：key 是 val，value 是当前数组长度（即它即将被放入的索引）
    this.map.set(val, this.nums.length);
    
    // 3. 存入数组
    this.nums.push(val);
    
    return true;
};

/** * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // 1. 如果不存在，返回 false
    if (!this.map.has(val)) {
        return false;
    }

    // 2. 获取要删除元素的索引
    const index = this.map.get(val);
    
    // 3. 获取数组最后一个元素的值
    const lastVal = this.nums[this.nums.length - 1];

    // --- 核心操作：Swap with Last ---
    
    // 将数组中要删除位置的元素，替换为最后一个元素
    this.nums[index] = lastVal;
    
    // 重要：更新 map 中那个“原本在最后、现在被移过来”的元素的索引
    this.map.set(lastVal, index);
    
    // 4. 删除数组最后一个元素
    this.nums.pop();
    
    // 5. 删除 map 中对应的记录
    this.map.delete(val);
    
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    // Math.random() 生成 [0, 1)
    // 乘以 length 并取整，得到 [0, length-1] 的随机索引
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
};
```

# [238. 除了自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组<code>nums</code>，返回 数组<code>answer</code>，其中<code>answer[i]</code>等于<code>nums</code>中除了<code>nums[i]</code>之外其余各元素的乘积。

题目数据 **保证**  数组<code>nums</code>之中任意元素的全部前缀元素和后缀的乘积都在 **32 位**  整数范围内。

请**不要使用除法，** 且在<code>O(n)</code> 时间复杂度内完成此题。

**示例 1:** 

> **输入:**  nums = <code>[1,2,3,4]</code>
**输出:**  <code>[24,12,8,6]</code>

**示例 2:** 

> **输入:**  nums = [-1,1,0,-3,3]
**输出:**  [0,0,9,0,0]

**提示：** 

- <code>2 <= nums.length <= 10^5</code>
- <code>-30 <= nums[i] <= 30</code>
- 输入**保证**  数组<code>answer[i]</code>在 **32 位**  整数范围内

**进阶：** 你可以在 <code>O(1)</code>的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组**不被视为** 额外空间。）

**思路**：
先想象一个二维表格，每一行都是一整个 nums 数组，只不过它的中心位置（即下标为 i 的地方）被改成了 answer[i]。这时候，我们可以将其分为上三角和下三角区域分别进行处理。

具体来说，我们需要通过两次循环来完成：

1. 处理下三角区域（从上往下遍历）：
   对于 answer[i]，如果 i 为 0，则直接将其初始化为 1。如果 i 不为 0，则令 `answer[i] = answer[i - 1] * nums[i - 1]`。这样我们就完成了下三角区域的乘积计算。

2. 处理上三角区域（从下往上遍历）：
   设定一个变量 temp，初始值设为 1。在从下往上的遍历过程中，每次循环先更新 temp。更新规则是令 `temp = temp * nums[i + 1]`（注意这里处理的是 i 之后的所有元素乘积），然后再将 answer[i] 更新为 `answer[i] * temp`。

通过这种方法，我们可以在不使用除法的情况下，以最少的计算量完成全部运算。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);

    // 1. 处理下三角（前缀积）：从左往右
    // answer[i] 表示 i 左边所有元素的乘积
    answer[0] = 1; // 第 0 个元素左边没有数字，视为 1
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // 2. 处理上三角（后缀积）：从右往左
    // 我们不需要新建一个数组存后缀积，直接用一个变量 R (即你的 temp) 来滚动计算
    let R = 1; // R 代表 i 右边所有元素的乘积，初始为 1
    for (let i = n - 1; i >= 0; i--) {
        // 此时 answer[i] 只有左边的积
        // 乘以 R 后，answer[i] 就变成了 左边积 * 右边积
        answer[i] = answer[i] * R;

        // 更新 R，把当前的 nums[i] 乘进去，给下一个位置（也就是 i-1）用
        R = R * nums[i];
    }

    return answer;
};
```

# [134. 加油站](https://leetcode.cn/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150)

在一条环路上有 <code>n</code>个加油站，其中第 <code>i</code>个加油站有汽油<code>gas[i]</code>升。

你有一辆油箱容量无限的的汽车，从第 <code>i</code> 个加油站开往第 <code>i+1</code>个加油站需要消耗汽油<code>cost[i]</code>升。你从其中的一个加油站出发，开始时油箱为空。

给定两个整数数组 <code>gas</code> 和 <code>cost</code> ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 <code>-1</code> 。如果存在解，则 **保证**  它是 **唯一**  的。

**示例1:** 

> **输入:**  gas = [1,2,3,4,5], cost = [3,4,5,1,2]
**输出:**  3
**解释:
** 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
因此，3 可为起始索引。

**示例 2:** 

> **输入:**  gas = [2,3,4], cost = [3,4,3]
**输出:**  -1
**解释:
** 你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
因此，无论怎样，你都不可能绕环路行驶一周。

**提示:** 

- <code>n == gas.length == cost.length</code>
- <code>1 <= n <= 10^5</code>
- <code>0 <= gas[i], cost[i] <= 10^4</code>
- 输入保证答案唯一。

**思路**：
这道题的基础解法是暴力解法，即对数组中的每一个元素进行遍历。具体来说，就是让它一直往前走，直到走不动为止，或者直接走完一圈。

其实这里有一个优化的点：
如果车辆从 X 走到 Y，却无法到达 Y + 1，那么此时 X 到 Y 中间的那些加油站都不用再重复尝试了，可以直接从 Y + 1 开始。

原因如下：
1. 如果你从 X 到 Y 中间的某个加油站开始，初始汽油量是 0。
2. 但如果你是从 X 出发到达这个中间站，你此时的汽油量要么是 0，要么还有剩余（余量）。
3. 这意味着，从前面的加油站（如 X）过来的汽油量，肯定会大于或等于直接从当前加油站开始的汽油量。

既然从前面的加油站出发都到不了 Y + 1，那么从中间这些加油站开始，同样也无法到达 Y + 1。所以，我们可以直接跳过中间的所有加油站，从 Y + 1 站开始进行下一次遍历。
**题解**：
```js
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0; // 记录走完一圈的总盈亏，用于最后判断是否有解
    let currTank = 0;  // 记录当前出发点到目前的盈亏
    let start = 0;     // 记录可能的起始位置

    for (let i = 0; i < gas.length; i++) {
        // 这一站的净收益（可能是负的）
        const netGas = gas[i] - cost[i];
        
        totalTank += netGas;
        currTank += netGas;

        // 如果累积油量小于 0，说明从 start 到 i 这一段路走不通
        // 也就是你的核心逻辑：从 start 到 i 之间的任何点都不可能是起点
        if (currTank < 0) {
            // 所以我们把起点重置为 i + 1
            start = i + 1;
            // 当前油箱清零，准备从新的起点重新计算
            currTank = 0;
        }
    }

    // 只要总油量 >= 总耗油量，就一定有解，否则返回 -1
    return totalTank >= 0 ? start : -1;
};
```

# [135. 分发糖果](https://leetcode.cn/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150)

<code>n</code> 个孩子站成一排。给你一个整数数组 <code>ratings</code> 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

- 每个孩子至少分配到 <code>1</code> 个糖果。
- 相邻两个孩子中，评分更高的那个会获得更多的糖果。

请你给每个孩子分发糖果，计算并返回需要准备的 **最少糖果数目**  。

**示例1：** 

> **输入：** ratings = [1,0,2]
**输出：** 5
**解释：** 你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。

**示例2：** 

> **输入：** ratings = [1,2,2]
**输出：** 4
**解释：** 你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。

**提示：** 

- <code>n == ratings.length</code>
- <code>1 <= n <= 2 * 10^4</code>
- <code>0 <= ratings[i] <= 2 * 10^4</code>

**思路**：
这道题我们需要把总的规则区分为两个小的规则，即：相邻的两个孩子，评分更高的那个会获得更多的糖果。我们可以将其拆解为“左规则”和“右规则”。

1. **左规则**：当 `ratings[i-1] < ratings[i]` 时，第 `i` 个孩子的糖果数一定比第 `i-1` 个多。由于我们要找的是最小糖果总数，基于贪心策略，让他比前一个多领一个即可。
2. **右规则**：当 `ratings[i] > ratings[i+1]` 时，第 `i` 个孩子的糖果数也应当比第 `i+1` 个多领一个。

**具体实现步骤**：
1. 我们只需要维护一个数组 `left`（初始化的时候填充为0）。首先从左往右遍历，如果当前孩子的评分 `ratings[i]` 比前一个孩子 `ratings[i-1]` 高，那么 `left[i] = left[i-1] + 1`。
2. 接着进行从右向左的遍历，利用右规则进行循环。我们先定义一个变量 `right`。
3. 在第二次遍历之前，初始化一个 `total` 变量用于累加结果。
4. 从右往左遍历时，如果 `ratings[i] > ratings[i+1]`，则 `right` 进行自增；否则，将 `right` 重置为 1。
5. 在每次右规则判定后，`total` 累加 `max(left[i], right)`。

完成第二次遍历后，得到的 `total` 就是最少的糖果数量。

**为什么这样做可以同时满足左右规则呢？**
举个例子，如果 `ratings[i] < ratings[i+1]`，那么在左规则遍历中，`left[i+1]` 肯定大于 `left[i]`。而在右规则遍历时，由于右边评分更高，此时 `right` 会被赋值为 1。在这种情况下，我们取 `max(left[i], right)`，其值依然会是 `left[i]`。因为 `left[i+1]` 已经保证了它比左边的 `left[i]` 大，所以最终结果依然能保证相邻孩子中评分更高的领到更多糖果。
**题解**：
```js
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    // 1. 初始化 left 数组，每个孩子初始至少 1 颗糖
    const left = new Array(n).fill(1);

    // 2. 左规则遍历：从左往右
    for (let i = 1; i < n; i++) {
        // 如果比左边评分高，糖果数 = 左边 + 1
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }

    let right = 1; // 记录当前位置基于“右规则”应该得的糖果数
    let total = 0;

    // 3. 右规则遍历 + 统计总数：从右往左
    // 注意：这里我们从 n-1 开始，也就是包含最后一个元素
    for (let i = n - 1; i >= 0; i--) {
        // 如果比右边评分高，right 累加
        // (i < n - 1) 是为了防止数组越界访问 i+1
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            // 否则重置为 1（因为不比右边高，右规则只要求保底 1 颗）
            right = 1;
        }

        // 核心贪心：同时满足左规则(left[i])和右规则(right)，取最大值
        total += Math.max(left[i], right);
    }

    return total;
};
```

# [42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150)

给定<code>n</code> 个非负整数表示每个宽度为 <code>1</code> 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

**示例 1：** 

<img src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png" style="height: 161px; width: 412px;">

> **输入：** height = [0,1,0,2,1,0,1,3,2,1,2,1]
**输出：** 6
**解释：** 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

**示例 2：** 

> **输入：** height = [4,2,0,3,2,5]
**输出：** 9

**提示：** 

- <code>n == height.length</code>
- <code>1 <= n <= 2 * 10^4</code>
- <code>0 <= height[i] <= 10^5</code>

**思路**：
一共进行三次遍历，首先需要初始化两个数组，一个是 left 数组，一个是 right 数组。

1. 第一次遍历
   从左到右进行遍历，left 存储此时所遇到过的最大值。也就是说，如果当前高度不大于最大值，就在 left 数组中继续存入当前的最大高度；如果当前高度大于最大值，则在 left 存入当前高度。

2. 第二次遍历
   从右往左进行一次相同逻辑的操作。

3. 第三次遍历
   遍历每一个 height[i]，在对应的 left 和 right 数组中找出对应的元素（例如 left[i] 和 right[i]），取二者的最小值，然后再与 height[i] 进行做差，结果累加到 totalWater 里面
**题解**：
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    if (n === 0) return 0;

    // 定义两个数组
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    // 1. 第一次遍历：从左往右，计算 leftMax
    // leftMax[i] 表示下标 i 及其左边所有柱子的最大高度
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // 2. 第二次遍历：从右往左，计算 rightMax
    // rightMax[i] 表示下标 i 及其右边所有柱子的最大高度
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // 3. 第三次遍历：计算每一格的积水量
    let totalWater = 0;
    for (let i = 0; i < n; i++) {
        // 木桶效应：取左右两边“墙”的较小值
        const count = Math.min(leftMax[i], rightMax[i]) - height[i];
        
        // 只有当 count > 0 时才累加（虽然上面包含自身的逻辑保证了非负，但写上更清晰）
        if (count > 0) {
            totalWater += count;
        }
    }

    return totalWater;
};
```

# [13. 罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150)

罗马数字包含以下七种字符:<code>I</code>，<code>V</code>，<code>X</code>，<code>L</code>，<code>C</code>，<code>D</code>和<code>M</code>。

> **字符**           **数值** 
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

例如， 罗马数字 <code>2</code> 写做<code>II</code>，即为两个并列的 1 。<code>12</code> 写做<code>XII</code>，即为<code>X</code>+<code>II</code>。 <code>27</code> 写做<code>XXVII</code>, 即为<code>XX</code>+<code>V</code>+<code>II</code>。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做<code>IIII</code>，而是<code>IV</code>。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为<code>IX</code>。这个特殊的规则只适用于以下六种情况：

- <code>I</code>可以放在<code>V</code>(5) 和<code>X</code>(10) 的左边，来表示 4 和 9。
- <code>X</code>可以放在<code>L</code>(50) 和<code>C</code>(100) 的左边，来表示 40 和90。
- <code>C</code>可以放在<code>D</code>(500) 和<code>M</code>(1000) 的左边，来表示400 和900。

给定一个罗马数字，将其转换成整数。

**示例1:** 

> **输入:** s = "III"
**输出:**  3

**示例2:** 

> **输入:** s = "IV"
**输出:**  4

**示例3:** 

> **输入:** s = "IX"
**输出:**  9

**示例4:** 

> **输入:** s = "LVIII"
**输出:**  58
**解释:**  L = 50, V= 5, III = 3.

**示例5:** 

> **输入:** s = "MCMXCIV"
**输出:**  1994
**解释:**  M = 1000, CM = 900, XC = 90, IV = 4.

**提示：** 

- <code>1 <= s.length <= 15</code>
- <code>s</code> 仅含字符 <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>
- 题目数据保证 <code>s</code> 是一个有效的罗马数字，且表示整数在范围 <code>[1, 3999]</code> 内
- 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
- IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。
- 关于罗马数字的详尽书写规则，可以参考 <a href="https://baike.baidu.com/item/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97/772296">罗马数字 - 百度百科</a>。

**思路**：
先初始化一个 Map，其中 I、V、X、L、C、D、M 分别对应 1、5、10、50、100、500 和 1000。

1. 定义一个 result 变量，初始值设为 0
2. 将输入的字符串拆分成一个字符数组
3. 从左到右遍历这个字符数组：
   (a) 获取当前元素对应的数值
   (b) 将其与下一个元素的数值进行比较
   (c) 如果当前数值比下一个数值小，则从 result 中减去当前数值
   (d) 否则，在 result 中加上当前数值

遍历完成后，得到的 result 就是我们需要的结果。
**题解**：
```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let result = 0;
    const n = s.length;
    
    for (let i = 0; i < n; i++) {
        const value = map[s[i]];
        // 如果当前值小于下一个值，说明是 IV, IX 这种减法情况
        // 注意：i < n - 1 保证 s[i+1] 存在
        if (i < n - 1 && value < map[s[i+1]]) {
            result -= value;
        } else {
            result += value;
        }
    }
    
    return result;
};
```
# [12. 整数转罗马数字](https://leetcode.cn/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150)

七个不同的符号代表罗马数字，其值如下：

<table><thead><tr><th>符号</th><th>值</th></tr></thead><tbody><tr><td>I</td><td>1</td></tr><tr><td>V</td><td>5</td></tr><tr><td>X</td><td>10</td></tr><tr><td>L</td><td>50</td></tr><tr><td>C</td><td>100</td></tr><tr><td>D</td><td>500</td></tr><tr><td>M</td><td>1000</td></tr></tbody></table>

罗马数字是通过添加从最高到最低的小数位值的转换而形成的。将小数位值转换为罗马数字有以下规则：

- 如果该值不是以 4 或 9 开头，请选择可以从输入中减去的最大值的符号，将该符号附加到结果，减去其值，然后将其余部分转换为罗马数字。
- 如果该值以 4 或 9 开头，使用 **减法形式** ，表示从以下符号中减去一个符号，例如4 是 5 (<code>V</code>) 减 1 (<code>I</code>): <code>IV</code>，9 是 10 (<code>X</code>) 减1 (<code>I</code>)：<code>IX</code>。仅使用以下减法形式：4 (<code>IV</code>)，9 (<code>IX</code>)，40 (<code>XL</code>)，90 (<code>XC</code>)，400 (<code>CD</code>) 和900 (<code>CM</code>)。
- 只有 10 的次方（<code>I</code>, <code>X</code>, <code>C</code>, <code>M</code>）最多可以连续附加 3 次以代表 10 的倍数。你不能多次附加5(<code>V</code>)，50 (<code>L</code>) 或 500 (<code>D</code>)。如果需要将符号附加4次，请使用 **减法形式** 。

给定一个整数，将其转换为罗马数字。

<strong class="example">示例 1：** 

<div class="example-block">
**输入：** num = 3749

**输出：** "MMMDCCXLIX"

**解释：** 

> 3000 = MMM 由于 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC 由于 500 (D) + 100 (C) + 100 (C)
  40 = XL 由于 50 (L) 减 10 (X)
   9 = IX 由于 10 (X) 减 1 (I)
注意：49 不是 50 (L) 减 1 (I) 因为转换是基于小数位

<strong class="example">示例 2：** 

<div class="example-block">
**输入：** num = 58

**输出：** "LVIII"

**解释：** 

> 50 = L
 8 = VIII

<strong class="example">示例 3：** 

<div class="example-block">
**输入：** num = 1994

**输出：** "MCMXCIV"

**解释：** 

> 1000 = M
 900 = CM
  90 = XC
   4 = IV

**提示：** 

- <code>1 <= num <= 3999</code>

**思路**：
先创建一个 Map，把 1000、900、500、400、100、90、50 、40、10、9、5、4、1 分别代表的字符串放到 Map 里面。

然后按照从大到小的顺序，用整数去整除刚才所说的数字。根据整除得到的结果，往目标字符串（结果字符串）中拼接对应的字符串。

接着再利用余数去除下一个比较小的数字，一直除到余数为 0
**题解**：
```js
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // 1. 定义映射表（必须从大到小排列）
    // 将特殊情况 (900, 400, 90...) 视为独立的面额
    const valueSymbols = [
        { value: 1000, symbol: "M" },
        { value: 900,  symbol: "CM" },
        { value: 500,  symbol: "D" },
        { value: 400,  symbol: "CD" },
        { value: 100,  symbol: "C" },
        { value: 90,   symbol: "XC" },
        { value: 50,   symbol: "L" },
        { value: 40,   symbol: "XL" },
        { value: 10,   symbol: "X" },
        { value: 9,    symbol: "IX" },
        { value: 5,    symbol: "V" },
        { value: 4,    symbol: "IV" },
        { value: 1,    symbol: "I" }
    ];

    let result = "";

    // 2. 遍历每一个“面额”
    for (const { value, symbol } of valueSymbols) {
        // 如果 num 已经减完了，提前结束
        if (num === 0) break;

        // 计算当前面额能用几次
        // 例如 2000 / 1000 = 2 次
        const count = Math.floor(num / value);

        if (count > 0) {
            // 拼接对应次数的符号
            result += symbol.repeat(count);
            // 更新剩下的 num (取余数)
            num %= value;
        }
    }

    return result;
};
```

# [58. 最后一个单词的长度](https://leetcode.cn/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串 <code>s</code>，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 **最后一个**  单词的长度。

**单词**  是指仅由字母组成、不包含任何空格字符的最大<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">子字符串</button>。

**示例 1：** 

> **输入：** s = "Hello World"
**输出：** 5
**解释：** 最后一个单词是“World”，长度为 5。

**示例 2：** 

> **输入：** s = "   fly me   to   the moon  "
**输出：** 4**
解释：** 最后一个单词是“moon”，长度为 4。

**示例 3：** 

> **输入：** s = "luffy is still joyboy"
**输出：** 6
**解释：** 最后一个单词是长度为 6 的“joyboy”。

**提示：** 

- <code>1 <= s.length <= 10^4</code>
- <code>s</code> 仅有英文字母和空格 <code>' '</code> 组成
- <code>s</code> 中至少存在一个单词

**思路**：
直接用 s.trim().split(' ')把字符串拆分成一个数组，然后获取最后一个字符串的长度即可。
**题解**：
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};
```
# [14. 最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150)

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串<code>""</code>。

<strong class="example">示例 1：** 

> **输入：** strs = ["flower","flow","flight"]
**输出：** "fl"

<strong class="example">示例 2：** 

> **输入：** strs = ["dog","racecar","car"]
**输出：** ""
**解释：** 输入不存在公共前缀。

**提示：** 

- <code>1 <= strs.length <= 200</code>
- <code>0 <= strs[i].length <= 200</code>
- <code>strs[i]</code>如果非空，则仅由小写英文字母组成

**思路**：
外层直接一个 while(true) 循环，在循环之前定义一个 pointer 变量，初始值为 0。

1. 对数组中的每一个元素进行遍历。
2. 如果 pointer 大于等于其中某一个元素的长度，直接退出循环并返回结果。
3. 否则，比较当前 pointer 所指向的字符是否相等。
   (a) 如果存在不相等的情况，同样直接退出循环并返回结果。
   (b) 如果都相等的话 pointer++ 进入下一个循环
**题解**：
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // 只有一个字符串时，它本身就是最长公共前缀
    if (strs.length === 1) return strs[0];

    let pointer = 0;

    while (true) {
        // 以第一个字符串的第 pointer 个字符作为基准
        // 如果 pointer 已经越界（说明第一个字符串遍历完了），直接返回结果
        if (pointer >= strs[0].length) {
            return strs[0];
        }

        const char = strs[0][pointer];

        // 遍历剩余的字符串
        for (let i = 1; i < strs.length; i++) {
            // 两个退出条件：
            // 1. 当前字符串长度不够了 (pointer 越界)
            // 2. 当前字符不匹配
            if (pointer >= strs[i].length || strs[i][pointer] !== char) {
                // 注意：slice 是左闭右开区间 [0, pointer)，刚好截取到 pointer 之前
                return strs[0].slice(0, pointer);
            }
        }
        
        // 全部匹配，指针后移，继续下一列
        pointer++;
    }
};
```

# [151. 反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串 <code>s</code> ，请你反转字符串中 **单词**  的顺序。

**单词**  是由非空格字符组成的字符串。<code>s</code> 中使用至少一个空格将字符串中的 **单词**  分隔开。

返回 **单词**  顺序颠倒且 **单词**  之间用单个空格连接的结果字符串。

**注意：** 输入字符串 <code>s</code>中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

**示例 1：** 

> **输入：** s = "the sky is blue"
**输出：** "blue is sky the"

**示例 2：** 

> **输入：** s = " hello world "
**输出：** "world hello"
**解释：** 反转后的字符串中不能存在前导空格和尾随空格。

**示例 3：** 

> **输入：** s = "a good  example"
**输出：** "example good a"
**解释：** 如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。

**提示：** 

- <code>1 <= s.length <= 10^4</code>
- <code>s</code> 包含英文大小写字母、数字和空格 <code>' '</code>
- <code>s</code> 中 **至少存在一个**  单词

**进阶：** 如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用<code>O(1)</code> 额外空间复杂度的 **原地**  解法。

**思路**：
做题的话，我选择直接使用 ES6（即 JS 的 ES6）。具体步骤如下：

1. 将字符串进行一个 trim 操作，把两边的空格去掉
2. 使用 .split 根据一个或者多个空格将其拆分成一个字符串数组
3. 使用 .reverse 来反转数组
4. 使用 .join(' ') 将字符串拼接并返回
**题解**：
```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};
```

# [6. Z 字形变换](https://leetcode.cn/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150)

将一个给定字符串 <code>s</code> 根据给定的行数 <code>numRows</code> ，以从上往下、从左到右进行Z 字形排列。

比如输入字符串为 <code>"PAYPALISHIRING"</code>行数为 <code>3</code> 时，排列如下：

> P   A   H   N
A P L S I I G
Y   I   R

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：<code>"PAHNAPLSIIGYIR"</code>。

请你实现这个将字符串进行指定行数变换的函数：

> string convert(string s, int numRows);

**示例 1：** 

> **输入：** s = "PAYPALISHIRING", numRows = 3
**输出：** "PAHNAPLSIIGYIR"

**示例 2：** 

> **输入：** s = "PAYPALISHIRING", numRows = 4
**输出：** "PINALSIGYAHRPI"
**解释：** 
P     I    N
A   L S  I G
Y A   H R
P     I

**示例 3：** 

> **输入：** s = "A", numRows = 1
**输出：** "A"

**提示：** 

- <code>1 <= s.length <= 1000</code>
- <code>s</code> 由英文字母（小写和大写）、<code>','</code> 和 <code>'.'</code> 组成
- <code>1 <= numRows <= 1000</code>

**思路**：
创建长度为 numRows 的数组。在函数最开始的时候，我们要特殊判断一下：如果 numRows 只有 1，或者字符串的长度小于等于 numRows，这个时候可以直接返回 s。

然后我们定义两个变量：
1. 一个是 currentRow，初始值为 0
2. 一个是布尔值 goingDown，标志它是否向下走

我们遍历字符串。遍历时，可以给当前所指向的这一行字符串添加上当前的字符。如果这时候触碰到了边界，也就是 currentRow 是 0 或者 currentRow 是 numRows - 1 的时候，将 goingDown 取反。

我们再根据方向去移动这个行索引：
1. 如果 goingDown 是 true，就给它加 1
2. 如果 goingDown 是 false，就给它减 1

最后直接返回每一行拼接的结果，这就是我们所需要的答案。
**题解**：
```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 1. 特殊情况处理：如果只有一行，或者行数大于字符串长度，直接返回
    if (numRows === 1 || s.length <= numRows) return s;

    // 2. 初始化每一行：创建一个长度为 numRows 的数组，每个元素是一个空字符串（作为行容器）
    const rows = Array.from({ length: numRows }, () => "");
    
    let currentRow = 0;
    let goingDown = false; // 这里的方向标记非常巧妙

    // 3. 遍历字符串
    for (const char of s) {
        rows[currentRow] += char;

        // 4. 触碰边界时反转方向
        // 当我们在第一行或最后一行时，变换方向
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // 根据方向移动行索引
        currentRow += goingDown ? 1 : -1;
    }

    // 5. 拼接所有行
    return rows.join("");
};
```

# [28. 找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150)

给你两个字符串<code>haystack</code> 和 <code>needle</code> ，请你在 <code>haystack</code> 字符串中找出 <code>needle</code> 字符串的第一个匹配项的下标（下标从 0 开始）。如果<code>needle</code> 不是 <code>haystack</code> 的一部分，则返回 <code>-1</code>** ** 。

<strong class="example">示例 1：** 

> **输入：** haystack = "sadbutsad", needle = "sad"
**输出：** 0
**解释：** "sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。

<strong class="example">示例 2：** 

> **输入：** haystack = "leetcode", needle = "leeto"
**输出：** -1
**解释：** "leeto" 没有在 "leetcode" 中出现，所以返回 -1 。

**提示：** 

- <code>1 <= haystack.length, needle.length <= 10^4</code>
- <code>haystack</code> 和 <code>needle</code> 仅由小写英文字符组成

**思路**：
直接使用 API 流，直接使用 indexOf。indexOf 已经是高度优化过的了，建议直接使用就好。
**题解**：
```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
```

# [68. 文本左右对齐](https://leetcode.cn/problems/text-justification/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个单词数组<code>words</code> 和一个长度<code>maxWidth</code>，重新排版单词，使其成为每行恰好有<code>maxWidth</code>个字符，且左右两端对齐的文本。

你应该使用 “**贪心算法** ” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格<code>' '</code>填充，使得每行恰好有 maxWidth个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入**额外的** 空格。

**注意:** 

- 单词是指由非空格字符组成的字符序列。
- 每个单词的长度大于 0，小于等于maxWidth。
- 输入单词数组 <code>words</code>至少包含一个单词。

**示例 1:** 

> **输入: ** words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
**输出:** 
[
 "This  is  an",
 "example of text",
 "justification. "
]

**示例2:** 

> **输入:** words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
**输出:** 
[
 "What  must  be",
 "acknowledgment ",
 "shall be    "
]
**解释: ** 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
    因为最后一行应为左对齐，而不是左右两端对齐。       
     第二行同样为左对齐，这是因为这行只包含一个单词。

**示例3:** 

> **输入:** words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]，maxWidth = 20
**输出:** 
[
 "Science is what we",
  "understand   well",
 "enough to explain to",
 "a computer. Art is",
 "everything else we",
 "do         "
]

**提示:** 

- <code>1 <= words.length <= 300</code>
- <code>1 <= words[i].length <= 20</code>
- <code>words[i]</code>由小写英文字母和符号组成
- <code>1 <= maxWidth <= 100</code>
- <code>words[i].length <= maxWidth</code>

**思路**：
这里直接使用遍历 words 中的每一个单词。我们要维护一个 result 数组。
1. 
遍历单词与行处理：
在遍历 words 中的每一个单词时，我们需要先判断加上当前单词之后的长度是否小于等于 maxWidth。
(a) 如果小于等于 maxWidth，则可以在后面再加一个空格，并更新当前的长度。
(b) 如果加上当前单词后长度已经大于 maxWidth，我们就直接把当前的单词数组 push 进 result 数组中。
(c) 随后新开一个数组，把当前的单词放进去，并修改当前长度为“单词长度加 1”（这个 1 表示单词之间必要的空格）。
2. 
转化为字符串：
当每一行的单词数组都确定后，我们需要将其转变成字符串。可以直接对 result 数组中的元素进行 map 操作：
(a) 在 map 过程中，先计算单词的总长度。
(b) 用 maxWidth 减去单词实际长度，再整除“单词个数减 1”。
(c)如果没有余数，就直接在单词之间插入相等数量的空格。
(d) 如果有余数，就从左到右对间隔依次额外加上一个空格。
3. 
特殊情况处理：
(a) 如果这一行只有一个单词，直接在字符串后面填充空格，直到长度达到 maxWidth。
(b) 如果是最后一行，处理逻辑与普通行不同：每个单词之间只需保留一个必要的空格，而剩下的所有空格都需要统一补充在最后一个单词的后面，以确保整行长度达到 maxWidth 且呈现左对齐状态。

通过这种方式，就能把 result 数组中的每一个子数组映射成字符串，得到最终需要的结果。

**题解**：
```js
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let currentRow = [];
    let currentRowLen = 0; // 当前行所有单词长度之和

    for (let word of words) {
        // 判断条件：当前长度 + 新单词长度 + 至少需要的空格数(currentRow.length)
        if (currentRowLen + word.length + currentRow.length > maxWidth) {
            // 当前行已满，进行格式化
            result.push(formatRow(currentRow, currentRowLen, maxWidth, false));
            currentRow = [];
            currentRowLen = 0;
        }
        currentRow.push(word);
        currentRowLen += word.length;
    }

    // 处理最后一行：左对齐
    result.push(formatRow(currentRow, currentRowLen, maxWidth, true));

    return result;
};

/**
 * 格式化单行的辅助函数
 */
function formatRow(row, rowLen, maxWidth, isLast) {
    let n = row.length;
    
    // 情况 A：最后一行，或者该行只有一个单词 -> 左对齐
    if (isLast || n === 1) {
        let str = row.join(' ');
        return str + ' '.repeat(maxWidth - str.length);
    }

    // 情况 B：普通的左右对齐
    let totalSpaces = maxWidth - rowLen;
    let gapCount = n - 1;
    let baseSpace = Math.floor(totalSpaces / gapCount);
    let extraSpaceCount = totalSpaces % gapCount; // 前几个间隔需要多加一个空格

    let res = "";
    for (let i = 0; i < gapCount; i++) {
        res += row[i];
        // 基础空格 + (如果是前 extraSpaceCount 个间隔，额外加 1)
        res += ' '.repeat(baseSpace + (i < extraSpaceCount ? 1 : 0));
    }
    res += row[n - 1]; // 加上最后一个单词
    return res;
}
```
# [125. 验证回文串](https://leetcode.cn/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150)

如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 **回文串**  。

字母和数字都属于字母数字字符。

给你一个字符串 <code>s</code>，如果它是 **回文串**  ，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**示例 1：** 

> **输入:**  s = "A man, a plan, a canal: Panama"
**输出：** true
**解释：** "amanaplanacanalpanama" 是回文串。

**示例 2：** 

> **输入：** s = "race a car"
**输出：** false
**解释：** "raceacar" 不是回文串。

**示例 3：** 

> **输入：** s = " "
**输出：** true
**解释：** 在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。

**提示：** 

- <code>1 <= s.length <= 2 * 10^5</code>
- <code>s</code> 仅由可打印的 ASCII 字符组成

**思路**：
先用 toLowerCase 把字符串中所有的字母改成小写，再用正则把字符串中所有不是字母和数字的字符都去掉，

然后使用 left 和 right 两个指针：
1. 如果两个指针指向的字符相等，左指针往右移，右指针往左移，一直到左指针比右指针大为止。
2. 如果中间出现了不同的字符，直接 return false。
3. 如果一直到最后都没有出现不同的，就直接 return true
**题解**：
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 1. 清洗数据：转小写并只保留字母和数字
    // [^a-z0-9] 表示匹配任何不是小写字母且不是数字的字符
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 2. 初始化双指针
    let left = 0;
    let right = cleanStr.length - 1;

    // 3. 指针向中间靠拢并对比
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // 只要有一个不等，直接出局
        }
        left++;
        right--;
    }

    return true; // 顺利会师，说明是回文
};
```
# [392. 判断子序列](https://leetcode.cn/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150)

给定字符串 **s**  和 **t**  ，判断 **s**  是否为 **t**  的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，<code>"ace"</code>是<code>"abcde"</code>的一个子序列，而<code>"aec"</code>不是）。

**进阶：** 

如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

**致谢：** 

特别感谢** ** <a href="https://leetcode.com/pbrother/">@pbrother</a>添加此问题并且创建所有测试用例。

**示例 1：** 

> **输入：** s = "abc", t = "ahbgdc"
**输出：** true

**示例 2：** 

> **输入：** s = "axc", t = "ahbgdc"
**输出：** false

**提示：** 

- <code>0 <= s.length <= 100</code>
- <code>0 <= t.length <= 10^4</code>
- 两个字符串都只由小写字符组成。

**思路**：
一快一慢两个指针，慢指针在 S 中移动，快指针在 T 中移动。

1. 首先慢指针指向 S 字符串的第一项，快指针指向 T 字符串的第一项。
2. 快指针对 T 从头到尾进行一次遍历。
3. 如果此时出现了和慢指针所指内容一致的字符，那么慢指针也向前移动一个。

判定条件如下：
- 如果 T 全部遍历完时，S 还没有遍历完，就返回 false。
- 只要 S 遍历完了，那么就返回 true
**题解**：
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    const n = s.length, m = t.length;

    // 当 s 或 t 任意一个遍历完就停止
    while (i < n && j < m) {
        if (s[i] === t[j]) {
            i++; // 匹配成功，s 的指针前进
        }
        j++; // 无论是否匹配成功，t 的指针都要前进
    }

    // 如果 i 走到了最后，说明 s 中的字符在 t 中按顺序全部找到了
    return i === n;
};
```

# [167. 两数之和 II - 输入有序数组](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个下标从 **1**  开始的整数数组<code>numbers</code> ，该数组已按** 非递减顺序排列 ** ，请你从数组中找出满足相加之和等于目标数<code>target</code> 的两个数。如果设这两个数分别是 <code>numbers[index<sub>1</sub>]</code> 和 <code>numbers[index<sub>2</sub>]</code> ，则 <code>1 <= index<sub>1</sub> < index<sub>2</sub> <= numbers.length</code> 。

以长度为 2 的整数数组 <code>[index<sub>1</sub>, index<sub>2</sub>]</code> 的形式返回这两个整数的下标 <code>index<sub>1</sub></code> 和 <code>index<sub>2</sub></code>。

你可以假设每个输入 **只对应唯一的答案**  ，而且你 **不可以**  重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。

<strong class="example">示例 1：** 

> **输入：** numbers = [**2** ,**7** ,11,15], target = 9
**输出：** [1,2]
**解释：** 2 与 7 之和等于目标数 9 。因此 index<sub>1</sub> = 1, index<sub>2</sub> = 2 。返回 [1, 2] 。

<strong class="example">示例 2：** 

> **输入：** numbers = [**2** ,3,**4** ], target = 6
**输出：** [1,3]
**解释：** 2 与 4 之和等于目标数 6 。因此 index<sub>1</sub> = 1, index<sub>2</sub> = 3 。返回 [1, 3] 。

<strong class="example">示例 3：** 

> **输入：** numbers = [**-1** ,**0** ], target = -1
**输出：** [1,2]
**解释：** -1 与 0 之和等于目标数 -1 。因此 index<sub>1</sub> = 1, index<sub>2</sub> = 2 。返回 [1, 2] 。

**提示：** 

- <code>2 <= numbers.length <= 3 * 10^4</code>
- <code>-1000 <= numbers[i] <= 1000</code>
- <code>numbers</code> 按 **非递减顺序**  排列
- <code>-1000 <= target <= 1000</code>
- **仅存在一个有效答案**

**思路**：
我们可以用一左一右两个指针来操作。首先把 left 指向首部，right 指向尾部，将两个指针所指的值相加：

1. 如果相加之和大于 target：
   说明当前最大值与最小值之和依然超过了目标值，那么当前的最大值（right 所指的值）是不可取的。我们需要将 right 指针向左移动，让和变小一点。
2. 如果相加之和小于 target：
   说明当前最小值与最大值之和依然小于目标值，这意味着当前的最小值（left 所指的值）需要增大。我们需要将 left 指针向右移动。

在这个过程中，无论是左移还是右移，被跳过的值都会被直接放弃。因为这些值无论与数组中剩下的任何数相加，都不可能得到 target，所以它们不再被视为潜在的答案组合。

这样一来，搜索范围（逻辑上的新数组）就会不断缩小。此时 left 指向新范围的最小值，right 指向新范围的最大值。实际上我们并不修改原数组，只是在逻辑上这样设想。

我们重复上述操作，直到 left 指针超过 right 指针。如果遍历结束一直没找到 target，则返回数组 [0, 0]；如果找到了，就返回结果数组 [left, right]。

再补充一下：当左指针到达正确位置的时候，它与右指针所对应的值相加肯定大于 target，所以左指针绝对不会再动，只有右指针会动。

同样，当右指针到达正确位置的时候，只有左指针会动。这样一来，我们其实是不会错过正确位置的。
**题解**：
```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            // 题目要求下标从 1 开始
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // 太小了，左指针右移增加 sum
        } else {
            right--; // 太大了，右指针左移减小 sum
        }
    }
    return [];
};
```

# [11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个长度为 <code>n</code> 的整数数组<code>height</code>。有<code>n</code>条垂线，第 <code>i</code> 条线的两个端点是<code>(i, 0)</code>和<code>(i, height[i])</code>。

找出其中的两条线，使得它们与<code>x</code>轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：** 你不能倾斜容器。

**示例 1：** 

<img alt="" src="https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg">

> **输入：** [1,8,6,2,5,4,8,3,7]
**输出：** 49 
**解释：** 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为49。

**示例 2：** 

> **输入：** height = [1,1]
**输出：** 1

**提示：** 

- <code>n == height.length</code>
- <code>2 <= n <= 10^5</code>
- <code>0 <= height[i] <= 10^4</code>

**思路**：
这道题同样使用 Left 和 Right 两个指针。Left 指向数组的首部，Right 指向数组的尾部。

1. 初始化变量：
   设置一个变量 total（用于存储最大承水量）。

2. 计算与存储：
   先进行计算：在 Left 和 Right 所指的内容中找到最小值，乘以 Left 和 Right 之间的距离（即 `min(height[Left], height[Right]) * (Right - Left)`），并将结果存入 total。

3. 指针移动逻辑：
   比较 Left 和 Right 对应的高度，将高度较小的那个板往中心移动：
   - 如果是 Left 较小，则往右移动。
   - 如果是 Right 较小，则往左移动。

   为什么要这么做？
   - 如果不移动短板而移动长板：
     (a) 若新位置的高度比原短板高，由于受限于原短板的高度，最小值依然不变，但距离变短了，所以算出的承水量肯定不会比之前多。
     (b) 若新位置的高度比原短板还短，承水量则会更少。
   - 因此，我们必须移动短板。

4. 迭代更新：
   移动短板后重新计算承水量。如果新的计算结果比当前的 total 大，就更新 total。重复上述移动和计算的操作，直到 Left 大于 Right 为止。
**题解**：
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxCapacity = 0; // 对应你思路中的 total

    while (left < right) {
        // 1. 计算当前面积
        // 高度取决于短的那一侧
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const currentArea = minHeight * width;

        // 2. 更新最大值
        maxCapacity = Math.max(maxCapacity, currentArea);

        // 3. 移动指针逻辑
        // 哪边短，哪边就往中间移（试图寻找更高的板子）
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxCapacity;
};
```

# [15. 三数之和](https://leetcode.cn/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>nums</code> ，判断是否存在三元组 <code>[nums[i], nums[j], nums[k]]</code> 满足 <code>i != j</code>、<code>i != k</code> 且 <code>j != k</code> ，同时还满足 <code>nums[i] + nums[j] + nums[k] == 0</code> 。请你返回所有和为 <code>0</code> 且不重复的三元组。

**注意：** 答案中不可以包含重复的三元组。

**示例 1：** 

> **输入：** nums = [-1,0,1,2,-1,-4]
**输出：** [[-1,-1,2],[-1,0,1]]
**解释：** 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。

**示例 2：** 

> **输入：** nums = [0,1,1]
**输出：** []
**解释：** 唯一可能的三元组和不为 0 。

**示例 3：** 

> **输入：** nums = [0,0,0]
**输出：** [[0,0,0]]
**解释：** 唯一可能的三元组和为 0 。

**提示：** 

- <code>3 <= nums.length <= 3000</code>
- <code>-10^5 <= nums[i] <= 10^5</code>

**思路**：
我是这么想的：

1. 先把这个数组进行排序。
2. 遍历这个数组，在刚进入下一次循环的时候先进行判断去重，如果元素已经出现过了就直接跳过，当遍历到某个元素时，在逻辑上将其从数组中去除。
3. 在剩下的数组中寻找当前元素的相反数。此时问题就回到了寻找“两数之和”，即 Target 等于 -nums[i]。
4. 如果两数之和小于 Target，就执行 left++；如果两数之和大于 Target，就执行 right--。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const len = nums.length;
    
    // 1. 排序：这是双指针的前提
    nums.sort((a, b) => a - b);

    // 2. 遍历第一个数 nums[i]
    for (let i = 0; i < len - 2; i++) { // len - 2 是因为至少要留两个位置给 left 和 right
        
        // 【优化】如果当前数字大于 0，因为数组是有序的，后面不可能有三个数加起来等于 0 了
        if (nums[i] > 0) break;

        // 【关键点1：外层去重】
        // 如果当前数字和前一个一样，说明前面那个已经处理过所有组合了，直接跳过
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = len - 1;
        
        // 转化为求：nums[left] + nums[right] === -nums[i]
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // 找到一组解
                result.push([nums[i], nums[left], nums[right]]);
                
                // 【关键点2：内层去重】
                // 找到答案后，必须跳过所有重复的 left 和 right，否则会产生重复三元组
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // 无论如何，找到答案后指针都要继续收缩
                left++;
                right--;
            } else if (sum < 0) {
                // 和太小，left 右移
                left++;
            } else {
                // 和太大，right 左移
                right--;
            }
        }
    }

    return result;
};
```

# [209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个含有<code>n</code>**** 个正整数的数组和一个正整数 <code>target</code>** 。** 

找出该数组中满足其总和大于等于** ** <code>target</code>** ** 的长度最小的 **<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">子数组</button>** <code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code> ，并返回其长度**。** 如果不存在符合条件的子数组，返回 <code>0</code> 。

**示例 1：** 

> **输入：** target = 7, nums = [2,3,1,2,4,3]
**输出：** 2
**解释：** 子数组<code>[4,3]</code>是该条件下的长度最小的子数组。

**示例 2：** 

> **输入：** target = 4, nums = [1,4,4]
**输出：** 1

**示例 3：** 

> **输入：** target = 11, nums = [1,1,1,1,1,1,1,1]
**输出：** 0

**提示：** 

- <code>1 <= target <= 10^9</code>
- <code>1 <= nums.length <= 10^5</code>
- <code>1 <= nums[i] <= 10^4</code>

**进阶：** 

- 如果你已经实现 <code>O(n)</code> 时间复杂度的解法, 请尝试设计一个 <code>O(n log(n))</code> 时间复杂度的解法。

**思路**：
我们定义 Left、Right 两个指针。最开始，Right 指针先向右探索，持续计算 Left 到 Right 的子数组之和。

随后，我们需要定义两个变量：SUM（累加和）以及 COUNT（记录最小长度）。

1. Right 指针向右探索时，不断累加 Right 所对应的值，直到 SUM 大于 TARGET。
2. 当 SUM 大于 TARGET 时，Left 指针开始向右探索：
   (a) 在 Left 向右移动（即 `left++`）之前，先从 SUM 中减去当前 Left 指针对应的值。
   (b) 接着判断更新后的 SUM 是否依然大于 TARGET。
3. 每次判断 SUM 大于 TARGET 时，需要同步更新 COUNT 的值：
   (a) 如果 COUNT 为 0（代表第一次找到符合条件的子数组），直接将当前子数组长度赋值给 COUNT。
   (b) 如果 COUNT 不为 0，则比较当前 COUNT 与子数组长度，将较小值赋给 COUNT。
4. 如果 Left 向右探索后 SUM 小于 TARGET，则 Right 指针继续向右移动，直到 Right 到达最后一个元素。

最后，当 Right 遍历结束且 Left 到 Right 的子数组之和小于 TARGET 时，直接返回 COUNT。

这个算法之所以成立，是因为假设存在一个最小子数组：
当 Right 到达该子数组右端时，它会停止右移；此时 Left 会接力向右探索，直到越过该最小子数组的左边界。因为在 Left 没走到左边界之前，窗口内的和一定大于 TARGET，所以 Left 必然会向右探索，从而保证我们不会错过这个最小子数组。
**题解**：
```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;
    let left = 0;
    let right = 0;
    let sum = 0;
    
    // 初始化为 Infinity，方便后续直接使用 Math.min，避免判断 0 的情况
    let minLen = Infinity; 

    // Right 指针主动向右探索
    while (right < n) {
        // 1. 累加 Right 对应的值
        sum += nums[right];

        // 2. 当 SUM 满足条件（>= target）时，Left 指针开始收缩窗口
        while (sum >= target) {
            // 3. 更新最小长度 COUNT
            minLen = Math.min(minLen, right - left + 1);

            // 4. 核心：尝试缩小窗口，看看减去左边的值后是否还满足条件
            sum -= nums[left];
            left++;
        }

        // Right 继续向右
        right++;
    }

    // 如果 minLen 还是 Infinity，说明从头到尾都没找到符合条件的子数组，返回 0
    return minLen === Infinity ? 0 : minLen;
};
```

# [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的**最长 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1q:" data-state="closed" class="">子串</button>** **** 的长度。

**示例1:** 

> **输入: ** s = "abcabcbb"
**输出: ** 3 
**解释:**  因为无重复字符的最长子串是 <code>"abc"</code>，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。

**示例 2:** 

> **输入: ** s = "bbbbb"
**输出: ** 1
**解释: ** 因为无重复字符的最长子串是 <code>"b"</code>，所以其长度为 1。

**示例 3:** 

> **输入: ** s = "pwwkew"
**输出: ** 3
**解释: ** 因为无重复字符的最长子串是<code>"wke"</code>，所以其长度为 3。
    请注意，你的答案必须是 **子串 ** 的长度，<code>"pwke"</code>是一个子序列，不是子串。

**提示：** 

- <code>0 <= s.length <= 5 * 10^4</code>
- <code>s</code>由英文字母、数字、符号和空格组成

**思路**：
这道题使用了两个指针 left 和 right，最开始都指向 0。

具体步骤如下：
1. right 首先向右探索，检查新的字符是否在前面的子串中出现过。
2. 如果没有出现过，right 继续向右探索。
3. 如果出现过了，那么 left 就向右移，一直移到新的子串没有重复字符为止。
4. 当子串没有重复字符时，right 继续向右探索，直到 right 到达子串长度减 1 且该子串没有重复字母为止。

此外，我们还有一个变量 count，用来随时记录最长不含有重复字符的子串长度。
我们可以用数据结构 set 去更方便地查找是否有重复

那么为什么最长的子串我们不会错过呢？

就是因为如果它在这个最长的子串的右边（即最右端），那么这个时候它要么是一个在当前子串中重复的字母，要么它就是数组的最后项。

在这种情况下：
1. right 指针无论如何都不会再往右移
2. 只有 left 指针才会右移，一直右移到刚好找到这个最长的子串

这时候我们会把它记录下来，所以我们无论如何都不会错过这个最长的子串。
**题解**：
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 使用 Set 来存储当前窗口中的字符，方便快速查找重复
    const charSet = new Set();
    
    let left = 0;
    let right = 0;
    let maxLen = 0; // 对应你思路中的 count

    while (right < s.length) {
        // 1. 检查 right 指向的字符是否已存在于窗口中
        if (!charSet.has(s[right])) {
            // 如果没有重复，加入集合，更新最大长度，并继续向右探索
            charSet.add(s[right]);
            maxLen = Math.max(maxLen, charSet.size); // charSet.size 等同于 right - left + 1
            right++;
        } else {
            // 2. 如果出现重复了，left 向右移
            // 这里的逻辑是：删除窗口最左边的字符，然后 left++
            // 注意：我们不需要一次性把 left 移到位，
            // 而是通过下一次循环再次检查，直到把那个重复的字符删掉为止
            charSet.delete(s[left]);
            left++;
        }
    }

    return maxLen;
};
```

# [30. 串联所有单词的子串](https://leetcode.cn/problems/substring-with-concatenation-of-all-words/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个字符串<code>s</code>**** 和一个字符串数组<code>words</code>**。** <code>words</code>中所有字符串 **长度相同** 。

<code>s</code>**** 中的 **串联子串**  是指一个包含<code>words</code>中所有字符串以任意顺序排列连接起来的子串。

- 例如，如果<code>words = ["ab","cd","ef"]</code>， 那么<code>"abcdef"</code>，<code>"abefcd"</code>，<code>"cdabef"</code>，<code>"cdefab"</code>，<code>"efabcd"</code>， 和<code>"efcdab"</code> 都是串联子串。<code>"acdbef"</code> 不是串联子串，因为他不是任何<code>words</code>排列的连接。

返回所有串联子串在<code>s</code>**** 中的开始索引。你可以以 **任意顺序**  返回答案。

**示例 1：** 

> **输入：** s = "barfoothefoobarman", words = ["foo","bar"]
**输出：** <code>[0,9]</code>
**解释：** 因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
输出顺序无关紧要。返回 [9,0] 也是可以的。

**示例 2：** 

> **输入：** s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
<code>**输出：** []</code>
**解释：** 因为** ** words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
所以我们返回一个空数组。

**示例 3：** 

> **输入：** s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
**输出：** [6,9,12]
**解释：** 因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。

**提示：** 

- <code>1 <= s.length <= 10^4</code>
- <code>1 <= words.length <= 5000</code>
- <code>1 <= words[i].length <= 30</code>
- <code>words[i]</code>和<code>s</code> 由小写英文字母组成

**思路**：
这道题的思路如下：
1. 获取单词长度和单词总数：
首先获取 words 数组中单个单词的长度，以及数组中单词的总个数。
2. 外层循环：
建立一个外层循环，从索引 0 到“单词长度 - 1”分别作为起始点。每次向右滑动一个单词的长度。
3. 内层滑动窗口逻辑：
在内部使用一个 Set、两个 HashMap 以及一个 count 变量来实现逻辑：
(a) 一个 Set 存放 words 中的所有单词（用于快速查找是否存在）。
(b) 一个 need HashMap，存放 words 中每个单词及其需要的数量。
(c) 一个目标 HashMap，存放当前窗口内遇到的单词及其出现的次数。
(d) 一个 count 变量，用于记录当前窗口内满足匹配条件的单词总数。

当窗口向右滑动时：
(a) 如果左边滑出的单词存在于 Set 中，将其在目标 HashMap 中的对应值减 1。如果减 1 后的值小于 need HashMap 中的对应值，则将 count 自减。
(b) 检查右边新进入窗口的单词。如果该单词存在于 Set 中，将其在目标 HashMap 中的对应值加 1。如果加 1 后的值小于等于 need HashMap 中的对应值，则将 count 自增。
4. 记录结果：
当 count 的值等于 words.length 的时候，说明此时刚好完成匹配。记录下当前的首下标，并存入 result 数组中。
5. 终止条件：
持续向右滑动，直到窗口超出当前数组的边界。当内外循环全部结束时，return 我们的 result 数组作为最终结果。
**题解**：
```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];

    const result = [];
    const oneWordLen = words[0].length;
    const wordNum = words.length;
    const allLen = oneWordLen * wordNum; // 子串的总长度
    const sLen = s.length;

    // 1. 建立 needs Map (存放 words 中每个单词及其需要的数量)
    // 同时也起到了 Set 的作用，用于判断单词是否存在
    const needs = new Map();
    for (const w of words) {
        needs.set(w, (needs.get(w) || 0) + 1);
    }

    // 2. 外层循环：从 0 到 oneWordLen - 1 错位启动
    for (let i = 0; i < oneWordLen; i++) {
        let left = i;
        let right = i;
        let windowMap = new Map(); // 存放当前窗口内遇到的单词
        let count = 0; // 记录当前窗口内满足匹配条件的单词总数

        // 3. 内层滑动窗口
        while (right + oneWordLen <= sLen) {
            // --- (b) 进窗口逻辑 (Right 右移) ---
            const wRight = s.substring(right, right + oneWordLen);
            right += oneWordLen;

            // 只有当这个词在 needs 里才处理
            if (needs.has(wRight)) {
                windowMap.set(wRight, (windowMap.get(wRight) || 0) + 1);
                
                // 核心逻辑：如果加 1 后的值小于等于 need HashMap 中的对应值，则 count 自增
                if (windowMap.get(wRight) <= needs.get(wRight)) {
                    count++;
                }
            }

            // --- (a) 出窗口逻辑 (Left 右移) ---
            // 当窗口宽度超过了我们要找的总长度，左边就要吐出一个单词
            if (right - left > allLen) {
                const wLeft = s.substring(left, left + oneWordLen);
                left += oneWordLen;

                if (needs.has(wLeft)) {
                    // 核心逻辑：如果减 1 后的值小于 need HashMap 中的对应值，则 count 自减
                    // 注意：这里先判断再减，或者减完再判断都可以，逻辑要对应
                    // 这里采用：先判断当前的有效性
                    if (windowMap.get(wLeft) <= needs.get(wLeft)) {
                        count--;
                    }
                    windowMap.set(wLeft, windowMap.get(wLeft) - 1);
                }
            }

            // 4. 记录结果
            if (count === wordNum) {
                result.push(left);
            }
        }
    }

    return result;
};
```
# [76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个字符串<code>s</code> 和<code>t</code>，长度分别是<code>m</code> 和<code>n</code>，返回 s 中的**最短窗口 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">子串</button>** ，使得该子串包含 <code>t</code> 中的每一个字符（**包括重复字符** ）。如果没有这样的子串，返回空字符串<code>""</code>。

测试用例保证答案唯一。

**示例 1：** 

> **输入：** s = "ADOBECODEBANC", t = "ABC"
**输出：** "BANC"
**解释：** 最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

**示例 2：** 

> **输入：** s = "a", t = "a"
**输出：** "a"
**解释：** 整个字符串 s 是最小覆盖子串。

**示例 3:** 

> **输入:**  s = "a", t = "aa"
**输出:**  ""
**解释:**  t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。

**提示：** 

- <code>m == s.length</code>
- <code>n == t.length</code>
- <code>1 <= m, n <= 10^5</code>
- <code>s</code> 和 <code>t</code> 由英文字母组成

**进阶：** 你能设计一个在 <code>O(m + n)</code> 时间内解决此问题的算法吗？

**思路**：
这道题在最开始，如果 S 的长度小于 T 的长度，直接返回一个空字符串。

这道题的重点是需要维护两个 HashMap：
1. 第一个 HashMap 叫做 Need HashMap
2. 第二个 HashMap 叫做 Window HashMap

我们再定义两个指针，一个是 Left，一个是 Right。引入一个变量 valid，用来记录已经匹配成功的字符种类数。

具体的执行流程如下：
1. Right 指针先移动。每次进入到一个新的字母时，先在 Need HashMap 里面检查它是否存在。
2. 如果存在，就给 Window HashMap 中对应的值加 1。
3. 每次加 1 完之后，如果 Window HashMap 中对应字符的值等于 Need HashMap 中对应的值，则 valid 加 1。
4. 当 valid 等于 Need HashMap 的大小时，说明窗口已覆盖所有字符，Left 就可以开始向右移动了。
5. 每次 Left 向右移动时，我们都要检查离开窗口的字母是否存在于 Need HashMap 中。
(a) 如果存在，在 Window HashMap 中对其进行减 1 之前，如果该字母在 Window HashMap 中的值等于 Need HashMap 中的值，则 valid 减 1。
(b) 然后在 Window HashMap 中对该字符减 1。
(c) 此时 valid 不再等于 Need HashMap 的大小，Right 窗口又可以开始移动了。

这个过程一直持续到 Right 指针到达最后一个字符，并且 Left 也向右滑动到不存在覆盖子串为止。我们需要一个变量用来存储最小的覆盖子串，最后直接返回即可。

讨论一下为什么这样做是可行的：
如果存在一个最小覆盖子串，那么 Right 向右滑动到达该子串的右侧时肯定会停止，因为此时已经实现了覆盖。接着 Left 会一直向右滑动，直到滑动到最小覆盖子串的最左侧才会停止。因此，我们肯定不会错过这个最小子串。
**题解**：
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 预处理
    if (s.length < t.length) return "";

    // 1. 构建 Need HashMap
    const need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    const window = new Map();
    let left = 0;
    let right = 0;
    let valid = 0; // 对应你的 valid 变量

    // 用于记录结果 [开始下标, 长度]
    // 初始化长度为 Infinity 方便比较
    let start = 0;
    let minLen = Infinity;

    // 2. Right 指针开始移动
    while (right < s.length) {
        // --- 进窗口逻辑 ---
        const c = s[right];
        right++; // 右移

        // 检查是否存在于 Need 中 (代替 Set 的功能)
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            // 核心逻辑：只有数量“达标”的那一刻，valid 才 +1
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 3. Left 收缩逻辑
        // 当 valid 等于 need 的大小时，说明窗口已覆盖所有字符
        while (valid === need.size) {
            // 在这里更新最小子串记录
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }

            // --- 出窗口逻辑 ---
            const d = s[left];
            left++; // 左移

            if (need.has(d)) {
                // 核心逻辑：对应你的 5(a)
                // 如果移除前，窗口内的数量刚好满足要求，移除后就不满足了，所以 valid -1
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }

    // 4. 返回结果
    return minLen === Infinity ? "" : s.substr(start, minLen);
};
```

# [36. 有效的数独](https://leetcode.cn/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150)

请你判断一个<code>9 x 9</code> 的数独是否有效。只需要** 根据以下规则**  ，验证已经填入的数字是否有效即可。

- 数字<code>1-9</code>在每一行只能出现一次。
- 数字<code>1-9</code>在每一列只能出现一次。
- 数字<code>1-9</code>在每一个以粗实线分隔的<code>3x3</code>宫内只能出现一次。（请参考示例图）

**注意：** 

- 一个有效的数独（部分已被填充）不一定是可解的。
- 只需要根据以上规则，验证已经填入的数字是否有效即可。
- 空白格用<code>'.'</code>表示。

**示例 1：** 
<img src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png" style="height: 250px; width: 250px;">

> **输入：** board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
**输出：** true

**示例 2：** 

> **输入：** board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
**输出：** false
**解释：** 除了第一行的第一个数字从** 5**  改为 **8 ** 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。

**提示：** 

- <code>board.length == 9</code>
- <code>board[i].length == 9</code>
- <code>board[i][j]</code> 是一位数字（<code>1-9</code>）或者 <code>'.'</code>

**思路**：
需要先初始化三个数组：
1. 行数组：一个 9x9 的数组，表示在每一行中每一个数字是否出现过
2. 列数组：也是 9x9 的，和行数组类似
3. 宫数组：是一个 3x3x9 的数组，表示在某一个宫（3x3 区域）中某个数字是否出现过

解题步骤如下：
1. 将原本那个 9x9 的数独数组从头到尾进行一次遍历。
2. 每次遍历时，对当前单元格对应的行、列、宫的值进行检查：
   (a) 行列数组第二个索引值通常为“当前数字 - 1”。
   (b) 宫的索引由“当前行和列分别整除 3”得到的结果来确定。
3. 检查逻辑：
   (a) 如果是空白格（字符为 '.'），直接跳过。
   (b) 如果发现当前行、列或宫中对应位置的值已经是 1，说明出现了重复，此时可以判断该数独无效，返回 false。
4. 在每次循环的末尾，将该数字在行列宫数组中对应的值标记为 1。

如果一直遍历到数组最尾部都没有发现重复情况，则返回 true。

有一个可以优化的地方，就是“宫”也可以用一个 9x9 的数组来表示。

然后我们计算它的 index，就是用 row 除以 3 的整数结果乘以 3，再加上 col 除以 3 的整数结果。这是它的第一个索引，第二个索引指的就是那个对应的数字 - 1。
**题解**：
```js
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 初始化三个 9x9 的布尔数组
    // row[i][num] 代表第 i 行是否出现过数字 num
    const rows = Array.from({ length: 9 }, () => new Array(9).fill(false));
    const cols = Array.from({ length: 9 }, () => new Array(9).fill(false));
    const boxes = Array.from({ length: 9 }, () => new Array(9).fill(false));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = board[i][j];
            
            // 1. 遇到空白格直接跳过
            if (char === '.') continue;

            // 2. 转换成 0-8 的下标
            const num = parseInt(char) - 1;
            // 3. 计算宫格索引 (0-8)
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // 4. 检查冲突
            if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                return false;
            }

            // 5. 标记该数字已经出现过
            rows[i][num] = true;
            cols[j][num] = true;
            boxes[boxIndex][num] = true;
        }
    }

    // 6. 全程无冲突，返回有效
    return true;
};
```

# [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 <code>m</code> 行 <code>n</code> 列的矩阵<code>matrix</code> ，请按照 **顺时针螺旋顺序**  ，返回矩阵中的所有元素。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg" style="width: 242px; height: 242px;">

> **输入：** matrix = [[1,2,3],[4,5,6],[7,8,9]]
**输出：** [1,2,3,6,9,8,7,4,5]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg" style="width: 322px; height: 242px;">

> **输入：** matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
**输出：** [1,2,3,4,8,12,11,10,9,5,6,7]

**提示：** 

- <code>m == matrix.length</code>
- <code>n == matrix[i].length</code>
- <code>1 <= m, n <= 10</code>
- <code>-100 <= matrix[i][j] <= 100</code>

**思路**：
Direction 变量可以是一个对象，有两个属性 x 和 y，x 初始为 1，y 初始为 0。

定义一个 result 数组。我们从 M 行 N 列的矩阵 matrix[0][0] 开始遍历：

1. 先把当前位置的数字推入 result 数组，并将矩阵中对应的值设置为 '.'。
2. 检查当前的 position 加上 direction 之后，对应的索引值在矩阵中是否为 '.'。
3. 如果为 '.' 或到达矩阵边界，则需要调整方向：
   (a) 新的 direction.x 等于旧 direction.y 的负值
   (b) 新的 direction.y 等于旧 direction.x
   (c) 即：x = -y, y = x

重复上述操作，直到 result 数组的长度等于 M × N 时结束，最后输出 result 数组。
**题解**：
```js
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const total = m * n;
    const result = [];
    
    // 初始位置
    let row = 0, col = 0;
    // 初始方向：x轴(列)增加1，y轴(行)不变
    let dir = { x: 1, y: 0 };
    
    while (result.length < total) {
        // 1. 推入结果，并标记为已访问
        result.push(matrix[row][col]);
        matrix[row][col] = '.';
        
        // 2. 预判下一步
        let nextRow = row + dir.y;
        let nextCol = col + dir.x;
        
        // 3. 检查是否需要转向：撞墙(越界) 或 撞到 '.'
        if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || 
            matrix[nextRow][nextCol] === '.') {
            
            // 执行你的公式：x = -y, y = x
            const oldX = dir.x;
            dir.x = -dir.y;
            dir.y = oldX;
            
            // 重新计算下一步
            nextRow = row + dir.y;
            nextCol = col + dir.x;
        }
        
        // 4. 移动到新位置
        row = nextRow;
        col = nextCol;
    }
    
    return result;
};
```

# [48. 旋转图像](https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个 n×n 的二维矩阵<code>matrix</code> 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在**<a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a>**  旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要 ** 使用另一个矩阵来旋转图像。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg" style="height: 188px; width: 500px;">

> **输入：** matrix = [[1,2,3],[4,5,6],[7,8,9]]
**输出：** [[7,4,1],[8,5,2],[9,6,3]]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg" style="height: 201px; width: 500px;">

> **输入：** matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
**输出：** [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

**提示：** 

- <code>n == matrix.length == matrix[i].length</code>
- <code>1 <= n <= 20</code>
- <code>-1000 <= matrix[i][j] <= 1000</code>

**思路**：
先将矩阵沿主对角线翻转（也就是转置）。实际上就是遍历一下这个矩阵的下三角，然后进行对角线的元素交换即可。

进行完转置操作后，对每一行进行遍历。在每一行中进行左右切换：
1. 使用两个指针，一个指向首部，一个指向尾部
2. 进行逐个交换，直到左右镜像完全翻转
**题解**：
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    // 1. 先进行转置 (Transposition)
    // 注意 j 从 i 开始，否则换过去又换回来了
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // 2. 再进行每一行的镜像翻转 (Horizontal Flip)
    for (let i = 0; i < n; i++) {
        matrix[i].reverse(); 
        // 或者手动双指针交换：
        // for (let j = 0; j < Math.floor(n / 2); j++) {
        //     [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        // }
    }
};
```

# [73. 矩阵置零](https://leetcode.cn/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个<code>m x n</code> 的矩阵，如果一个元素为 **0 ** ，则将其所在行和列的所有元素都设为 **0**  。请使用 **<a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地</a>**  算法**。** 

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg" style="width: 450px; height: 169px;">

> **输入：** matrix = [[1,1,1],[1,0,1],[1,1,1]]
**输出：** [[1,0,1],[0,0,0],[1,0,1]]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg" style="width: 450px; height: 137px;">

> **输入：** matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
**输出：** [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

**提示：** 

- <code>m == matrix.length</code>
- <code>n == matrix[0].length</code>
- <code>1 <= m, n <= 200</code>
- <code>-2^31 <= matrix[i][j] <= 2^31 - 1</code>

**进阶：** 

- 一个直观的解决方案是使用 <code>O(mn)</code>的额外空间，但这并不是一个好的解决方案。
- 一个简单的改进方案是使用 <code>O(m+n)</code> 的额外空间，但这仍然不是最好的解决方案。
- 你能想出一个仅使用常量空间的解决方案吗？

**思路**：
我们在遍历前需要先初始化一个长度为 m+n 的布尔数组，初始值为 false。

然后我们对矩阵 matrix 中的每个元素进行遍历：
1. 如果遇到 0，我们就需要将它的 row 和 col 记录下来。
2. 也就是将那个布尔数组中索引值为 row，以及索引值为 m + col 的值设置为 true。

遍历完矩阵之后，我们再遍历一遍那个布尔数组，将 matrix 中对应的行和列都变为 0。这样得到的结果就是我们要的结果。
**题解**：
```js
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    // 初始化一个长度为 m + n 的布尔数组
    const markers = new Array(m + n).fill(false);

    // 1. 第一次遍历：寻找 0 并标记
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                markers[i] = true;         // 标记行
                markers[m + j] = true;     // 标记列
            }
        }
    }

    // 2. 第二次遍历：根据标记置零
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 如果这一行或者这一列在 markers 中被标记为 true
            if (markers[i] || markers[m + j]) {
                matrix[i][j] = 0;
            }
        }
    }
};
```

# [289. 生命游戏](https://leetcode.cn/problems/game-of-life/description/?envType=study-plan-v2&envId=top-interview-150)

根据<a href="https://baike.baidu.com/item/%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F/2926434?fr=aladdin" target="_blank">百度百科</a>，**生命游戏** ，简称为 **生命**  ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 <code>m × n</code>个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： <code>1</code> 即为 **活细胞**  （live），或 <code>0</code> 即为 **死细胞**  （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

- 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
- 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
- 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
- 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是 **同时**  发生的。给你 <code>m x n</code> 网格面板 <code>board</code> 的当前状态，返回下一个状态。

给定当前<code>board</code>的状态，**更新** <code>board</code>到下一个状态。

**注意**  你不需要返回任何东西。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg">

> **输入：** board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
**输出：** [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg">

> **输入：** board = [[1,1],[1,0]]
**输出：** [[1,1],[1,1]]

**提示：** 

- <code>m == board.length</code>
- <code>n == board[i].length</code>
- <code>1 <= m, n <= 25</code>
- <code>board[i][j]</code> 为 <code>0</code> 或 <code>1</code>

**进阶：** 

- 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
- 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

**思路**：
这道题需要将矩阵从头到尾进行遍历。

我们制定一个规则，在矩阵遍历的过程中：
1. 如果该活细胞死亡，则将此处标记为 -1。
2. 如果死细胞复活，则将此处标记为 2。

在后续的遍历中：
- 当我们遇到 -1 时，先将其当成活细胞。
- 当我们遇到 2 时，先将其当成死细胞。

完成第一次遍历后，我们再进行第二次遍历：
- 将所有的 -1 改为 0，使其真正变成死细胞。
- 将所有的 2 变为 1，使其真正变成活细胞。

此外，还需要一个辅助函数来帮我们判断细胞的新状态。
**题解**：
```js
/**
 * @param {number[][]} board
 * @return {void} 
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;

    // 1. 第一次遍历：打标记
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const liveNeighbors = countLiveNeighbors(board, r, c);

            // 规则 1 & 3: 活细胞死亡
            if (board[r][c] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[r][c] = -1; // 代表活变死
            }
            // 规则 4: 死细胞复活
            if (board[r][c] === 0 && liveNeighbors === 3) {
                board[r][c] = 2; // 代表死变活
            }
        }
    }

    // 2. 第二次遍历：状态还原
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === -1) board[r][c] = 0;
            if (board[r][c] === 2) board[r][c] = 1;
        }
    }
};

// 辅助函数：统计周围 8 个邻居中的活细胞数量
function countLiveNeighbors(board, row, col) {
    const m = board.length;
    const n = board[0].length;
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            // 跳过自身
            if (i === row && j === col) continue;
            
            // 检查边界
            if (i >= 0 && i < m && j >= 0 && j < n) {
                // 根据你的思路：1 和 -1 原本都是活细胞
                if (board[i][j] === 1 || board[i][j] === -1) {
                    count++;
                }
            }
        }
    }
    return count;
}
```

# [383. 赎金信](https://leetcode.cn/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150)

给你两个字符串：<code>ransomNote</code> 和 <code>magazine</code> ，判断 <code>ransomNote</code> 能不能由 <code>magazine</code> 里面的字符构成。

如果可以，返回 <code>true</code> ；否则返回 <code>false</code> 。

<code>magazine</code> 中的每个字符只能在 <code>ransomNote</code> 中使用一次。

**示例 1：** 

> **输入：** ransomNote = "a", magazine = "b"
**输出：** false

**示例 2：** 

> **输入：** ransomNote = "aa", magazine = "ab"
**输出：** false

**示例 3：** 

> **输入：** ransomNote = "aa", magazine = "aab"
**输出：** true

**提示：** 

- <code>1 <= ransomNote.length, magazine.length <= 10^5</code>
- <code>ransomNote</code> 和 <code>magazine</code> 由小写英文字母组成

**思路**：
我们要先初始化一个长度为 26 的数组，数组初始值全为 0。
1. 遍历 magazine 阶段：
我们将 magazine 中的每一个字符进行遍历，将当前字符与 ‘a’ 字符作差的结果作为索引，在数组对应位置进行加 1 操作，以此来填充库存。
2. 遍历 ransomNote 阶段：
我们将 ransomNote 中的每一个字符进行遍历，在数组对应索引位置进行减 1 操作。
(a) 如果在减 1 后出现该位置的值小于 0 的情况，说明 magazine 提供的字符库存无法满足 ransomNote，直接返回 false。
3. 判定阶段：
如果 ransomNote 遍历结束都没有出现库存小于 0 的情况，则说明匹配成功，返回 true。
**题解**：
```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 快速剪枝：如果信件比杂志还长，绝对不可能凑齐
    if (ransomNote.length > magazine.length) return false;

    // 1. 初始化长度为 26 的数组
    const record = new Array(26).fill(0);
    const base = 'a'.charCodeAt();

    // 2. 填充库存
    for (const char of magazine) {
        record[char.charCodeAt() - base]++;
    }

    // 3. 消耗库存
    for (const char of ransomNote) {
        const index = char.charCodeAt() - base;
        record[index]--;
        
        // 4. 只要库存变负，说明 magazine 里这个字母不够用
        if (record[index] < 0) {
            return false;
        }
    }

    return true;
};
```

# [205. 同构字符串](https://leetcode.cn/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个字符串<code>s</code>和<code>t</code>，判断它们是否是同构的。

如果<code>s</code>中的字符可以按某种映射关系替换得到<code>t</code>，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

<strong class="example">示例 1：** 

<div class="example-block">
<b>输入：</b>s = "egg", t = "add"

<b>输出：</b>true

**解释：** 

字符串 <code>s</code> 和 <code>t</code> 可以通过以下方式变得相同：

- 将<code>'e'</code>映射为<code>'a'</code>。
- 将<code>'g'</code> 映射为<code>'d'</code>。

<strong class="example">示例 2：** 

<div class="example-block">
<b>输入：</b>s = "f11", t = "b23"

<b>输出：</b>false

**解释：** 

字符串 <code>s</code> 和 <code>t</code> 无法变得相同，因为 <code>'1'</code> 需要同时映射到 <code>'2'</code> 和 <code>'3'</code>。

<strong class="example">示例 3：** 

<div class="example-block">
<b>输入：</b>s = "paper", t = "title"

<b>输出：</b>true

**提示：** 

- <code>1 <= s.length <= 5 * 10^4</code>
- <code>t.length == s.length</code>
- <code>s</code>和<code>t</code>由任意有效的 ASCII 字符组成

**思路**：
这道题先看 s 和 t 两个字符串的长度是否相等。如果不相等，直接输出 false；如果相等，再进行以下步骤：

1. 初始化两个 HashMap：
   (a) 一个 Map 以 s 中对应的字符作为 key，t 中对应的字符作为 value
   (b) 另一个 Map 以 t 中的字符作为 key，s 中的字符作为 value
2. 使用同一个指针同时对 s 和 t 进行遍历。
3. 每次遍历都要进行校验：
   (a) 检查当前 key 是否已经存在对应的 value
   (b) 如果存在，则看该 value 是否与当前另一个字符串中对应的字符一致。如果不一致，则返回 false
   (c) 不存在就存进 map 中

如果遍历过程中出现这种映射不一致的情况，就返回 false。
**题解**：
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // 提示说长度相等，但严谨起见可以先判断
    if (s.length !== t.length) return false;

    // 1. 初始化两个 Map
    const s2t = new Map();
    const t2s = new Map();

    // 2. 使用指针遍历
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // 3. 校验映射关系
        // 检查 s -> t
        if (s2t.has(charS)) {
            if (s2t.get(charS) !== charT) return false;
        } else {
            s2t.set(charS, charT);
        }

        // 检查 t -> s
        if (t2s.has(charT)) {
            if (t2s.get(charT) !== charS) return false;
        } else {
            t2s.set(charT, charS);
        }
    }

    return true;
};
```

# [290. 单词规律](https://leetcode.cn/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150)

给定一种规律 <code>pattern</code>和一个字符串<code>s</code>，判断 <code>s</code>是否遵循相同的规律。

这里的**遵循** 指完全匹配，例如，<code>pattern</code>里的每个字母和字符串<code>s</code>**** 中的每个非空单词之间存在着双向连接的对应规律。具体来说：

- <code>pattern</code>中的每个字母都 **恰好**  映射到 <code>s</code> 中的一个唯一单词。
- <code>s</code> 中的每个唯一单词都 **恰好**  映射到<code>pattern</code> 中的一个字母。
- 没有两个字母映射到同一个单词，也没有两个单词映射到同一个字母。

<strong class="example">示例1:** 

> **输入:**  pattern = <code>"abba"</code>, s = <code>"dog cat cat dog"</code>
**输出:**  true

<strong class="example">示例 2:** 

> **输入:** pattern = <code>"abba"</code>, s = <code>"dog cat cat fish"</code>
**输出:**  false

<strong class="example">示例 3:** 

> **输入:**  pattern = <code>"aaaa"</code>, s = <code>"dog cat cat dog"</code>
**输出:**  false

**提示:** 

- <code>1 <= pattern.length <= 300</code>
- <code>pattern</code>只包含小写英文字母
- <code>1 <= s.length <= 3000</code>
- <code>s</code>只包含小写英文字母和<code>' '</code>
- <code>s</code>**不包含**  任何前导或尾随对空格
- <code>s</code>中每个单词都被 **单个空格 ** 分隔

**思路**：
此时将 s 使用 split 方法，通过空格将其分割成一个数组。在函数最开始，先判断 pattern 的长度和数组 s 的长度是否相等：
1. 如果不相等，直接返回 false。
2. 如果相等，则进行后续逻辑：
(a) 首先初始化两个 map 和一个指针。
(b) 使用指针进行遍历。一个 map 将 pattern 中的字符作为 key，s 中的字符串作为 value；另一个 map 将 s 中的字符串作为 key，pattern 中的字符作为 value。
(c) 在遍历过程中进行双向映射，如果 key 在对应的 map 中不存在，就将当前的键值对存入 map 中。
(d) 如果已经存在，则取出对应的 value 与当前的目标进行比对，若不相等则直接返回 false。

一直到全部比对完都没有问题，则返回 true。
**题解**：
```js
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // 1. 分割字符串并检查长度
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    // 2. 初始化两个 Map 实现双向映射
    const charToWord = new Map();
    const wordToChar = new Map();

    // 3. 遍历并校验
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // 校验 pattern -> word
        if (charToWord.has(char)) {
            if (charToWord.get(char) !== word) return false;
        } else {
            charToWord.set(char, word);
        }

        // 校验 word -> pattern
        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== char) return false;
        } else {
            wordToChar.set(word, char);
        }
    }

    return true;
};
```

# [242. 有效的字母异位词](https://leetcode.cn/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个字符串 <code>s</code> 和 <code>t</code> ，编写一个函数来判断 <code>t</code> 是否是 <code>s</code> 的 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">字母异位词</button>。

**示例1:** 

> **输入:**  s = "anagram", t = "nagaram"
**输出:**  true

**示例 2:** 

> **输入:**  s = "rat", t = "car"
**输出: ** false

**提示:** 

- <code>1 <= s.length, t.length <= 5 * 10^4</code>
- <code>s</code> 和 <code>t</code>仅包含小写字母

**进阶:** 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

**思路**：
需要一个 Map。
1. 预处理阶段
(a) 在最开始之前，先判断 S 和 T 的长度是否相等。如果不相等，直接返回 false。
(b) 遍历 S 字符串中的每一个字符，将其作为原料存入 Map 中。如果这个字符不在 Map 中，就将其值设为 1；如果已经存在，则加 1。
2. 遍历与匹配阶段
(a) 遍历 T 字符串中的每一个字符。
(b) 在遍历过程中需要进行检查：
- 首先检查该字符在 Map 中是否存在，如果不存在，直接返回 false。
- 如果存在，则将 Map 中对应的值减 1。
- 如果减 1 后该字符的值小于 0，也返回 false。
3. 结果返回
如果遍历完 T 之后中间没有触发返回 false 的逻辑，那么在函数最后返回 true。
**题解**：
```js
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }

    return true;
};
```

# [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串数组，请你将 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1q:" data-state="closed" class="">字母异位词</button> 组合在一起。可以按任意顺序返回结果列表。

**示例 1:** 

<div class="example-block">
**输入:**  strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

**输出: ** [["bat"],["nat","tan"],["ate","eat","tea"]]

**解释：** 

- 在 strs 中没有字符串可以通过重新排列来形成 <code>"bat"</code>。
- 字符串 <code>"nat"</code> 和 <code>"tan"</code> 是字母异位词，因为它们可以重新排列以形成彼此。
- 字符串 <code>"ate"</code>，<code>"eat"</code>和 <code>"tea"</code> 是字母异位词，因为它们可以重新排列以形成彼此。

**示例 2:** 

<div class="example-block">
**输入:**  strs = [""]

**输出: ** [[""]]

**示例 3:** 

<div class="example-block">
**输入:**  strs = ["a"]

**输出: ** [["a"]]

**提示：** 

- <code>1 <= strs.length <= 10^4</code>
- <code>0 <= strs[i].length <= 100</code>
- <code>strs[i]</code>仅包含小写字母

**思路**：
将 strs 中的每个元素进行遍历，处理逻辑如下：

1. 将每个元素的字符串值使用 .split() 进行拆分，使每个字母成为独立的字符。
2. 使用 .sort() 对字母进行排序。
3. 使用 .join() 将排序后的字母重新拼接成一个字符串，并将其作为 HashMap 的 Key。
4. 将当前单词作为数组元素存入 HashMap：
   (a) HashMap 的 Value 是一个数组。
   (b) 如果该 Key 尚未存在，则创建一个包含当前单词的新数组。
   (c) 如果 Key 已存在，则将当前单词推入（push）对应的数组中。

当全部遍历完成后，将 Map 中所有的 Value 作为一个数组返回。
**题解**：
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1. 初始化 HashMap
    const map = new Map();

    // 2. 遍历每一个字符串
    for (let s of strs) {
        // 将单词拆分、排序、再拼接，生成唯一的 Key
        // 例如: "eat", "tea", "ate" 都会变成 "aet"
        const key = s.split('').sort().join('');
        
        // 3. 检查 Key 是否存在
        if (!map.has(key)) {
            // 如果不存在，新建一个桶（数组）
            map.set(key, []);
        }
        
        // 4. 将原始单词存入对应的桶中
        map.get(key).push(s);
    }

    // 5. 将 Map 中所有的桶（数组）转换为结果数组返回
    return Array.from(map.values());
};
```

# [1. 两数之和](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个整数数组 <code>nums</code>和一个整数目标值 <code>target</code>，请你在该数组中找出 **和为目标值 ** <code>target</code> 的那**两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。

<strong class="example">示例 1：** 

> **输入：** nums = [2,7,11,15], target = 9
**输出：** [0,1]
**解释：** 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

<strong class="example">示例 2：** 

> **输入：** nums = [3,2,4], target = 6
**输出：** [1,2]

<strong class="example">示例 3：** 

> **输入：** nums = [3,3], target = 6
**输出：** [0,1]

**提示：** 

- <code>2 <= nums.length <= 10^4</code>
- <code>-10^9 <= nums[i] <= 10^9</code>
- <code>-10^9 <= target <= 10^9</code>
- **只会存在一个有效答案** 

**进阶：** 你可以想出一个时间复杂度小于 <code>O(n^2)</code> 的算法吗？

**思路**：
先拿到 nums 数组的长度，然后初始化一个新的 Map。

对 nums 数组中的每一个元素进行遍历：
1. 检查 Map 中是否存在 `target - nums[i]` 这个 key。
2. 如果存在，返回 `numsMap.get(target - nums[i])` 和当前的索引值。
3. 否则，就将当前的 `nums[i]` 作为 key，将当前的索引值作为 value 存入 Map 中。
**题解**：
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = nums.length
    const numsMap = new Map()
    for(let i = 0;i < l; i++){
        if(numsMap.has(target - nums[i])){
            return [numsMap.get(target - nums[i]), i]
        }
        numsMap.set(nums[i], i)
    }
};
```

# [202. 快乐数](https://leetcode.cn/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150)

编写一个算法来判断一个数 <code>n</code> 是不是快乐数。

**「快乐数」** 定义为：

- 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
- 然后重复这个过程直到这个数变为 1，也可能是 **无限循环**  但始终变不到 1。
- 如果这个过程 **结果为** 1，那么这个数就是快乐数。

如果 <code>n</code> 是 快乐数 就返回 <code>true</code> ；不是，则返回 <code>false</code> 。

**示例 1：** 

> **输入：** n = 19
**输出：** true
**解释：
** 1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

**示例 2：** 

> **输入：** n = 2
**输出：** false

**提示：** 

- <code>1 <= n <= 2^31 - 1</code>

**思路**：
这道题的核心是看它有几种情况。实际上只有两种情况：
1. 重复计算这个过程之后变为 1。
2. 进入无限循环，始终变不成 1。

针对无限循环的情况，我们需要确认数值是否会无限变大。其实它是无法无限变大的。假如这个数是一个三位数，它能得到的最大下一个计算结果是 999 算出来的 243，数值会很快地变小。所以它实际上无法做到无穷大，只会不断重复并进入无限循环。

因此，我们的解题思路如下：
1. 先创建一个新的 Set。
2. 进行一个 while 循环，条件是只要 n 不等于 1，且 Set 中不存在当前的 n。
3. 在每次循环中：
   (a) 先将当前的 n 放进 Set 中。
   (b) 获取 n 的下一个值（进行正常的平方和计算）。
4. 最后返回 n 是否等于 1。

这个技术的方法是使用一快一慢两个指针，这样就不需要太多的额外空间。

具体的实现逻辑如下：
1. 这个慢指针每次只向前走一步，快指针每次往前走两步。
2. 因为快指针每次只比慢指针多走一步，所以它们实际上是不会错过的。
3. 如果当前链条中存在 1，那么 Fast 指针肯定是不会超过 1 的。它只会到达 1，而不会超过 1，因为在进行 getNext 操作时，1 的结果依然是 1。
4. 我们只需要进行一个循环检测：当 Fast 还没到 1 且 Slow 和 Fast 没有相遇时，就一直保持一快一慢的移动。
5. 如果 Fast 到达了 1，或者 Slow 和 Fast 相等了，我们就可以直接返回 Fast 是否等于 1。
**题解**：
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    // 只要没变成 1 且 没出现过重复数字，就继续算
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};
// 使用快慢指针
var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);

    // 如果 fast 没到 1，且快慢指针没相遇，就一直跑
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
};

// 辅助函数：计算每个位置数字的平方和
function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
```

# [219. 存在重复元素 II](https://leetcode.cn/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组<code>nums</code> 和一个整数<code>k</code> ，判断数组中是否存在两个 **不同的索引** <code>i</code>和<code>j</code> ，满足 <code>nums[i] == nums[j]</code> 且 <code>abs(i - j) <= k</code> 。如果存在，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**示例1：** 

> **输入：** nums = [1,2,3,1], k = 3
**输出：** true

**示例 2：** 

> **输入：** nums = [1,0,1,1], k = 1
**输出：** true

**示例 3：** 

> **输入：** nums = [1,2,3,1,2,3], k = 2
**输出：** false

**提示：** 

- <code>1 <= nums.length <= 10^5</code>
- <code>-10^9 <= nums[i] <= 10^9</code>
- <code>0 <= k <= 10^5</code>

**思路**：
我们先遍历 nums 数组，每次遍历到一个元素时，先检查 nums[i] 是否作为 key 存在于 Map 中：

1. 如果它已经存在，就将其对应的值（索引）拿出来与当前的 i 进行比较。如果它们的值相差不超过 k，则返回 true。
2. 接下来，我们将 nums[i] 作为 key，将当前的 i 作为 value 存入 Map 中。如果之前没有存过则直接存入，如果已经存过则进行更新操作。

我们一直循环到结束，如果最终都没有返回 true，则返回 false。
**题解**：
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // 1. 检查是否存在且距离是否符合要求
        if (map.has(num)) {
            if (i - map.get(num) <= k) {
                return true;
            }
        }

        // 2. 存入或更新索引：保证 map 里存的是离下一个相同数字最近的位置
        map.set(num, i);
    }

    // 3. 遍历结束未找到
    return false;
};
```

# [128. 最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个未排序的整数数组 <code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为<code>O(n)</code> 的算法解决此问题。

**示例 1：** 

> **输入：** nums = [100,4,200,1,3,2]
**输出：** 4
**解释：** 最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

**示例 2：** 

> **输入：** nums = [0,3,7,2,5,8,4,6,0,1]
**输出：** 9

<strong class="example">示例 3：** 

> **输入：** nums = [1,0,1,2]
<b>输出：</b>3

**提示：** 

- <code>0 <= nums.length <= 10^5</code>
- <code>-10^9 <= nums[i] <= 10^9</code>

**思路**：
先将 nums 中的所有元素存进一个 set 里面，然后再将 nums 从头到尾进行一次遍历。

遍历过程中如果 numSet.has(num - 1) 为 false，尝试将当前元素作为一个最小的元素，去递归查找最长的数字连续序列。查找过程使用 set 实现。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 1. 将所有数字存入 Set，去重且提供 O(1) 查找
    const numSet = new Set(nums);
    let longestStreak = 0;

    // 2. 遍历 Set（比遍历原数组更好，因为已经去重了）
    for (const num of numSet) {
        
        // 3. 核心判断：只有当 num 是序列的起点时，才进入计算逻辑
        // 如果 num - 1 存在，说明 num 只是某个序列的中间部分，跳过它！
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // 4. 不断查找下一个连续数字
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // 5. 更新全局最大长度
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
```
# [228. 汇总区间](https://leetcode.cn/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个 **无重复元素**  的**有序**  整数数组 <code>nums</code> 。

区间 <code>[a,b]</code> 是从 <code>a</code> 到 <code>b</code>（包含）的所有整数的集合。

返回 **恰好覆盖数组中所有数字**  的 **最小有序**  区间范围列表。也就是说，<code>nums</code> 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个区间但不属于 <code>nums</code> 的数字 <code>x</code> 。

列表中的每个区间范围 <code>[a,b]</code> 应该按如下格式输出：

- <code>"a->b"</code> ，如果 <code>a != b</code>
- <code>"a"</code> ，如果 <code>a == b</code>

<strong class="example">示例 1：** 

> **输入：** nums = [0,1,2,4,5,7]
**输出：** ["0->2","4->5","7"]
**解释：** 区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

<strong class="example">示例 2：** 

> **输入：** nums = [0,2,3,4,6,8,9]
**输出：** ["0","2->4","6","8->9"]
**解释：** 区间范围是：
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

**提示：** 

- <code>0 <= nums.length <= 20</code>
- <code>-2^31 <= nums[i] <= 2^31 - 1</code>
- <code>nums</code> 中的所有值都 **互不相同** 
- <code>nums</code> 按升序排列

**思路**：
1. 初始化一个数组，数组中的每一个元素也是一个数组。
2. 再初始化一个变量，表示当前目标数组的索引。
3. 遍历每一个元素，并将该元素推进当前变量所指的数组中。
4. 如果下一个元素不是刚好比当前元素大 1，那么就将代表数组索引的变量加 1，指向下一个数组。
5. 当遍历完成之后，再将目标数组中的每一个元素进行映射，映射成一个字符串：
   (a) 如果只有一个元素，就映射为当前元素。
   (b) 如果有两个及以上的元素，就映射成“第一个元素->最后一个元素”。
6. 最后将该结果输出。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    // 1. 初始化一个大数组容器，里面存放代表区间的各个子数组
    // groups = [[0, 1, 2], [4, 5], [7]]
    const groups = [];
    // 初始化当前目标子数组的索引
    let groupIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        // 如果是第一个元素，或者当前元素不连续（不等于前一个元素 + 1）
        if (i > 0 && nums[i] !== nums[i - 1] + 1) {
            groupIndex++;
        }

        // 如果对应的子数组还没初始化，先初始化
        if (!groups[groupIndex]) {
            groups[groupIndex] = [];
        }

        // 将当前元素推入当前索引指向的子数组中
        groups[groupIndex].push(nums[i]);
    }

    // 2. 将目标数组中的每一个元素（子数组）进行映射转换
    return groups.map(group => {
        if (group.length === 1) {
            // (a) 如果只有一个元素，直接返回该元素的字符串
            return group[0].toString();
        } else {
            // (b) 如果有两个及以上元素，取第一个和最后一个拼接
            return `${group[0]}->${group[group.length - 1]}`;
        }
    });
};
```

# [56. 合并区间](https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-interview-150)

以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

**示例 1：** 

> **输入：** intervals = [[1,3],[2,6],[8,10],[15,18]]
**输出：** [[1,6],[8,10],[15,18]]
**解释：** 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

**示例2：** 

> **输入：** intervals = [[1,4],[4,5]]
**输出：** [[1,5]]
**解释：** 区间 [1,4] 和 [4,5] 可被视为重叠区间。

<strong class="example">示例 3：** 

> <b>输入：</b>intervals = [[4,7],[1,4]]
<b>输出：</b>[[1,7]]
<b>解释：</b>区间 [1,4] 和 [4,7] 可被视为重叠区间。

**提示：** 

- <code>1 <= intervals.length <= 10^4</code>
- <code>intervals[i].length == 2</code>
- <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10^4</code>

**思路**：
先对 intervals 数组进行排序，排序的 key 就是每一个区间的第一个值。

排序完之后我们再进行遍历，在遍历过程中主要是检查当前区间的第一个值和上一个区间的第二个值的大小关系：
1. 如果它们相等，或者后面区间的第一个值比前面区间的第二个值小，就将它们合并成一个区间
2. 合并时，取前一个区间的第一个值，第二个值取Math.max(活跃区间.end, 新区间.end)

这样一直遍历直到完全结束，就可以将处理后的 intervals 作为结果返回。
**题解**：
```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. 原地排序
    intervals.sort((a, b) => a[0] - b[0]);

    // 2. curr 指针代表“当前合并结果的最后一个位置”
    let curr = 0;

    for (let i = 1; i < intervals.length; i++) {
        // 如果有重叠（当前区间的左边界 <= 已合并区间的右边界）
        if (intervals[i][0] <= intervals[curr][1]) {
            // 原地修改已合并区间的右边界
            intervals[curr][1] = Math.max(intervals[curr][1], intervals[i][1]);
        } else {
            // 没重叠，curr 往前走，并把新的区间“搬”过来
            curr++;
            intervals[curr] = intervals[i];
        }
    }

    // 3. 关键点：原地截断数组，只保留合并后的部分
    intervals.length = curr + 1;
    return intervals;
};
```

# [57. 插入区间](https://leetcode.cn/problems/insert-interval/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个** 无重叠的**  ，按照区间起始端点排序的区间列表 <code>intervals</code>，其中<code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>表示第<code>i</code>个区间的开始和结束，并且<code>intervals</code>按照<code>start<sub>i</sub></code>升序排列。同样给定一个区间<code>newInterval = [start, end]</code>表示另一个区间的开始和结束。

在<code>intervals</code> 中插入区间<code>newInterval</code>，使得<code>intervals</code>依然按照<code>start<sub>i</sub></code>升序排列，且区间之间不重叠（如果有必要的话，可以合并区间）。

返回插入之后的<code>intervals</code>。

**注意**  你不需要原地修改<code>intervals</code>。你可以创建一个新数组然后返回它。

**示例1：** 

> **输入：** intervals = [[1,3],[6,9]], newInterval = [2,5]
**输出：** [[1,5],[6,9]]

**示例 2：** 

> **输入：** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
**输出：** [[1,2],[3,10],[12,16]]
**解释：** 这是因为新的区间 <code>[4,8]</code> 与 <code>[3,5],[6,7],[8,10]</code>重叠。

**提示：** 

- <code>0 <= intervals.length <= 10^4</code>
- <code>intervals[i].length == 2</code>
- <code>0 <=start<sub>i</sub> <=end<sub>i</sub> <= 10^5</code>
- <code>intervals</code> 根据 <code>start<sub>i</sub></code> 按 **升序**  排列
- <code>newInterval.length == 2</code>
- <code>0 <=start <=end <= 10^5</code>

**思路**：
算法采用三段式扫描处理 intervals 数组：
1. 前段扫描：
遍历数组，将所有 end 小于 newInterval.start 的区间直接推进结果数组。这些区间位于新区间左侧且无重叠。
2. 中间合并：
从第一个可能存在重叠的区间开始，直到某个区间的 start 大于 newInterval.end 为止。在此过程中，不断更新新区间的范围：
   • 合并后的 start = min(newInterval.start, 当前区间.start)
   • 合并后的 end = max(newInterval.end, 当前区间.end)
处理完所有重叠区间后，将这个统一合并后的新区间推进结果数组。
3. 后段扫描：
将剩余所有 start 大于 newInterval.end 的区间依次推进结果数组。这些区间位于新区间右侧且无重叠。

最后返回结果数组即可。
**题解**：
```js
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = [];
    let i = 0;
    const n = intervals.length;

    // 1. 处理左侧：找到所有在新区间之前的区间
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // 2. 处理中间：合并所有有重叠的部分
    // 只要当前的起点 <= 新区间的终点，就说明有交集
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    // 合并完后，把这个“巨大的”新区间放进去
    res.push(newInterval);

    // 3. 处理右侧：剩下已经在新区间之后的区间
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};
```

# [452. 用最少数量的箭引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=study-plan-v2&envId=top-interview-150)

有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组<code>points</code>，其中<code>points[i] = [x<sub>start</sub>, x<sub>end</sub>]</code>表示水平直径在<code>x<sub>start</sub></code>和<code>x<sub>end</sub></code>之间的气球。你不知道气球的确切 y 坐标。

一支弓箭可以沿着 x 轴从不同点 **完全垂直**  地射出。在坐标 <code>x</code> 处射出一支箭，若有一个气球的直径的开始和结束坐标为 <code>x<sub>start</sub></code><sub>，</sub><code>x<sub>end</sub></code><sub>，</sub> 且满足 <code>x<sub>start</sub>≤ x ≤ x<sub>end</sub></code><sub>，</sub>则该气球会被 **引爆** <sub>。</sub>可以射出的弓箭的数量 **没有限制**  。 弓箭一旦被射出之后，可以无限地前进。

给你一个数组 <code>points</code> ，返回引爆所有气球所必须射出的 **最小**  弓箭数。

**示例 1：** 

> **输入：** points = [[10,16],[2,8],[1,6],[7,12]]
**输出：** 2
**解释：** 气球可以用2支箭来爆破:
-在x = 6处射出箭，击破气球[2,8]和[1,6]。
-在x = 11处发射箭，击破气球[10,16]和[7,12]。

**示例 2：** 

> **输入：** points = [[1,2],[3,4],[5,6],[7,8]]
**输出：** 4
**解释：** 每个气球需要射出一支箭，总共需要4支箭。

**示例 3：** 

> **输入：** points = [[1,2],[2,3],[3,4],[4,5]]
**输出：** 2
解释：气球可以用2支箭来爆破:
- 在x = 2处发射箭，击破气球[1,2]和[2,3]。
- 在x = 4处射出箭，击破气球[3,4]和[4,5]。

**提示:** 

- <code>1 <= points.length <= 10^5</code>
- <code>points[i].length == 2</code>
- <code>-2^31<= x<sub>start</sub>< x<sub>end</sub><= 2^31- 1</code>

**思路**：
将所有的区间按照第一个数字作为 key 进行排序，然后按顺序进行遍历。

此时我们还得维护两个变量：一个是 currentEnd，另一个是所需的箭（arrow）数量。

当进行第一次遍历时，我们会初始化 currentEnd 为第一个区间的末尾。此时 arrow 的数量设为 1。在初始化之后，我们就拥有了第一个 currentEnd。

此时我们还要判断当前遍历的区间和之前的交集区间是否有交集，也就是比较currentEnd 和 当前区间的 first。

1. 如果存在交集：
   此时 arrow 不变, currentEnd 取 min(currentEnd, points[i][1])。
2. 如果不存在交集：
   我们就更新 currentEnd 为上一个合并出来的区间的 end，此时 arrow 的数量加 1。

重复上述过程，一直到这个数组遍历完成为止。这个时候的 arrow 数量就是我们所需要的结果。
**题解**：
```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;

    // 1. 按起始位置排序
    points.sort((a, b) => a[0] - b[0]);

    let arrows = 1;
    // 维护当前这支箭必须射出的“最后期限”（即当前交集的最小右边界）
    let currentEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        // 如果当前气球的开始位置在当前箭的射程内
        if (points[i][0] <= currentEnd) {
            // 更新交集：箭必须在更早结束的那个气球消失前射出
            currentEnd = Math.min(currentEnd, points[i][1]);
        } else {
            // 超出射程，必须增加一支箭
            arrows++;
            // 新箭的射程初始为当前气球的右边界
            currentEnd = points[i][1];
        }
    }

    return arrows;
};
```

# [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code>的字符串 <code>s</code> ，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。
- 每个右括号都有一个对应的相同类型的左括号。

<strong class="example">示例 1：** 

<div class="example-block">
<b>输入：</b>s = "()"

<b>输出：</b>true

<strong class="example">示例 2：** 

<div class="example-block">
<b>输入：</b>s = "()[]{}"

<b>输出：</b>true

<strong class="example">示例 3：** 

<div class="example-block">
<b>输入：</b>s = "(]"

<b>输出：</b>false

<strong class="example">示例 4：** 

<div class="example-block">
<b>输入：</b>s = "([])"

<b>输出：</b>true

<strong class="example">示例 5：** 

<div class="example-block">
<b>输入：</b>s = "([)]"

<b>输出：</b>false

**提示：** 

- <code>1 <= s.length <= 10^4</code>
- <code>s</code> 仅由括号 <code>'()[]{}'</code> 组成

**思路**：
1. 初始化数组和一个 HashMap：
   (a) HashMap 中存入以右大括号、右中括号、右小括号为 Key。
   (b) 以左大括号、左中括号、左小括号为 Value。
2. 遍历字符串 s：
   (a) 检查当前字符是否存在于 Map 的 Key 中。
   (b) 如果存在（即当前字符为右括号）：
       - 判断 Stack 长度是否为 0，或者 Stack 的最后一项不是它所对应的 Value。
       - 若满足上述任一条件，返回 false。
       - 若匹配成功，则将数组中最后一个元素弹出。
   (c) 如果当前字符不是 Key（即当前字符为左括号）：
       - 将其推进数组中。
3. 循环结束后，检查数组长度是否为 0：
   (a) 如果长度为 0，返回 true。
   (b) 如果长度不为 0，返回 false
**题解**：
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. 初始化栈和 Map
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // 2. 遍历字符串
    for (let char of s) {
        // (a) 如果当前字符是右括号 (Map 的 Key)
        if (map[char]) {
            // 检查栈是否为空，或者栈顶元素是否匹配
            // stack.pop() 会直接返回并删除最后一项
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // (c) 如果是左括号，推进栈
            stack.push(char);
        }
    }

    // 3. 循环结束，检查栈是否全部匹配完成（为空）
    return stack.length === 0;
};
```

# [71. 简化路径](https://leetcode.cn/problems/simplify-path/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串 <code>path</code> ，表示指向某一文件或目录的Unix 风格 **绝对路径 ** （以 <code>'/'</code> 开头），请你将其转化为 **更加简洁的规范路径** 。

<p class="MachineTrans-lang-zh-CN">在 Unix 风格的文件系统中规则如下：

<li class="MachineTrans-lang-zh-CN">一个点<code>'.'</code>表示当前目录本身。
<li class="MachineTrans-lang-zh-CN">此外，两个点 <code>'..'</code>表示将目录切换到上一级（指向父目录）。
<li class="MachineTrans-lang-zh-CN">任意多个连续的斜杠（即，<code>'//'</code>或 <code>'///'</code>）都被视为单个斜杠 <code>'/'</code>。
<li class="MachineTrans-lang-zh-CN">任何其他格式的点（例如，<code>'...'</code>或 <code>'....'</code>）均被视为有效的文件/目录名称。

返回的 **简化路径**  必须遵循下述格式：

- 始终以斜杠 <code>'/'</code> 开头。
- 两个目录名之间必须只有一个斜杠 <code>'/'</code> 。
- 最后一个目录名（如果存在）**不能 ** 以 <code>'/'</code> 结尾。
- 此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 <code>'.'</code> 或 <code>'..'</code>）。

返回简化后得到的 **规范路径**  。

<strong class="example">示例 1：** 

<div class="example-block">
**输入：** path = "/home/"

<b>输出：</b>"/home"

**解释：** 

应删除尾随斜杠。

<strong class="example">示例 2：** 

<div class="example-block">
<b>输入：</b>path = "/home//foo/"

<b>输出：</b>"/home/foo"

**解释：** 

多个连续的斜杠被单个斜杠替换。

<strong class="example">示例 3：** 

<div class="example-block">
**输入：** path = "/home/user/Documents/../Pictures"

<b>输出：</b>"/home/user/Pictures"

**解释：** 

两个点<code>".."</code>表示上一级目录（父目录）。

<strong class="example">示例 4：** 

<div class="example-block">
<b>输入：</b>path = "/../"

<b>输出：</b>"/"

**解释：** 

不可能从根目录上升一级目录。

<strong class="example">示例 5：** 

<div class="example-block">
<b>输入：</b>path = "/.../a/../b/c/../d/./"

<b>输出：</b>"/.../b/d"

**解释：** 

<code>"..."</code>在这个问题中是一个合法的目录名。

**提示：** 

- <code>1 <= path.length <= 3000</code>
- <code>path</code> 由英文字母，数字，<code>'.'</code>，<code>'/'</code> 或 <code>'_'</code> 组成。
- <code>path</code> 是一个有效的 Unix 风格绝对路径。

**思路**：
先使用正则，把字符串通过单个或多个斜杠分割成一个数组。然后再去遍历数组中的每个元素：

1. 如果是两个点（".."），则弹出一个元素。
2. 如果是一个点（"."），则不进行操作。
3. 除此之外的情况，直接将当前遍历到的元素推进数组中。

注意，如果此时遍历到两个点且数组为空，则不进行操作。

最后将得到的数组使用 `.join('/')` 拼接上左斜杠，并在字符串的最开头也拼接上一个左斜杠，这样就是我们所需要的结果。
**题解**：
```js
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 1. 分割字符串：通过一个或多个斜杠分割
    // 使用正则 /\/+/ 可以处理连续斜杠
    const components = path.split(/\/+/);
    const stack = [];

    // 2. 遍历分割后的每一个部分
    for (const item of components) {
        // (a) 如果是 ".."，需要返回上一级
        if (item === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } 
        // (b) 跳过空字符串（由连续斜杠引起）和当前目录 "."
        else if (item === '' || item === '.') {
            continue;
        } 
        // (c) 其他情况（有效的目录名，如 "home", "...", "foo"）
        else {
            stack.push(item);
        }
    }

    // 3. 拼接结果：以 / 开头，中间用 / 连接
    return '/' + stack.join('/');
};
```

# [155. 最小栈](https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150)

设计一个支持 <code>push</code> ，<code>pop</code> ，<code>top</code> 操作，并能在常数时间内检索到最小元素的栈。

实现 <code>MinStack</code> 类:

- <code>MinStack()</code> 初始化堆栈对象。
- <code>void push(int val)</code> 将元素val推入堆栈。
- <code>void pop()</code> 删除堆栈顶部的元素。
- <code>int top()</code> 获取堆栈顶部的元素。
- <code>int getMin()</code> 获取堆栈中的最小元素。

**示例 1:** 

> **输入：** 
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

**输出：** 
[null,null,null,null,-3,null,0,-2]

**解释：** 
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

**提示：** 

- <code>-2^31<= val <= 2^31- 1</code>
- <code>pop</code>、<code>top</code> 和 <code>getMin</code> 操作总是在 **非空栈**  上调用
- <code>push</code>,<code>pop</code>,<code>top</code>, and<code>getMin</code>最多被调用<code>3 * 10^4</code>次

**思路**：
需要维护两个栈：一个是普通栈，一个是最小栈。具体操作逻辑如下：

1. 进栈操作（push）：
   (a) 对普通栈进行正常的进栈操作
   (b) 将当前待进栈的值与最小栈的栈顶值进行比较，将两者中的较小值推入最小栈。通过这种方式，最小栈的栈顶始终维护着当前的最小值

2. 弹出操作（pop）：
   同时弹出普通栈和最小栈的栈顶值

3. 获取栈顶操作（top）：
   直接获取普通栈的栈顶值

4. 获取最小操作（getMin）：
   直接获取最小栈的栈顶值
**题解**：
```js
var MinStack = function() {
    this.stack = [];
    this.minStack = []; // 辅助栈，记录每个状态下的最小值
};

/** * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    // 如果最小栈为空，直接推入；
    // 否则，推入当前值和最小栈栈顶值中的较小者
    if (this.minStack.length === 0) {
        this.minStack.push(val);
    } else {
        const currentMin = this.minStack[this.minStack.length - 1];
        this.minStack.push(Math.min(val, currentMin));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
```

# [150. 逆波兰表达式求值](https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串数组 <code>tokens</code> ，表示一个根据<a href="https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437" target="_blank">逆波兰表示法</a> 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

**注意：** 

- 有效的算符为 <code>'+'</code>、<code>'-'</code>、<code>'*'</code> 和 <code>'/'</code> 。
- 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
- 两个整数之间的除法总是 **向零截断**  。
- 表达式中不含除零运算。
- 输入是一个根据逆波兰表示法表示的算术表达式。
- 答案及所有中间计算结果可以用 **32 位**  整数表示。

**示例1：** 

> **输入：** tokens = ["2","1","+","3","*"]
**输出：** 9
**解释：** 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

**示例2：** 

> **输入：** tokens = ["4","13","5","/","+"]
**输出：** 6
**解释：** 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6

**示例3：** 

> **输入：** tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
**输出：** 22
**解释：** 该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

**提示：** 

- <code>1 <= tokens.length <= 10^4</code>
- <code>tokens[i]</code>是一个算符（<code>"+"</code>、<code>"-"</code>、<code>"*"</code> 或 <code>"/"</code>），或是在范围 <code>[-200, 200]</code> 内的一个整数

**逆波兰表达式：** 

逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。

- 平常使用的算式则是一种中缀表达式，如 <code>( 1 + 2 ) * ( 3 + 4 )</code> 。
- 该算式的逆波兰表达式写法为 <code>( ( 1 2 + ) ( 3 4 + ) * )</code> 。

逆波兰表达式主要有以下两个优点：

- 去掉括号后表达式无歧义，上式即便写成 <code>1 2 + 3 4 + * </code>也可以依据次序计算出正确结果。
- 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中

**思路**：
主要是遍历 tokens。我们维护一个栈，然后遍历 tokens 数组并处理其中的元素：

1. 如果是数字，就将它进栈
2. 如果是算术操作符，就将栈中的最新两个元素出栈，进行运算后，再将运算结果入栈

一直将 tokens 数组遍历完之后，栈中的栈顶元素就是我们所需要的值
**题解**：
```js
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    for (let token of tokens) {
        // 1. 判断是否为操作符
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            // 2. 弹出两个操作数
            const b = stack.pop(); // 右操作数
            const a = stack.pop(); // 左操作数
            
            // 3. 根据操作符进行运算
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    // 题目要求只保留整数部分，向零截断
                    const res = a / b;
                    stack.push(res > 0 ? Math.floor(res) : Math.ceil(res));
                    break;
            }
        } else {
            // 4. 如果是数字，转成 Number 后入栈
            stack.push(Number(token));
        }
    }
    
    // 最后栈里剩下的唯一元素就是答案
    return stack[0];
};
```

# [224. 基本计算器](https://leetcode.cn/problems/basic-calculator/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串表达式 <code>s</code> ，请你实现一个基本计算器来计算并返回它的值。

注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 <code>eval()</code> 。

**示例 1：** 

> **输入：** s = "1 + 1"
**输出：** 2

**示例 2：** 

> **输入：** s = " 2-1 + 2 "
**输出：** 3

**示例 3：** 

> **输入：** s = "(1+(4+5+2)-3)+(6+8)"
**输出：** 23

**提示：** 

- <code>1 <= s.length <= 3* 10^5</code>
- <code>s</code> 由数字、<code>'+'</code>、<code>'-'</code>、<code>'('</code>、<code>')'</code>、和 <code>' '</code> 组成
- <code>s</code> 表示一个有效的表达式
- <code>'+'</code>不能用作一元运算(例如， <code>"+1"</code>和 <code>"+(2 + 3)"</code>无效)
- <code>'-'</code>可以用作一元运算(即 <code>"-1"</code>和 <code>"-(2 + 3)"</code>是有效的)
- 输入中不存在两个连续的操作符
- 每个数字和运行的计算将适合于一个有符号的 32位 整数

**思路**：
我们得先定义一个 sign，用来表示当前的正负号。还得有一个栈 operations，用来表示符号栈。

1. 遍历字符串数组：
   (a) 如果遇到正号时，我们将 sign 设置为 operations 栈的最后一项。
   (b) 如果遇到负号，我们就把 sign 设置为 operations 最后一项的相反数。
   (c) 如果遇到左括号，我们就将当前的 sign 入栈。
   (d) 如果遇到了右括号，我们就对 operations 栈进行弹出操作。
   (e) 如果遇到了数字，我们就把它乘上 sign，然后累加到结果中。注意，如果是多位数字的话，需要读取完之后，再乘上 sign 加到结果中。

2. 遍历完成后，得到的结果就是我们所需要的结果。

那我们为什么需要维护 operations 栈呢？

这主要是方便我们记录：当我们离开当前括号所包裹的一个域之后，外面那个区域的符号应该是正的还是负的。因为我们这个操作实际上只是将一堆数字想象成正数和负数的加法，所以我们需要记忆每个区域的正负情况。

这是这道题解题的关键，也是我们的解法能够实现的根本。
**题解**：
```js
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let res = 0;
    let sign = 1; // 当前数字的最终生效符号
    const operations = [1]; // 符号栈，记录括号外的环境符号
    
    let i = 0;
    const n = s.length;

    while (i < n) {
        const char = s[i];

        if (char === ' ') {
            i++;
        } else if (char === '+') {
            // 遇到 +，当前环境符号由栈顶决定
            sign = operations[operations.length - 1];
            i++;
        } else if (char === '-') {
            // 遇到 -，当前环境符号是栈顶的相反数
            sign = -operations[operations.length - 1];
            i++;
        } else if (char === '(') {
            // 遇到左括号，把当前确定的 sign 存入环境栈
            operations.push(sign);
            i++;
        } else if (char === ')') {
            // 离开括号，弹出环境符号
            operations.pop();
            i++;
        } else {
            // 处理数字（注意多位数）
            let num = 0;
            while (i < n && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (s[i] - '0');
                i++;
            }
            res += sign * num;
        }
    }

    return res;
};
```
# [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个链表的头节点 <code>head</code> ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：<code>pos</code> 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 <code>true</code> 。 否则，返回 <code>false</code> 。

**示例 1：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png">

> **输入：** head = [3,2,0,-4], pos = 1
**输出：** true
**解释：** 链表中有一个环，其尾部连接到第二个节点。

**示例2：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png">

> **输入：** head = [1,2], pos = 0
**输出：** true
**解释：** 链表中有一个环，其尾部连接到第一个节点。

**示例 3：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png">

> **输入：** head = [1], pos = -1
**输出：** false
**解释：** 链表中没有环。

**提示：** 

- 链表中节点的数目范围是 <code>[0, 10^4]</code>
- <code>-10^5 <= Node.val <= 10^5</code>
- <code>pos</code> 为 <code>-1</code> 或者链表中的一个 **有效索引**  。

**进阶：** 你能用 <code>O(1)</code>（即，常量）内存解决此问题吗？

**思路**：
这题用快慢指针法：

1. 慢指针指向头部，快指针指向头部的 next。
2. 每次快指针走两步，慢指针走一步。
3. 如果快指针和慢指针在某一步相遇了，就直接返回 true。
4. 直到快指针为 null 或者快指针的 next 为 null 时结束循环，并返回 false。
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 边界情况：如果链表为空或只有一个节点且无环
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    // 只要兔子没跑出边界，就一直跑
    while (fast && fast.next) {
        // 如果相遇了，说明有环
        if (slow === fast) {
            return true;
        }
        
        // 乌龟走一步
        slow = slow.next;
        // 兔子走两步
        fast = fast.next.next;
    }

    // 兔子撞到了终点，说明无环
    return false;
};
```

# [2. 两数相加](https://leetcode.cn/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150)

给你两个**非空**  的链表，表示两个非负的整数。它们每位数字都是按照**逆序** 的方式存储的，并且每个节点只能存储**一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0开头。

<strong class="example">示例 1：** 
<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg" style="width: 483px; height: 342px;">

> **输入：** l1 = [2,4,3], l2 = [5,6,4]
**输出：** [7,0,8]
**解释：** 342 + 465 = 807.

<strong class="example">示例 2：** 

> **输入：** l1 = [0], l2 = [0]
**输出：** [0]

<strong class="example">示例 3：** 

> **输入：** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
**输出：** [8,9,9,9,0,0,0,1]

**提示：** 

- 每个链表中的节点数在范围 <code>[1, 100]</code> 内
- <code>0 <= Node.val <= 9</code>
- 题目数据保证列表表示的数字不含前导零

**思路**：
我们初始化一个 inherit 变量和一个哨兵节点，初始化一个 current 节点赋值为 哨兵节点，然后使用两个指针 P1 和 P2。

1. 这里不用索引，而是使用两个指针分别指向两个链表。
2. 将当前节点的值与 inherit 相加。
   (a) 如果结果大于 10，将它们整除 10 的结果赋值给 inherit。
   (b) 将它们取模 10 的结果链表中。
3. 处理链表长度不一致的情况：
   (a) 如果其中一个链表（例如 P2）的 next 是 null，表示它已经结束了。
   (b) 此后将 P2 所指的值直接当作0来参与运算。

然后返回哨兵节点的 next 作为结果
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 1. 初始化哨兵节点和进位
    let dummy = new ListNode(0);
    let current = dummy;
    let inherit = 0;

    // 2. 只要 l1 或 l2 还没走完，或者还有进位没处理
    while (l1 !== null || l2 !== null || inherit !== 0) {
        // (a) 取出当前位的值，如果链表已经结束则取 0
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        // (b) 计算当前位的和以及新的进位
        let sum = val1 + val2 + inherit;
        inherit = Math.floor(sum / 10);
        
        // (c) 将结果取模后存入新节点
        current.next = new ListNode(sum % 10);
        
        // (d) 所有指针后移一步
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // 3. 返回哨兵节点的 next
    return dummy.next;
};
```

# [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150)

将两个升序链表合并为一个新的 **升序**  链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;">

> **输入：** l1 = [1,2,4], l2 = [1,3,4]
**输出：** [1,1,2,3,4,4]

**示例 2：** 

> **输入：** l1 = [], l2 = []
**输出：** []

**示例 3：** 

> **输入：** l1 = [], l2 = [0]
**输出：** [0]

**提示：** 

- 两个链表的节点数目范围是 <code>[0, 50]</code>
- <code>-100 <= Node.val <= 100</code>
- <code>l1</code> 和 <code>l2</code> 均按 **非递减顺序**  排列

**思路**：
初始化一个 current 节点，并以 p1 和 p2 节点作为指针，分别用来遍历两个链表。

1. 比较节点值：
   当 p1 的值小于 p2 的值时，将 p1 的节点插入到新链表的下一项；否则，将 p2 的节点插入到新链表的下一项。
2. 处理剩余节点：
   如果其中一个指针已经遍历完整个链表，则利用另一个指针，将当前所指向的节点及其后续链表直接拼接（即作为新链表的下一项）。

最后返回哨兵节点的 next，这就是我们所需要的链表。
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 1. 初始化哨兵节点
    let dummy = new ListNode(0);
    let current = dummy;

    // 使用 p1, p2 作为指针
    let p1 = list1;
    let p2 = list2;

    // 2. 比较并拼接节点
    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            current.next = p1; // 接入 p1
            p1 = p1.next;      // p1 后移
        } else {
            current.next = p2; // 接入 p2
            p2 = p2.next;      // p2 后移
        }
        current = current.next; // 结果链表指针后移
    }

    // 3. 处理剩余节点（核心优势：只需连接一次）
    if (p1 !== null) {
        current.next = p1;
    } else if (p2 !== null) {
        current.next = p2;
    }

    // 返回哨兵节点的下一项
    return dummy.next;
};
```

# [138. 随机链表的复制](https://leetcode.cn/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个长度为 <code>n</code> 的链表，每个节点包含一个额外增加的随机指针 <code>random</code> ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的**<a href="https://baike.baidu.com/item/深拷贝/22785317?fr=aladdin" target="_blank">深拷贝</a>** 。深拷贝应该正好由 <code>n</code> 个 **全新**  节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 <code>next</code> 指针和 <code>random</code> 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。**复制链表中的指针都不应指向原链表中的节点 ** 。

例如，如果原链表中有 <code>X</code> 和 <code>Y</code> 两个节点，其中 <code>X.random --> Y</code> 。那么在复制链表中对应的两个节点 <code>x</code> 和 <code>y</code> ，同样有 <code>x.random --> y</code> 。

返回复制链表的头节点。

用一个由<code>n</code>个节点组成的链表来表示输入/输出中的链表。每个节点用一个<code>[val, random_index]</code>表示：

- <code>val</code>：一个表示<code>Node.val</code>的整数。
- <code>random_index</code>：随机指针指向的节点索引（范围从<code>0</code>到<code>n-1</code>）；如果不指向任何节点，则为<code>null</code>。

你的代码 **只**  接受原链表的头节点 <code>head</code> 作为传入参数。

<strong class="example">示例 1：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/01/09/e1.png" style="height: 142px; width: 700px;">

> **输入：** head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
**输出：** [[7,null],[13,0],[11,4],[10,2],[1,0]]

<strong class="example">示例 2：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/01/09/e2.png" style="height: 114px; width: 700px;">

> **输入：** head = [[1,1],[2,1]]
**输出：** [[1,1],[2,1]]

<strong class="example">示例 3：** 

**<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/01/09/e3.png" style="height: 122px; width: 700px;">** 

> **输入：** head = [[3,null],[3,0],[3,null]]
**输出：** [[3,null],[3,0],[3,null]]

**提示：** 

- <code>0 <= n <= 1000</code>
- <code>-10^4<= Node.val <= 10^4</code>
- <code>Node.random</code>为<code>null</code> 或指向链表中的节点。

**思路**：
在最开始先检查当前 head 是不是为 null。如果是 null 的话，就返回一个 null，这作为一个递归的结束条件。

如果说在 cachedNode 的哈希表中没有查询到当前的 head，那么我们需要新创建一个节点：
1. 在 cachedNode.set 中将当前 head 作为 key，然后创建一个占位的对象
2. 修改节点的 next 和 random
3. 将 cachedNode.get(head) 对应的 key 替换为以下内容：
   (a) next 是 copyRandomList(head.next, cachedNode)
   (b) random 是 copyRandomList(head.random, cachedNode)

这里使用一个递归的思路。如果当前 head 已经在 cachedNode 里面被处理过了，那么我们就直接返回 cachedNode 哈希表中对应的 value
**题解**：
```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 * this.val = val;
 * this.next = next;
 * this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @param {Map} cachedNode
 * @return {Node}
 */
var copyRandomList = function(head, cachedNode = new Map()) {
    // 1. 递归出口：如果是空节点，直接返回 null
    if (head === null) {
        return null;
    }

    // 2. 检查缓存：如果已经克隆过这个节点，直接返回克隆后的副本
    if (cachedNode.has(head)) {
        return cachedNode.get(head);
    }

    // 3. 核心逻辑：
    // (a) 先创建一个“半成品”新节点，并立即放入缓存（非常关键，防止 random 指针循环引用导致死循环）
    const newNode = new Node(head.val);
    cachedNode.set(head, newNode);

    // (b) 递归地填充 next 指针和 random 指针
    // 这里会触发递归，直到遇到 null 或者 缓存中已有的节点
    newNode.next = copyRandomList(head.next, cachedNode);
    newNode.random = copyRandomList(head.random, cachedNode);

    // 4. 返回克隆好的节点
    return newNode;
};
```

# [92. 反转链表 II](https://leetcode.cn/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给你单链表的头指针 <code>head</code> 和两个整数<code>left</code> 和 <code>right</code> ，其中<code>left <= right</code> 。请你反转从位置 <code>left</code> 到位置 <code>right</code> 的链表节点，返回 **反转后的链表**  。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg" style="width: 542px; height: 222px;">

> **输入：** head = [1,2,3,4,5], left = 2, right = 4
**输出：** [1,4,3,2,5]

**示例 2：** 

> **输入：** head = [5], left = 1, right = 1
**输出：** [5]

**提示：** 

- 链表中节点数目为 <code>n</code>
- <code>1 <= n <= 500</code>
- <code>-500 <= Node.val <= 500</code>
- <code>1 <= left <= right <= n</code>

**进阶：**  你可以使用一趟扫描完成反转吗？

**思路**：
我们首先需要初始化一个哨兵节点，哨兵节点的 next 是 head。然后让 prev 节点等于这个哨兵节点，通过遍历先找到 left 前面的那个节点。

接着让 current 节点为 prev 的 next。此时我们从 left 到 right 进行一次遍历，也就是让 current 向右进行探索：每次都获得一个 next 节点，将它“挖”出来，然后抛到 prev 的后面，从而实现一个反转穿插的操作。

实际上 current 一直都是同一个节点，只不过它的 next 节点一直在变化，且它前面一直在填充节点，从而达到了向右探索移动的效果。因为只有 right - left 个节点需要反转，所以我们只需要进行 right - left 次操作。

具体的具体操作流程如下：
1. 将 next 赋值为 current.next
2. 将 current.next 设置为 next.next
3. 将 next.next 设置为 prev.next
4. 将 prev.next 设置为 next

这样就实现了一个挖出并抛到 prev 后面的操作。当我们执行完完整的步骤之后，直接返回哨兵节点的 next 即可完成这道题。
**题解**：
```js
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 1. 初始化哨兵节点
    const dummy = new ListNode(0);
    dummy.next = head;
    
    // 2. 找到 left 前面的那个节点 pre
    let prev = dummy;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // 3. 核心穿插反转逻辑
    let current = prev.next; 
    
    // 只需要操作 right - left 次
    for (let i = 0; i < right - left; i++) {
        // (1) 将 next 赋值为 current.next (找到那个要被“挖”出来的幸运儿)
        let next = current.next;
        
        // (2) 将 current.next 设置为 next.next (扫雷车绕过 next，连上更后面的人)
        current.next = next.next;
        
        // (3) 将 next.next 设置为 prev.next (幸运儿反手拉住当前反转区域的头)
        next.next = prev.next;
        
        // (4) 将 prev.next 设置为 next (prev 重新认领新的幸运儿作为开头)
        prev.next = next;
    }

    // 4. 返回哨兵节点的 next
    return dummy.next;
};
```

# [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/description/?envType=study-plan-v2&envId=top-interview-150)

给你链表的头节点 <code>head</code> ，每<code>k</code>个节点一组进行翻转，请你返回修改后的链表。

<code>k</code> 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是<code>k</code>的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" style="width: 542px; height: 222px;">

> **输入：** head = [1,2,3,4,5], k = 2
**输出：** [2,1,4,3,5]

**示例 2：** 

<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" style="width: 542px; height: 222px;">

> **输入：** head = [1,2,3,4,5], k = 3
**输出：** [3,2,1,4,5]

**提示：** 

- 链表中的节点数目为 <code>n</code>
- <code>1 <= k <= n <= 5000</code>
- <code>0 <= Node.val <= 1000</code>

**进阶：** 你可以设计一个只用 <code>O(1)</code> 额外内存空间的算法解决此问题吗？

**思路**：
需要先初始化一个哨兵节点。此时创建一个 prev 节点，它的值赋为现在的哨兵节点。

然后开始向后遍历链表：
1. 使用一个 P 指针向后移动，每遍历到一个节点，移动k次，如果没办法移动 k 次则返回 dummy.next。
2. 创建一个 current 节点（current 是 prev.next），再定义 next 为 current.next。
3. 进行局部的链表翻转：
   (a) 让 next 等于 current.next
   (b) 将 current.next 指向 current.next.next
   (c) 将 next.next 指向 prev.next
   (d) 将 prev.next 设置为 next
4. 重复进行 K-1 次这样的翻转操作。
这里注意一点：当翻转完之后，需要将 prev 赋值为 current，同时也需要将 p 指针赋值为 prev，然后这时再让它向后探索 K 个节点，这个解决了重新定位的问题。
不断重复上述过程，直到链表遍历完毕。

返回哨兵节点的next
**题解**：
```js
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    // 1. 初始化哨兵节点
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // prev 始终指向待翻转小组的前一个节点
    let prev = dummy;

    while (true) {
        // 2. 检查剩余节点是否够 k 个
        let p = prev;
        for (let i = 0; i < k; i++) {
            p = p.next;
            if (!p) return dummy.next; // 不够 k 个了，直接返回结果
        }

        // 3. 够 k 个，开始局部翻转（执行 k-1 次穿插）
        let current = prev.next;
        for (let i = 0; i < k - 1; i++) {
            let next = current.next;
            
            // 经典的四步穿插法
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        // 4. 翻转后，current 变成了小组的末尾
        // 将 prev 移动到 current 处，准备处理下一组
        prev = current;
    }
};
```

# [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个链表，删除链表的倒数第<code>n</code>个结点，并且返回链表的头结点。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;">

> **输入：** head = [1,2,3,4,5], n = 2
**输出：** [1,2,3,5]

**示例 2：** 

> **输入：** head = [1], n = 1
**输出：** []

**示例 3：** 

> **输入：** head = [1,2], n = 1
**输出：** [1]

**提示：** 

- 链表中结点的数目为 <code>sz</code>
- <code>1 <= sz <= 30</code>
- <code>0 <= Node.val <= 100</code>
- <code>1 <= n <= sz</code>

**进阶：** 你能尝试使用一趟扫描实现吗？

**思路**：
我们先要定义两个指针（slow 和 fast）以及一个哨兵节点（dummy node）。

具体步骤如下：
1. 让快指针（fast）先向前移动 n + 1 个节点。
2. 让快慢指针同时向前移动，直到快指针的值是 null，直接执行 `slow.next = slow.next.next` 实现删除操作，然后返回 `dummy.next`。

最后执行删除操作并返回哨兵节点的 next。
**题解**：
```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 1. 哨兵节点：预防删除头节点的情况
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let slow = dummy;
    let fast = dummy;

    // 2. 快指针先走 n + 1 步
    // 因为从 dummy 出发，走 n + 1 步后，指针间距为 n
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }

    // 3. 两个指针同步移动
    // 当 fast 走到 null，slow 刚好在倒数第 n+1 个位置
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 4. “咔嚓”，跳过倒数第 n 个节点
    slow.next = slow.next.next;

    // 5. 稳稳地返回 dummy.next
    return dummy.next;
};
```

# [82. 删除排序链表中的重复元素 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个已排序的链表的头<code>head</code> ，删除原始链表中所有重复数字的节点，只留下不同的数字。返回 已排序的链表。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg" style="height: 142px; width: 500px;">

> **输入：** head = [1,2,3,3,4,4,5]
**输出：** [1,2,5]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg" style="height: 164px; width: 400px;">

> **输入：** head = [1,1,1,2,3]
**输出：** [2,3]

**提示：** 

- 链表中节点数目在范围 <code>[0, 300]</code> 内
- <code>-100 <= Node.val <= 100</code>
- 题目数据保证链表已经按升序 **排列**

**思路**：
使用一个指针 prev 对链表进行一次遍历。
1. prev 初始值为 dummy ，prev 向前走
2. 当 prev.next.val 等于 prev.next.next.val 的时候记录 val 为 x，直接让 prev.next 等于 prev.next.next，直到 prev.next.val 不等于 x
3. 此时再让 prev 往前检查，直到 prev.next 或者 prev.next.next 的值是 null
4. 当 prev.next.val 不等于 prev.next.next.val 的时候往前走
5. 最后返回哨兵节点的 next。

在这个过程中，我们还需要有一个哨兵节点，让它的 next 为 head
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 1. 初始化哨兵节点，next 指向 head
    let dummy = new ListNode(0, head);
    let prev = dummy;

    // 3. 往前检查，直到 prev.next 或 prev.next.next 为 null
    while (prev.next && prev.next.next) {
        // 2. 当发现连续两个节点值相等时
        if (prev.next.val === prev.next.next.val) {
            // 记录重复的值为 x
            let x = prev.next.val;
            // 直接让 prev.next 指向后面，直到跳过所有值为 x 的节点
            while (prev.next && prev.next.val === x) {
                prev.next = prev.next.next;
            }
            // 关键：此时不执行 prev = prev.next，留在原地观察新接上来的节点
        } else {
            // 4. 当 prev.next.val 不等于 prev.next.next.val 的时候，prev 才往前走
            prev = prev.next;
        }
    }

    // 5. 返回哨兵节点的 next
    return dummy.next;
};
```

# [61. 旋转链表](https://leetcode.cn/problems/rotate-list/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个链表的头节点 <code>head</code> ，旋转链表，将链表每个节点向右移动<code>k</code>个位置。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg" style="width: 450px;">

> **输入：** head = [1,2,3,4,5], k = 2
**输出：** [4,5,1,2,3]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg" style="width: 305px; height: 350px;">

> **输入：** head = [0,1,2], k = 4
**输出：** [2,0,1]

**提示：** 

- 链表中节点的数目在范围 <code>[0, 500]</code> 内
- <code>-100 <= Node.val <= 100</code>
- <code>0 <= k <= 2 * 10^9</code>

**思路**：
这道题需要进行两次遍历：
1. 一次遍历：获取链表的长度。
2. 第二次遍历：进行链表的旋转。

具体步骤如下：
1. 初始化一个哨兵节点，将其 next 指向当前的 head。
2. 遍历当前链表获取长度，并将 k 赋值为 k 对链表长度的模运算结果。
3. 设置一快一慢两个节点。快节点比慢节点先走 k 步，然后快慢节点同时向前走，直到快节点的 next 为 null。
4. dummy.next = slow.next
5. 将慢指针所指节点的 next 设置为 null。
6. 将快指针的 next 设置为 head。
7. 最后返回哨兵节点的 next。
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 基础边界检查：如果链表为空或只有一个节点，旋转无意义
    if (!head || !head.next || k === 0) return head;

    // 1. 初始化哨兵节点
    let dummy = new ListNode(0);
    dummy.next = head;

    // 2. 第一次遍历：获取链表长度
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }

    // 将 k 对长度取模，如果 k 为 0 则不需要旋转
    k = k % length;
    if (k === 0) return head;

    // 3. 设置快慢指针，从哨兵节点出发
    let fast = dummy;
    let slow = dummy;

    // 快节点先走 k 步
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // 快慢节点同时向前走，直到快节点的 next 为 null
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 4. 执行旋转逻辑
    // 此时 slow 位于新链表的尾部，slow.next 是新链表的头部
    dummy.next = slow.next;

    // 6. 将旧的快指针（旧尾部）指向旧的 head
    fast.next = head;

    // 5. 将慢指针（新尾部）的 next 设置为 null
    slow.next = null;

    // 7. 返回哨兵节点的 next
    return dummy.next;
};
```

# [86. 分隔链表](https://leetcode.cn/problems/partition-list/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个链表的头节点 <code>head</code> 和一个特定值 <code>x</code> ，请你对链表进行分隔，使得所有 **小于**  <code>x</code> 的节点都出现在 **大于或等于**  <code>x</code> 的节点之前。

你应当 **保留**  两个分区中每个节点的初始相对位置。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/partition.jpg" style="width: 662px; height: 222px;">

> **输入：** head = [1,4,3,2,5,2], x = 3
**输出** ：[1,2,2,4,3,5]

**示例 2：** 

> **输入：** head = [2,1], x = 2
**输出** ：[1,2]

**提示：** 

- 链表中节点的数目在范围 <code>[0, 200]</code> 内
- <code>-100 <= Node.val <= 100</code>
- <code>-200 <= x <= 200</code>

**思路**：
创建两个哨兵节点以及三个指针（P、P1 和 P2）。

1. 核心逻辑：
   (a) P 用来遍历原来的链表。
   (b) 将所有小于 X 的节点添加到哨兵节点 1 代表的链表末尾。
   (c) 如果是大于等于 X 的节点，则插入到哨兵节点 2 代表的链表末尾。
   (d) 如果当前哨兵节点 的 next 是 null，则直接将当前节点连接到其后。
   (f) 此时 P1 和 P2 也会随着插入操作向后移动，始终保持在各自链表的末尾，用于辅助插入。

2. 后续处理：
   (a) 遍历完 P 后，直接让 P1 的 next 指向哨兵节点 2 的 next。
   (b) 最后返回哨兵节点 1 的 next 即可。
   (c) 注意要把大链表的末尾切断防止形成环 p2.next = null
**题解**：
```js
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // 1. 创建两个哨兵节点，smallHead 存放小于 x 的，largeHead 存放大于等于 x 的
    let smallHead = new ListNode(0);
    let largeHead = new ListNode(0);
    
    // P1, P2 始终保持在各自链表的末尾
    let p1 = smallHead;
    let p2 = largeHead;
    
    // 2. P 用来遍历原链表
    let p = head;
    while (p !== null) {
        if (p.val < x) {
            p1.next = p;   // 接入小链表
            p1 = p1.next;  // 移动末尾指针
        } else {
            p2.next = p;   // 接入大链表
            p2 = p2.next;  // 移动末尾指针
        }
        p = p.next;
    }
    
    // 3. 后续处理：
    // 【关键一步】：大链表的末尾必须切断，防止形成环！
    p2.next = null;
    
    // 4. 将小链表的末尾连接到大链表的开头（哨兵 2 的 next）
    p1.next = largeHead.next;
    
    // 5. 返回哨兵 1 的 next
    return smallHead.next;
};
```

# [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150)

<div class="title__3Vvk">请你设计并实现一个满足 <a href="https://baike.baidu.com/item/LRU" target="_blank">LRU (最近最少使用) 缓存</a> 约束的数据结构。

<div class="title__3Vvk">实现 <code>LRUCache</code> 类：

<div class="original__bRMd">

- <code>LRUCache(int capacity)</code> 以 **正整数**  作为容量<code>capacity</code> 初始化 LRU 缓存
- <code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。
- <code>void put(int key, int value)</code>如果关键字<code>key</code> 已经存在，则变更其数据值<code>value</code> ；如果不存在，则向缓存中插入该组<code>key-value</code> 。如果插入操作导致关键字数量超过<code>capacity</code> ，则应该 **逐出**  最久未使用的关键字。

函数 <code>get</code> 和 <code>put</code> 必须以 <code>O(1)</code> 的平均时间复杂度运行。

**示例：** 

> **输入** 
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
**输出** 
[null, null, null, 1, null, -1, null, -1, 3, 4]

**解释** 
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

**提示：** 

- <code>1 <= capacity <= 3000</code>
- <code>0 <= key <= 10000</code>
- <code>0 <= value <= 10^5</code>
- 最多调用 <code>2 * 10^5</code> 次 <code>get</code> 和 <code>put</code>

**思路**：
我们修改一下双向链表（DoubleLinkedListNode）的结构。它内部包含四个属性：key、value、prev 和 next。

在 LRU Cache 里面，我们需要维护一个 Map，以及一个头部节点和尾部节点。实际上是设置一个伪头部和伪尾部节点，让 head.next 指向 tail，让 tail.prev 指向 head，这样是为了方便进行节点的删除和插入操作。

我们需要定义三个辅助函数：
1. **removeNode**：
   将当前节点 node 的 prev 节点的 next 指向 node 的 next 节点，并让 node.next 的 prev 指向 node 的 prev，从而删除中间这个节点。

2. **addToTail**：
   将节点添加到尾部。具体逻辑是：
   (a) 让 node.prev 指向 tail.prev
   (b) 让 node.next 指向 tail
   (c) 让 tail.prev.next 指向 node
   (d) 最后让 tail.prev 指向 node

3. **moveToTail**：
   将已存在的节点移动到尾部。操作步骤是先调用 removeNode 删除该节点，然后再调用 addToTail 将其添加到尾部。

接下来是核心操作：
- **get 操作**：
  先检查 Map 中是否存在该 key。如果没有则返回 -1；如果有，我们获取该节点，执行 moveToTail 将其移到尾部，最后返回该节点的 value。

- **put 操作**：
  先检查该节点是否已存在于 Map 中：
  1. 如果存在：取出节点，修改其 value，然后执行 moveToTail。
  2. 如果不存在：
     (a) 判断当前 Map 的 size 是否等于 capacity。如果已满，我们获取 head.next（即真实的头部节点），从 Map 中删除该节点的 key 记录，并执行 removeNode 移除该节点。
     (b) 根据当前的 key 和 value 创建一个新节点，在 Map 中进行 set 关联，最后执行 addToTail 操作将新节点添加到链表尾部。
**题解**：
```js
class DoubleLinkedListNode {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new DoubleLinkedListNode(); // 伪头部
    this.tail = new DoubleLinkedListNode(); // 伪尾部
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

// 1. 辅助函数：删除节点
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

// 2. 辅助函数：添加到尾部（伪尾部之前）
LRUCache.prototype.addToTail = function(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
};

// 3. 辅助函数：移动到尾部
LRUCache.prototype.moveToTail = function(node) {
    this.removeNode(node);
    this.addToTail(node);
};

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.moveToTail(node); // 最近访问，移到尾部
    return node.value;
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        node.value = value;
        this.moveToTail(node);
    } else {
        if (this.map.size === this.capacity) {
            // 获取 head.next (最久未使用的节点)
            const lru = this.head.next;
            this.map.delete(lru.key); // 从 Map 删除
            this.removeNode(lru);      // 从链表删除
        }
        const newNode = new DoubleLinkedListNode(key, value);
        this.map.set(key, newNode);
        this.addToTail(newNode);
    }
};
```

# [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个二叉树 <code>root</code> ，返回其最大深度。

二叉树的 **最大深度**  是指从根节点到最远叶子节点的最长路径上的节点数。

**示例 1：** 

<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" style="width: 400px; height: 277px;">

> <b>输入：</b>root = [3,9,20,null,null,15,7]
<b>输出：</b>3

**示例 2：** 

> <b>输入：</b>root = [1,null,2]
<b>输出：</b>2

**提示：** 

- 树中节点的数量在<code>[0, 10^4]</code>区间内。
- <code>-100 <= Node.val <= 100</code>

**思路**：
这题使用了一个递归的思想：return root.left 和 root.right 分别 max steps 中的最大值加 1 就可以了, 本身为 null 返回 0
**题解**：
```js
var maxDepth = function(root) {
    // 基准情形：如果节点为空，深度显然为 0
    if (!root) return 0;
    
    // 递归公式：当前树的最大深度 = 左右子树中较大的那个深度 + 1（当前节点占的一层）
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

# [100. 相同的树](https://leetcode.cn/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给你两棵二叉树的根节点 <code>p</code> 和 <code>q</code> ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg" style="width: 622px; height: 182px;">

> **输入：** p = [1,2,3], q = [1,2,3]
**输出：** true

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg" style="width: 382px; height: 182px;">

> **输入：** p = [1,2], q = [1,null,2]
**输出：** false

**示例 3：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg" style="width: 622px; height: 182px;">

> **输入：** p = [1,2,1], q = [1,1,2]
**输出：** false

**提示：** 

- 两棵树上的节点数目都在范围 <code>[0, 100]</code> 内
- <code>-10^4 <= Node.val <= 10^4</code>

**思路**：
使用递归。

1. 如果非 P 并且非 Q，return true
2. 如果非 P，或者非 Q，或者 P 和 Q 的 value 不相等，return false
3. 在函数最后 return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)，即判断 P 的左子树和右子树是不是都相等即可
**题解**：
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (!p || !q ||p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```

# [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给你一棵二叉树的根节点 <code>root</code> ，翻转这棵二叉树，并返回其根节点。

**示例 1：** 

<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" style="height: 165px; width: 500px;">

> **输入：** root = [4,2,7,1,3,6,9]
**输出：** [4,7,2,9,6,3,1]

**示例 2：** 

<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" style="width: 500px; height: 120px;">

> **输入：** root = [2,1,3]
**输出：** [2,3,1]

**示例 3：** 

> **输入：** root = []
**输出：** []

**提示：** 

- 树中节点数目范围在 <code>[0, 100]</code> 内
- <code>-100 <= Node.val <= 100</code>

**思路**：
使用递归的方法进行一个自底向上的翻转：

1. 将 left 赋值为翻转之后的左子树
2. 将 right 赋值为翻转之后的右子树
3. 将 root.left 设置为 right
4. 将 root.right 设置为 left
5. 最后返回 root
**题解**：
```js
var invertTree = function(root) {
    if (!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
```

# [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个二叉树的根节点 <code>root</code> ， 检查它是否轴对称。

**示例 1：** 
<img alt="" src="https://pic.leetcode.cn/1698026966-JDYPDU-image.png" style="width: 354px; height: 291px;">

> **输入：** root = [1,2,2,3,4,4,3]
**输出：** true

**示例 2：** 
<img alt="" src="https://pic.leetcode.cn/1698027008-nPFLbM-image.png" style="width: 308px; height: 258px;">

> **输入：** root = [1,2,2,null,3,null,3]
**输出：** false

**提示：** 

- 树中节点数目在范围 <code>[1, 1000]</code> 内
- <code>-100 <= Node.val <= 100</code>

**进阶：** 你可以运用递归和迭代两种方法解决这个问题吗？

**思路**：
写一个辅助函数，用于判断二叉树是否镜像对称。

这个函数的核心逻辑是判断两个节点是否“镜像相等”，具体内容如下：
1. 首先处理边界情况：如果传入的两个节点都是 None（null），则返回 true。
2. 如果其中一个节点为 None，或者两个节点的值（val）不相等，则返回 false。
3. 递归判断镜像状态：
   (a) 第一个节点的 right 和第二个节点的 left 是否镜像相等。
   (b) 第一个节点的 left 和第二个节点的 right 是否镜像相等。
4. 对上述两个递归结果取“与”（and）操作并返回。

最后，在主函数中调用这个辅助函数，传入 root 的 left 和 right，判断它们是否镜像相等即可。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 题目提示节点数至少为 1，所以 root 肯定存在
    if (!root) return true;

    // 调用辅助函数判断左右子树是否镜像
    return isMirror(root.left, root.right);
};

/**
 * 辅助函数：判断两棵树是否镜像对称
 */
function isMirror(p, q) {
    // 1. 两个节点都为空，是对称的
    if (!p && !q) return true;
    
    // 2. 其中一个为空，或者值不相等，不是对称的
    if (!p || !q || p.val !== q.val) return false;
    
    // 3. 递归判断镜像状态：
    // (a) p 的左边和 q 的右边比
    // (b) p 的右边和 q 的左边比
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}
```

# [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个整数数组<code>preorder</code> 和 <code>inorder</code>，其中<code>preorder</code> 是二叉树的**先序遍历** ， <code>inorder</code>是同一棵树的**中序遍历** ，请构造二叉树并返回其根节点。

**示例 1:** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="height: 302px; width: 277px;">

> **输入** **:**  preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
**输出:**  [3,9,20,null,null,15,7]

**示例 2:** 

> **输入:**  preorder = [-1], inorder = [-1]
**输出:**  [-1]

**提示:** 

- <code>1 <= preorder.length <= 3000</code>
- <code>inorder.length == preorder.length</code>
- <code>-3000 <= preorder[i], inorder[i] <= 3000</code>
- <code>preorder</code>和<code>inorder</code>均 **无重复**  元素
- <code>inorder</code>均出现在<code>preorder</code>
- <code>preorder</code>**保证**  为二叉树的前序遍历序列
- <code>inorder</code>**保证**  为二叉树的中序遍历序列

**思路**：
这道题需要我们创建一个辅助函数用来帮助创建节点。具体步骤如下：

1. 将 preorder 中的第一个元素值作为新创建节点的值。
2. 将 inorder 中该值左右两侧的子数组，分别传进创建左子树和右子树的递归函数中。
3. 将该节点的 left 和 right 分别设置为这些函数的返回值。
4. 最后直接返回该节点即可。

特别地，如果 inorder 为空，我们需要提前返回 null。在主函数中，我们直接调用该辅助函数即可。
**题解**：
```js
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 1. 预处理：用 Map 存储 inorder 的索引，实现 O(1) 查找
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    // 2. 辅助递归函数
    // pStart, pEnd: 当前子树在 preorder 中的范围
    // iStart, iEnd: 当前子树在 inorder 中的范围
    function helper(pStart, pEnd, iStart, iEnd) {
        // 终止条件
        if (pStart > pEnd) return null;

        // (a) 根节点的值就是 preorder 的第一个元素
        let rootVal = preorder[pStart];
        let root = new TreeNode(rootVal);

        // (b) 找到根节点在 inorder 中的位置
        let mid = map.get(rootVal);

        // (c) 计算左子树节点的个数 (关键点！)
        let leftSize = mid - iStart;

        // (d) 递归构造左右子树
        // 左子树：
        // preorder 范围：[pStart + 1, pStart + leftSize]
        // inorder 范围：[iStart, mid - 1]
        root.left = helper(pStart + 1, pStart + leftSize, iStart, mid - 1);

        // 右子树：
        // preorder 范围：[pStart + leftSize + 1, pEnd]
        // inorder 范围：[mid + 1, iEnd]
        root.right = helper(pStart + leftSize + 1, pEnd, mid + 1, iEnd);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
```

# [106. 从中序与后序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个整数数组 <code>inorder</code> 和 <code>postorder</code> ，其中 <code>inorder</code> 是二叉树的中序遍历， <code>postorder</code> 是同一棵树的后序遍历，请你构造并返回这颗二叉树。

**示例 1:** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg">

> <b>输入：</b>inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
<b>输出：</b>[3,9,20,null,null,15,7]

**示例 2:** 

> <b>输入：</b>inorder = [-1], postorder = [-1]
<b>输出：</b>[-1]

**提示:** 

- <code>1 <= inorder.length <= 3000</code>
- <code>postorder.length == inorder.length</code>
- <code>-3000 <= inorder[i], postorder[i] <= 3000</code>
- <code>inorder</code>和<code>postorder</code>都由 **不同**  的值组成
- <code>postorder</code>中每一个值都在<code>inorder</code>中
- <code>inorder</code>**保证** 是树的中序遍历
- <code>postorder</code>**保证** 是树的后序遍历

**思路**：
我们可以利用 `postorder` 的最后一个元素作为当前二叉树的根节点。在构造该根节点的左子树和右子树时，我们将该节点在 `inorder` 数组中索引位置的左边和右边子数组，递归地去构造子树。

这里需要注意，因为后序遍历的顺序是“左-右-中”，所以我们倒过来处理时，顺序应该是“中-右-左”。

具体的实现细节如下：

1. 使用一个全局变量 `postIndex`，在每次遍历中进行减 1 操作来定位根节点。
2. 递归的终止条件：
   传入中序遍历数组中的左索引 `inLeft` 和右索引 `inRight`，代表当前等待创建节点的子数组范围。当 `inLeft > inRight` 时，表示没有节点需要构造了，直接返回 `null`。
3. 递归构造过程：
   (a) 先构造右子树：传入 `index + 1` 作为新的 `inLeft`，`inRight` 保持不变。
   (b) 再构造左子树：`inLeft` 保持不变，将 `index - 1` 作为新的 `inRight` 传进去。
4. 性能优化：
   在主函数中，我们可以预先创建一个 Map 来存储 `inorder` 的值与索引的对应关系，以便快速获取每个值对应的 `index`。

最后，在主函数中调用这个辅助递归函数即可。
**题解**：
```js
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    // 1. 性能优化：创建 Map 快速查找中序索引
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    // 2. 全局/闭包变量：定位后序遍历中的根节点
    let postIndex = postorder.length - 1;

    /**
     * 辅助递归函数
     * @param {number} inLeft 中序遍历范围左边界
     * @param {number} inRight 中序遍历范围右边界
     */
    function helper(inLeft, inRight) {
        // 终止条件：没有节点可以构造了
        if (inLeft > inRight) return null;

        // (a) 获取根节点的值并创建节点
        const rootVal = postorder[postIndex];
        const root = new TreeNode(rootVal);

        // 获取该值在中序遍历中的位置
        const index = map.get(rootVal);

        // 关键点：每构造一个节点，postIndex 就要向前移动一位
        postIndex--;

        // (b) 必须先构造右子树！
        // 因为 postorder 逆序是：中 -> 右 -> 左
        root.right = helper(index + 1, inRight);
        
        // (c) 再构造左子树
        root.left = helper(inLeft, index - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
};
```

# [117. 填充每个节点的下一个右侧节点指针 II](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个二叉树：

> struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 <code>NULL</code> 。

初始状态下，所有next 指针都被设置为 <code>NULL</code> 。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" style="width: 500px; height: 171px;">

> **输入** ：root = [1,2,3,4,5,null,7]
**输出：** [1,#,2,3,#,4,5,7,#]
**解释：** 给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。

<strong class="example">示例 2：** 

> **输入：** root = []
**输出：** []

**提示：** 

- 树中的节点数在范围 <code>[0, 6000]</code> 内
- <code>-100 <= Node.val <= 100</code>

**进阶：** 

- 你只能使用常量级额外空间。
- 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。

**思路**：
这里需要定义两个辅助函数：

1. getFirstChild 函数
   该函数的作用是返回当前节点的第一个有效子节点。
   (a) 如果左子节点不为空（not null），则返回左子节点。
   (b) 如果左子节点为空但右子节点不为空，则返回右子节点。
   (c) 如果左右子节点都为空，则返回 null。
   (d) 传入 null 就立马返回 null

2. initNext 函数
   该函数主要负责填充节点的 next 指针。
   (a) 如果当前节点有子树：
       - 当左右子节点同时存在时，将左子节点的 next 设置为右子节点。
       - 将右子节点（或在没有右子节点时的左子节点）的 next 指向当前节点 next 在 next 链上找到的第一个有子节点的节点的第一个有效子节点（即通过 getFirstChild 得到的结果）。
       - 右子节点不存在左子节点存在，左字节点的 next 指向当前节点 next 在 next 链上找到的第一个有子节点的节点的第一个有效子节点（即通过 getFirstChild 得到的结果）。
   (c) 接着对 right 和 left 先后递归调用 initNext ，主要是为了维护 next 链条
   (b) 如果左右子节点都不存在，则直接返回，不进行操作。

在主函数中，我们直接对 root 调用 initNext。这样程序会自顶向下地递归填充每个节点的下一个右侧节点。
**题解**：
```js
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;

    // 1. getFirstChild: 寻找一个节点的第一个有效孩子
    const getFirstChild = (node) => {
        if (!node) return null;
        return node.left || node.right || null;
    };

    // 2. 核心辅助逻辑 (这里直接写在主函数内进行递归)
    const initNext = (curr) => {
        if (!curr) return;

        // 情况 A：左右孩子都有，先连内部
        if (curr.left && curr.right) {
            curr.left.next = curr.right;
        }

        // 情况 B：找到当前节点最右边的孩子 (可能是 right 也可能是 left)
        let lastChild = curr.right || curr.left;

        if (lastChild) {
            // 在 curr.next 的链条上寻找第一个有孩子的节点
            let nextNeighbor = curr.next;
            let targetChild = null;
            
            while (nextNeighbor) {
                targetChild = getFirstChild(nextNeighbor);
                if (targetChild) break; // 找到了！
                nextNeighbor = nextNeighbor.next; // 继续往右看
            }
            lastChild.next = targetChild;
        }

        // 3. 【关键】先递归右边，再递归左边
        initNext(curr.right);
        initNext(curr.left);
    };

    initNext(root);
    return root;
};
```

# [114. 二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-interview-150)

给你二叉树的根结点 <code>root</code> ，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 <code>TreeNode</code> ，其中 <code>right</code> 子指针指向链表中下一个结点，而左子指针始终为 <code>null</code> 。
- 展开后的单链表应该与二叉树 <a href="https://baike.baidu.com/item/%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86/6442839?fr=aladdin" target="_blank">**先序遍历** </a> 顺序相同。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg" style="width: 500px; height: 226px;">

> **输入：** root = [1,2,5,3,4,null,6]
**输出：** [1,null,2,null,3,null,4,null,5,null,6]

**示例 2：** 

> **输入：** root = []
**输出：** []

**示例 3：** 

> **输入：** root = [0]
**输出：** [0]

**提示：** 

- 树中结点数在范围 <code>[0, 2000]</code> 内
- <code>-100 <= Node.val <= 100</code>

**进阶：** 你可以使用原地算法（<code>O(1)</code> 额外空间）展开这棵树吗？

**思路**：
这道题我们需要先理解二叉树遍历的一个基本原理：当前节点的右子节点，一定是在其左子树最后一个（最右边）节点遍历完之后，才会刚好被遍历到。

基于这个原理，我们可以进行原地操作：
1. 找到当前节点左子树的最右节点（即前驱节点）。
2. 将当前节点的右子树直接拼接到这个前驱节点的右边，完成提前归位。
3. 将当前的左子树整体移动到右边：
   (a) 将右节点指向当前的左节点
   (b) 将左子节点设为 null
4. 重复上述步骤，不断向右子节点进行遍历。

当我们发现当前节点的左节点已经为 null 时，不需要进行上述操作，直接处理下一个右节点即可（因为此时下一个节点就是 curr.right）。不断循环直到 curr 为 null，即可完成整个链表的展开。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let curr = root;

    while (curr !== null) {
        // 如果左子树不为空，才需要进行“搬运”操作
        if (curr.left !== null) {
            // 1. 找到左子树的最右节点（前驱节点）
            let predecessor = curr.left;
            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }

            // 2. 将当前的右子树拼接到前驱节点的右边
            predecessor.right = curr.right;

            // 3. 将左子树整体移动到右边
            curr.right = curr.left;
            curr.left = null; // 别忘了左侧置空
        }
        
        // 4. 继续处理下一个右节点（此时右节点可能是原左节点，也可能是原右节点）
        curr = curr.right;
    }
};
```

# [112. 路径总和](https://leetcode.cn/problems/path-sum/description/?envType=study-plan-v2&envId=top-interview-150)

给你二叉树的根节点<code>root</code> 和一个表示目标和的整数<code>targetSum</code> 。判断该树中是否存在 **根节点到叶子节点**  的路径，这条路径上所有节点值相加等于目标和<code>targetSum</code> 。如果存在，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**叶子节点**  是指没有子节点的节点。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" style="width: 500px; height: 356px;">

> **输入：** root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
**输出：** true
**解释：** 等于目标和的根节点到叶节点路径如上图所示。

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg">

> **输入：** root = [1,2,3], targetSum = 5
**输出：** false
**解释：** 树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。

**示例 3：** 

> **输入：** root = [], targetSum = 0
**输出：** false
**解释：** 由于树是空的，所以不存在根节点到叶子节点的路径。

**提示：** 

- 树中节点的数目在范围 <code>[0, 5000]</code> 内
- <code>-1000 <= Node.val <= 1000</code>
- <code>-1000 <= targetSum <= 1000</code>

**思路**：
这题我们将 targetSum 减去当前节点的值，并将其作为新的 targetSum。

1. 递归逻辑：
   分别对当前的左子节点和右子节点进行递归调用，并传入新的 targetSum。
2. 边界条件：
   在此之前，我们需要先进行判断：
   (a) 如果新的 targetSum 为 0，则返回 true。
   (b) 如果当前节点是 null ，则直接返回 false。
3. 返回值：
   最后返回左子树或右子树的递归结果，即 `hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum)`。

这道题利用递归的思路就可以解决。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 1. 基础边界：空树直接返回 false
    if (!root) return false;

    // 2. 更新 targetSum：减去当前节点的值
    const remainingSum = targetSum - root.val;

    // 3. 判断是否到达叶子节点
    if (!root.left && !root.right) {
        // 如果是叶子，检查剩下的钱（remainingSum）是不是刚好扣完
        return remainingSum === 0;
    }

    // 4. 递归探索：只要左边或右边有一条路通，就返回 true
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};
```

# [129. 求根节点到叶节点数字之和](https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个二叉树的根节点 <code>root</code> ，树中每个节点都存放有一个 <code>0</code> 到 <code>9</code> 之间的数字。
<div class="original__bRMd">

每条从根节点到叶节点的路径都代表一个数字：

- 例如，从根节点到叶节点的路径 <code>1 -> 2 -> 3</code> 表示数字 <code>123</code> 。

计算从根节点到叶节点生成的 **所有数字之和**  。

**叶节点**  是指没有子节点的节点。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" style="width: 212px; height: 182px;">

> **输入：** root = [1,2,3]
**输出：** 25
**解释：** 
从根到叶子节点路径 <code>1->2</code> 代表数字 <code>12</code>
从根到叶子节点路径 <code>1->3</code> 代表数字 <code>13</code>
因此，数字总和 = 12 + 13 = <code>25</code>

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" style="width: 292px; height: 302px;">

> **输入：** root = [4,9,0,5,1]
**输出：** 1026
**解释：** 
从根到叶子节点路径 <code>4->9->5</code> 代表数字 495
从根到叶子节点路径 <code>4->9->1</code> 代表数字 491
从根到叶子节点路径 <code>4->0</code> 代表数字 40
因此，数字总和 = 495 + 491 + 40 = <code>1026</code>

**提示：** 

- 树中节点的数目在范围 <code>[1, 1000]</code> 内
- <code>0 <= Node.val <= 9</code>
- 树的深度不超过 <code>10</code>

**思路**：
我们需要创建一个辅助函数，它的入参是 node 和一个前置的和（代表从根到当前父节点已经组成的数字），我们将其命名为 prevSum。

具体的实现逻辑如下：
1. 如果当前节点为空，直接返回 0。
2. 将当前的和 currentSum 赋值为 prevSum * 10 加上当前 node 的值。
3. 判断子节点情况：
   (a) 如果没有子节点了，直接返回 currentSum。
   (b) 如果还有子节点，则递归调用辅助函数处理 left 和 right，并将它们算出来的和相加后返回。

最后，在主函数中直接 return 这个辅助函数，将 root 和 0 作为参数传入即可。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    /**
     * 辅助函数：深度优先搜索
     * @param {TreeNode} node 当前节点
     * @param {number} prevSum 截止到父节点组成的数字
     */
    const dfs = (node, prevSum) => {
        // 1. 如果节点为空，不贡献任何路径和
        if (!node) return 0;

        // 2. 计算当前节点形成的数字
        const currentSum = prevSum * 10 + node.val;

        // 3. 判断是否为叶子节点
        if (!node.left && !node.right) {
            // 到达叶子，返回这条完整路径代表的数字
            return currentSum;
        }

        // 4. 否则，递归求左右子树生成的数字之和
        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    };

    // 初始调用，根节点的前置数字是 0
    return dfs(root, 0);
};
```

# [124. 二叉树中的最大路径和](https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150)

二叉树中的** 路径**  被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 **至多出现一次**  。该路径** 至少包含一个 ** 节点，且不一定经过根节点。

**路径和**  是路径中各节点值的总和。

给你一个二叉树的根节点 <code>root</code> ，返回其 **最大路径和**  。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" style="width: 322px; height: 182px;">

> **输入：** root = [1,2,3]
**输出：** 6
**解释：** 最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg">

> **输入：** root = [-10,9,20,null,null,15,7]
**输出：** 42
**解释：** 最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

**提示：** 

- 树中节点数目范围是 <code>[1, 3 * 10^4]</code>
- <code>-1000 <= Node.val <= 1000</code>

**思路**：
这道题写一个辅助获取左子树和右子树的最大路径和，然后再比较它们和 0 的大小，取不为 0 的值和当前节点的值相加得到的 currentMaxSum 作为当前计算得到的包含当前节点的子树的路径和的最大值。

初始化一个 max 用来维护路径最大值，在计算 currentMaxSum 比较变化。max

由于这个返回值是一定要用来沟通父节点的，所以只能返回 node.val + Math.max(leftGain, rightGain);（表示取左 取右 左右都不取三种可能）

如果当前节点为空，则返回 0。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    // 1. 初始化全局最大值为最小值，用于在递归中被不断挑战
    let max = -Infinity;

    /**
     * 辅助函数：计算当前节点能给父节点提供的最大增益
     */
    function getGain(node) {
        if (!node) return 0;

        // 2. 递归获取左右子树的增益
        // 这里就是你说的“比较它们和 0 的大小，取不为 0 的值”
        // 也就是：如果子树是负数，我们直接舍弃（取 0）
        let leftGain = Math.max(getGain(node.left), 0);
        let rightGain = Math.max(getGain(node.right), 0);

        // 3. 计算包含当前节点的路径和最大值 (你思路中的 currentMaxSum)
        // 允许左右两边都加上，形成一个“拱桥”
        let currentMaxSum = node.val + leftGain + rightGain;

        // 4. 维护全局最大值
        max = Math.max(max, currentMaxSum);

        // 5. 向上沟通：返回给父节点
        // 只能选一边，或者两边都不选（此时 leftGain 和 rightGain 已经是 0 了）
        return node.val + Math.max(leftGain, rightGain);
    }

    getGain(root);
    return max;
};
```

# [173. 二叉搜索树迭代器](https://leetcode.cn/problems/binary-search-tree-iterator/description/?envType=study-plan-v2&envId=top-interview-150)

实现一个二叉搜索树迭代器类<code>BSTIterator</code> ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
<div class="original__bRMd">

- <code>BSTIterator(TreeNode root)</code> 初始化 <code>BSTIterator</code> 类的一个对象。BST 的根节点 <code>root</code> 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
- <code>boolean hasNext()</code> 如果向指针右侧遍历存在数字，则返回 <code>true</code> ；否则返回 <code>false</code> 。
- <code>int next()</code>将指针向右移动，然后返回指针处的数字。

注意，指针初始化为一个不存在于 BST 中的数字，所以对 <code>next()</code> 的首次调用将返回 BST 中的最小元素。

你可以假设<code>next()</code>调用总是有效的，也就是说，当调用 <code>next()</code>时，BST 的中序遍历中至少存在一个下一个数字。

**示例：** 
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png" style="width: 189px; height: 178px;">

> **输入** 
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
**输出** 
[null, 3, 7, true, 9, true, 15, true, 20, false]

**解释** 
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // 返回 3
bSTIterator.next();    // 返回 7
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 9
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 15
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 20
bSTIterator.hasNext(); // 返回 False

**提示：** 

- 树中节点的数目在范围 <code>[1, 10^5]</code> 内
- <code>0 <= Node.val <= 10^6</code>
- 最多调用 <code>10^5</code> 次 <code>hasNext</code> 和 <code>next</code> 操作

**进阶：** 

- 你可以设计一个满足下述条件的解决方案吗？<code>next()</code> 和 <code>hasNext()</code> 操作均摊时间复杂度为 <code>O(1)</code> ，并使用 <code>O(h)</code> 内存。其中 <code>h</code> 是树的高度。

**思路**：
我们需要写一个辅助函数 `pushLeft`。`pushLeft` 的作用是将当前节点的所有左孩子节点推入到一个栈中。

具体逻辑如下：
1. 从根节点开始，一直遍历其左孩子节点并将其投入栈中。
2. 如果节点为 `null`，则停止遍历。

关于其他操作：
1. `next` 操作：将栈顶的节点弹出，然后对该节点的右子树执行相同的 `pushLeft` 逻辑。这意味着当一个节点的所有左子树都被遍历完，且该节点本身也被查找过后，就可以直接对其右子树进行相同的遍历处理。
2. `hasNext` 操作：检查栈的 `size` 是否不为零即可。
**题解**：
```js
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    // 1. 初始化一个栈，用于存储节点
    this.stack = [];
    // 2. 初始时，将根节点及其所有左孩子路径压入栈中
    this._pushLeft(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    // 3. 弹出栈顶节点，它是当前最小的元素
    const node = this.stack.pop();
    
    // 4. 关键点：如果该节点有右子树，则对右子树执行 pushLeft
    // 因为右子树中最小的节点也在它自己的最左边
    if (node.right) {
        this._pushLeft(node.right);
    }
    
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    // 5. 只要栈不为空，就说明后面还有元素
    return this.stack.length > 0;
};

/**
 * 辅助函数：将给定节点及其所有左孩子入栈
 */
BSTIterator.prototype._pushLeft = function(node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};
```

# [222. 完全二叉树的节点个数](https://leetcode.cn/problems/count-complete-tree-nodes/description/?envType=study-plan-v2&envId=top-interview-150)

给你一棵** 完全二叉树**  的根节点 <code>root</code> ，求出该树的节点个数。

<a href="https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin">完全二叉树</a> 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 <code>h</code> 层（从第 0 层开始），则该层包含 <code>1~2^h</code>个节点。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/14/complete.jpg" style="width: 372px; height: 302px;">

> **输入：** root = [1,2,3,4,5,6]
**输出：** 6

**示例 2：** 

> **输入：** root = []
**输出：** 0

**示例 3：** 

> **输入：** root = [1]
**输出：** 1

**提示：** 

- 树中节点的数目范围是<code>[0, 5 * 10^4]</code>
- <code>0 <= Node.val <= 5 * 10^4</code>
- 题目数据保证输入的树是 **完全二叉树** 

**进阶：** 遍历树来统计节点是一种时间复杂度为 <code>O(n)</code> 的简单解决方案。你可以设计一个更快的算法吗？

**思路**：
我们先定义一个计算树深度的辅助函数。从 root 开始，如果 root 不为 null，就不断向左子节点移动（root = root.left），同时让 levels 计数加 1，最后返回 levels。

关于 countNodes 函数的实现：
1. 如果输入节点为 null，则直接返回 0。
2. 分别获取左子树和右子树的高度（深度）。
3. 如果左子树和右子树的高度相等：
   说明左子树一定是满二叉树。因为右子树也达到了相同的最深层，意味着左边已经填满了。此时我们可以直接通过公式计算左子树的节点数，即 return (2的 leftLevels 次方 - 1) + 1（根节点）+ countNodes(右子树)。
4. 如果高度不相等：
   说明右子树是满二叉树（但高度比左子树少一层）。此时应 return (2的 rightLevels 次方 - 1) + 1（根节点）+ countNodes(左子树)。

这道题的思路就这样写。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) return 0;

    // 计算当前节点向左走到底的深度
    const getDepth = (node) => {
        let depth = 0;
        while (node) {
            depth++;
            node = node.left;
        }
        return depth;
    };

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);

    if (leftDepth === rightDepth) {
        /**
         * 情况 1：左深度等于右深度
         * 说明左子树是满二叉树，且最后一层在右子树中也有分布。
         * 左子树节点数 = (1 << leftDepth) - 1
         * 加上根节点 1，合计 1 << leftDepth
         */
        return (1 << leftDepth) + countNodes(root.right);
    } else {
        /**
         * 情况 2：左深度 > 右深度
         * 说明右子树是满二叉树（高度比左边少一层）。
         * 右子树节点数 = (1 << rightDepth) - 1
         * 加上根节点 1，合计 1 << rightDepth
         */
        return (1 << rightDepth) + countNodes(root.left);
    }
};
```

# [236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

<a href="https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin" target="_blank">百度百科</a>中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先** ）。”

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;">

> **输入：** root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
**输出：** 3
**解释：** 节点 <code>5 </code>和节点 <code>1 </code>的最近公共祖先是节点 <code>3 。</code>

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;">

> **输入：** root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
**输出：** 5
**解释：** 节点 <code>5 </code>和节点 <code>4 </code>的最近公共祖先是节点 <code>5 。</code>因为根据定义最近公共祖先节点可以为节点本身。

**示例 3：** 

> **输入：** root = [1,2], p = 1, q = 2
**输出：** 1

**提示：** 

- 树中节点数目在范围 <code>[2, 10^5]</code> 内。
- <code>-10^9 <= Node.val <= 10^9</code>
- 所有 <code>Node.val</code> <code>互不相同</code> 。
- <code>p != q</code>
- <code>p</code> 和 <code>q</code> 均存在于给定的二叉树中。

**思路**：
这题采用递归的思路。递归的终止条件是：当 root 为空，或者 root 为 p，或者 root 为 q 时，直接返回当前的 root。

设定 left 和 right 分别表示左子树和右子树对于该函数的返回情况：

1. 如果 left 和 right 都不为空，说明 p 和 q 分别位于当前节点的左右子树中，那么当前节点就是这个二叉树的最近公共祖先。
2. 如果当前节点不是最近公共祖先（即真正的公共祖先在当前节点更高层的位置，或者在当前节点的左边或右边），那么一定会出现其中一边找不到 p 和 q 的情况。
3. 如果 left 和 right 不同时为空，我们将当前的指针移动到 left 和 right 中不为空的那一个节点。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 1. 终止条件
    // 如果当前节点是 null，或者找到了 p，或者找到了 q，直接返回当前节点
    if (root === null || root === p || root === q) {
        return root;
    }

    // 2. 递归寻找
    // 去左子树找 p 和 q，去右子树找 p 和 q
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // 3. 结果判断
    // 情况 A：左右两边都汇报了非空结果
    // 说明 p 和 q 分别在左右两棵子树中，当前节点 root 就是最近公共祖先
    if (left !== null && right !== null) {
        return root;
    }

    // 情况 B：只有一边有结果
    // 说明 p 和 q 都在左边，或者都在右边，或者只找到了其中一个
    // 此时返回那个非空的节点（它可能是 LCA，也可能是 p 或 q 之一）
    return left !== null ? left : right;
};
```

# [199. 二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个二叉树的 **根节点**  <code>root</code>，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

<strong class="example">示例 1：** 

<div class="example-block">
<b>输入：</b>root = [1,2,3,null,5,null,4]

**输出：** [1,3,4]

**解释：** 

<img alt="" src="https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png" style="width: 400px; height: 207px;">

<strong class="example">示例 2：** 

<div class="example-block">
<b>输入：</b>root = [1,2,3,4,null,null,null,5]

<b>输出：</b>[1,3,4,5]

**解释：** 

<img alt="" src="https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png" style="width: 400px; height: 214px;">

<strong class="example">示例 3：** 

<div class="example-block">
**输入：** root = [1,null,3]

**输出：** [1,3]

<strong class="example">示例 4：** 

<div class="example-block">
<b>输入：</b>root = []

**输出：** []

**提示:** 

- 二叉树的节点个数的范围是 <code>[0,100]</code>
- <code>-100<= Node.val <= 100</code>

**思路**：
这道题需要按层次进行遍历。

1. 初始化：
   先初始化一个队列（Queue）和一个数组，然后将根节点（Root）推入队列中。
2. 开始循环：
   在每次循环开始时，先记录当前队列的长度（即当前层的节点数）。
3. 层级处理：
   根据这个长度，将当前层的所有节点依次弹出队列。在弹出的同时，将该节点的左子节点和右子节点放入队列中。
4. 结果记录：
   当我们遍历到当前层的最后一个节点时，将该节点的值推入我们的结果数组中。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root]; // 1. 初始化队列

    while (queue.length > 0) {
        // 2. 记录当前层的节点数量
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            // 3. 弹出当前层的一个节点
            let node = queue.shift();

            // 4. 如果是当前层的最后一个节点，记录到结果中
            if (i === size - 1) {
                res.push(node.val);
            }

            // 5. 将下一层节点推入队列
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return res;
};
```

# [637. 二叉树的层平均值](https://leetcode.cn/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个非空二叉树的根节点<code>root</code>, 以数组的形式返回每一层节点的平均值。与实际答案相差<code>10^-5</code> 以内的答案可以被接受。

**示例 1：** 

<img alt="" src="https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg">

> **输入：** root = [3,9,20,null,null,15,7]
**输出：** [3.00000,14.50000,11.00000]
**解释：** 第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。

**示例 2:** 

<img alt="" src="https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg">

> **输入：** root = [3,9,20,15,7]
**输出：** [3.00000,14.50000,11.00000]

**提示：** 

- 树中节点数量在<code>[1, 10^4]</code> 范围内
- <code>-2^31<= Node.val <= 2^31- 1</code>

**思路**：
需要初始化一个队列以及一个数字。

1. 层次遍历二叉树
   首先按层次对二叉树进行遍历。将根节点放入队列，然后在循环中，先记录当前队列的长度，并初始化一个 sum 变量。

2. 累加与入队
   在遍历当前层的时候，对节点值进行累加。将节点弹出队列后，再将其左子节点和右子节点依次放入队列。

3. 计算平均值
   当我们遍历到当前层的最后一个节点时，拿到总和除以该层的长度，并将结果推入到结果数组当中去。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length; // 1. 记录当前层的节点数
        let levelSum = 0;              // 2. 初始化该层的累加和

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // 3. 弹出节点
            levelSum += node.val;      // 4. 累加

            // 5. 将下一层节点送入队列
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // 6. 遍历完一层，计算平均值
        // JavaScript 的数字除法默认就是浮点数，符合题目精度要求
        result.push(levelSum / levelSize);
    }

    return result;
};
```

# [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-interview-150)

给你二叉树的根节点 <code>root</code> ，返回其节点值的 **层序遍历**  。 （即逐层地，从左到右访问所有节点）。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" style="width: 277px; height: 302px;">

> **输入：** root = [3,9,20,null,null,15,7]
**输出：** [[3],[9,20],[15,7]]

**示例 2：** 

> **输入：** root = [1]
**输出：** [[1]]

**示例 3：** 

> **输入：** root = []
**输出：** []

**提示：** 

- 树中节点数目在范围 <code>[0, 2000]</code> 内
- <code>-1000 <= Node.val <= 1000</code>

**思路**：
初始化一个队列，首先将根节点存入队列中，然后通过队列进行层序遍历。

在每次循环开始时，初始化一个数组，并获取当前队列的长度作为该层的长度。每遍历到一个节点时，将节点的值存入该循环创建的数组中。

当我们遍历到该层的最后一个节点时，将该层数组推入结果数组中。同时，每遍历一个节点，就将它的左子节点和右子节点放入队列。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root]; // 1. 初始化队列，将根节点推入

    while (queue.length > 0) {
        // 2. 获取当前层的节点数量（这道题的关键）
        const levelSize = queue.length;
        // 3. 初始化当前层的数组
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            // 4. 弹出节点并存入当前层数组
            const node = queue.shift();
            currentLevel.push(node.val);

            // 5. 将左、右子节点依次推入队列，供下一层循环使用
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // 6. 遍历完该层后，推入最终结果集
        result.push(currentLevel);
    }

    return result;
};
```

# [103. 二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/?envType=study-plan-v2&envId=top-interview-150)

给你二叉树的根节点 <code>root</code> ，返回其节点值的 **锯齿形层序遍历**  。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" style="width: 277px; height: 302px;">

> **输入：** root = [3,9,20,null,null,15,7]
**输出：** [[3],[20,9],[15,7]]

**示例 2：** 

> **输入：** root = [1]
**输出：** [[1]]

**示例 3：** 

> **输入：** root = []
**输出：** []

**提示：** 

- 树中节点数目在范围 <code>[0, 2000]</code> 内
- <code>-100 <= Node.val <= 100</code>

**思路**：
初始化结果数组和一个队列，并定义一个名为 isLeftRight 的布尔变量。

算法逻辑如下：
1. 使用循环进行层序遍历。
2. 在遍历每一层之前，先获取当前层级的长度，并初始化一个当前层的数组。
3. 将节点从队列中取出：
   (a) 如果 isLeftRight 为真，则使用 push 将节点值推入当前层数组的尾部。
   (b) 否则，使用 unshift 将节点值插入数组的头部。
   这样便实现了锯齿形层序遍历的目的。
4. 遍历完该层的最后一个节点后，将 isLeftRight 进行取反。
5. 将当前层的数组推入最终的结果数组中。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];
    let isLeftToRight = true; // 初始为从左往右

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = []; // 用于存储当前层节点值

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // 根据当前方向，决定是将值放在数组尾部还是头部
            if (isLeftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }

            // 无论输出方向如何，下一层节点入队顺序始终保持先左后右
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // 将当前层结果存入总结果
        result.push(currentLevel);
        // 关键逻辑：层级处理完后取反，切换下一层的方向
        isLeftToRight = !isLeftToRight;
    }

    return result;
};
```

# [530. 二叉搜索树的最小绝对差](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个二叉搜索树的根节点 <code>root</code> ，返回 **树中任意两不同节点值之间的最小差值**  。

差值是一个正数，其数值等于两值之差的绝对值。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg" style="width: 292px; height: 301px;">

> **输入：** root = [4,2,6,1,3]
**输出：** 1

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg" style="width: 282px; height: 301px;">

> **输入：** root = [1,0,48,null,null,12,49]
**输出：** 1

**提示：** 

- 树中节点的数目范围是 <code>[2, 10^4]</code>
- <code>0 <= Node.val <= 10^5</code>

**注意：** 本题与 783 <a href="https://leetcode.cn/problems/minimum-distance-between-bst-nodes/">https://leetcode.cn/problems/minimum-distance-between-bst-nodes/</a> 相同

**思路**：
首先，因为这棵树是一个二叉搜索树（BST），我们可以利用它的一个特点：根节点的值一定会比左子树中的所有值大，也一定会比右子树中的所有值小。

此时，我们先对根节点的左子树进行遍历。在遍历过程中，我们计算当前根节点的值与 pre（前驱节点）的值之差，并将该差值与 minDiff（当前最小差值）进行比较，从而更新 minDiff。随后，我们将 pre 设置为当前节点的值。完成这些操作后，再对右子树进行遍历。

我们之所以这样做能找到左子树中最大的值，是因为在遍历过程中，程序会先向左下角移动，然后回到中间，再向右探索。此时，左子树中探索到的最后一个节点一定是左子树里最大的节点。

由于该节点是左子树中最大的，且紧邻中间节点（在数值上相邻），通过计算两者的差值，我们就能得到有序序列中两个相邻节点的差值。按照这种方式进行遍历，我们就不会丢失任何一种可能的情况。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    // 1. 初始化最小差值为无穷大
    let minDiff = Infinity;
    // 2. 记录前驱节点的值
    let pre = null;

    const inorder = (node) => {
        if (!node) return;

        // 3. 递归遍历左子树
        inorder(node.left);

        // 4. 处理当前节点
        if (pre !== null) {
            // 因为是递增序列，当前值减去前驱值一定是正数
            minDiff = Math.min(minDiff, node.val - pre);
        }
        // 更新前驱节点为当前值
        pre = node.val;

        // 5. 递归遍历右子树
        inorder(node.right);
    };

    inorder(root);
    return minDiff;
};
```

# [230. 二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个二叉搜索树的根节点 <code>root</code> ，和一个整数 <code>k</code> ，请你设计一个算法查找其中第<code>k</code>**** 小的元素（<code>k</code> 从 1 开始计数）。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg" style="width: 212px; height: 301px;">

> **输入：** root = [3,1,4,null,2], k = 1
**输出：** 1

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg" style="width: 382px; height: 302px;">

> **输入：** root = [5,3,6,2,4,null,null,1], k = 3
**输出：** 3

**提示：** 

- 树中的节点数为 <code>n</code> 。
- <code>1 <= k <= n <= 10^4</code>
- <code>0 <= Node.val <= 10^4</code>

**进阶：** 如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 <code>k</code> 小的值，你将如何优化算法？

**思路**：
设置一个变量 count，其初始值为 0。

1. 创建一个 DFS 函数，在函数开头先判断当前节点是否为 null；如果是 null，则直接返回 null。
2. 先去左子树递归查找。如果左子树返回的结果不是 null，说明已经找到了目标值，直接返回该结果。
3. 如果左子树没找到，则对 count 进行累加。如果 count 的值等于 k，说明当前节点就是第 k 小的元素，直接返回 node.val。
4. 否则，再去右子树中进行递归查找，并返回 dfs(node.right) 的结果。

在主函数的最后，直接调用并返回 dfs(root) 即可。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0; // 记录当前是第几个被访问的节点

    const dfs = (node) => {
        if (!node) return null;

        // 1. 先去左子树找
        let left = dfs(node.left);
        // 如果左子树返回了非空值，说明在左边已经找到了，直接向上返回
        if (left !== null) return left;

        // 2. 处理当前节点（根）
        count++;
        if (count === k) {
            return node.val; // 找到了第 k 小，直接返回
        }

        // 3. 如果左边和中间都没找到，再去右子树找
        return dfs(node.right);
    };

    return dfs(root);
};
```

# [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个二叉树的根节点 <code>root</code> ，判断其是否是一个有效的二叉搜索树。

**有效**  二叉搜索树定义如下：

- 节点的左<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1q:" data-state="closed" class="">子树</button>只包含**严格小于 ** 当前节点的数。
- 节点的右子树只包含 **严格大于**  当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" style="width: 302px; height: 182px;">

> **输入：** root = [2,1,3]
**输出：** true

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" style="width: 422px; height: 292px;">

> **输入：** root = [5,1,4,null,null,3,6]
**输出：** false
**解释：** 根节点的值是 5 ，但是右子节点的值是 4 。

**提示：** 

- 树中节点数目范围在<code>[1, 10^4]</code> 内
- <code>-2^31 <= Node.val <= 2^31 - 1</code>

**思路**：
这道题我们需要先初始化一个前序值为 null 的变量 pre。解题思路如下：

1. 定义一个深度优先搜索函数 DFS：
   (a) 首先对左子树调用 DFS。
   (b) 在处理当前节点时，先判断 pre 是否为 '.'（这是一个特殊标记）。
   (c) 如果 pre 为 '.'，则不改变其值，也不进行右子树的调用了。
   (d) 如果 pre 不为 '.'，则判断 pre 与当前节点值的大小关系：
      - 若 pre 小于当前节点的值，则说明符合二叉搜索树性质，更新 pre 为当前节点的值。
      - 若 pre 大于或等于当前节点的值，则将 pre 设置为一个特殊的错误标记'.'。
   (e) 如果 pre 为 '.'，不进行右子树的调用，否则最后对右子树调用 DFS。

2. 执行流程：
   在主函数中调用该 DFS 函数遍历整棵树。遍历完成后，通过判断 pre 是否为错误标记来返回最终结果。
**题解**：
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 初始化 pre 为 null，用来记录前一个节点的值
    let pre = null;

    // 1. 定义深度优先搜索函数 DFS
    const dfs = (node) => {
        // 基础终止条件：节点为空或已经发现错误标记
        if (!node || pre === '.') return;

        // (a) 首先对左子树调用 DFS
        dfs(node.left);

        // (b) & (c) 处理当前节点时，先判断 pre 是否为 '.'
        // 如果已经是 '.'，说明左子树遍历中已经出错了，直接返回
        if (pre === '.') return;

        // (d) 如果 pre 不为 '.'，判断大小关系
        if (pre === null) {
            // 第一次访问最左侧节点，初始化 pre
            pre = node.val;
        } else {
            if (pre < node.val) {
                // 符合性质，更新 pre 为当前节点值
                pre = node.val;
            } else {
                // 不符合性质，设置为特殊错误标记 '.'
                pre = '.';
            }
        }

        // (e) 如果 pre 为 '.'，不进行右子树调用
        if (pre === '.') return;
        
        // 否则最后对右子树调用 DFS
        dfs(node.right);
    };

    // 2. 执行流程：调用 DFS 遍历整棵树
    dfs(root);

    // 遍历完成后，通过判断 pre 是否为错误标记来返回最终结果
    return pre !== '.';
};
```

# [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个由<code>'1'</code>（陆地）和 <code>'0'</code>（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

**示例 1：** 

> **输入：** grid = [
 ['1','1','1','1','0'],
 ['1','1','0','1','0'],
 ['1','1','0','0','0'],
 ['0','0','0','0','0']
]
**输出：** 1

**示例 2：** 

> **输入：** grid = [
 ['1','1','0','0','0'],
 ['1','1','0','0','0'],
 ['0','0','1','0','0'],
 ['0','0','0','1','1']
]
**输出：** 3

**提示：** 

- <code>m == grid.length</code>
- <code>n == grid[i].length</code>
- <code>1 <= m, n <= 300</code>
- <code>grid[i][j]</code> 的值为 <code>'0'</code> 或 <code>'1'</code>

**思路**：
这道题使用深度优先搜索（DFS）来实现一个“找到岛屿并淹没”的方法。具体思路如下：

1. 创建辅助函数 DFS：
   (a) 在函数内部，先获取当前格子的坐标。
   (b) 将当前格子设置为字符串 "0"，表示已访问（淹没）。
   (c) 检查上下左右四个方向。如果任意方向没有超出边界，且对应位置的值仍为字符串 "1"，则递归地对该方向调用 DFS。

2. 在主函数中执行逻辑：
   (a) 首先获取网格的行数。如果行数为 0，则直接返回 0。
   (b) 获取列数，并对这个二维数组进行遍历。
   (c) 每次遍历时，如果检查到值为 "1" 的格子，就将岛屿数量加 1。
   (d) 将当前二维数组和坐标作为入参传递给 DFS 函数，以淹没相连的陆地。

最后，返回统计到的岛屿总数即可。
**题解**：
```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 2(a). 获取行数，如果为空则直接返回 0
    const m = grid.length;
    if (m === 0) return 0;
    // 2(b). 获取列数
    const n = grid[0].length;
    let islandCount = 0;

    // 1. 创建辅助函数 DFS：淹没相连的陆地
    const dfs = (r, c) => {
        // (b). 将当前格子设置为 "0"，表示已访问（淹没）
        grid[r][c] = '0';

        // (c). 检查上下左右四个方向
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;
            
            // 检查边界且对应位置的值仍为 "1"
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === '1') {
                dfs(nr, nc);
            }
        }
    };

    // 2(b). 对二维数组进行遍历
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // 2(c). 如果检查到值为 "1" 的格子
            if (grid[r][c] === '1') {
                // 2(d). 岛屿数量加 1，并开始淹没
                islandCount++;
                dfs(r, c);
            }
        }
    }

    // 返回统计到的岛屿总数
    return islandCount;
};
```

# [130. 被围绕的区域](https://leetcode.cn/problems/surrounded-regions/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 <code>m x n</code> 的矩阵 <code>board</code> ，由若干字符 <code>'X'</code> 和 <code>'O'</code>组成，**捕获**  所有 **被围绕的区域** ：

- **连接：** 一个单元格与水平或垂直方向上相邻的单元格连接。
- **区域：连接所有** <code>'O'</code>的单元格来形成一个区域。
- **围绕：** 如果一个区域中的所有 <code>'O'</code> 单元格都不在棋盘的边缘，则该区域被包围。这样的区域 **完全**  被 <code>'X'</code> 单元格包围。

通过 **原地** 将输入矩阵中的所有 <code>'O'</code>替换为 <code>'X'</code> 来 **捕获被围绕的区域** 。你不需要返回任何值。

<div class="original__bRMd">

<strong class="example">示例 1：** 

<div class="example-block">
**输入：** board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]

<b>输出：</b>[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]

**解释：** 
<img alt="" src="https://pic.leetcode.cn/1718167191-XNjUTG-image.png" style="width: 367px; height: 158px;">
在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。

<strong class="example">示例 2：** 

<div class="example-block">
**输入：** board = [['X']]

**输出：** [['X']]

**提示：** 

- <code>m == board.length</code>
- <code>n == board[i].length</code>
- <code>1 <= m, n <= 200</code>
- <code>board[i][j]</code> 为 <code>'X'</code> 或 <code>'O'</code>

**思路**：
这道题的思路是先找所有和边缘相连的 O。

1. 定义 DFS 函数
   首先定义一个 DFS 函数。在函数开始时，先判断当前单元格：如果它是 X 或者已经被标记过了，则直接 return。接着，将当前值改为 A，作为一种特殊的标记，然后对其上下左右四个方向递归进行 DFS。

2. 处理边缘单元格
   遍历矩阵上下左右四条边中的所有单元格。从这些边缘节点开始进行 DFS，尝试探索所有与边缘相连的 O 节点。

3. 全局遍历与恢复
   最后，对整个矩阵进行遍历：
   (a) 将所有仍为 O 的单元格（即被包围的单元格）全部修改为 X。
   (b) 将所有标记为 A 的单元格（即与边缘相连、幸存下来的节点）还原为 O。
**题解**：
```js
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    if (m === 0) return;
    const n = board[0].length;

    // 1. 定义 DFS 函数
    const dfs = (r, c) => {
        // 越界检查、非 'O' 检查（包括已经是 'A' 或 'X' 的情况）直接 return
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') {
            return;
        }
        
        // 将当前值改为 'A'，作为特殊标记（表示与边缘相连的幸存者）
        board[r][c] = 'A';

        // 对上下左右四个方向递归进行 DFS
        dfs(r - 1, c); // 上
        dfs(r + 1, c); // 下
        dfs(r, c - 1); // 左
        dfs(r, c + 1); // 右
    };

    // 2. 处理边缘单元格：从四条边的 O 节点开始探索
    for (let i = 0; i < m; i++) {
        dfs(i, 0);         // 左边缘
        dfs(i, n - 1);     // 右边缘
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j);         // 上边缘
        dfs(m - 1, j);     // 下边缘
    }

    // 3. 全局遍历与恢复
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                // (a) 将仍为 O 的单元格（被包围者）改为 X
                board[i][j] = 'X';
            } else if (board[i][j] === 'A') {
                // (b) 将标记为 A 的单元格（幸存者）还原为 O
                board[i][j] = 'O';
            }
        }
    }
};
```

# [133. 克隆图](https://leetcode.cn/problems/clone-graph/description/?envType=study-plan-v2&envId=top-interview-150)

给你无向**<a href="https://baike.baidu.com/item/连通图/6460995?fr=aladdin" target="_blank">连通</a>** 图中一个节点的引用，请你返回该图的<a href="https://baike.baidu.com/item/深拷贝/22785317?fr=aladdin" target="_blank">**深拷贝** </a>（克隆）。

图中的每个节点都包含它的值 <code>val</code>（<code>int</code>） 和其邻居的列表（<code>list[Node]</code>）。

> class Node {
    public int val;
    public List<Node> neighbors;
}

**测试用例格式：** 

简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（<code>val = 1</code>），第二个节点值为 2（<code>val = 2</code>），以此类推。该图在测试用例中使用邻接列表表示。

**邻接列表**  是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。

给定节点将始终是图中的第一个节点（值为 1）。你必须将**给定节点的拷贝** 作为对克隆图的引用返回。

**示例 1：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/02/01/133_clone_graph_question.png" style="height: 500px; width: 500px;">

> **输入：** adjList = [[2,4],[1,3],[2,4],[1,3]]
**输出：** [[2,4],[1,3],[2,4],[1,3]]
**解释：
** 图中有 4 个节点。
节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
节点 4 的值是 4，它有两个邻居：节点 1 和 3 。

**示例 2：** 

<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/02/01/graph.png" style="height: 148px; width: 163px;">

> **输入：** adjList = [[]]
**输出：** [[]]
**解释：** 输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。

**示例 3：** 

> **输入：** adjList = []
**输出：** []
**解释：** 这个图是空的，它不含任何节点。

**提示：** 

- 这张图中的节点数在 <code>[0, 100]</code>之间。
- <code>1 <= Node.val <= 100</code>
- 每个节点值<code>Node.val</code> 都是唯一的，
- 图中没有重复的边，也没有自环。
- 图是连通图，你可以从给定节点访问到所有节点。

**思路**：
我们首先创建一个 Map，其中 Key 是 Node 的 Value，Map 的 Value 就是 Node 本身。

在 Clone Graph 函数的最开始，我们先在 Map 中检查该 Node 的 Value 是否已经存在：
1. 如果已存在，则直接返回 Map 中的对应节点。
2. 如果不存在，我们先创建一个新节点作为占位，并将其存入 Map 中。

接着，我们遍历传入 Node 的 neighbors，对每个邻居节点递归调用 cloneGraph，并将返回的结果放进新创建节点的 neighbors 数组中。
**题解**：
```js
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // 每次进入主函数，都创建一个全新的 Map，确保测试用例之间不干扰
    const visited = new Map();

    // 定义内部递归函数
    const dfs = (currNode) => {
        if (!currNode) return null;

        // 1. 检查是否已经克隆过
        if (visited.has(currNode)) {
            return visited.get(currNode);
        }

        // 2. 创建新节点并立刻存入 Map
        // 注意：这里用整个节点 currNode 作为 Key 比用 val 更稳妥
        const cloneNode = new Node(currNode.val);
        visited.set(currNode, cloneNode);

        // 3. 递归克隆邻居
        for (let neighbor of currNode.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }

        return cloneNode;
    };

    return dfs(node);
};
```

# [399. 除法求值](https://leetcode.cn/problems/evaluate-division/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个变量对数组 <code>equations</code> 和一个实数值数组 <code>values</code> 作为已知条件，其中 <code>equations[i] = [A<sub>i</sub>, B<sub>i</sub>]</code> 和 <code>values[i]</code> 共同表示等式 <code>A<sub>i</sub> / B<sub>i</sub> = values[i]</code> 。每个 <code>A<sub>i</sub></code> 或 <code>B<sub>i</sub></code> 是一个表示单个变量的字符串。

另有一些以数组 <code>queries</code> 表示的问题，其中 <code>queries[j] = [C<sub>j</sub>, D<sub>j</sub>]</code> 表示第 <code>j</code> 个问题，请你根据已知条件找出 <code>C<sub>j</sub> / D<sub>j</sub> = ?</code> 的结果作为答案。

返回 **所有问题的答案**  。如果存在某个无法确定的答案，则用 <code>-1.0</code> 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 <code>-1.0</code> 替代这个答案。

**注意：** 输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

**注意：** 未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。

<strong class="example">示例 1：** 

> **输入：** equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
**输出：** [6.00000,0.50000,-1.00000,1.00000,-1.00000]
**解释：** 
条件：a / b = 2.0, b / c = 3.0
问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
注意：x 是未定义的 => -1.0

<strong class="example">示例 2：** 

> **输入：** equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
**输出：** [3.75000,0.40000,5.00000,0.20000]

<strong class="example">示例 3：** 

> **输入：** equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
**输出：** [0.50000,2.00000,-1.00000,-1.00000]

**提示：** 

- <code>1 <= equations.length <= 20</code>
- <code>equations[i].length == 2</code>
- <code>1 <= A<sub>i</sub>.length, B<sub>i</sub>.length <= 5</code>
- <code>values.length == equations.length</code>
- <code>0.0 < values[i] <= 20.0</code>
- <code>1 <= queries.length <= 20</code>
- <code>queries[i].length == 2</code>
- <code>1 <= C<sub>j</sub>.length, D<sub>j</sub>.length <= 5</code>
- <code>A<sub>i</sub>, B<sub>i</sub>, C<sub>j</sub>, D<sub>j</sub></code> 由小写英文字母与数字组成

**思路**：
这里先讲一下主函数中的逻辑。在主函数中，我们首先获取 `equations` 数组的长度，然后进行初始化。考虑到最差情况下字符的可能数量，我们将并查集的大小设为 `2 * equations.length`。同时，需要初始化一个 `HashMap` 以及一个 `ID` 变量，用来映射和表示每个字符的唯一 ID。

主函数的具体处理步骤如下：
1. 遍历 `equations` 中的每一个字符，检查 `HashMap` 中是否存在该字符。如果不存在，则将该字符存入 `HashMap`，以当前 `ID` 作为 `Value`，随后 `ID` 自增。
2. 将 `equations` 中的变量及其对应的值作为参数，调用并查集的 `union` 方法将它们合并。
3. 进行查询处理。遍历每一个 `queries`，分别获取其对应的两个变量的 ID。
   - 如果其中任何一个 ID 属于 `undefined`（即未在 `equations` 中出现过），则在结果数组中填入 `-1.0`。
   - 否则，调用并查集的 `isConnected` 方法，将 `ID1` 和 `ID2` 传入并获取结果。

接下来介绍并查集的具体实现。并查集在构造函数中会初始化两个数组：`parent` 和 `weight`。
- `parent` 数组存储每个 ID 对应的父节点 ID。初始化时，每个节点的父节点指向其本身。
- `weight` 数组存储当前节点指向其父节点的权重值。初始化时，权重值统一设为 `1.0`。

并查集的核心方法实现：
1. **find 方法**：
   采用递归方式查找根节点。如果当前 ID 不等于 `parent` 数组中记录的 ID，我们会递归地调用 `find` 方法。
   - **路径压缩**：在递归回溯的过程中，将当前节点到根节点路径上的所有节点都直接指向根节点，使树的结构拍扁为两层。
   - **权重更新**：在路径压缩的同时，更新当前节点的权重。新的权重等于“原父节点指向根节点的权重”乘以“当前节点指向原父节点的权重”，从而得到当前节点直接指向根节点的权重。

2. **union 方法**：
   接收参数 `x`、`y` 和它们之间的商 `value`（即 `x / y = value`）。
   - 首先通过 `find` 分别找到 `x` 和 `y` 的根节点 `rootX` 和 `rootY`。
   - 如果两个根节点相同，说明已经联通，无需合并。
   - 如果不同，则进行合并：让 `rootX` 的 `parent` 指向 `rootY`。此时需要计算 `rootX` 的新权重，公式为：`weight[rootX] = (weight[y] * value) / weight[x]`。

3. **isConnected 方法**：
   首先通过 `find` 获取 `rootX` 和 `rootY`。
   - 如果两个根节点相等，说明两个变量在同一个连通分量中，返回它们权重的比值作为计算结果。
   - 如果根节点不相等，说明无法通过已知等式推导，返回 `-1.0`。

通过上述逻辑，我们可以完整地解决 Evaluate Division 问题。
**题解**：
```js
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const equationsSize = equations.length;
    const uf = new UnionFind(2 * equationsSize);
    const hashMap = new Map();
    let id = 0;

    // 第 1 步：预处理，建立变量到 ID 的映射，并进行合并
    for (let i = 0; i < equationsSize; i++) {
        const [var1, var2] = equations[i];

        if (!hashMap.has(var1)) {
            hashMap.set(var1, id++);
        }
        if (!hashMap.has(var2)) {
            hashMap.set(var2, id++);
        }
        uf.union(hashMap.get(var1), hashMap.get(var2), values[i]);
    }

    // 第 2 步：做查询
    const res = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const [var1, var2] = queries[i];
        const id1 = hashMap.get(var1);
        const id2 = hashMap.get(var2);

        if (id1 === undefined || id2 === undefined) {
            res[i] = -1.0;
        } else {
            res[i] = uf.isConnected(id1, id2);
        }
    }
    return res;
};

class UnionFind {
    constructor(n) {
        this.parent = new Int32Array(n);
        this.weight = new Float64Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.weight[i] = 1.0;
        }
    }

    find(x) {
        if (x !== this.parent[x]) {
            const origin = this.parent[x];
            this.parent[x] = this.find(this.parent[x]); // 路径压缩
            // 节点 x 到新根的权重 = x 到原父节点的权重 * 原父节点到新根的权重
            this.weight[x] *= this.weight[origin];
        }
        return this.parent[x];
    }

    union(x, y, value) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return;

        // 合并 rootX 到 rootY
        this.parent[rootX] = rootY;
        // 关键数学推导：x/rootX = weight[x], y/rootY = weight[y], x/y = value
        // 得到 rootX/rootY = (y/rootY * (x/y)) / (x/rootX) = (weight[y] * value) / weight[x]
        this.weight[rootX] = (this.weight[y] * value) / this.weight[x];
    }

    isConnected(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            // x/y = (x/root) / (y/root)
            return this.weight[x] / this.weight[y];
        } else {
            return -1.0;
        }
    }
}
```

# [207. 课程表](https://leetcode.cn/problems/course-schedule/description/?envType=study-plan-v2&envId=top-interview-150)

你这个学期必须选修 <code>numCourses</code> 门课程，记为<code>0</code>到<code>numCourses - 1</code> 。

在选修某些课程之前需要一些先修课程。 先修课程按数组<code>prerequisites</code> 给出，其中<code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> ，表示如果要学习课程<code>a<sub>i</sub></code> 则 **必须**  先学习课程 <code>b<sub>i</sub></code><sub> </sub>。

- 例如，先修课程对<code>[0, 1]</code> 表示：想要学习课程 <code>0</code> ，你需要先完成课程 <code>1</code> 。

请你判断是否可能完成所有课程的学习？如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**示例 1：** 

> **输入：** numCourses = 2, prerequisites = [[1,0]]
**输出：** true
**解释：** 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

**示例 2：** 

> **输入：** numCourses = 2, prerequisites = [[1,0],[0,1]]
**输出：** false
**解释：** 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

**提示：** 

- <code>1 <= numCourses <= 2000</code>
- <code>0 <= prerequisites.length <= 5000</code>
- <code>prerequisites[i].length == 2</code>
- <code>0 <= a<sub>i</sub>, b<sub>i</sub> < numCourses</code>
- <code>prerequisites[i]</code> 中的所有课程对 **互不相同**

**思路**：
我们先构建一个入度数组，数组的长度是课程的总数量，并全部填充为 0。

同时，我们需要一个 Map 用来记录某门课的后续课程：
1. Key 为先修课
2. Value 为该先修课对应的后续课程数组

接下来填充数据，遍历 `prerequisites` 中的每一项，拿到当前的 `course` 和 `preCourse`：
1. 将 `course` 的入度进行自增。
2. 在 Map 中检查 `preCourse` 是否存在。如果不存在，将其初始化为包含当前 `course` 的数组；如果已经存在，则将 `course` push 进数组中。

然后初始化一个队列，将所有入度为 0 的课程入队（因为它们不需要先修课）。

接下来对队列进行处理：
1. 从队列中弹出可以修读的课程，并将已修读课程的计数器 `count` 加 1。
2. 从 Map 中拿到该课程的所有后续课程。
3. 将这些后续课程的入度全部减 1。
4. 如果减 1 后某个后续课程的入度变为 0，则将其推进队列中。

不断重复此过程直到队列为空。最后 return `count` 是否等于 `numCourses`。如果相等，返回 true，即可解决这道题。
**题解**：
```js
/**
 * @param {number} numCourses - 总课程数
 * @param {number[][]} prerequisites - 先修课依赖关系 [[B, A]] 表示学 B 之前必须学 A
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  // 1. 初始化入度数组：记录每门课有多少门先修课
  // 索引 i 代表课程编号，inDegree[i] 代表该课的入度
  const inDegree = new Array(numCourses).fill(0); 

  // 2. 初始化邻接表：记录学完某门课后，可以解锁哪些后续课
  // Key: 先修课, Value: [后续课1, 后续课2, ...]
  const map = {}; 

  // 3. 填充数据：建立图结构并计算初始入度
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, pre] = prerequisites[i]; // 学 course 需要先学 pre
    inDegree[course]++;                     // course 的入度加 1
    
    // 构建邻接表：学完 pre 之后，可以去尝试学 course
    if (map[pre]) {
      map[pre].push(course);
    } else {
      map[pre] = [course];
    }
  }

  // 4. 初始化队列：将所有“不需要先修课”（入度为0）的课入列
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  // 5. 开始 BFS：模拟“修课”的过程
  let count = 0; // 记录我们实际能修完的课程总数
  
  

  while (queue.length > 0) {
    // 弹出当前可以修读的课程
    const selected = queue.shift(); 
    count++; // 修课成功，计数加 1

    // 获取这门课学完后，受其影响的所有“后续课程”
    const nextCourses = map[selected]; 
    if (nextCourses) {
      for (let i = 0; i < nextCourses.length; i++) {
        const next = nextCourses[i];
        
        // 关键步骤：因为先修课 selected 已经修完了，
        // 那么后续课程 next 的“剩余先修课数量”就减 1
        inDegree[next]--; 

        // 如果 next 课程的所有先修课都修完了（入度变为 0），它就可以进队等待修读了
        if (inDegree[next] === 0) {
          queue.push(next);
        }
      }
    }
  }

  // 6. 结果判定：
  // 如果修完的课程总数等于预设的总课数，说明没有死循环，可以全部修完。
  // 否则，说明图中存在“循环依赖”（环），无法修完。
  return count === numCourses;
};
```

# [210. 课程表 II](https://leetcode.cn/problems/course-schedule-ii/description/?envType=study-plan-v2&envId=top-interview-150)

现在你总共有 <code>numCourses</code> 门课需要选，记为<code>0</code>到<code>numCourses - 1</code>。给你一个数组<code>prerequisites</code> ，其中 <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> ，表示在选修课程 <code>a<sub>i</sub></code> 前 **必须**  先选修<code>b<sub>i</sub></code> 。

- 例如，想要学习课程 <code>0</code> ，你需要先完成课程<code>1</code> ，我们用一个匹配来表示：<code>[0,1]</code> 。

返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 **任意一种**  就可以了。如果不可能完成所有课程，返回 **一个空数组**  。

**示例 1：** 

> **输入：** numCourses = 2, prerequisites = [[1,0]]
**输出：** [0,1]
**解释：** 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 <code>[0,1] 。</code>

**示例 2：** 

> **输入：** numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
**输出：** [0,2,1,3]
**解释：** 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
因此，一个正确的课程顺序是<code>[0,1,2,3]</code> 。另一个正确的排序是<code>[0,2,1,3]</code> 。

**示例 3：** 

> **输入：** numCourses = 1, prerequisites = []
**输出：** [0]

**提示：** 

- <code>1 <= numCourses <= 2000</code>
- <code>0 <= prerequisites.length <= numCourses * (numCourses - 1)</code>
- <code>prerequisites[i].length == 2</code>
- <code>0 <= a<sub>i</sub>, b<sub>i</sub> < numCourses</code>
- <code>a<sub>i</sub> != b<sub>i</sub></code>
- 所有<code>[a<sub>i</sub>, b<sub>i</sub>]</code> **互不相同**

**思路**：
我们先构建一个入度数组，数组的长度是课程的总数量，并全部填充为 0。

同时，我们需要一个 Map 用来记录某门课的后续课程：
1. Key 为先修课
2. Value 为该先修课对应的后续课程数组

接下来填充数据，遍历 `prerequisites` 中的每一项，拿到当前的 `course` 和 `preCourse`：
1. 将 `course` 的入度进行自增。
2. 在 Map 中检查 `preCourse` 是否存在。如果不存在，将其初始化为包含当前 `course` 的数组；如果已经存在，则将 `course` push 进数组中。

然后初始化一个队列，将所有入度为 0 的课程入队（因为它们不需要先修课）。

初始化一个结果数组。

接下来对队列进行处理：
1. 从队列中弹出可以修读的课程，将该课程推入到结果数组中，并将已修读课程的计数器 `count` 加 1。
2. 从 Map 中拿到该课程的所有后续课程。
3. 将这些后续课程的入度全部减 1。
4. 如果减 1 后某个后续课程的入度变为 0，则将其推进队列中。

不断重复此过程直到队列为空。最后返回结果时，先判断 count 和 numCourses 是否相等：
   (a) 如果相等，就返回结果数组；
   (b) 如果不相等，则返回空数组。
**题解**：
```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 1. 构建入度数组，全部填充为 0
    const inDegree = new Array(numCourses).fill(0);
    
    // 2. 构建邻接表 (使用对象或 Map)
    const map = {};

    // 3. 填充数据
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, preCourse] = prerequisites[i];
        // course 的入度自增
        inDegree[course]++;
        // 记录先修课对应的后续课程
        if (map[preCourse]) {
            map[preCourse].push(course);
        } else {
            map[preCourse] = [course];
        }
    }

    // 4. 初始化队列，将所有入度为 0 的课程入队
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // 5. 初始化结果数组和计数器
    const res = [];
    let count = 0;

    // 6. 处理队列
    while (queue.length > 0) {
        // 弹出当前可以修读的课程
        const selected = queue.shift();
        // 推入结果数组，计数器加 1
        res.push(selected);
        count++;

        // 拿到该课程的所有后续课程
        const nextCourses = map[selected];
        if (nextCourses) {
            for (let nextCourse of nextCourses) {
                // 后续课程入度减 1
                inDegree[nextCourse]--;
                // 如果入度变为 0，推进队列
                if (inDegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }
    }

    // 7. 结果判定
    // 如果修读课程数等于总数，说明无环，返回顺序；否则说明有环，返回空数组
    return count === numCourses ? res : [];
};
```

# [909. 蛇梯棋](https://leetcode.cn/problems/snakes-and-ladders/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个大小为 <code>n x n</code> 的整数矩阵 <code>board</code> ，方格按从<code>1</code> 到 <code>n^2</code> 编号，编号遵循 <a href="https://baike.baidu.com/item/%E7%89%9B%E8%80%95%E5%BC%8F%E8%BD%AC%E8%A1%8C%E4%B9%A6%E5%86%99%E6%B3%95/17195786">转行交替方式</a>** ** ，**从左下角开始** （即，从 <code>board[n - 1][0]</code> 开始）的每一行改变方向。

你一开始位于棋盘上的方格 <code>1</code>。每一回合，玩家需要从当前方格 <code>curr</code> 开始出发，按下述要求前进：

- 选定目标方格 <code>next</code> ，目标方格的编号在范围<code>[curr + 1, min(curr + 6, n^2)]</code> 。

- 该选择模拟了掷 **六面体骰子**  的情景，无论棋盘大小如何，玩家最多只能有 6 个目的地。

- 传送玩家：如果目标方格 <code>next</code> 处存在蛇或梯子，那么玩家会传送到蛇或梯子的目的地。否则，玩家传送到目标方格 <code>next</code> 。
- 当玩家到达编号 <code>n^2</code> 的方格时，游戏结束。

如果 <code>board[r][c] != -1</code>，位于<code>r</code> 行 <code>c</code> 列的棋盘格中可能存在 “蛇” 或 “梯子”。那个蛇或梯子的目的地将会是 <code>board[r][c]</code>。编号为 <code>1</code> 和 <code>n^2</code> 的方格不是任何蛇或梯子的起点。

注意，玩家在每次掷骰的前进过程中最多只能爬过蛇或梯子一次：就算目的地是另一条蛇或梯子的起点，玩家也 **不能**  继续移动。

- 举个例子，假设棋盘是 <code>[[-1,4],[-1,3]]</code> ，第一次移动，玩家的目标方格是 <code>2</code> 。那么这个玩家将会顺着梯子到达方格 <code>3</code> ，但 **不能**  顺着方格 <code>3</code> 上的梯子前往方格 <code>4</code> 。（简单来说，类似飞行棋，玩家掷出骰子点数后移动对应格数，遇到单向的路径（即梯子或蛇）可以直接跳到路径的终点，但如果多个路径首尾相连，也不能连续跳多个路径）

返回达到编号为<code>n^2</code> 的方格所需的最少掷骰次数，如果不可能，则返回 <code>-1</code>。

<strong class="example">示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2018/09/23/snakes.png" style="width: 500px; height: 394px;">

> **输入：** board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
**输出：** 4
**解释：** 
首先，从方格 1 [第 5 行，第 0 列] 开始。 
先决定移动到方格 2 ，并必须爬过梯子移动到到方格 15 。
然后决定移动到方格 17 [第 3 行，第 4 列]，必须爬过蛇到方格 13 。
接着决定移动到方格 14 ，且必须通过梯子移动到方格 35 。 
最后决定移动到方格 36 , 游戏结束。 
可以证明需要至少 4 次移动才能到达最后一个方格，所以答案是 4 。 

<strong class="example">示例 2：** 

> **输入：** board = [[-1,-1],[-1,3]]
**输出：** 1

**提示：** 

- <code>n == board.length == board[i].length</code>
- <code>2 <= n <= 20</code>
- <code>board[i][j]</code> 的值是 <code>-1</code> 或在范围 <code>[1, n^2]</code> 内
- 编号为 <code>1</code> 和 <code>n^2</code> 的方格上没有蛇或梯子

**思路**：
这道题可以转化成一个图的广度优先搜索（BFS）问题。

1.  **明确辅助函数 `id2rc`**
    该函数的作用是将方格的 ID 转换成棋盘上的行列坐标（R 和 C）。它接收两个参数：ID 和棋盘大小 N。
    (a) 计算行号 R：`R = (ID - 1) / N` 的向下取整结果。
    (b) 计算列号 C：`C = (ID - 1) % N`。
    (c) 调整蛇形走位：由于棋盘是蛇形排列的，如果 R 从底部往上数是奇数行（即 `R % 2 == 1`），则列号需要翻转，即 `C = N - 1 - C`。
    (d) 坐标转换：最后返回数组 `[N - 1 - R, C]`，以符合棋盘矩阵的索引方式。

2.  **主函数逻辑**
    (a) 初始化：获取棋盘的宽高 N，创建一个访问数组 `visited` 并初始化为 0，同时初始化一个队列。队列中存储的元素是一个数组，包含当前位置 ID 和步数。
    (b) 开启循环：当队列长度不为 0 时进行 BFS 遍历。
    (c) 状态转移：从队列中取出队首元素 P。针对掷骰子可能出现的 1 到 6 种情况进行循环计算。
    (d) 计算下一步：得到 `next` 位置。如果 `next` 超过了 `N * N`，则直接跳出循环。
    (e) 处理蛇或梯子：通过 `id2rc` 计算 `next` 对应的行列坐标，并判断该位置在棋盘中是否大于 0。如果大于 0，说明存在蛇或梯子，则将 `next` 更新为蛇或梯子的终点。
    (f) 判断终点：如果 `next` 等于 `N * N`，直接返回当前步数加 1（即 `P[1] + 1`）。
    (g) 访问标记：如果 `next` 位置没有被访问过，则将其标记为已访问，并将 `[next, P[1] + 1]` 推入队列。

3.  **算法原理**
    (a) 扩展逻辑：最初从 ID 1 开始，步数为 0。走一步后会有 6 种可能的情况，我们将这些情况全部放入队列，按照步骤顺序进行遍历。
    (b) 最优解保证：使用 `visited` 数组是为了确保每个位置只被第一次到达时处理。因为在 BFS 中，第一次到达某个位置的路径一定是最短的（步数最少）。如果之后再次访问该位置，其路径长度要么更长，要么相等，因此不需要更新，从而保证了到达终点时所得的一定是最优解。
    (c) 异常处理：如果直到队列为空仍未到达终点，则返回 -1。

这道题的整体解题思路就是这样。
**题解**：
```js
var snakesAndLadders = function(board) {
    const n = board.length;
    const vis = new Array(n * n + 1).fill(0);
    const queue = [[1, 0]];
    while (queue.length) {
        const p = queue.shift();
        for (let i = 1; i <= 6; ++i) {
            let nxt = p[0] + i;
            if (nxt > n * n) { // 超出边界
                break;
            }
            const rc = id2rc(nxt, n); // 得到下一步的行列
            if (board[rc[0]][rc[1]] > 0) { // 存在蛇或梯子
                nxt = board[rc[0]][rc[1]];
            }
            if (nxt === n * n) { // 到达终点
                return p[1] + 1;
            }
            if (!vis[nxt]) {
                vis[nxt] = true;
                queue.push([nxt, p[1] + 1]); // 扩展新状态
            }
        }
    }
    return -1;
};

const id2rc = (id, n) => {
    let r = Math.floor((id - 1) / n), c = (id - 1) % n;
    if (r % 2 === 1) {
        c = n - 1 - c;
    }
    return [n - 1 - r, c];
}
```

# [433. 最小基因变化](https://leetcode.cn/problems/minimum-genetic-mutation/description/?envType=study-plan-v2&envId=top-interview-150)

基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 <code>'A'</code>、<code>'C'</code>、<code>'G'</code> 和 <code>'T'</code> 之一。

假设我们需要调查从基因序列<code>start</code> 变为 <code>end</code> 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

- 例如，<code>"AACCGGTT" --> "AACCGGTA"</code> 就是一次基因变化。

另有一个基因库 <code>bank</code> 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 <code>bank</code> 中）

给你两个基因序列 <code>start</code> 和 <code>end</code> ，以及一个基因库 <code>bank</code> ，请你找出并返回能够使<code>start</code> 变化为 <code>end</code> 所需的最少变化次数。如果无法完成此基因变化，返回 <code>-1</code> 。

注意：起始基因序列<code>start</code> 默认是有效的，但是它并不一定会出现在基因库中。

**示例 1：** 

> **输入：** start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
**输出：** 1

**示例 2：** 

> **输入：** start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
**输出：** 2

**示例 3：** 

> **输入：** start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
**输出：** 3

**提示：** 

- <code>start.length == 8</code>
- <code>end.length == 8</code>
- <code>0 <= bank.length <= 10</code>
- <code>bank[i].length == 8</code>
- <code>start</code>、<code>end</code> 和 <code>bank[i]</code> 仅由字符 <code>['A', 'C', 'G', 'T']</code> 组成

**思路**：
首先初始化一个 bank set 和一个 visited set，将 bank 数组中的所有字符存入 bank set 中。存完之后检查 end 是否存在于 bank set 中，如果不存在，则直接返回 -1。

我们需要初始化一个包含 A、C、G、T 四个字符的数组，用于后续的字符替换。

接下来进行四重循环：
1. 第一重循环：判断队列是否为空。我们需要先初始化一个队列，并将 start 存入队列中。
2. 第二重循环根据队列的长度进行循环，对步数相等的字符串循环
3. 进入循环后，先将队首元素取出，遍历其每一个字符。
4. 针对每个位置字符的所有可能性（A、C、G、T）进行遍历。

在这个过程中：
- 如果该字符串
- 如果新生成的字符串（next）不在 visited set 里面，且存在于 bank set 中，就将其放入队列，并添加进 visited set。
- 在最外层循环的末尾，对 step 进行加加（step++），表示进入下一步。
**题解**：
```js
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    // 1. 初始化 bank set 和 visited set
    const bankSet = new Set(bank);
    const visited = new Set();
    
    // 2. 检查 endGene 是否在基因库中
    if (!bankSet.has(endGene)) return -1;
    
    // 3. 定义可能的基因字符
    const genes = ['A', 'C', 'G', 'T'];
    
    // 4. 初始化队列，存入起始基因和当前步数
    // 提示：你也可以把步数存在队列里，[gene, step]
    let queue = [startGene];
    visited.add(startGene);
    let step = 1;

    // 5. 第一重循环：判断队列是否为空
    while (queue.length > 0) {
        // 记录当前层的节点数，确保一次处理完一整步的变化
        let size = queue.length;
        
        while (size--) {
            const curr = queue.shift();
            
            // 6. 遍历当前基因的每一个字符位置
            for (let i = 0; i < curr.length; i++) {
                // 7. 针对每个位置的所有可能性进行遍历
                for (let char of genes) {
                    if (curr[i] === char) continue; // 跳过相同的字符

                    // 生成新基因字符串
                    const next = curr.slice(0, i) + char + curr.slice(i + 1);
                    if (next === endGene) return step;

                    // 8. 检查合法性：在基因库中且未访问过
                    if (bankSet.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                }
            }
        }
        // 处理完一层后，步数加 1
        step++;
    }

    return -1;
};
```

# [127. 单词接龙](https://leetcode.cn/problems/word-ladder/description/?envType=study-plan-v2&envId=top-interview-150)

字典<code>wordList</code> 中从单词 <code>beginWord</code>到<code>endWord</code> 的 **转换序列 ** 是一个按下述规格形成的序列<code>beginWord -> s<sub>1</sub>-> s<sub>2</sub>-> ... -> s<sub>k</sub></code>：

- 每一对相邻的单词只差一个字母。
- 对于<code>1 <= i <= k</code>时，每个<code>s<sub>i</sub></code>都在<code>wordList</code>中。注意， <code>beginWord</code>不需要在<code>wordList</code>中。
- <code>s<sub>k</sub>== endWord</code>

给你两个单词 <code>beginWord</code>和 <code>endWord</code> 和一个字典 <code>wordList</code> ，返回 从<code>beginWord</code> 到<code>endWord</code> 的 **最短转换序列**  中的 **单词数目**  。如果不存在这样的转换序列，返回 <code>0</code> 。

**示例 1：** 

> **输入：** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
**输出：** 5
**解释：** 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。

**示例 2：** 

> **输入：** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
**输出：** 0
**解释：** endWord "cog" 不在字典中，所以无法进行转换。

**提示：** 

- <code>1 <= beginWord.length <= 10</code>
- <code>endWord.length == beginWord.length</code>
- <code>1 <= wordList.length <= 5000</code>
- <code>wordList[i].length == beginWord.length</code>
- <code>beginWord</code>、<code>endWord</code> 和 <code>wordList[i]</code> 由小写英文字母组成
- <code>beginWord != endWord</code>
- <code>wordList</code> 中的所有字符串 **互不相同**

**思路**：
 这道题使用两个 set 进行双向 BFS。一共会用到三个 set：

1. wordSet：将 wordList 中的所有单词存入，首先检查 wordSet 中是否存在 endWord，若不存在则直接返回 0。
2. beginSet 和 endSet：
   (a) 初始化 beginSet，一开始只包含 beginWord。
   (b) 初始化 endSet，一开始只包含 endWord。

具体执行步骤如下：

1. 初始化 step 为 1。
2. 在循环中，始终确保 beginSet 的尺寸较小。如果 beginSet 的 size 大于 endSet，则交换两者。这样做是为了从较小的搜索空间开始扩散，从而节省时间。
3. 创建一个 nextSet，用于存储下一层的单词：
   (a) 遍历 beginSet 中的每一个单词，尝试对每个字符进行 26 个字母的变化，得到 nextWord。
   (b) 检查 nextWord 是否存在于 endSet（即对面的集合）中。如果找到，说明路径已打通，直接返回 step + 1。
   (c) 如果没找到，再判断 wordSet 中是否存在该 nextWord。如果存在，则将其添加到 nextSet 中，并在 wordSet 中删除 nextWord（防止重复访问）。
4. 将 beginSet 设置为 nextSet。
5. 每次循环结束对 step 进行自增。

如果循环结束（即 beginSet 或 endSet 变为空）仍未找到路径，则说明无法到达，返回 0。
**题解**：
```js
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    // 使用 Set 代替 Queue，方便快速判断“对面是否也搜到了这里”
    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);
    wordSet.delete(endWord);
    let step = 1;

    while (beginSet.size > 0 && endSet.size > 0) {
        // 关键优化：总是从较小的一端开始扩散，保证搜索空间最小
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }

        const nextSet = new Set();
        for (let word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                // 尝试 26 个字母的变化
                for (let j = 0; j < 26; j++) {
                    const char = String.fromCharCode(97 + j);
                    if (word[i] === char) continue;

                    const nextWord = word.slice(0, i) + char + word.slice(i + 1);

                    // 如果在对面 Set 中找到了，说明两头接通了！
                    if (endSet.has(nextWord)) {
                        return step + 1;
                    }

                    // 如果在词库中，则作为下一层的搜索起点
                    if (wordSet.has(nextWord)) {
                        nextSet.add(nextWord);
                        wordSet.delete(nextWord); // 相当于 visited.add()，防止往回走
                    }
                }
            }
        }
        beginSet = nextSet;
        step++;
    }

    return 0;
};
```

# [208. 实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/description/?envType=study-plan-v2&envId=top-interview-150)

**<a href="https://baike.baidu.com/item/字典树/9825209?fr=aladdin" target="_blank">Trie</a>** （发音类似 "try"）或者说 **前缀树**  是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

请你实现 Trie 类：

- <code>Trie()</code> 初始化前缀树对象。
- <code>void insert(String word)</code> 向前缀树中插入字符串 <code>word</code> 。
- <code>boolean search(String word)</code> 如果字符串 <code>word</code> 在前缀树中，返回 <code>true</code>（即，在检索之前已经插入）；否则，返回 <code>false</code> 。
- <code>boolean startsWith(String prefix)</code> 如果之前已经插入的字符串<code>word</code> 的前缀之一为 <code>prefix</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**示例：** 

> **输入** 
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
**输出** 
[null, null, true, false, true, null, true]

**解释** 
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True

**提示：** 

- <code>1 <= word.length, prefix.length <= 2000</code>
- <code>word</code> 和 <code>prefix</code> 仅由小写英文字母组成
- <code>insert</code>、<code>search</code> 和 <code>startsWith</code> 调用次数 **总计**  不超过 <code>3 * 10^4</code> 次

**思路**：
在这个 Trie 类中，我们先初始化 `children` 属性，它是一个公共对象。

1. **insert 操作**：
   在 `insert` 的时候，我们先用一个 `node` 指针获取到 `children`。初始化时 `children` 是一个空对象。在遍历过程中的每一个字符时，如果当前 `node` 不存在该字符的属性，我们就初始化 `node[char]` 为一个空对象；否则，我们直接让 `node` 指向 `node[char]`。当我们遍历完单词之后，在单词的结尾处将 `node` 的 `isEnd` 属性设为 `true`。

2. **searchPrefix 方法**：
   我们可以先实现一个辅助函数 `searchPrefix`。在内部创建一个 `node` 指针，根据前缀的字符顺序找到最后一个字符所在的节点。如果中间没有找到对应的节点，我们返回 `null`；如果最后找到了，就返回这个节点。

3. **search 操作**：
   在 `search` 方法中，我们调用 `searchPrefix` 得到 `node`。我们需要检查这个 `node` 是否存在，并且它的 `isEnd` 是否为 `true`。如果都满足，则返回 `true`。

4. **startsWith 操作**：
   对于 `startsWith`，我们只需要返回 `searchPrefix` 的返回值是否不为 `null` 即可。
**题解**：
```js
var Trie = function() {
    // 使用 Object.create(null) 可以创建一个没有原型链的纯净对象，性能略好
    this.children = {};
};

/** * 插入单词
 */
Trie.prototype.insert = function(word) {
    let node = this.children;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    // 标记单词结束
    node.isEnd = true;
};

/** * 辅助函数：根据前缀搜索，返回匹配到的最后一个节点
 * 如果路径不存在，返回 null
 */
Trie.prototype.searchPrefix = function(prefix) {
    let node = this.children;
    for (const ch of prefix) {
        if (!node[ch]) {
            return null; // 路径断了，直接返回 null
        }
        node = node[ch];
    }
    return node; // 返回找到的最后一个节点
}

/** * 搜索完整单词
 */
Trie.prototype.search = function(word) {
    const node = this.searchPrefix(word);
    // 必须满足：节点存在 且 带有结束标记
    return node !== null && node.isEnd === true;
};

/** * 搜索前缀
 */
Trie.prototype.startsWith = function(prefix) {
    // 只要能找到对应的节点，说明该前缀就存在
    return this.searchPrefix(prefix) !== null;
};
```

# [211. 添加与搜索单词 - 数据结构设计](https://leetcode.cn/problems/design-add-and-search-words-data-structure/description/?envType=study-plan-v2&envId=top-interview-150)

请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

实现词典类 <code>WordDictionary</code> ：

- <code>WordDictionary()</code> 初始化词典对象
- <code>void addWord(word)</code> 将 <code>word</code> 添加到数据结构中，之后可以对它进行匹配
- <code>bool search(word)</code> 如果数据结构中存在字符串与<code>word</code> 匹配，则返回 <code>true</code> ；否则，返回 <code>false</code> 。<code>word</code> 中可能包含一些 <code>'.'</code> ，每个<code>.</code> 都可以表示任何一个字母。

**示例：** 

> **输入：** 
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
**输出：** 
[null,null,null,null,false,true,true,true]

**解释：** 
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // 返回 False
wordDictionary.search("bad"); // 返回 True
wordDictionary.search(".ad"); // 返回 True
wordDictionary.search("b.."); // 返回 True

**提示：** 

- <code>1 <= word.length <= 25</code>
- <code>addWord</code> 中的 <code>word</code> 由小写英文字母组成
- <code>search</code> 中的 <code>word</code> 由 '.' 或小写英文字母组成
- 最多调用 <code>10^4</code> 次 <code>addWord</code> 和 <code>search</code>

**思路**：
在这个 WordDictionary 类中，我们先初始化 `children` 属性，它是一个公共对象。

1. **addWord 操作**：
   在 `addWord` 的时候，我们先用一个 `node` 指针获取到 `children`。初始化时 `children` 是一个空对象。在遍历过程中的每一个字符时，如果当前 `node` 不存在该字符的属性，我们就初始化 `node[char]` 为一个空对象；否则，我们直接让 `node` 指向 `node[char]`。当我们遍历完单词之后，在单词的结尾处将 `node` 的 `isEnd` 属性设为 `true`。

2. **search 方法**：
   在内部创建一个 index ，根据 word 的字符长度找到最后一个字符所在的节点。如果存在 '.' 就将当前 node 的每一个作为下一个节点进行和index + 1尝试传入search 方法中实现递归，当 index 等于 word.length的时候返回 node.idEnd === true 
**题解**：
```js
var WordDictionary = function() {
    this.children = {};
};

/** * 添加单词逻辑与普通 Trie 完全一致
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.children;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
};

/** * 搜索逻辑：引入递归 DFS 处理通配符
 */
WordDictionary.prototype.search = function(word) {
    
    // 递归函数：dfs(当前节点, 当前匹配到单词的第几个字符)
    const dfs = (node, index) => {
        // 基准情形：已经遍历完单词的所有字符
        if (index === word.length) {
            return node.isEnd === true;
        }

        const ch = word[index];

        if (ch !== '.') {
            // 情况 1：是普通字符，路径断了直接返回 false，没断就继续往下搜
            if (!node[ch]) return false;
            return dfs(node[ch], index + 1);
        } else {
            // 情况 2：是 '.'，跳过当前层，遍历当前节点所有的子节点
            for (const key in node) {
                // 排除掉 isEnd 属性，只遍历子节点对象
                if (key !== 'isEnd' && dfs(node[key], index + 1)) {
                    return true; // 只要有一条路通了，就返回 true
                }
            }
            return false; // 所有路都试过了，不行
        }
    };

    return dfs(this.children, 0);
};
```

# [212. 单词搜索 II](https://leetcode.cn/problems/word-search-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个<code>m x n</code> 二维字符网格<code>board</code>**** 和一个单词（字符串）列表 <code>words</code>，返回所有二维网格上的单词。

单词必须按照字母顺序，通过 **相邻的单元格**  内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/07/search1.jpg">

> **输入：** board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
**输出：** ["eat","oath"]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/07/search2.jpg">

> **输入：** board = [["a","b"],["c","d"]], words = ["abcb"]
**输出：** []

**提示：** 

- <code>m == board.length</code>
- <code>n == board[i].length</code>
- <code>1 <= m, n <= 12</code>
- <code>board[i][j]</code> 是一个小写英文字母
- <code>1 <= words.length <= 3 * 10^4</code>
- <code>1 <= words[i].length <= 10</code>
- <code>words[i]</code> 由小写英文字母组成
- <code>words</code> 中的所有字符串互不相同

**思路**：
这道题先将 words 数组中的每一个单词构建成一棵字典树（Trie）。在单词的结尾处对应的节点，我们将该单词存入，并设置一个结果数组来收集。

接下来获取棋盘的行数 m 和列数 n，并创建一个 DFS 递归函数。该函数接收当前的行号、列号以及当前的节点 Node 作为参数：

1. 从 board 中获取当前的字符 char，并从字典树 Node 节点中获取 char 对应的子节点 NextNode。
2. 如果子节点不存在，我们直接 return。
3. 拿到 NextNode 之后，先检查它是否包含完整的单词（word 属性）。如果存在，直接把这个 word 推进结果数组中，并将该属性设置为 null，防止单词被重复添加。
4. 在递归探索之前，先将当前 board 对应的位置设置为一个特殊字符（例如 "#"），它肯定不会出现在字典树中，以此标记该位置已被访问。
5. 对上下左右四个方向进行探索。要求探索的位置没有越界，且没有被访问过（即字符不是 "#"）。
6. 对符合条件的相邻位置，传入对应的行号、列号和 NextNode，继续进行 DFS 递归。
7. 在回溯过程中，将 board 中对应位置的字符恢复为当前字符 char，以还原棋盘状态。

最后，我们遍历棋盘的每一个起点，调用该 DFS 函数即可。
**题解**：
```js
var findWords = function(board, words) {
    // 1. 构建字典树
    let root = {};
    for (let word of words) {
        let node = root;
        for (let ch of word) {
            if (!node[ch]) node[ch] = {};
            node = node[ch];
        }
        node.word = word; // 在结尾节点直接存入单词，方便收集
    }

    const res = [];
    const m = board.length;
    const n = board[0].length;

    // 2. DFS 探索
    const dfs = (r, c, node) => {
        const char = board[r][c];
        // 如果 Trie 树中没有当前字符，说明此路不通
        if (!node[char]) return;

        let nextNode = node[char];
        
        // 找到一个单词！将其加入结果并从树中删除标记，防止重复收集
        if (nextNode.word) {
            res.push(nextNode.word);
            nextNode.word = null; 
        }

        // 标记已访问，防止回头
        board[r][c] = "#"; 

        // 四个方向探索
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dr, dc] of dirs) {
            let nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] !== "#") {
                dfs(nr, nc, nextNode);
            }
        }

        // 回溯：恢复棋盘状态
        board[r][c] = char;
    };

    // 3. 遍历棋盘每一个起点
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return res;
};
```

# [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个仅包含数字<code>2-9</code>的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序**  返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

<img src="https://pic.leetcode.cn/1752723054-mfIHZs-image.png" style="width: 200px;">

**示例 1：** 

> **输入：** digits = "23"
**输出：** ["ad","ae","af","bd","be","bf","cd","ce","cf"]

**示例 2：** 

> **输入：** digits = "2"
**输出：** ["a","b","c"]

**提示：** 

- <code>1 <= digits.length <= 4</code>
- <code>digits[i]</code> 是范围 <code>['2', '9']</code> 的一个数字。

**思路**：
1. 创建 2 到 9 之间所有字母的映射：
   (a) 将 2 映射为包含 "abc" 的数组，3 映射为 "def"，依此类推
   (b) 将 digits 字符串中的每个字符与 "0" 字符相减来获得数字（其实也可以直接将 Map 中的 key 存为数字字符串即可）

2. 创建一个 DFS 函数，接收 index、prefix 和 digits 作为参数：
   (a) 判断 index 是否等于 digits 的长度
   (b) 如果等于，则将当前的 prefix 推入结果数组中
   (c) 如果不等于，则根据当前的 index 从 digits 中获取对应的数字串
   (d) 从 Map 中获取该数字对应所有可能的字母，并对每一个字符进行遍历
   (e) 将字符拼接到 prefix 串的末尾，然后递归调用 DFS 函数（调用时 index 需要加 1，DFS 不需要重复传 digits，传 index 和 prefix 即可）
**题解**：
```js
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const res = [];

    const dfs = (index, prefix) => {
        // 基准情形：匹配完了所有数字
        if (index === digits.length) {
            res.push(prefix);
            return;
        }

        // 找到当前数字对应的所有字母
        const letters = map[digits[index]];

        // 遍历所有可能的路径
        for (const char of letters) {
            // 拼接字符并进入下一层搜索
            dfs(index + 1, prefix + char);
        }
    };

    dfs(0, "");
    return res;
};
```

# [77. 组合](https://leetcode.cn/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个整数 <code>n</code> 和 <code>k</code>，返回范围 <code>[1, n]</code> 中所有可能的 <code>k</code> 个数的组合。

你可以按 **任何顺序**  返回答案。

**示例 1：** 

> **输入：** n = 4, k = 2
**输出：** 
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

**示例 2：** 

> **输入：** n = 1, k = 1
**输出：** [[1]]

**提示：** 

- <code>1 <= n <= 20</code>
- <code>1 <= k <= n</code>

**思路**：
初始化一个结果数组，然后定义一个辅助函数。

辅助函数传入 `start` 和 `path`。具体逻辑如下：

1. 检查 `path` 的长度：
   (a) 如果长度等于 `k`，则在结果数组中存入 `path` 的一个副本，并退出函数。
   (b) 否则，从 `start` 开始遍历到 `n`。

2. 在循环中进行选择：
   (a) 将当前的 `i` 推进 `path` 中。
   (b) 将 `i + 1` 和当前 `path` 传入，进行递归。
   (c) 递归回溯到这一层后，进行撤销选择，将当前的 `i` 从 `path` 中弹出。
   (d) 准备尝试 `i + 1` 的下一次循环。

最后，直接调用该函数，从 `1` 和空数组开始执行即可。
**题解**：
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];

    const backtrack = (start, path) => {
        // 1. 检查长度：如果够了 k 个，存入副本并返回
        if (path.length === k) {
            res.push([...path]);
            return;
        }

        // 2. 从 start 开始遍历到 n
        // 极致优化（剪枝）：i <= n - (k - path.length) + 1
        for (let i = start; i <= n; i++) {
            // (a) 做选择：推进 path
            path.push(i);

            // (b) 递归：传入 i + 1 保证不重复选同一个数
            backtrack(i + 1, path);

            // (c) 撤销选择：弹出末尾元素，回到上一个分叉口
            path.pop();
        }
    };

    backtrack(1, []);
    return res;
};
```

# [46. 全排列](https://leetcode.cn/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个不含重复数字的数组 <code>nums</code> ，返回其 所有可能的全排列 。你可以 **按任意顺序**  返回答案。

**示例 1：** 

> **输入：** nums = [1,2,3]
**输出：** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

**示例 2：** 

> **输入：** nums = [0,1]
**输出：** [[0,1],[1,0]]

**示例 3：** 

> **输入：** nums = [1]
**输出：** [[1]]

**提示：** 

- <code>1 <= nums.length <= 6</code>
- <code>-10 <= nums[i] <= 10</code>
- <code>nums</code> 中的所有整数 **互不相同**

**思路**：
在主函数中创建一个全排列的辅助函数。该辅助函数需要一个入参 `start`。

具体实现步骤如下：

1. 检查 `start` 是否等于 `nums.length - 1`：
   (a) 如果相等，说明已经到达最后一个元素，我们将当前 `nums` 的一个副本存入结果数组并返回。
   (b) 如果不相等，则继续向下执行。

2. 从 `start` 开始遍历到 `nums.length - 1`：
   (a) 设置循环变量 `i`，`i` 的初始值为 `start`，并在循环中递增。
   (b) 交换 `nums[start]` 与 `nums[i]` 的位置。
   (c) 将 `start + 1` 作为入参递归调用该辅助函数。
   (d) 递归返回后，再次交换 `nums[start]` 与 `nums[i]` 的位置以还原数组状态（回溯）。

3. 最后在主函数中调用该辅助函数，初始入参传入 0 即可。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];

    const backtrack = (start) => {
        // 1. 递归出口：如果 start 已经指向最后一个位置，记录结果
        if (start === nums.length - 1) {
            res.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // 2. 做选择：将 i 位置的数交换到当前的起始位置 start
            [nums[start], nums[i]] = [nums[i], nums[start]];

            // 3. 递归：处理剩下的位置
            backtrack(start + 1);

            // 4. 撤销选择：回溯，再次交换回来还原数组
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };

    backtrack(0);
    return res;
};
```

# [39. 组合总和](https://leetcode.cn/problems/combination-sum/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 **无重复元素**  的整数数组<code>candidates</code> 和一个目标整数<code>target</code>，找出<code>candidates</code>中可以使数字和为目标数<code>target</code> 的 所有**不同组合**  ，并以列表形式返回。你可以按 **任意顺序**  返回这些组合。

<code>candidates</code> 中的 **同一个**  数字可以 **无限制重复被选取**  。如果至少一个数字的被选数量不同，则两种组合是不同的。

对于给定的输入，保证和为<code>target</code> 的不同组合数少于 <code>150</code> 个。

**示例1：** 

> **输入：** candidates = [2,3,6,7], target = 7
**输出：** [[2,2,3],[7]]
**解释：** 
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。

**示例2：** 

> **输入: ** candidates = [2,3,5], target = 8
**输出: ** [[2,2,2,2],[2,3,3],[3,5]]

**示例 3：** 

> **输入: ** candidates = [2], target = 1
**输出: ** []

**提示：** 

- <code>1 <= candidates.length <= 30</code>
- <code>2 <= candidates[i] <= 40</code>
- <code>candidates</code> 的所有元素 **互不相同** 
- <code>1 <= target <= 40</code>

**思路**：
创建一个辅助函数，初始化一个数组变量（如 `path`）和一个结果数组 `result`。

具体实现步骤如下：
**辅助函数内部操作**：

1. 辅助函数逻辑：
(a) 传入当前的目标值 target、起始索引 begin。
(b) 从 begin 开始遍历 candidates 中的每一个数字。
(c) 如果当前数字大于 target，则直接跳出循环（剪枝）。
(d) 将当前数字推入 path 数组中。
(e) 检查 target 减去当前数字的结果：
- 如果结果等于 0，说明找到了一个符合条件的组合，将此时 path 数组的一个副本推入 result 中。
- 如果结果大于 0，则继续递归调用辅助函数，更新 target 为减去当前数字后的差值，并传入当前的索引作为新的 begin（防止重复且允许重复使用当前数字）。
(f) 递归返回后，执行回溯操作：调用 pop 将 path 数组的最后一个数字弹出，进行现场还原。
2. 主函数逻辑：
在主函数中首先对 candidates 进行从小到大的升序排序，然后调用辅助函数并传入初始参数（target, 0），最后返回结果数组 result 即可。
**题解**：
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const path = [];

    // 1. 主函数逻辑：先排序，为剪枝做准备
    candidates.sort((a, b) => a - b);

    /**
     * @param {number} remain 当前还需要凑齐的差值
     * @param {number} begin  当前遍历的起始索引
     */
    const backtrack = (remain, begin) => {
        // (e) 检查结果是否等于 0
        if (remain === 0) {
            result.push([...path]); // 存入副本
            return;
        }

        // (b) 从 begin 开始遍历
        for (let i = begin; i < candidates.length; i++) {
            const num = candidates[i];

            // (c) 剪枝：如果当前数字已经大于剩余目标值，后面更大的数字也不用看了
            if (num > remain) break;

            // (d) 将当前数字推入 path
            path.push(num);

            // (e) 递归：传入 i 而不是 i + 1，允许重复使用当前数字
            backtrack(remain - num, i);

            // (f) 回溯：现场还原
            path.pop();
        }
    };

    backtrack(target, 0);
    return result;
};
```

# [52. N 皇后 II](https://leetcode.cn/problems/n-queens-ii/description/?envType=study-plan-v2&envId=top-interview-150)

**n皇后问题**  研究的是如何将 <code>n</code>个皇后放置在 <code>n × n</code> 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 <code>n</code> ，返回 **n 皇后问题**  不同的解决方案的数量。

<div class="original__bRMd">

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" style="width: 600px; height: 268px;">

> **输入：** n = 4
**输出：** 2
**解释：** 如上图所示，4 皇后问题存在两个不同的解法。

**示例 2：** 

> **输入：** n = 1
**输出：** 1

**提示：** 

- <code>1 <= n <= 9</code>

**思路**：

1. 初始化
(a) 初始化一个结果变量 res，初始值为 0。
(b) 初始化三个集合（Set）：colSet（列）、diag1（左斜线：行号 + 列号）和 diag2（右斜线：行号 - 列号）。
2. 定义辅助函数（递归思想）
该函数接收一个入参 step，表示当前的行索引（从 0 开始）。在每一行中，我们需要寻找合适的空位放置皇后。
3. 逻辑判断
(a) 每当找到一个空位时，先判断 step + 1 是否等于 N。
(b) 如果等于 N，说明已经成功放置了最后一个皇后，将结果变量 res 加 1，此时不需要再进行递归调用。
(c) 如果不等于 N，则需要占据当前空格。
4. 填充与递归
(a) 检查当前位置（行号 step，列号 j）对应的 j 是否在 colSet 中，step + j 是否在 diag1 中，以及 step - j 是否在 diag2 中。
(b) 如果均不存在，则将 j 存入 colSet，将 step + j 存入 diag1，将 step - j 存入 diag2。
(c) 将 step + 1 作为入参，递归调用辅助函数。
5. 回溯处理
递归调用返回后，需要进行回溯操作：从 colSet、diag1 和 diag2 中分别删除对应的列号 j、和 step + j 以及差 step - j，以便继续寻找该行的下一个可用位置。
6. 执行
在主函数中调用该辅助函数，初始入参传为 0 即可。
**题解**：
```js
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let res = 0;
    
    // 1(c) 初始化三个集合，用于记录被占据的列和斜线
    const colSet = new Set();
    const diag1 = new Set(); // 左斜线: row + col
    const diag2 = new Set(); // 右斜线: row - col

    // 2. 定义辅助函数，step 为当前行索引
    const backtrack = (step) => {
        // 3(a)(b) 递归终点：当放置完最后一行（step 从 0 开始，所以到 n 为结束）
        if (step === n) {
            res++;
            return;
        }

        // 3(c) & 4. 遍历当前行的每一列 j
        for (let j = 0; j < n; j++) {
            // 4(a) 检查冲突：列、左斜、右斜
            if (colSet.has(j) || diag1.has(step + j) || diag2.has(step - j)) {
                continue;
            }

            // 4(b) 占据位置：填充集合
            colSet.add(j);
            diag1.add(step + j);
            diag2.add(step - j);

            // 4(c) 递归调用：处理下一行
            backtrack(step + 1);

            // 5. 回溯处理：删除刚才填充的状态，寻找该行下一个位置
            colSet.delete(j);
            diag1.delete(step + j);
            diag2.delete(step - j);
        }
    };

    // 6. 执行：从第 0 行开始
    backtrack(0);
    return res;
};
```

# [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/description/?envType=study-plan-v2&envId=top-interview-150)

数字 <code>n</code>代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的 ** 括号组合。

**示例 1：** 

> **输入：** n = 3
**输出：** ["((()))","(()())","(())()","()(())","()()()"]

**示例 2：** 

> **输入：** n = 1
**输出：** ["()"]

**提示：** 

- <code>1 <= n <= 8</code>

**思路**：
说实话，这道题的核心是处理两个变量：一个是已生成的括号对数量，另一个是当前左括号的数量。

我们的解题思路是构建一个辅助函数，在函数开始时进行递归终止判断：如果当前总括号数量（即已组成的括号对数）等于 n，将生成的字符串推入结果数组中,直接 return。

具体的特殊判断逻辑如下：

1. 只能添加右括号的情况：
   如果当前已组成的括号数与左括号数相加等于 n，这意味着左括号已经用完，此时我们只能添加右括号。
2. 只能添加左括号的情况：
   如果当前左括号数量为 0，我们只能先添加左括号。
3. 通用情况：
   如果上述两种特殊情况都不满足，则左括号和右括号都可以添加。

在执行具体操作时：
- 如果添加右括号：对左括号数进行减 1 操作，对总括号数（已完成的对数）进行加 1 操作。
- 如果添加左括号：对左括号数进行加 1 操作。

每次添加完括号后，我们将更新后的字符串递归地传入辅助函数。

为了实现回溯还原效果，我们在调用递归函数前，在字符串末尾加上左括号或右括号；在调用返回之后，需要去除掉字符串的最后一个字符。

最后，在主函数中直接调用该辅助函数并传入初始的空字符串和两个0即可。
**题解**：
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    /**
     * @param {number} totalCount 已生成的完整括号对数量
     * @param {number} leftCount  当前待配对的左括号数量
     * @param {string} str        当前构建的字符串路径
     */
    const backtrack = (totalCount, leftCount, str) => {
        // 递归终止：已组成的括号对数达标
        if (totalCount === n) {
            res.push(str);
            return;
        }

        // 逻辑实现：我们将你的三种情况平铺，使 JS 引擎运行更顺畅
        
        // 1. 尝试添加左括号的条件：
        // 只要“已成对数 + 待配对左括号”还没到 n，就说明左括号还有额度
        if (totalCount + leftCount < n) {
            backtrack(totalCount, leftCount + 1, str + "(");
        }

        // 2. 尝试添加右括号的条件：
        // 只要“待配对左括号”大于 0，就可以填入右括号来平账
        if (leftCount > 0) {
            backtrack(totalCount + 1, leftCount - 1, str + ")");
        }
    };

    // 初始调用：空串，对数0，债0
    backtrack(0, 0, "");
    return res;
};
```

# [79. 单词搜索](https://leetcode.cn/problems/word-search/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个<code>m x n</code> 二维字符网格<code>board</code> 和一个字符串单词<code>word</code> 。如果<code>word</code> 存在于网格中，返回 <code>true</code> ；否则，返回 <code>false</code> 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/word2.jpg" style="width: 322px; height: 242px;">

> **输入：** board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "ABCCED"
**输出：** true

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg" style="width: 322px; height: 242px;">

> **输入：** board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "SEE"
**输出：** true

**示例 3：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/15/word3.jpg" style="width: 322px; height: 242px;">

> **输入：** board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "ABCB"
**输出：** false

**提示：** 

- <code>m == board.length</code>
- <code>n = board[i].length</code>
- <code>1 <= m, n <= 6</code>
- <code>1 <= word.length <= 15</code>
- <code>board</code> 和 <code>word</code> 仅由大小写英文字母组成

**进阶：** 你可以使用搜索剪枝的技术来优化解决方案，使其在 <code>board</code> 更大的情况下可以更快解决问题？

**思路**：
这道题需要创建一个辅助函数，其入参是一个 index。

1. 辅助函数内部逻辑：
   (a) 首先，检查当前行列号定义的单元格字符，与根据 index 从 word 中获取的字符是否相等。如果不相等，直接返回 false。
   (b) 如果字符相等，继续判断：若此时 index 等于 word 的长度减 1，说明已找到完整单词，直接返回 true。
   (c) 如果还不满足结束条件，则继续向下执行：先将 board 中对应单元格的字符修改为一个特殊记号（如“#”），防止重复访问。
   (d) 接着在四周的四个方向中寻找没有越界、且字符匹配 index + 1 的单元格。对匹配的单元格进行递归调用。
   (e) 递归完成后，将当前单元格的值改回原来的字符（回溯）。
   (f) 在四个方向循环的过程中，只要有一个方向的递归返回 true，则直接跳出循环并返回 true。
   (g) 若函数末尾仍未返回 true，则最终返回 false。

2. 主函数逻辑：
   对每个单元格进行遍历。只要找到与 word 开头字母相同的单元格，就以此为起点调用辅助函数。如果遍历结束一直没有返回 true，则最终返回 false。
**题解**：
```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    // 1. 辅助函数：row, col 是当前位置，index 是当前匹配到的字符下标
    const dfs = (r, c, index) => {
        // (a) 检查当前单元格字符是否匹配
        if (board[r][c] !== word[index]) {
            return false;
        }

        // (b) 判断是否已经匹配到单词末尾
        if (index === word.length - 1) {
            return true;
        }

        // (c) 记录当前字符，并修改为特殊记号以防重复访问
        const temp = board[r][c];
        board[r][c] = '#';

        // (d) 定义四个方向的偏移量：上、下、左、右
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        // (f) 遍历四个方向
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            // 检查越界情况
            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                // 如果后续路径返回 true，则直接返回 true
                if (dfs(nr, nc, index + 1)) {
                    // (e) 虽然找到了，但在返回前建议养成回溯好习惯（虽然这里直接 return 也没问题）
                    board[r][c] = temp;
                    return true;
                }
            }
        }

        // (e) & (g) 回溯：将字符改回原样，并返回 false
        board[r][c] = temp;
        return false;
    };

    // 2. 主函数逻辑：遍历每一个单元格作为起点
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 只要找到开头字母匹配的，就开启 DFS
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) return true;
            }
        }
    }

    return false;
};
```

# [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>nums</code> ，其中元素已经按 **升序**  排列，请你将其转换为一棵 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1q:" data-state="closed" class="">平衡</button> 二叉搜索树。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" style="width: 302px; height: 222px;">

> **输入：** nums = [-10,-3,0,5,9]
**输出：** [0,-3,9,-10,null,5]
**解释：** [0,-10,5,null,-3,null,9] 也将被视为正确答案：
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" style="width: 302px; height: 222px;">

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" style="width: 342px; height: 142px;">

> **输入：** nums = [1,3]
**输出：** [3,1]
**解释：** [1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。

**提示：** 

- <code>1 <= nums.length <= 10^4</code>
- <code>-10^4 <= nums[i] <= 10^4</code>
- <code>nums</code> 按 **严格递增**  顺序排列

**思路**：
创建一个辅助函数，接受 left 和 right。

1. 递归出口：
   如果 left 大于 right，则返回 null，作为递归的出口。

2. 获取中点：
   获取 left 和 right 的中点。我们可以选择中间靠左的节点，使用它来创建一个新节点。

3. 构建子树：
   将该节点的左子节点和右子节点设为递归创建的节点：
   (a) 左边传入 left 和 mid - 1
   (b) 右边传入 mid + 1 和 right

4. 返回结果：
   最后返回这个 node。

在主函数中，我们直接返回该辅助函数的返回值，传入初始参数 0 和 nums.length - 1 即可。
**题解**：
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    // 1. 创建辅助函数，接受 left 和 right
    const buildBST = (left, right) => {
        // 递归出口：如果 left 大于 right，说明当前范围已处理完
        if (left > right) {
            return null;
        }

        // 2. 获取中点（选择中间靠左的节点）
        // 使用 Math.floor 或右移运算符 >> 1 均可
        const mid = (left + right) >> 1;
        
        // 创建新节点
        const node = new TreeNode(nums[mid]);

        // 3. 构建子树
        // (a) 左子节点连接左半部分递归结果
        node.left = buildBST(left, mid - 1);
        // (b) 右子节点连接右半部分递归结果
        node.right = buildBST(mid + 1, right);

        // 4. 返回结果
        return node;
    };

    // 主函数：直接返回辅助函数的初始调用结果
    return buildBST(0, nums.length - 1);
};
```

# [148. 排序链表](https://leetcode.cn/problems/sort-list/description/?envType=study-plan-v2&envId=top-interview-150)

给你链表的头结点<code>head</code>，请将其按 **升序**  排列并返回 **排序后的链表**  。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" style="width: 450px;">

> <b>输入：</b>head = [4,2,1,3]
<b>输出：</b>[1,2,3,4]

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg" style="width: 550px;">

> <b>输入：</b>head = [-1,5,3,4,0]
<b>输出：</b>[-1,0,3,4,5]

**示例 3：** 

> <b>输入：</b>head = []
<b>输出：</b>[]

<b>提示：</b>

- 链表中节点的数目在范围<code>[0, 5 * 10^4]</code>内
- <code>-10^5<= Node.val <= 10^5</code>

<b>进阶：</b>你可以在<code>O(nlogn)</code> 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

**思路**：
🛠️ 题解：归并排序链表 (Merge Sort)

归并排序是唯一能在 $O(n \log n)$ 时间复杂度下对链表进行排序的算法，其核心逻辑可以拆分为：分割（Divide） 与 合并（Conquer）。

1. 寻找中点并分割 (Sort List)

边界处理：若 !head 或 !head.next，说明链表为空或仅有一个节点，天然有序，直接返回。

快慢指针寻中点：

使用 fast 指针（走 2 步）和 slow 指针（走 1 步）。

引入 prev 指针紧跟 slow。当 fast 走完时，slow 正好在中间。

彻底断开：通过 prev.next = null 将原链表切为以 head 和 slow 为头的两个独立子链表。

递归调用：分别对两个子链表继续排序，直到它们被拆成单个节点。

2. 有序链表合并 (Merge)

哨兵节点 (Dummy)：创建一个虚拟头节点，方便统一处理插入逻辑。

指针移动：比较两个链表头的值，将较小的节点接到 temp.next，并移动该链表的指针。

收尾处理：当一个链表遍历完，直接将另一个链表的剩余部分挂在 temp.next 上。
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // 2(a) 边界处理
    if (!head || !head.next) return head;

    // 2(b) 寻找中点并断开链表
    // 这里使用快慢指针：fast 走两步，slow 走一步
    let prev = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // 断开链表：head 到 prev 是前半部分，slow 开始是后半部分
    prev.next = null;

    // 2(c) 递归与合并
    let left = sortList(head);
    let right = sortList(slow);

    return merge(left, right);
};

// 1. 创建合并函数 (Merge)
function merge(head1, head2) {
    // (a) 创建哨兵头节点
    let dummy = new ListNode(0);
    let temp = dummy;

    // (b) 遍历并比较大小
    while (head1 !== null && head2 !== null) {
        if (head1.val < head2.val) {
            temp.next = head1;
            head1 = head1.next;
        } else {
            temp.next = head2;
            head2 = head2.next;
        }
        temp = temp.next;
    }

    // (c) 拼接剩余部分
    if (head1 !== null) temp.next = head1;
    if (head2 !== null) temp.next = head2;

    return dummy.next;
}
```

# [427. 建立四叉树](https://leetcode.cn/problems/construct-quad-tree/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 <code>n * n</code> 矩阵 <code>grid</code> ，矩阵由若干 <code>0</code> 和 <code>1</code> 组成。请你用四叉树表示该矩阵 <code>grid</code> 。

你需要返回能表示矩阵 <code>grid</code> 的 四叉树 的根结点。

四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：

- <code>val</code>：储存叶子结点所代表的区域的值。1 对应 **True** ，0 对应 **False** 。注意，当 <code>isLeaf</code> 为 **False ** 时，你可以把 **True**  或者 **False**  赋值给节点，两种值都会被判题机制 **接受**  。
- <code>isLeaf</code>: 当这个节点是一个叶子结点时为 **True** ，如果它有 4 个子节点则为 **False**  。

> class Node {
    public boolean val;
  public boolean isLeaf;
  public Node topLeft;
  public Node topRight;
  public Node bottomLeft;
  public Node bottomRight;
}

我们可以按以下步骤为二维区域构建四叉树：

- 如果当前网格的值相同（即，全为 <code>0</code> 或者全为 <code>1</code>），将 <code>isLeaf</code> 设为 True ，将 <code>val</code> 设为网格相应的值，并将四个子节点都设为 Null 然后停止。
- 如果当前网格的值不同，将 <code>isLeaf</code> 设为 False， 将 <code>val</code> 设为任意值，然后如下图所示，将当前网格划分为四个子网格。
- 使用适当的子网格递归每个子节点。

<img alt="" src="https://assets.leetcode.com/uploads/2020/02/11/new_top.png" style="height: 181px; width: 777px;">

如果你想了解更多关于四叉树的内容，可以参考 <a href="https://baike.baidu.com/item/%E5%9B%9B%E5%8F%89%E6%A0%91">百科</a> 。

**四叉树格式：** 

你不需要阅读本节来解决这个问题。只有当你想了解输出格式时才会这样做。输出为使用层序遍历后四叉树的序列化形式，其中 <code>null</code> 表示路径终止符，其下面不存在节点。

它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 <code>[isLeaf, val]</code> 。

如果 <code>isLeaf</code> 或者 <code>val</code> 的值为 True ，则表示它在列表<code>[isLeaf, val]</code> 中的值为 **1**  ；如果 <code>isLeaf</code> 或者 <code>val</code> 的值为 False ，则表示值为 **0 ** 。

**示例 1：** 

<img alt="" src="https://assets.leetcode.com/uploads/2020/02/11/grid1.png" style="height: 99px; width: 777px;">

> **输入：** grid = [[0,1],[1,0]]
**输出：** [[0,1],[1,0],[1,1],[1,1],[1,0]]
**解释：** 此示例的解释如下：
请注意，在下面四叉树的图示中，0 表示 false，1 表示 True 。
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/12/e1tree.png" style="height: 186px; width: 777px;">

**示例 2：** 

<img alt="" src="https://assets.leetcode.com/uploads/2020/02/12/e2mat.png" style="height: 343px; width: 777px;">

> **输入：** grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
**输出：** [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
**解释：** 网格中的所有值都不相同。我们将网格划分为四个子网格。
topLeft，bottomLeft 和 bottomRight 均具有相同的值。
topRight 具有不同的值，因此我们将其再分为 4 个子网格，这样每个子网格都具有相同的值。
解释如下图所示：
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/12/e2tree.png" style="height: 328px; width: 777px;">

**提示：** 

- <code>n == grid.length == grid[i].length</code>
- <code>n == 2^x</code> 其中 <code>0 <= x <= 6</code>

**思路**：
这道题的主要思路是使用递归构建的方法：

1. 判断基础情况：
   首先判断传进来的 grid 是否只有一个单元格（其实只需看它是否只有一行）。如果只有一行，则根据该单元格的值构建节点：
   - 将该节点的 isLeaf 设置为 true
   - 设置对应的 value 值
   - 将其四个子节点（topLeft, topRight, bottomLeft, bottomRight）全部设置为 null

2. 递归拆分：
   如果 grid 还有子节点，我们需要将当前矩阵分割成四个大小相等的子矩阵（将矩阵的行列长度除以 2）。随后将这四个子矩阵分别传入构建函数中，形成递归调用。

3. 合并逻辑：
   在拿到递归返回的四个子节点后，检查它们是否满足合并条件：
   - 如果四个子节点都是叶子节点（isLeaf 为 true），且它们的 value 值都相等：
     (a) 将当前节点设置为叶子节点（isLeaf 为 true）
     (b) 将当前节点的 value 设置为与子节点相同的数值
     (c) 将四个子节点重置为 null
   - 否则（不满足合并条件）：
     (a) 将当前节点的 isLeaf 设置为 false
     (b) 将四个子节点分别指向递归构造出来的节点结果

最后，返回构造完成的节点即可。

以上思想同样适用于传递边界，这样可以更加节省内存和时间，以下是传递边界的实现
**题解**：
```js
var construct = function(grid) {
    const build = (r, c, size) => {
        if (size === 1) {
            return new Node(grid[r][c] === 1, true, null, null, null, null);
        }

        const half = size / 2;
        const tl = build(r, c, half);
        const tr = build(r, c + half, half);
        const bl = build(r + half, c, half);
        const br = build(r + half, c + half, half);

        if (tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf &&
            tl.val === tr.val && tr.val === bl.val && bl.val === br.val) {
            return new Node(tl.val, true, null, null, null, null);
        }
        return new Node(true, false, tl, tr, bl, br);
    };

    return build(0, 0, grid.length);
};
```

# [23. 合并 K 个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

**示例 1：** 

> **输入：** lists = [[1,4,5],[1,3,4],[2,6]]
**输出：** [1,1,2,3,4,4,5,6]
**解释：** 链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6

**示例 2：** 

> **输入：** lists = []
**输出：** []

**示例 3：** 

> **输入：** lists = [[]]
**输出：** []

**提示：** 

- <code>k == lists.length</code>
- <code>0 <= k <= 10^4</code>
- <code>0 <= lists[i].length <= 500</code>
- <code>-10^4 <= lists[i][j] <= 10^4</code>
- <code>lists[i]</code> 按 **升序**  排列
- <code>lists[i].length</code> 的总和不超过 <code>10^4</code>

**思路**：
想要用分治和递归的思想。首先，我们先看一下数组的数量是否为 1，如果是 1 的话，就直接 return 数组中的第一个元素。

如果不为 1 的话，我们将数组的长度除以 2 并向上取整，在此之前先判断一下长度是否为 2：

1. 如果长度为 2，我们就可以正式开始合并，不需要再进行拆分并获取两个头部节点。
2. 刚才提到的获取头部节点，就是根据算出来的 mid，将 list 数组拆分成两个子数组，然后传入 mergeKLists 里面，拿到它返回的头部节点，再进行合并。

假设我们已经拿到了头部节点，具体合并流程如下：
1. 先创建一个 dummy（哨兵）节点。
2. 维护 dummy 节点对应的指针以及两个头部节点对应的指针。
3. 比较两个头部节点指针的值，将较小值的节点插入到目标链表中。
4. 移动指针，重复上述步骤，直到其中一个指针指向 null。
5. 最后，直接将目标链表的指针 next 指向另外一个非空指针。
6. 返回 dummy.next 即可。
**题解**：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 基础情况判断
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    // 1. 分治：获取中间位置
    const mid = Math.floor(lists.length / 2);

    // 2. 拆分数组并递归调用
    // 这里利用了数组的 slice 方法进行优雅切片
    const leftHead = mergeKLists(lists.slice(0, mid));
    const rightHead = mergeKLists(lists.slice(mid));

    // 3. 将递归返回的两个头部节点进行合并
    return mergeTwoLists(leftHead, rightHead);
};

/**
 * 辅助函数：合并两个有序链表 (你的核心合并流程)
 */
function mergeTwoLists(l1, l2) {
    // 1. 创建 dummy 哨兵节点
    let dummy = new ListNode(0);
    // 2. 维护指针
    let curr = dummy;

    // 3. 比较并插入
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        // 4. 移动目标链表指针
        curr = curr.next;
    }

    // 5. 将 next 指向非空指针
    curr.next = l1 !== null ? l1 : l2;

    // 6. 返回结果
    return dummy.next;
}
```

# [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>nums</code> ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">子数组 </button>** 是数组中的一个连续部分。

**示例 1：** 

> **输入：** nums = [-2,1,-3,4,-1,2,1,-5,4]
**输出：** 6
**解释：** 连续子数组[4,-1,2,1] 的和最大，为6 。

**示例 2：** 

> **输入：** nums = [1]
**输出：** 1

**示例 3：** 

> **输入：** nums = [5,4,-1,7,8]
**输出：** 23

**提示：** 

- <code>1 <= nums.length <= 10^5</code>
- <code>-10^4 <= nums[i] <= 10^4</code>

**进阶：** 如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 **分治法**  求解。

**思路**：
首先，初始化一个 `max_answer` 变量。

1.  **算法逻辑**
    遍历数组中的每个元素，将其作为当前项 $x$。我们将 `current_sum` 设置为 $x$ 与 `current_sum + x` 之间的最大值。
    (a) 如果 `current_sum + x` 比 $x$ 本身还要小，说明前面一段子数组的和是负负担，我们可以直接抛弃前面的部分，从当前项 $x$ 开始重新计算，从而得到一个更优的解。
    (b) 得到当前的更优解后，将其与全局的 `max_answer` 进行比较。取两者的较大值，并更新 `max_answer`。
    (c) 最后返回 `max_answer`。

2.  **原理解析**
    我们来分析一下为什么这种做法不会错过最大子数组的边界：
    (a) **左边界判定**：如果当前位置是最大子数组的左边界，说明再往前取任何项都会导致和变小。假设它前面有一个子数组，如果加上这个子数组后的和反而比只取当前项还要小，那说明前面的子数组整体是“负负担”，是完全不可取的。
    (b) **右边界与后续影响**：当 `current_sum` 已经足够大时，往后走如果遇到较小的数，虽然当前和会减小，但由于我们已经记录了历史最高值 `max_answer`，所以最优解不会丢失。
    (c) **正数累加**：如果后续遇到正数，我们同样会将其累加并记录。只要它能贡献正增长，我们就会持续更新当前解，因此绝不会错过全局最优解。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 初始化：由于子数组至少包含一个元素，
    // 我们将 maxAnswer 和 currentSum 都初始化为数组第一个元素
    let maxAnswer = nums[0];
    let currentSum = nums[0];

    // 从第二个元素开始遍历
    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];

        // (a) 核心逻辑：判断前面的累加是否是“负负担”
        // 如果 x > currentSum + x，说明前面的 currentSum < 0
        currentSum = Math.max(x, currentSum + x);

        // (b) 更新全局最大值
        maxAnswer = Math.max(maxAnswer, currentSum);
    }

    // (c) 返回结果
    return maxAnswer;
};
```

# [918. 环形子数组的最大和](https://leetcode.cn/problems/maximum-sum-circular-subarray/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个长度为 <code>n</code> 的**环形整数数组** <code>nums</code>，返回<code>nums</code>的非空 **子数组**  的最大可能和。

**环形数组** 意味着数组的末端将会与开头相连呈环状。形式上， <code>nums[i]</code> 的下一个元素是 <code>nums[(i + 1) % n]</code> ， <code>nums[i]</code>的前一个元素是 <code>nums[(i - 1 + n) % n]</code> 。

**子数组**  最多只能包含固定缓冲区<code>nums</code>中的每个元素一次。形式上，对于子数组<code>nums[i], nums[i + 1], ..., nums[j]</code>，不存在<code>i <= k1, k2 <= j</code>其中<code>k1 % n == k2 % n</code>。

**示例 1：** 

> **输入：** nums = [1,-2,3,-2]
**输出：** 3
**解释：** 从子数组 [3] 得到最大和 3

**示例 2：** 

> **输入：** nums = [5,-3,5]
**输出：** 10
**解释：** 从子数组 [5,5] 得到最大和 5 + 5 = 10

**示例 3：** 

> **输入：** nums = [3,-2,2,-3]
**输出：** 3
**解释：** 从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3

**提示：** 

- <code>n == nums.length</code>
- <code>1 <= n <= 3 * 10^4</code>
- <code>-3 * 10^4<= nums[i] <= 3 * 10^4</code>​​​​​​​

**思路**：
我们需要考虑两种情况：
1. 不跨越数组末尾到达数组前端的正常子数组。
2. 跨越数组首尾的环形子数组。

对于第一种情况，我们可以进行常规的最大子数组和计算逻辑。

对于第二种情况，我们需要确定一个思路：如果存在一个最大的跨越首尾的子数组，那么它的和一定是数组总和减去数组中间的那段最小连续子数组的和。

这时候，我们可以进行两次 Kadane 算法：一次计算最大子数组和（max_sum），一次计算最小子数组和（min_sum）。

计算最小子数组和的逻辑与最大子数组和类似：当之前累加的前缀和能帮助当前的最小和进一步减小时，我们就保留它；如果它开始增长，我们就抛弃它，转而从当前元素重新开始。在此过程中，我们需要不断更新 min_sum，而 total_sum 则是在遍历过程中对所有元素求和。

这里存在一种特殊情况：如果 max_sum 小于 0，说明数组中所有的元素都是负数。在这种情况下，total_sum 等于所有负数的和，而 min_sum 也等于所有元素之和，此时 total_sum - min_sum 会得到 0。这代表了一个空数组的情况，而我们通常不会选择空数组。

因此，在这种特殊情况下，我们应该直接返回 max_sum；否则，返回 max_sum 和 (total_sum - min_sum) 之间的最大值。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let totalSum = 0;
    let maxSum = nums[0], currentMax = 0;
    let minSum = nums[0], currentMin = 0;

    for (let x of nums) {
        // 1. 同时进行最大和最小的 Kadane 计算
        currentMax = Math.max(x, currentMax + x);
        maxSum = Math.max(maxSum, currentMax);

        currentMin = Math.min(x, currentMin + x);
        minSum = Math.min(minSum, currentMin);

        // 2. 累加总和
        totalSum += x;
    }

    // 3. 特殊情况判断：如果全是负数，maxSum 一定小于 0
    // 此时 (totalSum - minSum) 会得到 0，所以必须返回 maxSum
    return maxSum < 0 ? maxSum : Math.max(maxSum, totalSum - minSum);
};
```

# [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 <code>O(log n)</code> 的算法。

**示例 1:** 

> **输入:**  nums = [1,3,5,6], target = 5
**输出:**  2

**示例2:** 

> **输入:**  nums = [1,3,5,6], target = 2
**输出:**  1

**示例 3:** 

> **输入:**  nums = [1,3,5,6], target = 7
**输出:**  4

**提示:** 

- <code>1 <= nums.length <= 10^4</code>
- <code>-10^4 <= nums[i] <= 10^4</code>
- <code>nums</code> 为**无重复元素** 的**升序** 排列数组
- <code>-10^4 <= target <= 10^4</code>

**思路**：
left 变量初始值为 0，right 变量为 nums.length - 1。我们进行不断迭代，只要 left 小于等于 right 就可以一直往下走。

计算中间索引 mid = Math.floor((left + right) / 2)：
1. 如果 nums[mid] 等于 target，我们就直接 return mid。
2. 如果 nums[mid] 小于 target，我们就将 left 更新为 mid + 1。
3. 否则，就将 right 更新为 mid - 1。

最终循环结束后，如果没有 return mid，我们需要考虑二分查找结束时的边界情况：
- 在循环的最后一刻，left 和 right 是相等的，此时 mid 也等于 left 和 right。
- 如果此时 nums[mid] 小于 target，left 会执行 left = mid + 1，从而超过 right 并指向第一个大于 target 的数字所在的索引值。
- 如果在此之前 right 进行了减 1 操作，说明之前的 right 所代表的数字一定是比 target 大的。

因此，当循环结束时：
- left 刚好指向第一个比 target 大的数字所在的索引值。
- right 等于 mid - 1，而 left 保持在第一个大于 target 的索引位置。

在这种情况下，我们只需要返回 left 就可以了，它即为 target 应该插入的位置索引。
**题解**：
```js
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); 
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // 循环结束后，left 的位置就是 target 应该插入的位置
    return left;
};
```

# [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个满足下述两条属性的 <code>m x n</code> 整数矩阵：

- 每行中的整数从左到右按非严格递增顺序排列。
- 每行的第一个整数大于前一行的最后一个整数。

给你一个整数 <code>target</code> ，如果 <code>target</code> 在矩阵中，返回 <code>true</code> ；否则，返回 <code>false</code> 。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;">

> **输入：** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
**输出：** true

**示例 2：** 
<img alt="" src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/11/25/mat2.jpg" style="width: 322px; height: 242px;">

> **输入：** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
**输出：** false

**提示：** 

- <code>m == matrix.length</code>
- <code>n == matrix[i].length</code>
- <code>1 <= m, n <= 100</code>
- <code>-10^4 <= matrix[i][j], target <= 10^4</code>

**思路**：
创建一个辅助函数 indexToPosition。

1. 初始化指针：
   - 让 left 为 0
   - 让 right 为 m × n - 1（其中 m 是矩阵的高度，n 是矩阵的列数）

2. 算法实现：
   按照二分搜索的算法实现即可，但需要注意一个细节：每次计算得到的 mid 结果，都需要事先通过 indexToPosition 获取到具体的行列值（位置），这样才方便进行比较。

3. 逻辑判断：
   - 如果发现中点的值等于目标值，直接 return true
   - 如果循环结束后仍未得到结果，直接 return false，不需要返回具体数值
**题解**：
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;    // 矩阵行数
    const n = matrix[0].length; // 矩阵列数

    // 1. 映射函数：将一维索引转换为二维坐标 [row, col]
    const indexToPosition = (index) => {
        const row = Math.floor(index / n); // 行号 = 总索引 / 总列数
        const col = index % n;            // 列号 = 总索引 % 总列数
        return [row, col];
    };

    // 2. 初始化指针
    let left = 0;
    let right = m * n - 1;

    // 3. 标准二分查找算法实现
    while (left <= right) {
        let mid = (left + right) >> 1;
        
        // 使用你的辅助逻辑获取行列值
        const [r, c] = indexToPosition(mid);
        const midValue = matrix[r][c];

        if (midValue === target) {
            return true; // 发现目标
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // 4. 循环结束未找到
    return false;
};
```

# [162. 寻找峰值](https://leetcode.cn/problems/find-peak-element/description/?envType=study-plan-v2&envId=top-interview-150)

峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组<code>nums</code>，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 **任何一个峰值**  所在位置即可。

你可以假设<code>nums[-1] = nums[n] = -∞</code> 。

你必须实现时间复杂度为 <code>O(log n)</code> 的算法来解决此问题。

**示例 1：** 

> **输入：** nums = <code>[1,2,3,1]</code>
**输出：** 2
**解释：** 3 是峰值元素，你的函数应该返回其索引 2。

**示例2：** 

> **输入：** nums = <code>[</code>1,2,1,3,5,6,4]
**输出：** 1 或 5 
**解释：** 你的函数可以返回索引 1，其峰值元素为 2；
    或者返回索引 5， 其峰值元素为 6。

**提示：** 

- <code>1 <= nums.length <= 1000</code>
- <code>-2^31 <= nums[i] <= 2^31 - 1</code>
- 对于所有有效的 <code>i</code> 都有 <code>nums[i] != nums[i + 1]</code>

**思路**：
首先，我们注意到题目要求实现时间复杂度为 O(log N) 的算法，因此很显然必须使用二分查找的方法。

我们的核心思路是寻找数组中的任意一个峰值。具体步骤如下：
1. 初始化 `left` 和 `right` 指针，分别指向数组的首部和尾部。
2. 计算中间位置 `mid`（向下取整）。
3. 比较 `nums[mid]` 和 `nums[mid + 1]` 的值：
   (a) 既然题目假设 `nums[-1]` 和 `nums[n]` 均为负无穷，那么只要我们沿着值增大的方向去找，就一定能找到一个峰值。
   (b) 如果 `nums[mid + 1] > nums[mid]`，说明右侧一定存在峰值，此时将 `left` 更新为 `mid + 1`，在右半部分继续查找。
   (c) 反之，如果 `nums[mid] > nums[mid + 1]`，则将 `right` 更新为 `mid`。

这个维护过程的核心思想是：确保 `left` 和 `right` 之间始终存在至少一个峰值。我们不断更新区间，直到 `left` 和 `right` 相等。此时，`left` 所在的位置即为其中一个峰值的位置。

在具体实现上，我们可以直接使用迭代法来完成上述逻辑，最后返回 `left` 即可。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // 只要区间没有收缩到同一个点，就继续迭代
    while (left < right) {
        let mid = (left + right) >> 1;

        // (b) 比较 mid 和 mid + 1
        // 如果右侧更高，说明处于“上坡”，右侧必有峰值
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } 
        // (c) 如果左侧更高或相等，说明处于“下坡”，峰值在左侧（包含当前 mid）
        else {
            right = mid;
        }
    }

    // 最终 left === right，指向峰值
    return left;
};
```

# [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

整数数组 <code>nums</code> 按升序排列，数组中的值 **互不相同**  。

在传递给函数之前，<code>nums</code> 在预先未知的某个下标 <code>k</code>（<code>0 <= k < nums.length</code>）上进行了 **向左旋转** ，使数组变为 <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code>（下标 **从 0 开始**  计数）。例如， <code>[0,1,2,4,5,6,7]</code> 下标<code>3</code>上向左旋转后可能变为<code>[4,5,6,7,0,1,2]</code> 。

给你 **旋转后**  的数组 <code>nums</code> 和一个整数 <code>target</code> ，如果 <code>nums</code> 中存在这个目标值 <code>target</code> ，则返回它的下标，否则返回<code>-1</code>。

你必须设计一个时间复杂度为 <code>O(log n)</code> 的算法解决此问题。

**示例 1：** 

> **输入：** nums = [4,5,6,7,0,1,2], target = 0
**输出：** 4

**示例2：** 

> **输入：** nums = [4,5,6,7,0,1,2], target = 3
**输出：** -1

**示例 3：** 

> **输入：** nums = [1], target = 0
**输出：** -1

**提示：** 

- <code>1 <= nums.length <= 5000</code>
- <code>-10^4 <= nums[i] <= 10^4</code>
- <code>nums</code> 中的每个值都 **独一无二** 
- 题目数据保证 <code>nums</code> 在预先未知的某个下标上进行了旋转
- <code>-10^4 <= target <= 10^4</code>

**思路**：
我们的算法其实是二分查找的一个变形。我们先将区间一分为二，此时会产生两个子区间。其中一定有一个区间是有序的，虽然不确定是否两个都有序，但这并不影响我们的处理。

具体思路如下：

1. 首先判断左半区间是否有序。
   判断标志是：如果 `mid` 对应的值大于等于 `left` 对应的值，则说明左半区间是有序的。
   (a) 为什么这个逻辑成立？假设数组进行过旋转，如果 `mid` 落在了旋转后的区间里，它的值一定会比 `left` 小。因此，只要 `mid` 的值大于 `left`，左区间就一定是顺序排列的。
   (b) 否则，右半区间就一定是有序的。

2. 在查找过程中，首先判断 `mid` 对应的值是否等于 `target`：
   如果相等，则直接返回 `mid` 的索引。

3. 如果左半区间是有序的：
   判断 `target` 是否在左半区间的数值范围内。如果在，我们将 `right` 更新为 `mid - 1`；否则，将 `left` 更新为 `mid + 1`。

4. 如果右半区间是有序的：
   同理，先判断 `target` 是否在右半区间内。如果在，将 `left` 更新为 `mid + 1`；不在的话，则更新 `right`。

这个算法的精妙之处在于，`target` 最终一定会落入某一个有序区间内。到那个时候，整个搜索过程就会降级为一个普通的二分查找。所以，这个算法在处理旋转排序数组时是完全行得通的。
**题解**：
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        // 2. 首先判断 mid 是否等于 target
        if (nums[mid] === target) return mid;

        // 1. 判断左半区间是否有序
        if (nums[left] <= nums[mid]) {
            // 3. 左半区间有序
            // 判断 target 是否在 [nums[left], nums[mid]) 范围内
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // 在左边，收缩右边界
            } else {
                left = mid + 1;  // 不在左边，去右边找
            }
        } else {
            // 4. 右半区间有序
            // 判断 target 是否在 (nums[mid], nums[right]] 范围内
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;  // 在右边，收缩左边界
            } else {
                right = mid - 1; // 不在右边，去左边找
            }
        }
    }

    return -1;
};
```

# [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个按照非递减顺序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 <code>target</code>，返回<code>[-1, -1]</code>。

你必须设计并实现时间复杂度为<code>O(log n)</code>的算法解决此问题。

**示例 1：** 

> **输入：** nums = [<code>5,7,7,8,8,10]</code>, target = 8
**输出：** [3,4]

**示例2：** 

> **输入：** nums = [<code>5,7,7,8,8,10]</code>, target = 6
**输出：** [-1,-1]

**示例 3：** 

> **输入：** nums = [], target = 0
**输出：** [-1,-1]

**提示：** 

- <code>0 <= nums.length <= 10^5</code>
- <code>-10^9<= nums[i]<= 10^9</code>
- <code>nums</code>是一个非递减数组
- <code>-10^9<= target<= 10^9</code>

**思路**：
这个需要我们写一个二分查找的辅助函数。在辅助函数中，它需要接收 `nums` 数组、`target` 以及一个 `isLower` 参数。

核心逻辑如下：

1. 初始化：
   一开始先进行正常的二分查找，将记录索引的变量 `index` 初始化为 -1。

2. 循环迭代与判断：
   (a) 首先判断 `target` 是否和当前 `mid` 所对应的值相等。
   (b) 如果相等，根据 `isLower` 的值进行分支处理：
       - 如果 `isLower` 为 true：说明我们要找更小的索引。此时将 `right` 设置为 `mid - 1`，在左半部分继续探索，并记录当前的 `mid` 到 `index` 中。
       - 如果 `isLower` 为 false：说明我们要找更靠右的索引。此时将 `left` 设置为 `mid + 1`，在右半部分继续探索。

3. 返回结果：
   - 辅助函数最后返回 `index`。
   - 在主函数中，分别调用辅助函数获取 `leftIndex` 和 `rightIndex`，并以数组形式返回即可。
**题解**：
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 1. 定义辅助函数
    const binarySearch = (nums, target, isLower) => {
        let left = 0, right = nums.length - 1;
        let index = -1; // 初始化索引为 -1

        while (left <= right) {
            let mid = (left + right) >> 1;

            // 2. 逻辑判断
            if (nums[mid] === target) {
                index = mid; // 记录当前找到的索引
                if (isLower) {
                    // 如果找左边界，向左半部分继续探索
                    right = mid - 1;
                } else {
                    // 如果找右边界，向右半部分继续探索
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    };

    // 3. 主函数调用
    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false);

    return [leftIndex, rightIndex];
};
```

# [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

已知一个长度为 <code>n</code> 的数组，预先按照升序排列，经由 <code>1</code> 到 <code>n</code> 次 **旋转**  后，得到输入数组。例如，原数组 <code>nums = [0,1,2,4,5,6,7]</code> 在变化后可能得到：

- 若旋转 <code>4</code> 次，则可以得到 <code>[4,5,6,7,0,1,2]</code>
- 若旋转 <code>7</code> 次，则可以得到 <code>[0,1,2,4,5,6,7]</code>

注意，数组 <code>[a[0], a[1], a[2], ..., a[n-1]]</code> **旋转一次**  的结果为数组 <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code> 。

给你一个元素值 **互不相同**  的数组 <code>nums</code> ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 **最小元素**  。

你必须设计一个时间复杂度为<code>O(log n)</code> 的算法解决此问题。

**示例 1：** 

> **输入：** nums = [3,4,5,1,2]
**输出：** 1
**解释：** 原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

**示例 2：** 

> **输入：** nums = [4,5,6,7,0,1,2]
**输出：** 0
**解释：** 原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。

**示例 3：** 

> **输入：** nums = [11,13,15,17]
**输出：** 11
**解释：** 原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。

**提示：** 

- <code>n == nums.length</code>
- <code>1 <= n <= 5000</code>
- <code>-5000 <= nums[i] <= 5000</code>
- <code>nums</code> 中的所有整数 **互不相同** 
- <code>nums</code> 原来是一个升序排序的数组，并进行了 <code>1</code> 至 <code>n</code> 次旋转

**思路**：
寻找旋转排序数组中的最小值，可以简单地将其理解为寻找数组中的“谷底”。

我们要找这个谷底，首先还是采用二分查找的思路：
1. 先拿到中点（mid），然后判断中点值与右边界（right）值的关系。
2. 如果中点值小于 right 的对应值，说明右边是有序的，那么谷底必然在左侧。此时我们将 right 设置为 mid 。
3. 否则（即右侧不是有序的），我们就将 left 设置为 mid + 1。

最后，当 left 和 right 相等时，返回 left 所对应的值即可。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // 使用 left < right，因为我们要在循环结束时让 left === right
    while (left < right) {
        // 向下取整获取中点
        const mid = (left + right) >> 1;

        if (nums[mid] < nums[right]) {
            // 右半部分是有序的，最小值在左半部分（包含 mid）
            right = mid;
        } else {
            // 右半部分是无序的，最小值一定在 mid 的右侧
            // 因为 nums[mid] 已经大于 nums[right] 了，mid 绝对不可能是最小值
            left = mid + 1;
        }
    }

    // 最终 left 和 right 会在最小值处汇合
    return nums[left];
};
```

# [4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个大小分别为 <code>m</code> 和 <code>n</code> 的正序（从小到大）数组<code>nums1</code> 和<code>nums2</code>。请你找出并返回这两个正序数组的 **中位数**  。

算法的时间复杂度应该为 <code>O(log (m+n))</code> 。

**示例 1：** 

> **输入：** nums1 = [1,3], nums2 = [2]
**输出：** 2.00000
**解释：** 合并数组 = [1,2,3] ，中位数 2

**示例 2：** 

> **输入：** nums1 = [1,2], nums2 = [3,4]
**输出：** 2.50000
**解释：** 合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

**提示：** 

- <code>nums1.length == m</code>
- <code>nums2.length == n</code>
- <code>0 <= m <= 1000</code>
- <code>0 <= n <= 1000</code>
- <code>1 <= m + n <= 2000</code>
- <code>-10^6 <= nums1[i], nums2[i] <= 10^6</code>

**思路**：
Vamos lá. 这道题本质上需要找到一个分割线，使得左半部分的最大值小于等于右半部分的最小值。

具体步骤如下：
1. 为了保证不越界和提高效率，我们对较短的数组（假设为 nums1）进行二分查找。
2. 将两个数组的大小相加，进行 (m + n + 1) / 2 操作，获得 half_len。
3. 使得两个切点 i 和 j 相加等于 half_len。其中 i 是 nums1 的切点，j 是 nums2 的切点。
4. 我们需要实现的交叉条件是：
   - nums1_left_max <= nums2_right_min
   - nums2_left_max <= nums1_right_min

二分过程：
1. 初始化 left 为 0，right 为 nums1 的长度。
2. 在二分过程中：
   (a) i 取 left 加 right 的平均数并向下取整。
   (b) j 等于 half_len 减去 i。
   (c) 分别获取边界值：
       - nums1_left_max：假设为 nums1[i-1]。如果 i 等于 0，则用负无穷代替。
       - nums2_left_max：同理，如果 j 等于 0，则用负无穷代替。
       - nums1_right_min：假设为 nums1[i]。如果 i 到达边界，则用正无穷代替。
       - nums2_right_min：假设为 nums2[j]。如果 j 到达边界，则用正无穷代替。

判断与返回：
1. 如果满足交叉条件，则找到了完美切点：
   - 如果总长度是奇数，直接返回左半部分的最大值：max(nums1_left_max, nums2_left_max)。
   - 如果总长度是偶数，返回 (左半部分最大值 + 右半部分最小值) / 2。
2. 如果 nums1_left_max > nums2_right_min，意味着 nums1 的左侧部分太大，需要向左移动（减小 i）。
3. 否则，如果 nums2_left_max > nums1_right_min，说明 nums1 的左侧部分太小，需要向右移动（增大 i）。
**题解**：
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 1. 确保 nums1 是较短的数组，保证 j 不会为负数且效率更高
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;
    
    // half_len 代表左半部分需要的总长度
    const half_len = Math.floor((m + n + 1) / 2);

    while (left <= right) {
        // i 为 nums1 的切点，j 为 nums2 的切点
        let i = (left + right) >> 1;
        let j = half_len - i;

        // 2. 获取边界值，处理边界溢出的无穷大/小情况
        let nums1_left_max = (i === 0) ? -Infinity : nums1[i - 1];
        let nums1_right_min = (i === m) ? Infinity : nums1[i];
        let nums2_left_max = (j === 0) ? -Infinity : nums2[j - 1];
        let nums2_right_min = (j === n) ? Infinity : nums2[j];

        // 3. 核心判断逻辑
        if (nums1_left_max <= nums2_right_min && nums2_left_max <= nums1_right_min) {
            // 找到了完美切点！
            if ((m + n) % 2 === 1) {
                // 奇数情况：左侧最大值即为中位数
                return Math.max(nums1_left_max, nums2_left_max);
            } else {
                // 偶数情况：(左侧最大 + 右侧最小) / 2
                return (Math.max(nums1_left_max, nums2_left_max) + 
                        Math.min(nums1_right_min, nums2_right_min)) / 2;
            }
        } else if (nums1_left_max > nums2_right_min) {
            // nums1 切点太靠右，需要左移
            right = i - 1;
        } else {
            // nums1 切点太靠左，需要右移
            left = i + 1;
        }
    }

    return 0.0;
};
```

# [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-interview-150)

给定整数数组 <code>nums</code> 和整数 <code>k</code>，请返回数组中第 <code>**k** </code> 个最大的元素。

请注意，你需要找的是数组排序后的第 <code>k</code> 个最大的元素，而不是第 <code>k</code> 个不同的元素。

你必须设计并实现时间复杂度为 <code>O(n)</code> 的算法解决此问题。

**示例 1:** 

> **输入:**  <code>[3,2,1,5,6,4],</code> k = 2
**输出:**  5

**示例2:** 

> **输入:**  <code>[3,2,3,1,2,4,5,5,6], </code>k = 4
**输出:**  4

**提示： ** 

- <code>1 <= k <= nums.length <= 10^5</code>
- <code>-10^4<= nums[i] <= 10^4</code>

**思路**：
这道题需要我们利用最小堆（Min-Heap）的规则，即父节点的值永远比两个子节点小。

**核心逻辑**：
1. 尝试将数组中的每一个元素推进最小堆中。
2. 如果堆的大小（size）大于 k，就弹出当前的最小元素。
3. 遍历结束后，堆中剩下的就是数组中最大的 k 个元素。由于是最小堆，堆顶（顶部）就是这 k 个最大元素中的最小者，也就是我们要找的第 k 大元素。
4. 最后返回最小堆的堆顶即可。

**具体实现（以数组实现为例）**：
1. **Pop 操作**：
   - 如果堆的大小为 1，直接弹出数组尾部元素。
   - 如果大于 1，先取出堆顶元素用于返回，然后将数组尾部的元素移动到堆顶，接着进行 `bubbleDown`（下沉）操作以重新整理堆结构。
2. **bubbleDown 操作**：
   - 从根节点（index 为 0）开始，检查它与两个子节点的大小关系。
   - 左子节点的索引是 `2 * index + 1`，右子节点是 `2 * index + 2`。
   - 比较父节点与两个子节点，找到其中最小的一个。
   - 如果最小值不是当前的父节点，则将父节点与该最小子节点进行交换，并更新 index 为该最小节点的索引，继续循环；否则退出循环。
3. **bubbleUp 操作**：
   - 当我们在数组尾部 push 进一个新元素后，需要进行上浮操作。
   - 计算父节点的索引：`(index - 1) / 2`。
   - 检查当前元素是否比其父节点更小。
   - 如果父节点更大，则交换两者的位置，并将当前 index 更新为父节点的索引，继续向上比较。
   - 如果父节点已经比当前元素小（或相等），则说明堆结构已经稳定，直接退出循环。
**题解**：
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MyMinHeap();

    for (const num of nums) {
        minHeap.push(num);
        // 如果堆的大小超过 k，弹出堆顶（当前 k 个最大数里最小的那个）
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    // 堆顶就是第 k 个最大的元素
    return minHeap.peek();
};

class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    size() { return this.heap.length; }
    peek() { return this.heap[0]; }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        // 将末尾元素移到堆顶，然后下沉
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }

    // 上浮：新元素在末尾，向上找位置
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // 下沉：末尾元素顶替了堆顶后，向下找位置
    bubbleDown(index) {
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            // 比较父节点、左孩子、右孩子，选出最小的
            if (leftChild < this.size() && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.size() && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}
```

# [502. IPO](https://leetcode.cn/problems/ipo/description/?envType=study-plan-v2&envId=top-interview-150)

假设 力扣（LeetCode）即将开始 **IPO**  。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 <code>k</code> 个不同的项目。帮助 力扣 设计完成最多 <code>k</code> 个不同项目后得到最大总资本的方式。

给你 <code>n</code> 个项目。对于每个项目 <code>i</code>** ** ，它都有一个纯利润 <code>profits[i]</code> ，和启动该项目需要的最小资本 <code>capital[i]</code> 。

最初，你的资本为 <code>w</code> 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

总而言之，从给定项目中选择 **最多**  <code>k</code> 个不同项目的列表，以 **最大化最终资本**  ，并输出最终可获得的最多资本。

答案保证在 32 位有符号整数范围内。

**示例 1：** 

> **输入：** k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
**输出：** 4
**解释：
** 由于你的初始资本为 0，你仅可以从 0 号项目开始。
在完成后，你将获得 1 的利润，你的总资本将变为 1。
此时你可以选择开始 1 号或 2 号项目。
由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。

**示例 2：** 

> **输入：** k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
**输出：** 6

**提示：** 

- <code>1 <= k <= 10^5</code>
- <code>0 <= w <= 10^9</code>
- <code>n == profits.length</code>
- <code>n == capital.length</code>
- <code>1 <= n <= 10^5</code>
- <code>0 <= profits[i] <= 10^4</code>
- <code>0 <= capital[i] <= 10^9</code>

**思路**：
这道题的思路大概如下：

1. 预处理数据：
   在进行操作前，我们得把 Profits 和 Capital 合成一个数组，然后根据 Capital 从小到大进行排序。

2. 核心算法流程：
   进行 K 次以下操作：
   (a) 根据当前的 W，将所有符合 Capital 小于等于 W 的项目，将其 Profit 推进（push）最大堆中。
   (b) 每当更新成功，就将 current index 进行自增（只要是能做的项目，push 进去后就自增索引）。
   (c) 从最大堆中取出堆顶元素，将 W 加上这个堆顶的 Profit。
   (d) 重复上述过程，直到完成 K 次操作，最后得到的 W 就是我们要的答案。

3. 最大堆的具体实现（基于数组）：
   (a) 插入操作：
       先将当前元素放在数组最尾部。将当前元素的 index 加 1 再除以 2，得到其父节点。将当前节点与父节点比较，如果比父节点大，就进行交换，直到比父节点小或者到达堆顶。
   (b) 弹出操作（Delete/Pop）：
       将堆顶元素弹出后，将尾部元素设为新的首部（堆顶），并弹出原尾部元素。
       然后执行下滤（Sift Down）操作：从顶部开始，比较当前节点与其两个子节点，找出这三个节点中最大的一个 index（biggest index）。
       如果 biggest index 不等于当前 index，则将它们交换并继续向下比较，直到 biggest index 等于当前 index 为止。
**题解**：
```js
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length;
    const projects = [];
    
    // 1. 预处理：合并并按 Capital 升序排序
    for (let i = 0; i < n; i++) {
        projects.push({ cap: capital[i], pro: profits[i] });
    }
    projects.sort((a, b) => a.cap - b.cap);

    const maxProfitHeap = new MyMaxHeap();
    let curr = 0; // 单向指针，确保每个项目只入堆一次

    // 2. 核心算法流程
    for (let i = 0; i < k; i++) {
        // 将当前资本 w 能负担的所有项目利润推入最大堆
        while (curr < n && projects[curr].cap <= w) {
            maxProfitHeap.push(projects[curr].pro);
            curr++; // 索引自增，下次循环从这里继续往后找
        }

        // 如果堆为空，说明当前资本买不起任何新项目了，提前退出
        if (maxProfitHeap.isEmpty()) break;

        // 贪心：每次做利润最大的项目
        w += maxProfitHeap.pop();
    }

    return w;
};

// 3. 最大堆实现
class MyMaxHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() { return this.heap.length === 0; }

    push(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return top;
    }

    siftUp(index) {
        while (index > 0) {
            let parent = (index - 1) >> 1;
            if (this.heap[index] > this.heap[parent]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            } else break;
        }
    }

    siftDown(index) {
        const size = this.heap.length;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let largest = index;

            if (left < size && this.heap[left] > this.heap[largest]) largest = left;
            if (right < size && this.heap[right] > this.heap[largest]) largest = right;

            if (largest !== index) {
                [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
                index = largest;
            } else break;
        }
    }
}
```

# [373. 查找和最小的 K 对数字](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/description/?envType=study-plan-v2&envId=top-interview-150)

给定两个以 **非递减顺序排列**  的整数数组 <code>nums1</code> 和** ** <code>nums2</code>**** ,以及一个整数 <code>k</code>**** 。

定义一对值<code>(u,v)</code>，其中第一个元素来自<code>nums1</code>，第二个元素来自 <code>nums2</code>**** 。

请找到和最小的 <code>k</code>个数对<code>(u<sub>1</sub>,v<sub>1</sub>)</code>, <code>(u<sub>2</sub>,v<sub>2</sub>)</code> ... <code>(u<sub>k</sub>,v<sub>k</sub>)</code>。

<strong class="example">示例 1:** 

> **输入:**  nums1 = [1,7,11], nums2 = [2,4,6], k = 3
**输出:**  [[1,2],[1,4],[1,6]]
**解释: ** 返回序列中的前 3 对数：
     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

<strong class="example">示例 2:** 

> **输入: ** nums1 = [1,1,2], nums2 = [1,2,3], k = 2
**输出: ** [[1,1],[1,1]]
**解释: ** 返回序列中的前 2 对数：
    [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

**提示:** 

- <code>1 <= nums1.length, nums2.length <= 10^5</code>
- <code>-10^9 <= nums1[i], nums2[i] <= 10^9</code>
- <code>nums1</code> 和 <code>nums2</code> 均为 **升序排列** 
- <code>1 <= k <= 10^4</code>
- <code>k <=nums1.length *nums2.length</code>

**思路**：
我们要实现一个特殊的小顶堆。传入的数值是一个对象，对象中分别有 sum、x、y 三个属性。在排序时，我们使用 sum 属性来进行排序。

我们可以将 nums1 和 nums2 的组合想象成一个二维矩阵：横轴是 nums1，纵轴是 nums2。具体的实现逻辑如下：

1. 首先取得 k 和 nums2 长度的最小值。
2. 将每一行的第一个元素（或者前 k 行的第一个元素）入堆，往小了取。
3. 循环进行 k 次如下操作：
   (a) 将小顶堆的堆顶弹出。
   (b) 将取得的 x、y 坐标推进结果数组。
   (c) 将当前单元格在矩阵中的下一个单元格入堆（即当前这一格的下一列元素）。
   (d) 下一次循环开始时，继续从堆顶取出最小元素。

最后返回结果数组即可。
**题解**：
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const n = nums1.length;
    const m = nums2.length;
    const res = [];
    
    // 实例化小顶堆，根据 sum 排序
    const minHeap = new MyMinHeap((a, b) => a.sum < b.sum);

    // 1. 初始化：将 nums1 的前 k 个元素与 nums2 的第 0 个元素组合入堆
    // 想象成把矩阵每一行的第一个元素放进竞技场
    for (let i = 0; i < Math.min(n, k); i++) {
        minHeap.push({
            sum: nums1[i] + nums2[0],
            x: i,
            y: 0
        });
    }

    // 2. 核心迭代：取出最小的 k 个
    while (res.length < k && !minHeap.isEmpty()) {
        // (a) 弹出堆顶（当前最小和）
        const { x, y } = minHeap.pop();
        
        // (b) 记录结果
        res.push([nums1[x], nums2[y]]);

        // (c) 将当前行的“下一个”列元素入堆
        // 即：保持 x 不变，将 y + 1 指向的项目入堆
        if (y + 1 < m) {
            minHeap.push({
                sum: nums1[x] + nums2[y + 1],
                x: x,
                y: y + 1
            });
        }
    }

    return res;
};

// 小顶堆模板
class MyMinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    isEmpty() { return this.heap.length === 0; }
    push(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return top;
    }
    siftUp(index) {
        while (index > 0) {
            let parent = (index - 1) >> 1;
            if (this.compare(this.heap[index], this.heap[parent])) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            } else break;
        }
    }
    siftDown(index) {
        while (true) {
            let left = index * 2 + 1, right = index * 2 + 2, smallest = index;
            if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest])) smallest = left;
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest])) smallest = right;
            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else break;
        }
    }
}
```

# [295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/description/?envType=study-plan-v2&envId=top-interview-150)

**中位数** 是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

- 例如 <code>arr = [2,3,4]</code>的中位数是 <code>3</code>。
- 例如<code>arr = [2,3]</code> 的中位数是 <code>(2 + 3) / 2 = 2.5</code> 。

实现 MedianFinder 类:

- 
<code>MedianFinder()</code> 初始化 <code>MedianFinder</code>对象。

- 
<code>void addNum(int num)</code> 将数据流中的整数 <code>num</code> 添加到数据结构中。

- 
<code>double findMedian()</code> 返回到目前为止所有元素的中位数。与实际答案相差<code>10^-5</code>以内的答案将被接受。

**示例 1：** 

> **输入** 
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
**输出** 
[null, null, null, 1.5, null, 2.0]

**解释** 
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

**提示:** 

- <code>-10^5<= num <= 10^5</code>
- 在调用 <code>findMedian</code>之前，数据结构中至少有一个元素
- 最多<code>5 * 10^4</code>次调用<code>addNum</code>和<code>findMedian</code>

**思路**：
使用一个左最大堆和一个右最小堆来实现。在 addNum 的过程中，我们需要一个关键的标志位 isLeft，最开始 isLeft 为 true。

1. **addNum 逻辑**：
- 无论如何先将数字加入左最大堆，然后取出其中最大的数字，将其放入右最小堆。这样就保证了右边的值肯定比左边的值大。

- 此时我们需要进行检查：
  - 如果右最小堆的尺寸大于左最大堆，我们就将右最小堆的堆顶弹出来，放到左最大堆中。
  - 这样既能保证右边的元素全部比左边大，又能保证左边的尺寸永远与右边相等，或者比右边多一个。

2. **findMedian 逻辑**：
   - 寻找中位数时，先比较两个堆的尺寸。
   - 如果左最大堆的尺寸大于右最小堆，直接取左最大堆的堆顶作为中位数。
   - 如果两个堆的尺寸相等，则将两个堆的堆顶相加并除以 2 即可。
**题解**：
```js
var MedianFinder = function() {
    // 左边是大顶堆（存较小的一半），右边是小顶堆（存较大的一半）
    this.leftMaxHeap = new MyHeap((a, b) => a > b);
    this.rightMinHeap = new MyHeap((a, b) => a < b);
};

/** * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 1. 无论如何先入左堆，再把左堆最大的给右堆
    // 这一步确保了：右堆的所有元素一定大于左堆
    this.leftMaxHeap.push(num);
    this.rightMinHeap.push(this.leftMaxHeap.pop());

    // 2. 检查平衡：我们希望左堆的长度 >= 右堆
    // 如果右边多了，就从右边拿一个最小的还给左边
    if (this.rightMinHeap.size() > this.leftMaxHeap.size()) {
        this.leftMaxHeap.push(this.rightMinHeap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.leftMaxHeap.size() > this.rightMinHeap.size()) {
        // 奇数情况：左堆多一个，中位数就是左堆顶
        return this.leftMaxHeap.peek();
    } else {
        // 偶数情况：两堆顶平分
        return (this.leftMaxHeap.peek() + this.rightMinHeap.peek()) / 2;
    }
};

// --- 通用堆类实现 ---
class MyHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(val) {
        this.data.push(val);
        this.siftUp(this.size() - 1);
    }
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.siftDown(0);
        return top;
    }
    siftUp(i) {
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (this.compare(this.data[i], this.data[p])) {
                [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
                i = p;
            } else break;
        }
    }
    siftDown(i) {
        while (true) {
            let l = i * 2 + 1, r = i * 2 + 2, t = i;
            if (l < this.size() && this.compare(this.data[l], this.data[t])) t = l;
            if (r < this.size() && this.compare(this.data[r], this.data[t])) t = r;
            if (t !== i) {
                [this.data[i], this.data[t]] = [this.data[t], this.data[i]];
                i = t;
            } else break;
        }
    }
}
```

# [67. 二进制求和](https://leetcode.cn/problems/add-binary/description/?envType=study-plan-v2&envId=top-interview-150)

给你两个二进制字符串 <code>a</code> 和 <code>b</code> ，以二进制字符串的形式返回它们的和。

**示例1：** 

> **输入:** a = "11", b = "1"
**输出：** "100"

**示例2：** 

> **输入：** a = "1010", b = "1011"
**输出：** "10101"

**提示：** 

- <code>1 <= a.length, b.length <= 10^4</code>
- <code>a</code> 和 <code>b</code> 仅由字符 <code>'0'</code> 或 <code>'1'</code> 组成
- 字符串如果不是 <code>"0"</code> ，就不含前导零

**思路**：
进行循环，从左到右模拟竖式的运算。如果 i ≥ 0、j ≥ 0 或者 carry > 0，循环继续。

1. 变量定义：
   (a) i、j 和 carry 分别代表字符串 A、B 中的指针以及进位。
   (b) 初始化一个结果字符串 RES。

2. 运算步骤：
   (a) 计算当前位的和 SUM：它是两个指针 i、j 所指的值与 carry 的总和。
   (b) 边界处理：如果 i 或 j 小于 0（即指针越界），则取 0 代替进行运算。
   (c) 更新进位：将 carry 更新为 SUM / 2（取整）。
   (d) 更新结果：将 RES 更新为 (SUM % 2) 拼接在 RES 原有内容之前。

最后返回 RES 即可
**题解**：
```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = []; // 使用数组存储，最后 reverse 并 join，性能优于字符串拼接

    while (i >= 0 || j >= 0 || carry > 0) {
        // 1. 获取当前位的值，越界补 0
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        // 2. 计算当前位的总和
        const sum = digitA + digitB + carry;

        // 3. 计算这一位的结果和新的进位
        res.push(sum % 2);
        carry = Math.floor(sum / 2);

        // 4. 指针左移
        i--;
        j--;
    }

    // 5. 翻转并返回
    return res.reverse().join('');
};
```

# [190. 颠倒二进制位](https://leetcode.cn/problems/reverse-bits/description/?envType=study-plan-v2&envId=top-interview-150)

颠倒给定的 32 位有符号整数的二进制位。

<strong class="example">示例 1：** 

<div class="example-block">
<b>输入：</b>n = 43261596

<b>输出：</b>964176192

**解释：** 

<table><tbody><tr><th>整数</th><th>二进制</th></tr><tr><td>43261596</td><td>00000010100101000001111010011100</td></tr><tr><td>964176192</td><td>00111001011110000010100101000000</td></tr></tbody></table>

<strong class="example">示例 2：** 

<div class="example-block">
<b>输入：</b>n = 2147483644

<b>输出：</b>1073741822

**解释：** 

<table><tbody><tr><th>整数</th><th>二进制</th></tr><tr><td>2147483644</td><td>01111111111111111111111111111100</td></tr><tr><td>1073741822</td><td>00111111111111111111111111111110</td></tr></tbody></table>

**提示：** 

- <code>0 <= n <= 2^31- 2</code>
- <code>n</code>为偶数

**进阶** : 如果多次调用这个函数，你将如何优化你的算法？

**思路**：
这是一个 32 位的整数，我们可以进行 32 次操作：

1. 先将 RES 左移位留出一个位置
2. 取 N 的最后一位，进入到 RES 的末位
3. 对 N 进行无符号右移 1 位，准备读取下一位

最后我们返回 RES 无符号右移 0 位，保证返回的是一个无符号的 32 位整数。
**题解**：
```js
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;
    
    for (let i = 0; i < 32; i++) {
        // 1. 将结果左移一位，给新来的位腾出最右边的位置
        res = res << 1;
        
        // 2. 取出 n 的最后一位 (n & 1)，并加到 res 的末尾
        // 也可以写成 res = res | (n & 1)
        res = res + (n & 1);
        
        // 3. n 无符号右移一位，准备读取下一位
        n = n >>> 1;
    }
    
    // 4. 关键：>>> 0 能确保返回的是一个无符号 32 位整数
    return res >>> 0;
};
```

# [191. 位1的个数](https://leetcode.cn/problems/number-of-1-bits/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个正整数 <code>n</code>，编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1q:" data-state="closed" class="">设置位</button> 的个数（也被称为<a href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E9%87%8D%E9%87%8F" target="_blank">汉明重量</a>）。

**示例 1：** 

> **输入：** n = 11
**输出：** 3
**解释：** 输入的二进制串 <code>**1011** 中，共有 3 个设置位。</code>

**示例 2：** 

> **输入：** n = 128
**输出：** 1
**解释：** 输入的二进制串 **10000000** 中，共有 1 个设置位。

**示例 3：** 

> **输入：** n = 2147483645
**输出：** 30
**解释：** 输入的二进制串 **1111111111111111111111111111101**  中，共有 30 个设置位。

**提示：** 

- <code>1 <= n <= 2^31 - 1</code>

**进阶** ：

- 如果多次调用这个函数，你将如何优化你的算法？

**思路**：
不断对 n 使用 n = n & (n - 1) 的位运算操作，不断消掉 n 最右边的 1，然后对 count 进行加加，直到 n 为 0 为止，最后返回 count
**题解**：
```js
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1); // 每次消掉一个 1
        count++;
    }
    return count;
};
```

# [136. 只出现一次的数字](https://leetcode.cn/problems/single-number/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 **非空**  整数数组 <code>nums</code> ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

<div class="original__bRMd">

<strong class="example">示例 1 ：** 

<div class="example-block">
**输入：** nums = [2,2,1]

**输出：** 1

<strong class="example">示例 2 ：** 

<div class="example-block">
**输入：** nums = [4,1,2,1,2]

**输出：** 4

<strong class="example">示例 3 ：** 

<div class="example-block">
**输入：** nums = [1]

**输出：** 1

**提示：** 

- <code>1 <= nums.length <= 3 * 10^4</code>
- <code>-3 * 10^4 <= nums[i] <= 3 * 10^4</code>
- 除了某个元素只出现一次以外，其余每个元素均出现两次。

**思路**：
这道题涉及了三个比较重要的位异或运算性质：

1. 当一个数与自身进行异或运算时，结果为 0
2. 任何数与 0 进行异或运算，结果仍为其本身
3. 异或运算支持交换律和结合律

基于这些性质，我们可以遍历数组中的每个元素，并对它们依次进行位异或运算。最终的运算结果即为那个只出现一次的数字。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let num of nums) {
        res ^= num;
    }
    return res;
};
```

# [137. 只出现一次的数字 II](https://leetcode.cn/problems/single-number-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组<code>nums</code> ，除某个元素仅出现 **一次**  外，其余每个元素都恰出现 **三次 。** 请你找出并返回那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。

**示例 1：** 

> **输入：** nums = [2,2,3,2]
**输出：** 3

**示例 2：** 

> **输入：** nums = [0,1,0,1,0,1,99]
**输出：** 99

**提示：** 

- <code>1 <= nums.length <= 3 * 10^4</code>
- <code>-2^31 <= nums[i] <= 2^31 - 1</code>
- <code>nums</code> 中，除某个元素仅出现 **一次**  外，其余每个元素都恰出现 **三次**

**思路**：
这道题我们主要考虑一个问题：将每个数字想象成一个 32 位的二进制数字。

如果一个数字出现 0 次或 3 次，它对某一位的贡献（即将所有数字在这一位上的值相加后，对该位置进行模 3 运算）结果会是 0。而只出现一次的数字，它在该位上的贡献刚好是 1。

基于这个原理，我们可以通过以下步骤实现：
1. 遍历 32 位二进制位的每一位：
   (a) 遍历数组中的每一个数字，将它们右移 i 位（当前处理的位数），并与 1 进行“位与”运算（& 1）以获取该位的具体数值
   (b) 将所有数字在这一位上的值加总
   (c) 对总和进行模 3 运算
2. 将得到的计算结果左移 i 位，并与最终结果进行“位或”运算（|）。实际上就是将每一位计算得到的结果，准确地赋值到结果数字对应的位置上
3. 最后返回该结果数字即可
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    // 依次检查 32 个位
    for (let i = 0; i < 32; i++) {
        let total = 0;
        
        // 统计数组中所有数字在第 i 位上 1 的个数
        for (let num of nums) {
            // (num >> i) & 1 可以提取出第 i 位的值
            total += (num >> i) & 1;
        }

        // 如果该位的 1 出现次数不是 3 的倍数
        // 说明那个只出现一次的数字在该位是 1
        if (total % 3 !== 0) {
            // 将结果的第 i 位设置为 1
            res |= (1 << i);
        }
    }

    // JavaScript 位运算处理的是 32 位有符号整数
    // 如果结果是负数，res 本身已经是正确的补码形式
    return res;
};
```

# [201. 数字范围按位与](https://leetcode.cn/problems/bitwise-and-of-numbers-range/description/?envType=study-plan-v2&envId=top-interview-150)

给你两个整数 <code>left</code> 和 <code>right</code> ，表示区间 <code>[left, right]</code> ，返回此区间内所有数字 **按位与**  的结果（包含 <code>left</code> 、<code>right</code> 端点）。

**示例 1：** 

> **输入：** left = 5, right = 7
**输出：** 4

**示例 2：** 

> **输入：** left = 0, right = 0
**输出：** 0

**示例 3：** 

> **输入：** left = 1, right = 2147483647
**输出：** 0

**提示：** 

- <code>0 <= left <= right <= 2^31 - 1</code>

**思路**：
这道题我们在编写代码之前，需要先明确“按位与”运算的本质含义。

在所有数字中，只要某一位（bit）在任何一个数字里是 0，那么该位最终按位与的结果肯定也是 0。基于这一点，我们不难发现：

1. 从左往右寻找，只要刚好发现某一位既出现了 1 又出现了 0，那么往后所有数字的位运算结果肯定都是 0。
2. 这是因为在数字范围的变化过程中，中间肯定会发生数字“突变”，导致该位及之后的所有低位都变成 0。
3. 给定的 `left` 是范围中最小的数字，如果发生上述情况，它在这一位一定刚好是 0。

其实我们的核心任务就是找到这些数字的“公共前缀”。

关于如何寻找公共前缀，我们可以采取以下策略：
1. 直接操作 `right`。
2. 一直去掉 `right` 最右边的 1，直到 `right` 的运算值不再大于 `left`。
3. 此时的结果要么等于 `left`，要么小于 `left`。
   - 产生“小于”的情况，是因为刚好将发生突变的那一位 1 去掉变成了 0。
   - 只有在这种情况下，它才会刚好小于 `left`。
4. 最后，将当前这个刚好不大于 `left` 的 `right` 值作为返回值返回即可。
**题解**：
```js
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    while (left < right) {
        right = right & (right - 1);
    }
    return right;
};
```

# [9. 回文数](https://leetcode.cn/problems/palindrome-number/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数 <code>x</code> ，如果 <code>x</code> 是一个回文整数，返回 <code>true</code> ；否则，返回 <code>false</code> 。

<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">回文数</button>是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

- 例如，<code>121</code> 是回文，而 <code>123</code> 不是。

**示例 1：** 

> **输入：** x = 121
**输出：** true

**示例2：** 

> **输入：** x = -121
**输出：** false
**解释：** 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

**示例 3：** 

> **输入：** x = 10
**输出：** false
**解释：** 从右向左读, 为 01 。因此它不是一个回文数。

**提示：** 

- <code>-2^31<= x <= 2^31- 1</code>

**进阶：** 你能不将整数转为字符串来解决这个问题吗？

**思路**：
对于这道题，如果数字小于 0，或者它的末尾是 0 且它本身不是 0 的话，则直接 return false。

否则，我们可以创建一个变量 reverseNum，然后不断进行运算。运算的过程主要是将 reverseNum 往左移（乘以 10）并加上 x 的最后一个数字，然后 x 再往右移（除以 10），直到 x 小于等于 reverseNum。

因为在这个时候，要么它们的位数相等，要么 x 刚好比 reverseNum 少一位。这分别对应了数字是偶数位和奇数位的情况：
1. 判断它们是否相等。
2. 或者判断 reverseNum 除以 10 之后是否跟 x 相等即可。

如果原始数字是奇数位的话，中间的数字是多少其实并不重要，只要剩余的位是相等的就可以了。
**题解**：
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 1. 边界情况处理
    // 负数不是回文（如 -121）
    // 末尾是 0 且本身不是 0 的不是回文（如 10, 100）
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverseNum = 0;
    
    // 2. 反转一半数字的逻辑
    // 当 x <= reverseNum 时，说明已经处理到了中点
    while (x > reverseNum) {
        // reverseNum 往左移（*10）并加上 x 的末位
        reverseNum = reverseNum * 10 + (x % 10);
        // x 往右移（去掉末位）
        x = Math.floor(x / 10);
    }

    // 3. 结果判断
    // 偶数长度：x 应该等于 reverseNum (如 1221 -> x: 12, rev: 12)
    // 奇数长度：中间位在 reverseNum 的个位，去掉它即可 (如 121 -> x: 1, rev: 12 -> 12/10 = 1)
    return x === reverseNum || x === Math.floor(reverseNum / 10);
};
```

# [66. 加一](https://leetcode.cn/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个表示 **大整数**  的整数数组 <code>digits</code>，其中 <code>digits[i]</code> 是整数的第 <code>i</code> 位数字。这些数字按从左到右，从最高位到最低位排列。这个大整数不包含任何前导 <code>0</code>。

将大整数加 1，并返回结果的数字数组。

**示例1：** 

> **输入：** digits = [1,2,3]
**输出：** [1,2,4]
**解释：** 输入数组表示数字 123。
加 1 后得到 123 + 1 = 124。
因此，结果应该是 [1,2,4]。

**示例2：** 

> **输入：** digits = [4,3,2,1]
**输出：** [4,3,2,2]
**解释：** 输入数组表示数字 4321。
加 1 后得到 4321 + 1 = 4322。
因此，结果应该是 [4,3,2,2]。

**示例 3：** 

> **输入：** digits = [9]
**输出：** [1,0]
**解释：** 输入数组表示数字 9。
加 1 得到了 9 + 1 = 10。
因此，结果应该是 [1,0]。

**提示：** 

- <code>1 <= digits.length <= 100</code>
- <code>0 <= digits[i] <= 9</code>
- <code>digits</code>不包含任何前导 <code>0</code>。

**思路**：
这道题先特殊判断一下最后一位是否为 9 且数组只有一位。如果是的话，就直接返回 [1, 0]。

如果不是上述情况，我们再检查最后一位是否为 9：

1. 如果最后一位是 9：
   将当前数组除最后一位之外的部分进行拆分，递归调用 plusOne 函数，将得到的结果展开，最后拼接上一个 0。

2. 如果最后一位不是 9：
   直接将最后一位加 1，然后将其与前面数组展开的结果组合起来即可。
**题解**：
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[0] === 9 && !digits[1] && digits[1] !== 0){
    return [1,0]
  }  
  if (digits.at(-1) === 9){
    return [...plusOne(digits.slice(0,-1)), 0]
  }
  return [...digits.slice(0,-1), digits.at(-1) + 1]
};
```

# [172. 阶乘后的零](https://leetcode.cn/problems/factorial-trailing-zeroes/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个整数 <code>n</code> ，返回 <code>n!</code> 结果中尾随零的数量。

提示<code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code>

**示例 1：** 

> **输入：** n = 3
**输出：** 0
**解释：** 3! = 6 ，不含尾随 0

**示例 2：** 

> **输入：** n = 5
**输出：** 1
**解释：** 5! = 120 ，有一个尾随 0

**示例 3：** 

> **输入：** n = 0
**输出：** 0

**提示：** 

- <code>0 <= n <= 10^4</code>

<b>进阶：</b>你可以设计并实现对数时间复杂度的算法来解决此问题吗？

**思路**：
这里我们需要对传入的 n 进行循环，不断地除以 5 并且向下取整。

这样做的逻辑是：
1. 阶乘末尾有多少个 0，取决于因子中 10 的个数。
2. 10 的个数又取决于因子中 2 × 5 的组合数。
3. 在从 1 到 n 的连乘中，因子 2 的数量显然比 5 多，所以 0 的数量完全取决于 5 的数量（即可以拆解出多少个因子 5）。

关于具体实现：
1. 我们首先计算 1 到 n 之间有多少个 5 的倍数。
2. 考虑到某些数可能由多个 5 组成（例如 25 含有两个 5），当 n 被 5 除过一次后，得到的商（例如 25 / 5 = 5）代表了第一层 5 的倍数。
3. 接下来，我们需要在这个商的基础上再次除以 5，计算更高阶（如 25、125 等）的 5 的因子贡献，并将结果累加。
4. 那么这样子为什么可行呢？我们可以举个例子：在 1 到 25 之间，5 的倍数分别是 5、10、15、20 和 25。当它们分别除以 5 之后，得到的结果是 1、2、3、4、5。其实这就相当于我们继续在 1 到 5 之间，去找还有几个 5 的倍数。逻辑就是这样的，然后把算出来的结果加到 count 里面就可以了。

通过这种不断除以 5 并累加商的方式，我们就能找回所有的因子 5。这道题的思路到这里就写完了。
**题解**：
```js
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    
    while (n > 0) {
        // 核心：不断除以 5，并且必须向下取整
        n = Math.floor(n / 5);
        count += n;
    }
    
    return count;
};
```


# [69. x 的平方根 ](https://leetcode.cn/problems/sqrtx/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个非负整数 <code>x</code> ，计算并返回<code>x</code>的 **算术平方根**  。

由于返回类型是整数，结果只保留 **整数部分 ** ，小数部分将被 **舍去 。** 

**注意：** 不允许使用任何内置指数函数和算符，例如 <code>pow(x, 0.5)</code> 或者 <code>x ** 0.5</code> 。

**示例 1：** 

> **输入：** x = 4
**输出：** 2

**示例 2：** 

> **输入：** x = 8
**输出：** 2
**解释：** 8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

**提示：** 

- <code>0 <= x <= 2^31 - 1</code>

**思路**：
使用二分查找的方法：

1. 初始化：
   (a) 将 left 设为 0，right 设为 x
   (b) 将 answer 设置为 -1
2. 迭代过程：
   (a) 进行循环，条件为 left <= right
   (b) 计算中间值 mid
   (c) 如果 mid * mid <= x：
       - 更新 answer = mid
       - 让 left = mid + 1，尝试寻找更大的平方根
   (d) 否则（当 mid * mid > x 时）：
       - 让 right = mid - 1，缩小范围

在循环过程中，answer 会不断更新，最后将我们最终得到的 answer 返回即可。
**题解**：
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let ans = -1;

    while (left <= right) {
        // 使用这种写法防止 (left + right) 可能的溢出（虽然 JS 中较少见）
        let mid = Math.floor(left + (right - left) / 2);

        // 如果 mid 的平方小于等于 x，说明 mid 可能是答案
        // 我们记录下这个 ans，并去右半部分寻找有没有更大的整数
        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            // 如果 mid 的平方大于 x，说明 mid 太大了，往左找
            right = mid - 1;
        }
    }

    return ans;
};
```

# [50. Pow(x, n)](https://leetcode.cn/problems/powx-n/description/?envType=study-plan-v2&envId=top-interview-150)

实现<a href="https://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(x, n)</a>，即计算 <code>x</code> 的整数<code>n</code> 次幂函数（即，<code>x^n</code>^ ）。

<strong class="example">示例 1：** 

> **输入：** x = 2.00000, n = 10
**输出：** 1024.00000

<strong class="example">示例 2：** 

> **输入：** x = 2.10000, n = 3
**输出：** 9.26100

<strong class="example">示例 3：** 

> **输入：** x = 2.00000, n = -2
**输出：** 0.25000
**解释：** 2^-2 = 1/2^2 = 1/4 = 0.25

**提示：** 

- <code>-100.0 < x < 100.0</code>
- <code>-2^31 <= n <= 2^31-1</code>
- <code>n</code>是一个整数
- 要么 <code>x</code> 不为零，要么 <code>n > 0</code> 。
- <code>-10^4 <= x^n <= 10^4</code>

**思路**：
这题快速幂运算的方法也是一个递归思路。

1. 首先我们需要处理负指数。如果 n 小于 0，我们就将 x 设为 1/x，将 n 设为 -n。
2. 依然是对 x 进行 n 次幂的运算。我们写一个辅助的递归函数：
   (a) 当 power 为 0 的时候，直接 return 1。
   (b) 我们获取递归运算一半的结果，即将 power 除以 2 并向下取整，同时将 base 传进去。
3. 接下来判断 power 模 2 是否等于 0：
   (a) 如果等于 0，直接将 half 相乘并返回即可。
   (b) 如果不等于 0，则将 half 相乘后再乘上一个 base 并返回。
4. 最后我们在主函数中直接 return `fastPow(x, n)`
**题解**：
```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 1. 处理负指数
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // 递归函数
    const fastPow = (base, power) => {
        if (power === 0) return 1.0;
        
        // 递归计算一半的结果
        let half = fastPow(base, Math.floor(power / 2));
        
        // 如果是偶数：half * half
        // 如果是奇数：half * half * base
        return power % 2 === 0 ? half * half : half * half * base;
    };

    return fastPow(x, n);
};
```

# [149. 直线上最多的点数](https://leetcode.cn/problems/max-points-on-a-line/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个数组 <code>points</code> ，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示 **X-Y**  平面上的一个点。求最多有多少个点在同一条直线上。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg" style="width: 300px; height: 294px;">

> **输入：** points = [[1,1],[2,2],[3,3]]
**输出：** 3

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg" style="width: 300px; height: 294px;">

> **输入：** points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
**输出：** 4

**提示：** 

- <code>1 <= points.length <= 300</code>
- <code>points[i].length == 2</code>
- <code>-10^4 <= x<sub>i</sub>, y<sub>i</sub> <= 10^4</code>
- <code>points</code> 中的所有点 **互不相同**

**思路**：
这道题需要获取直线上最多的点数。我们的思路如下：

1. 遍历每一个点，然后再遍历该点之后的每一个点。
2. 在每次固定一个起点遍历后续点时，我们需要先创建一个 Map，这个 Map 用来存储斜率。
3. 得到点 i 和点 j 所对应的 x 和 y 的差值（dx 和 dy）。
4. 获取 dx 和 dy 的最大公约数（GCD）。
5. 将 dx 和 dy 分别除以最大公约数，以此作为存储在 Map 中的 key。
6. 固定 dx 必定为正数
7. 对该 key 对应的值进行加 1 操作，用来统计每一条线上经过的点数。

关于遍历顺序的说明：
为什么不需要遍历当前点之前的点，而只需要遍历之后的点呢？因为之前的点与当前点所构成的直线在之前的循环中已经出现过了，所以没必要再重复遍历一遍。

最后，我们只要返回我们记录的最大结果即可。
**题解**：
```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length;
    if (n <= 2) return n;

    let maxAns = 0;

    // 辗转相除法获取最大公约数
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    for (let i = 0; i < n; i++) {
        // 剪枝：如果当前剩余的点数加上 1（本身）都不超过 maxAns，没必要再算了
        if (maxAns >= n - i || maxAns > n / 2) break;

        const map = new Map();
        let currentMax = 0;

        for (let j = i + 1; j < n; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            // 获取 GCD
            const g = gcd(Math.abs(dx), Math.abs(dy));
            
            // 归一化符号：确保 dx 为正
            // 如果 dx 为 0（垂直线），则确保 dy 为正（统一记作 1/0）
            let k_dy = dy / g;
            let k_dx = dx / g;
            
            if (k_dx < 0) {
                k_dx = -k_dx;
                k_dy = -k_dy;
            } else if (k_dx === 0) {
                k_dy = Math.abs(k_dy);
            }

            const key = `${k_dy}/${k_dx}`;
            map.set(key, (map.get(key) || 0) + 1);
            currentMax = Math.max(currentMax, map.get(key));
        }
        
        // 结果要加上起点 i 自己
        maxAns = Math.max(maxAns, currentMax + 1);
    }

    return maxAns;
};
```

# [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-interview-150)

假设你正在爬楼梯。需要 <code>n</code>阶你才能到达楼顶。

每次你可以爬 <code>1</code> 或 <code>2</code> 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1：** 

> **输入：** n = 2
**输出：** 2
**解释：** 有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

**示例 2：** 

> **输入：** n = 3
**输出：** 3
**解释：** 有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

**提示：** 

- <code>1 <= n <= 45</code>

**思路**：
这道题可以用一个滚动窗口来解决：

1. 当 n 小于等于 2 的时候，直接返回 n。
2. 初始化变量：
   (a) 让 P 为 1，Q 为 2
   (b) RES 为 0
3. 这里的 Q 代表的是 F(n-1)，即前一个数；P 代表的是前两个数。
4. 我们从 3 开始循环，让 i 小于等于 n：
   (a) 将 RES 更新为前两个数的和
   (b) 将 Q 赋值给 RES，P 赋值给 Q，让这两个数往前滚动
5. 最后我们返回 RES 即可。
**题解**：
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 1. 基础情况：1阶有1种，2阶有2种
    if (n <= 2) return n;

    // 2. 初始化滚动变量
    let p = 1; // 代表 F(i-2)
    let q = 2; // 代表 F(i-1)
    let res = 0;

    // 3. 从第 3 阶开始迭代
    for (let i = 3; i <= n; i++) {
        // 当前台阶的方法数 = 前一级 + 前两级
        res = p + q;
        
        // 4. 窗口向右滚动
        p = q;   // 原来的前一级变成现在的前两级
        q = res; // 原来的当前级变成现在的前一级
    }

    return res;
};
```

# [198. 打家劫舍](https://leetcode.cn/problems/house-robber/description/?envType=study-plan-v2&envId=top-interview-150)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警** 。

给定一个代表每个房屋存放金额的非负整数数组，计算你** 不触动警报装置的情况下 ** ，一夜之内能够偷窃到的最高金额。

**示例 1：** 

> **输入：** [1,2,3,1]
**输出：** 4
**解释：** 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
    偷窃到的最高金额 = 1 + 3 = 4 。

**示例 2：** 

> **输入：** [2,7,9,3,1]
**输出：** 12
**解释：** 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
    偷窃到的最高金额 = 2 + 9 + 1 = 12 。

**提示：** 

- <code>1 <= nums.length <= 100</code>
- <code>0 <= nums[i] <= 400</code>

**思路**：
这道题可以用动态规划来解决。我们定义一个数组 dp，其中 dp[i] 表示前 i 间房屋能偷窃到的最高金额。

对于第 i 间房屋，我们有两种选择：
1. 偷这间房：那么就不能偷第 i-1 间房，最高金额为 dp[i-2] + nums[i]。
2. 不偷这间房：那么最高金额就是偷到前一间房为止的最高金额，即 dp[i-1]。

状态转移方程为：
dp[i] = max(dp[i-2] + nums[i], dp[i-1])

最终结果就是 dp[nums.length - 1]。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    
    // 特殊情况处理
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    // 1. 初始化 dp 数组，长度与房屋数量一致
    const dp = new Array(n);

    // 2. 设置基础状态（边界条件）
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // 3. 填表：根据状态转移方程计算后续结果
    for (let i = 2; i < n; i++) {
        // 决策：偷当前房 vs 不偷当前房
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    // 4. 返回数组最后一项，即为全局最优解
    return dp[n - 1];
};
```

# [139. 单词拆分](https://leetcode.cn/problems/word-break/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串 <code>s</code> 和一个字符串列表 <code>wordDict</code> 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 <code>s</code>则返回 <code>true</code>。

**注意：** 不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

**示例 1：** 

> **输入:**  s = "leetcode", wordDict = ["leet", "code"]
**输出:**  true
**解释:**  返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

**示例 2：** 

> **输入:**  s = "applepenapple", wordDict = ["apple", "pen"]
**输出:**  true
**解释:**  返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
    注意，你可以重复使用字典中的单词。

**示例 3：** 

> **输入:**  s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
**输出:**  false

**提示：** 

- <code>1 <= s.length <= 300</code>
- <code>1 <= wordDict.length <= 1000</code>
- <code>1 <= wordDict[i].length <= 20</code>
- <code>s</code> 和 <code>wordDict[i]</code> 仅由小写英文字母组成
- <code>wordDict</code> 中的所有字符串 **互不相同**

**思路**：
这个算法的思路是利用动态规划，使用一个 DP 数组存储某个位置是否可以拆分：

1. 初始化阶段：
   首先获取字符串的长度。
   设置 DP[0] 为 true，作为起始点。
   设置 DP[0] 为 true 的目的是，可以判断把当前点设置为截止点时整个字符串都在字典中的情况。
   为了提高查询效率，我们将 wordDict 转换成一个 Set 结构。

2. 遍历与状态转移：
   (a) 遍历每一个字符，尝试将其作为解析点（结束点）。
   (b) 对于每一个解析点，遍历其之前的每一个点（J）作为拆分点。
   (c) 如果在 J 位置是可以拆分的（DP[J] 为 true），并且从 J 到当前解析点之间的子串存在于 Set 中，那么就说明当前解析点也是可以拆分的。

3. 更新状态：
   只要存在一种拆分情况满足条件，就将对应解析点的 DP 值设置为 true
**题解**：
```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    // 1. 将字典转为 Set，提升查询效率
    const wordSet = new Set(wordDict);
    
    // 2. 初始化 DP 数组，dp[i] 表示 s 的前 i 个字符是否可以拆分
    const dp = new Array(n + 1).fill(false);
    
    // 3. 起始点设为 true，空字符串默认可以被“拆分”
    dp[0] = true;

    // 4. 外层遍历：每一个字符作为解析点（结束点）
    for (let i = 1; i <= n; i++) {
        // 5. 内层遍历：尝试之前的每一个拆分点 j
        for (let j = 0; j < i; j++) {
            // 状态转移逻辑：
            // 如果前 j 个字符能拆分 (dp[j]) 
            // 且从 j 到 i 的子串在字典中存在
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                // 只要找到一种拆分方式，当前 i 就可以判定为 true，直接跳出内层循环
                break;
            }
        }
    }

    // 6. 返回最后一个位置的布尔值
    return dp[n];
};
```

# [322. 零钱兑换](https://leetcode.cn/problems/coin-change/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>coins</code> ，表示不同面额的硬币；以及一个整数 <code>amount</code> ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数**  。如果没有任何一种硬币组合能组成总金额，返回<code>-1</code> 。

你可以认为每种硬币的数量是无限的。

**示例1：** 

> **输入：** coins = <code>[1, 2, 5]</code>, amount = <code>11</code>
**输出：** <code>3</code> 
**解释：** 11 = 5 + 5 + 1

**示例 2：** 

> **输入：** coins = <code>[2]</code>, amount = <code>3</code>
**输出：** -1

**示例 3：** 

> **输入：** coins = [1], amount = 0
**输出：** 0

**提示：** 

- <code>1 <= coins.length <= 12</code>
- <code>1 <= coins[i] <= 2^31 - 1</code>
- <code>0 <= amount <= 10^4</code>

**思路**：
这道题可以理解为爬楼梯算法的一个有效变形。

你可以这样想象：coins 表示不同的步幅，amount 是总共需要达到的距离。

具体的动态规划（DP）逻辑如下：
1. 创建一个 DP 数组，初始值设为 0（其中 DP[0] = 0）。
2. 外层循环：遍历所有金额，从 1 到 AMOUNT。
3. 内层循环：遍历每一个金币 coin。如果当前金额 i 大于等于金币面额，则进行比较并更新 DP 值。
4. 状态转移方程：`dp[i] = Math.min(dp[i], dp[i - coin] + 1)`。

通过不断比较当前 DP 值与“剩余金额所需硬币数加一”的大小，来更新达到目标金额所需的最少硬币数。

然后我们用 `amount + 1` 来代表无穷大。假设你访问到 `i - coin` 的位置，它是无法组合出来的，那么这时候 `dp[i]` 其实是一直无法更新的，它的值不会改变。

最后，我们检查一下 `dp[amount]` 的值是否大于 `amount` 即可：
1. 如果大于 `amount`，那么就返回 -1。
2. 否则就返回 `dp[amount]`。

因为算法肯定不可能会使用 `amount + 1` 个硬币。
**题解**：
```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 1. 初始化 DP 数组，填充为 amount + 1 (代表无穷大)
    const dp = new Array(amount + 1).fill(amount + 1);
    
    // 2. 基础状态：凑齐 0 元需要 0 枚硬币
    dp[0] = 0;

    // 3. 外层遍历金额 i，从 1 到 amount
    for (let i = 1; i <= amount; i++) {
        // 4. 内层遍历所有可用的硬币
        for (let coin of coins) {
            // 如果当前硬币面额小于等于当前目标金额
            if (i >= coin) {
                // 状态转移：当前最少硬币 = min(保持现状, 凑齐 [i-coin] 的最少硬币 + 当前这一枚)
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // 5. 如果最后值还是 amount + 1，说明凑不出来，返回 -1
    return dp[amount] > amount ? -1 : dp[amount];
};
```

# [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组 <code>nums</code> ，找到其中最长严格递增子序列的长度。

**子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，<code>[3,6,2,7]</code> 是数组 <code>[0,3,1,6,2,2,7]</code> 的<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed" class="">子序列</button>。

**示例 1：** 

> **输入：** nums = [10,9,2,5,3,7,101,18]
**输出：** 4
**解释：** 最长递增子序列是 [2,3,7,101]，因此长度为 4 。

**示例 2：** 

> **输入：** nums = [0,1,0,3,2,3]
**输出：** 4

**示例 3：** 

> **输入：** nums = [7,7,7,7,7,7,7]
**输出：** 1

**提示：** 

- <code>1 <= nums.length <= 2500</code>
- <code>-10^4 <= nums[i] <= 10^4</code>

<b>进阶：</b>

- 你能将算法的时间复杂度降低到<code>O(n log(n))</code> 吗?

**思路**：
我们先初始化一个 DP 数组。在这个 DP 数组中，每个索引的含义是：当前索引位置的数字与前面的数字组成的最长递增子序列的长度。

算法流程如下：
1. 分别对每个数字进行遍历（第一层遍历）。
2. 对当前数字之前的数字进行遍历（第二层遍历，索引为 j）。
3. 检查当前数字是否大于前面的数字：
   (a) 如果当前数字大于前面的数字，我们就更新 `dp[i]` 为 `dp[i]` 和 `dp[j] + 1` 中的最大值。
4. 在第一层每一次遍历的结尾，更新 `maxAnswer` 为 `maxAnswer` 和 `dp[i]` 中的最大值。
5. 最终返回 maxAnswer
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;

    // 1. 初始化 dp 数组，每个位置初始长度均为 1
    const dp = new Array(n).fill(1);
    let maxAnswer = 1;

    // 2. 第一层遍历：确定以哪个数字结尾
    for (let i = 1; i < n; i++) {
        // 3. 第二层遍历：寻找 i 之前比 nums[i] 小的数字
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // 如果能构成递增，更新当前 dp[i] 为最大值
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // 4. 更新全局最大长度
        maxAnswer = Math.max(maxAnswer, dp[i]);
    }

    return maxAnswer;
};
```

# [120. 三角形最小路径和](https://leetcode.cn/problems/triangle/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个三角形 <code>triangle</code> ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。**相邻的结点 ** 在这里指的是 **下标**  与 **上一层结点下标**  相同或者等于 **上一层结点下标 + 1**  的两个结点。也就是说，如果正位于当前行的下标 <code>i</code> ，那么下一步可以移动到下一行的下标 <code>i</code> 或 <code>i + 1</code> 。

**示例 1：** 

> **输入：** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
**输出：** 11
**解释：** 如下面简图所示：
   **2** 
  **3**  4
 6 **5**  7
4 **1**  8 3
自顶向下的最小路径和为11（即，2+3+5+1= 11）。

**示例 2：** 

> **输入：** triangle = [[-10]]
**输出：** -10

**提示：** 

- <code>1 <= triangle.length <= 200</code>
- <code>triangle[0].length == 1</code>
- <code>triangle[i].length == triangle[i - 1].length + 1</code>
- <code>-10^4 <= triangle[i][j] <= 10^4</code>

**进阶：** 

- 你可以只使用 <code>O(n)</code>的额外空间（<code>n</code> 为三角形的总行数）来解决这个问题吗？

**思路**：
先获取到 triangle 数组的长度 L。

然后我们创建一个 DP 数组，将它的长度设为 L，并初始化为 triangle 的最后一行。随后将这个 DP 数组对 triangle 从底部向上进行遍历。

假设当前行索引为 i，遍历该行的所有列 j（范围是 0 到 i）。状态转移方程如下：
DP[j] = Math.min(DP[j], DP[j + 1]) + triangle[i][j]

最后返回 DP[0] 即可。


**题解**：
```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const L = triangle.length;
    
    // 1. 初始化 DP 数组，长度为三角形最后一行的高度
    // 我们直接拷贝最后一行作为初始值
    const dp = [...triangle[L - 1]];

    // 2. 自底向上遍历，从倒数第二行 (L-2) 开始
    for (let i = L - 2; i >= 0; i--) {
        // 3. 遍历当前行的每一个元素
        for (let j = 0; j <= i; j++) {
            // 状态转移：当前位置的最小路径和 = 当前值 + 下方两个相邻位置的较小值
            // 因为是自底向上，dp[j] 和 dp[j+1] 此时存储的是第 i+1 行的结果
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }

    // 4. 最终 dp[0] 就是我们要的顶点到地面的最小路径和
    return dp[0];
};
```

# [64. 最小路径和](https://leetcode.cn/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个包含非负整数的 <code>mxn</code>网格<code>grid</code> ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：** 每次只能向下或者向右移动一步。

<strong class="example">示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg" style="width: 242px; height: 242px;">

> **输入：** grid = [[1,3,1],[1,5,1],[4,2,1]]
**输出：** 7
**解释：** 因为路径 1→3→1→1→1 的总和最小。

<strong class="example">示例 2：** 

> **输入：** grid = [[1,2,3],[4,5,6]]
**输出：** 12

**提示：** 

- <code>m == grid.length</code>
- <code>n == grid[i].length</code>
- <code>1 <= m, n <= 200</code>
- <code>0 <= grid[i][j] <= 200</code>

**思路**：
对 `grid` 的数字进行遍历（行索引为 i，列索引为 j）：
   (a) 当行索引 i 为 0 且 j > 0 时，`grid[i][j] = grid[i][j-1] + grid[i][j]`。
   (b) 当列索引 j 为 0 且 i > 0 时，`grid[i][j] = grid[i-1][j] + grid[i][j]`。
   (c) 否则，`grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]`。
1. 最后返回 `grid[m-1][n-1]` 即可。
**题解**：
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // 直接在原 grid 上进行动态规划累加
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                // 起点不需要处理
                continue;
            } else if (i === 0) {
                // (a) 第一行：路径只能从左边来
                grid[i][j] = grid[i][j - 1] + grid[i][j];
            } else if (j === 0) {
                // (b) 第一列：路径只能从上面来
                grid[i][j] = grid[i - 1][j] + grid[i][j];
            } else {
                // (c) 普通格子：取左边和上边的最小值，再加上当前格子的值
                grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
            }
        }
    }

    // 此时右下角存储的就是整条路径的最小和
    return grid[m - 1][n - 1];
};
```

# [63. 不同路径 II](https://leetcode.cn/problems/unique-paths-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个<code>m x n</code>的整数数组<code>grid</code>。一个机器人初始位于 **左上角** （即 <code>grid[0][0]</code>）。机器人尝试移动到 **右下角** （即 <code>grid[m - 1][n - 1]</code>）。机器人每次只能向下或者向右移动一步。

网格中的障碍物和空位置分别用 <code>1</code> 和 <code>0</code> 来表示。机器人的移动路径中不能包含 **任何** 有障碍物的方格。

返回机器人能够到达右下角的不同路径数量。

测试用例保证答案小于等于 <code>2 * 10^9</code>。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg">

> **输入：** obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
**输出：** 2
**解释：** 3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 <code>2</code> 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg">

> **输入：** obstacleGrid = [[0,1],[0,0]]
**输出：** 1

**提示：** 

- <code>m ==obstacleGrid.length</code>
- <code>n ==obstacleGrid[i].length</code>
- <code>1 <= m, n <= 100</code>
- <code>obstacleGrid[i][j]</code> 为 <code>0</code> 或 <code>1</code>

**思路**：
1. 创建 m × n 的二维数组，并将其全部初始化为 0
2. 如果起点或者终点的话，直接为0。
3. 从 (0, 0) 开始遍历 grid 数组：
   (a) 首先将 dp[0][0] 设置为 1
   (b) 遍历时，如果当前位置存在石头（障碍物），则直接跳过
   (c) 如果是在第一行，当前格子的 DP 值等于左边一格的 DP 值
   (d) 如果是在第一列，当前格子的 DP 值等于上面一格的 DP 值
   (e) 否则，当前格子的 DP 值等于左边和上面两格 DP 值的和
4. 最后返回 dp[m-1][n-1] 即可

这里同样可以用一行数组来进行存储。因为这个数组的上一项就代表它的左侧，而数组中当前位置的旧值，其实就代表它的上侧一格。
**题解**：
```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // 1. 如果起点或终点有障碍物，直接返回 0
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    // 2. 创建 m x n 的数组并初始化为 0
    const dp = Array.from({ length: m }, () => new Array(n).fill(0));

    // 3. 遍历网格
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // (a) 如果当前格是障碍物，路径数为 0（保持默认值 0 即可）
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
                continue;
            }

            if (i === 0 && j === 0) {
                // 起点初始化
                dp[i][j] = 1;
            } else if (i === 0) {
                // (c) 第一行：只能从左边来
                dp[i][j] = dp[i][j - 1];
            } else if (j === 0) {
                // (d) 第一列：只能从上面来
                dp[i][j] = dp[i - 1][j];
            } else {
                // (e) 普遍情况：左边路径数 + 上边路径数
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m - 1][n - 1];
};
```

**空间压缩版本题解**：
```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // 1. 只创建一个长度为 n 的一维数组
    const dp = new Array(n).fill(0);
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1,n-1] === 1){
        return 0
    }

    // 2. 初始化起点：如果起点没石头，路径设为 1
    dp[0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 3. 如果当前格有障碍物，此路不通，路径数重置为 0
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else if (j > 0) {
                // 4. 状态转移方程：
                // 新的 dp[j] (当前) = 旧的 dp[j] (上方) + dp[j-1] (左侧)
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n - 1];
};
```

# [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的 <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1r:" data-state="closed" class="">回文</button> <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1s:" data-state="closed" class="">子串</button>。

**示例 1：** 

> **输入：** s = "babad"
**输出：** "bab"
**解释：** "aba" 同样是符合题意的答案。

**示例 2：** 

> **输入：** s = "cbbd"
**输出：** "bb"

**提示：** 

- <code>1 <= s.length <= 1000</code>
- <code>s</code> 仅由数字和英文字母组成

**思路**：
判断一个字符串是否是回文串，我们可以通过左右字符是否相等以及中间子串是否为回文串来进行推导。

按照这个思路，我们可以创建一个二维的 DP 数组（`dp[i][j]`）来记录子串是否为回文串：

1. **初始化：**
   获取字符串长度，从 0 到长度减 1 遍历。由于单个字符必然是回文串，我们首先将所有 `dp[i][i]` 设置为 `true`。

2. **状态转移：**
   使用两层遍历。外层循环 `j` 从 1 到 `n-1`（代表右边界），内层循环 `i` 从 0 到 `j-1`（代表左边界）。这样定义左右边界会比较直观：
   - 如果 `s[i]` 与 `s[j]` 不相等，则 `dp[i][j]` 肯定为 `false`。
   - 如果 `s[i]` 与 `s[j]` 相等，则分两种情况：
      (a) 如果子串长度（`j - i + 1`）小于等于 3，即中间只有 0 或 1 个字符，那么 `dp[i][j]` 直接为 `true`。
      (b) 否则，`dp[i][j]` 的状态取决于去掉头尾后的子串，即 `dp[i][j] = dp[i + 1][j - 1]`。

3. **更新最长长度：**
   每当 `dp[i][j]` 为 `true` 时，判断当前子串长度（`j - i + 1`）是否大于当前记录的 `max_length`。如果是，则更新 `max_length`。

最后，我们只需返回 `max_length` 这个变量即可。
**题解**：
```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n < 2) return s;

    let maxLength = 1;
    let begin = 0;

    // 1. 初始化 DP 数组，dp[i][j] 表示 s[i..j] 是否为回文
    const dp = Array.from({ length: n }, () => new Array(n).fill(false));

    // 单个字符都是回文
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // 2. 状态转移
    // j 为右边界，i 为左边界
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                // (a) 情况：子串长度为 2 或 3，且头尾相等，必为回文
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    // (b) 情况：状态取决于内部子串 [i+1, j-1]
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 3. 更新最长长度和起始位置
            if (dp[i][j] && (j - i + 1) > maxLength) {
                maxLength = j - i + 1;
                begin = i;
            }
        }
    }

    // 根据起始位置和长度截取并返回
    return s.substring(begin, begin + maxLength);
};
```

# [97. 交错字符串](https://leetcode.cn/problems/interleaving-string/description/?envType=study-plan-v2&envId=top-interview-150)

给定三个字符串<code>s1</code>、<code>s2</code>、<code>s3</code>，请你帮忙验证<code>s3</code>是否是由<code>s1</code>和<code>s2</code> **交错 ** 组成的。

两个字符串 <code>s</code> 和 <code>t</code> **交错**  的定义与过程如下，其中每个字符串都会被分割成若干 **非空**  <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1q:" data-state="closed" class="">子字符串</button>：

- <code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code>
- <code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code>
- <code>|n - m| <= 1</code>
- **交错**  是 <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> 或者 <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code>

**注意：** <code>a + b</code> 意味着字符串 <code>a</code> 和 <code>b</code> 连接。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg">

> **输入：** s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
**输出：** true

**示例 2：** 

> **输入：** s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
**输出：** false

**示例 3：** 

> **输入：** s1 = "", s2 = "", s3 = ""
**输出：** true

**提示：** 

- <code>0 <= s1.length, s2.length <= 100</code>
- <code>0 <= s3.length <= 200</code>
- <code>s1</code>、<code>s2</code>、和 <code>s3</code> 都由小写英文字母组成

**进阶：** 您能否仅使用 <code>O(s2.length)</code> 额外的内存空间来解决它?

**思路**：
我们可以将它理解成一个二维数组，类似于一个迷宫。你可以看到，要么在第一个数组中往下走，要么在第二个数组中往下走。

我们可以将数组看作坐标系：将一个字符串看成 X 轴，另一个看成 Y 轴。这就很像是机器人在迷宫中，只能向右走或向下走，看它能否走到终点。

具体实现逻辑如下：

1. 初始化与预处理：
   (a) 假设 s1 的长度是 n，s2 的长度是 m，s3 的长度是 t
   (b) 如果 n + m != t，直接 return false
   (c) 创建一个 (n + 1) × (m + 1) 的 DP 数组，初始值全部填充为 false

2. 状态转移：
   (a) 设置 dp[0][0] = true，因为两个空串确实可以组成一个空串
   (b) 遍历数组进行状态转移：
      - 如果 i > 0，dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1])
      - 如果 j > 0，dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1])

最后 return dp[n][m] 即可
**题解**：
```js
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const n = s1.length, m = s2.length, t = s3.length;
    if (n + m !== t) return false;

    // 1. 初始化 dp 数组 (n+1) x (m+1)
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));

    // 2. 基础状态：两个空串可以组成空串
    dp[0][0] = true;

    // 3. 填表
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            const p = i + j - 1; // 当前对比 s3 的索引

            // 尝试使用 s1 的字符（向下走）
            if (i > 0) {
                dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p]);
            }
            // 尝试使用 s2 的字符（向右走）
            if (j > 0) {
                dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p]);
            }
        }
    }

    return dp[n][m];
};
```

# [72. 编辑距离](https://leetcode.cn/problems/edit-distance/description/?envType=study-plan-v2&envId=top-interview-150)

给你两个单词<code>word1</code> 和<code>word2</code>， 请返回将<code>word1</code>转换成<code>word2</code> 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

**示例1：** 

> **输入：** word1 = "horse", word2 = "ros"
**输出：** 3
**解释：** 
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

**示例2：** 

> **输入：** word1 = "intention", word2 = "execution"
**输出：** 5
**解释：** 
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

**提示：** 

- <code>0 <= word1.length, word2.length <= 500</code>
- <code>word1</code> 和 <code>word2</code> 由小写英文字母组成

**思路**：
同样需要把它想成一个二维的表格。我们先拿到 Word1 的长度 n 和 Word2 的长度 m，然后处理一个 (n + 1) × (m + 1) 的 dp 数组。

1. 具体含义：
   dp[i][j] 表示从 Word1 的前 i 个字符变为 Word2 的前 j 个字符需要的最少步数。

2. 动作定义：
   (a) 向右走：相当于插入一个字符。
   (b) 向下走：相当于插入一个字符。
   (c) 向上走：同样代表删除字符。

3. 初始化边界情况：
   (a) 当 Word2 为空时，Word1 变为空需要执行删除操作。我们将第一列的每一个元素 dp[i][0] 设为它对应的行号 i。
   (b) 当 Word1 为空时，变为 Word2 需要执行插入操作。我们将第一行的每一个元素 dp[0][j] 设为它对应的列号 j。

4. 状态转移逻辑：
   我们从 i=1, j=1 开始循环。
   (a) 如果 Word1[i-1] == Word2[j-1]：
       这意味着当前字符相同，不需要进行额外操作。此时 dp[i][j] 就直接等于左上角的值 dp[i-1][j-1]。
   (b) 如果字符不同（特殊情况）：
       我们需要考虑三种改变方式：
       - 删除操作：对应上方格子加一，即 dp[i-1][j] + 1。
       - 插入操作：对应左边格子加一，即 dp[i][j-1] + 1。
       - 替换操作：对应左上角格子加一，即 dp[i-1][j-1] + 1。
       
       我们取这三者的最小值：dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1。

最后，我们直接返回 dp[n][m] 即可。
**题解**：
```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;

    // 1. 创建 (n+1) x (m+1) 的二维数组
    // dp[i][j] 表示 word1 的前 i 个字符转换成 word2 的前 j 个字符所需的最小步数
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    // 2. 初始化边界状态
    // 当 word2 为空，word1 变为空需要删除所有字符
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    // 当 word1 为空，变成 word2 需要插入所有字符
    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    // 3. 填表
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 如果当前字符相等，不需要任何操作
            if (word1[i - 1] === word2[j - 1]) {
                // 步数等于“去掉这两个相等字符”后的步数
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 如果字符不等，从三种操作中选代价最小的：
                // dp[i-1][j] + 1   : 删除 word1[i-1]
                // dp[i][j-1] + 1   : 插入 word2[j-1]
                // dp[i-1][j-1] + 1 : 替换 word1[i-1] 为 word2[j-1]
                dp[i][j] = Math.min(
                    dp[i - 1][j],    // 上
                    dp[i][j - 1],    // 左
                    dp[i - 1][j - 1] // 左上
                ) + 1;
            }
        }
    }

    // 4. 右下角即为最终答案
    return dp[n][m];
};
```

# [123. 买卖股票的最佳时机 III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/description/?envType=study-plan-v2&envId=top-interview-150)

给定一个数组，它的第 <code>i</code> 个元素是一支给定的股票在第 <code>i</code> 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成**两笔** 交易。

**注意：** 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例1:** 

> **输入：** prices = [3,3,5,0,0,3,1,4]
**输出：** 6
**解释：** 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
    随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。

**示例 2：** 

> **输入：** prices = [1,2,3,4,5]
**输出：** 4
**解释：** 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。  
    注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。  
    因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

**示例 3：** 

> **输入：** prices = [7,6,4,3,1] 
**输出：** 0 
**解释：** 在这个情况下, 没有交易完成, 所以最大利润为 0。

**示例 4：** 

> **输入：** prices = [1]
**输出：** 0

**提示：** 

- <code>1 <=prices.length <= 10^5</code>
- <code>0 <=prices[i] <=10^5</code>

**思路**：
我们需要定义五个状态，分别用 0, 1, 2, 3, 4 表示：
1. **0**：从未买过股票。
2. **1**：买入了一次股票并持股。
3. **2**：卖出了一次股票，当前不持股。
4. **3**：买入了第二次股票并持股。
5. **4**：卖出了第二次股票。

**算法步骤**：

1. **初始化 DP 数组**：
   创建一个长度为 `L`（`prices.length`）的 DP 数组。设置第一天（第 0 天）的初始状态：
   - `dp[0][0] = 0`：第一天什么都不买。
   - `dp[0][1] = -prices[0]`：第一天买入股票，收益为负。
   - `dp[0][2]`、`dp[0][3]`、`dp[0][4]`：第一天不可能完成卖出或第二次交易，统一初始化为负无穷。

2. **状态转移**：
   从第一天开始遍历天数 `i`，进行状态转移：
   - **状态 0**：`dp[i][0] = 0`
   - **状态 1**（买入一次并持股）：可能是今天买的（`dp[i-1][0] - prices[i]`），也可能是之前买的（`dp[i-1][1]`），取两者最大值。
   - **状态 2**（卖出一次且不持股）：可能是今天卖的（`dp[i-1][1] + prices[i]`），也可能是之前卖的（`dp[i-1][2]`），取最大值。
   - **状态 3**（买入第二次并持股）：可能是今天买的（`dp[i-1][2] - prices[i]`），也可能是之前买的（`dp[i-1][3]`），取最大值。
   - **状态 4**（卖出两次）：可能是今天卖的（`dp[i-1][3] + prices[i]`），也可能是之前卖的（`dp[i-1][4]`），取最大值。

3. **返回值**：
   最后返回 `dp[L-1][2]`、`dp[L-1][4]` 以及 0 中的最大值。

4. **优化空间复杂度**：
根据表格，我们很容易发现，其实不需要存储一个二维数组。由于每个状态只依赖于 DP 的上一个值（例如 `dp[1]` 只依赖于 `dp[i-1]` 时的 `dp[0]` 和 `dp[1]` 本身在上一次遍历时的值），因此我们不需要这个数组。我们只需要存储 5 个变量即可。
**题解**：
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const L = prices.length;
    if (L === 0) return 0;

    // 1. 初始化状态
    // dp[0]: 从未交易
    // dp[1]: 第一次买入
    // dp[2]: 第一次卖出
    // dp[3]: 第二次买入
    // dp[4]: 第二次卖出
    let dp0 = 0;
    let dp1 = -prices[0];
    let dp2 = -Infinity; // 第一天不可能卖出
    let dp3 = -Infinity; // 第一天不可能开启第二次买入
    let dp4 = -Infinity; // 第一天不可能开启第二次卖出

    // 2. 状态转移
    for (let i = 1; i < L; i++) {
        const price = prices[i];
        
        // 状态 0 永远是 0，可以省略
        
        // 状态 1：第一次买入。来自：保持之前买入 OR 今天刚买入(0-price)
        dp1 = Math.max(dp1, 0 - price);
        
        // 状态 2：第一次卖出。来自：保持之前卖出 OR 今天刚卖出(dp1+price)
        // 注意：这里的 dp1 是上一轮的值，JS 会按顺序执行，如果担心覆盖可以存临时变量
        // 但其实这里今天买今天卖收益为0，不影响结果
        dp2 = Math.max(dp2, dp1 + price);
        
        // 状态 3：第二次买入。来自：保持之前买入 OR 今天刚买入(dp2-price)
        dp3 = Math.max(dp3, dp2 - price);
        
        // 状态 4：第二次卖出。来自：保持之前卖出 OR 今天刚卖出(dp3+price)
        dp4 = Math.max(dp4, dp3 + price);
    }

    // 3. 返回值：可能是一次交易的结果，也可能是两次交易的结果，或者是0（不交易）
    return Math.max(0, dp2, dp4);
};
```

# [188. 买卖股票的最佳时机 IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个整数数组<code>prices</code> 和一个整数 <code>k</code> ，其中 <code>prices[i]</code> 是某支给定的股票在第 <code>i</code> 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 <code>k</code> 笔交易。也就是说，你最多可以买 <code>k</code> 次，卖 <code>k</code> 次。

**注意：** 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

<strong class="example">示例 1：** 

> **输入：** k = 2, prices = [2,4,1]
**输出：** 2
**解释：** 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。

<strong class="example">示例 2：** 

> **输入：** k = 2, prices = [3,2,6,5,0,3]
**输出：** 7
**解释：** 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

**提示：** 

- <code>1 <= k <= 100</code>
- <code>1 <= prices.length <= 1000</code>
- <code>0 <= prices[i] <= 1000</code>

**思路**：
其实这题一共只有 2K + 1 个状态，分别是：
1. 未持有股票的状态
2. 每次 K 次交易都会有的“持有”和“卖出”状态

加起来一共是 2K + 1 个状态。

我们的解题思路如下：

1. 初始化状态：
   首先将 DP[0] 设置为 0。在第一天的时候，对于第 j 次买入，我们需要将所有的奇数项（即持有状态）设置为 -prices[0]。

2. 状态转移：
   我们从第 2 天开始，一直遍历到第 N 天。在每一天中，我们对 1 到 2K 的所有状态进行遍历：
   (a) 如果状态 j 是奇数，表示当前处于持有状态。这个状态可能源于前一天就已经持有，也可能是今天刚刚买入。我们取两者的最大值，即：DP[j] = max(DP[j], DP[j-1] - prices[i])。
   (b) 如果状态 j 是偶数，表示当前处于卖出状态。这可能是前一天就是卖出状态，或者今天刚卖出。我们同样取最大值：DP[j] = max(DP[j], DP[j-1] + prices[i])。

3. 获取结果：
   先将结果初始化为 0，然后遍历 DP 数组中所有的偶数项（即所有的卖出状态），取其中的最大值并返回即可。
**题解**：
```js

```

# [221. 最大正方形](https://leetcode.cn/problems/maximal-square/description/?envType=study-plan-v2&envId=top-interview-150)

在一个由 <code>'0'</code> 和 <code>'1'</code> 组成的二维矩阵内，找到只包含 <code>'1'</code> 的最大正方形，并返回其面积。

**示例 1：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg" style="width: 400px; height: 319px;">

> **输入：** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
**输出：** 4

**示例 2：** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg" style="width: 165px; height: 165px;">

> **输入：** matrix = [["0","1"],["1","0"]]
**输出：** 1

**示例 3：** 

> **输入：** matrix = [["0"]]
**输出：** 0

**提示：** 

- <code>m == matrix.length</code>
- <code>n == matrix[i].length</code>
- <code>1 <= m, n <= 300</code>
- <code>matrix[i][j]</code> 为 <code>'0'</code> 或 <code>'1'</code>

**思路**：
如果数组为空的话直接返回 0
我们遍历并更新 matrix 数组，检查一下它那个数值是不是等于 1。如果是一的话，我们就给它设为 1，方便我们后续计算。
具体的更新逻辑如下：
1. 如果当前 matrix 中的值为 1：
   将它更新为左一格、上一格以及左上一格这三个位置的最小值加 1。
2. 如果当前值为 0：
   直接跳过。

将当前格子的值后与最大值进行比较：如果它比当前最大值大，我们就更新最大值。

最后返回最大值的平方
**题解**：
```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // 基础边界检查
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    // 我们直接原地修改 matrix，为了不破坏原数据类型，可以定义一个二维数组 dp
    // 但如果面试官允许，原地修改空间复杂度就是 O(1)
    const dp = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 只有当前格为 '1' 时才需要计算
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    // 第一行或第一列，无法向左上扩展，边长就是 1
                    dp[i][j] = 1;
                } else {
                    // 核心逻辑：取左、上、左上三个邻居的最小值，再加 1
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                // 实时更新最大边长
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    // 题目要求返回面积
    return maxSide * maxSide;
};
```
# 这下边就不是力扣 150 的了
# [75. 颜色分类](https://leetcode.cn/problems/sort-colors/description/)

给定一个包含红色、白色和蓝色、共<code>n</code> 个元素的数组<code>nums</code>，**<a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地</a>** 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 <code>0</code>、<code>1</code> 和 <code>2</code> 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

**示例 1：** 

> **输入：** nums = [2,0,2,1,1,0]
**输出：** [0,0,1,1,2,2]

**示例 2：** 

> **输入：** nums = [2,0,1]
**输出：** [0,1,2]

**提示：** 

- <code>n == nums.length</code>
- <code>1 <= n <= 300</code>
- <code>nums[i]</code> 为 <code>0</code>、<code>1</code> 或 <code>2</code>

**进阶：** 

- 你能想出一个仅使用常数空间的一趟扫描算法吗？

**思路**：
可以使用 P0 和 P2 两个指针，P0 指向 0，P2 指向数组的最右端。此外还需要一个 curr 指针作为索引（index）。

从 0 开始进行遍历，直到索引等于 P2 为止。在遍历过程中：
1. 进行 i++
2. 进行交换：
   (a) 如果当前数值为 0，就跟 P0 进行交换，随后 P0 加加
   (b) 如果当前数值为 2，就跟 P2 进行交换，随后 P2 减减

有一点需要注意：如果当前数值为 2，i 就先不加加。

因为在这个时候，你不知道换过来的数是不是也是 2。前面的数据已经整理好了，但后面换过来的这个数是未知的。如果换过来的也是 2，而你执行了 i++，那就会跳过这个 2。

所以我们得一直进行交换，直到换过来的数是 0 或 1 为止。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0;                  // 指向 0 应该存放的位置
    let p2 = nums.length - 1;    // 指向 2 应该存放的位置
    let curr = 0;                // 当前遍历的指针

    // 注意这里是 <= p2，因为 p2 右边的才是排好序的 2
    while (curr <= p2) {
        if (nums[curr] === 0) {
            // 1. 发现 0，扔到左边
            [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
            p0++;
            curr++; // 从 p0 换回来的只可能是 1（或者就是 0 自己），所以可以直接前进
        } else if (nums[curr] === 2) {
            // 2. 发现 2，扔到右边
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
            p2--;
            // 重要：这里 curr 不加加！因为从后面换回来的数还没看
        } else {
            // 3. 发现 1，留在中间，直接跳过
            curr++;
        }
    }
};
```


# [503. 下一个更大元素 II](https://leetcode.cn/problems/next-greater-element-ii/description/)

给定一个循环数组<code>nums</code>（<code>nums[nums.length - 1]</code>的下一个元素是<code>nums[0]</code>），返回<code>nums</code>中每个元素的 **下一个更大元素**  。

数字 <code>x</code>的 **下一个更大的元素**  是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 <code>-1</code>。

**示例 1:** 

> **输入:**  nums = [1,2,1]
**输出:**  [2,-1,2]
**解释:**  第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。

**示例 2:** 

> **输入:**  nums = [1,2,3,4,3]
**输出:**  [2,3,4,-1,4]

**提示:** 

- <code>1 <= nums.length <= 10^4</code>
- <code>-10^9<= nums[i] <= 10^9</code>

**思路**：
需要先初始化一个长度为 N 的数组，并将数组中的每个元素默认设置为 -1。

为了解决循环数组的问题，我们将数组“拉直”，实际上就是对这个数组进行 2N 次遍历。这样做的目的是为了让原本在数组末尾的元素也能完整地遍历完它前面的元素，从而覆盖整个环。

在遍历过程中，我们维护一个单调递减栈。具体的逻辑如下：
1. 如果当前遍历到的值比栈顶元素的值大，我们就将栈顶元素弹出。
2. 将该栈顶元素在结果数组中对应位置的值，设置为当前遍历到的数字（即它找到的“下一个更大的值”）。
3. 这个弹出过程会一直持续，直到栈为空，或者当前数字不再比新的栈顶元素大为止。
4. 最后，将当前的数字压入栈中。

当完成这 2N 次遍历循环后，这道题就解决了。
**题解**：
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    // 1. 初始化结果数组，默认填充 -1
    const res = new Array(n).fill(-1);
    // 2. 维护一个单调递减栈，栈中存放的是元素的索引（index）
    const stack = [];

    // 3. 模拟遍历两遍数组 (2 * n)
    for (let i = 0; i < 2 * n; i++) {
        // 使用取模运算 i % n 获取当前在原数组中的真实索引
        const currIdx = i % n;
        const num = nums[currIdx];

        // 4. 如果当前值比栈顶索引对应的值大
        // 说明找到了栈顶元素的“下一个更大元素”
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            const prevIdx = stack.pop();
            res[prevIdx] = num;
        }

        // 5. 只有在第一轮遍历时，才有必要把索引入栈
        // 第二轮遍历主要是为了给第一轮残留在栈里的元素找“更大值”
        if (i < n) {
            stack.push(currIdx);
        }
    }

    return res;
};
```
