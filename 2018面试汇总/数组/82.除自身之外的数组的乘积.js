/**
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 * 
 */
/**
 * 思路： 
 *      这题和 81.递增的三元子序列很像，可以设置一个 dp[n]
 *      result[n] 中的 第 i 项存 0 到 i - 1 的乘积
 *      dp[n] 中的 第 i 项存 n 到 i + 1 的乘积
 *      
 *      最后 让 result[i] *= dp[i]
 *      result 即为最终结果
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;

    const dp = Array(len).fill(1);
    const result = Array(len).fill(1);

    for (let i = 0; i < len - 1; i++) {
        dp[i + 1] = nums[i] * dp[i];
    }

    for (let i = len - 1; i > 0; i--) {
        result[i - 1] = nums[i] * result[i];
    }

    for (let i = 0; i < len; i++) {
        result[i] *= dp[i];
    }

    return result;
};

// answer algorithm
// 思想一致，不过将 dp[n] 更换 为 常数级别存储 temp
var productExceptSelf_result = function (nums) {
    const len = nums.length;

    let temp = 1;
    const result = Array(len).fill(1);

    for (let i = len - 1; i > 0; i--) {
        result[i - 1] = nums[i] * result[i];
    }

    for (let i = 0; i < len - 1; i++) {
        temp = nums[i] * temp;
        result[i + 1] *= temp;
    }

    return result;
};