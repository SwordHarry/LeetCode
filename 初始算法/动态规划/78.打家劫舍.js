/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

示例 1:

输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2:

输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 */
/**
 * 思路：
 *      设置备忘录 dp[n]
 *      那么 dp[i] 就是 dp[0]...dp[i-2] 之中的最大
 *      即 递推式： dp[i] = max(dp[0...i-2] + nums[i])
 *      边界条件：dp[0] = nums[0]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }

    const dp = [];
    dp[0] = nums[0];
    dp[1] = nums[1];
    let result = Math.max(dp[0], dp[1]);
    for (let i = 2; i < len; i++) {
        let temp = dp[0];
        for (let j = 0; j < i - 1; j++) {
            temp = Math.max(temp, dp[j]);
        }
        dp[i] = temp + nums[i];
        result = Math.max(result, dp[i]);
    }

    return result;
};

// anser algorithm
// 递推式应该是：dp[i] = max(num[i] + dp[i - 2], dp[i - 1])
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    const dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    return dp[dp.length - 1];
};