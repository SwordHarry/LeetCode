/**
 * 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */
/**
 * 思路：
 *      动态规划
 *      dp[n] 为乘积的记录
 *      max[n] 为记录最大值
 *      min[n] 为记录最小值
 *      [-2,3,-4] 结果 应该 为 24 ，而不是 3
 *      
 *      动态规划，但是 乘积 可以 由 正数 * 正数 得来
 *              也可以由 负数 * 负数 得来
 *              故 需要记录 最大乘积 的同时 也需要 记录 最小乘积
 *      
 *      边界条件：dp[0] = max[0] = min[0] = nums[0]
 *      递推式： max[i] = max(max[i-1] * nums[i], min[i-1] * nums[i],nums[i]);
 *              min[i] = min(max[i-1] * nums[i], min[i-1] * nums[i],nums[i]);
 *              dp[i] = max(max[i], dp[i-1]);
 *      
 *      
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }

    const dp = [];
    const max = [];
    const min = [];
    dp[0] = nums[0];
    max[0] = nums[0];
    min[0] = nums[0];
    let result = dp[0];
    for (let i = 1; i < len; i++) {
        const maxn = max[i - 1] * nums[i];
        const minn = min[i - 1] * nums[i];
        max[i] = Math.max(maxn, minn, nums[i]);
        min[i] = Math.min(maxn, minn, nums[i]);
        dp[i] = Math.max(max[i], dp[i - 1]);
        result = Math.max(result, dp[i]);
    }

    return result;
};