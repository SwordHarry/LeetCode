/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */
/**
 * 思路：动态规划，需要理解算法所表达的意思
 *      最大子序： 
 *          1.子序的第一个数字是非负数，因为若是，去掉第一个，则还存在最优解，矛盾
 *          2.子序中若存在前若干个连续数字的和为负数，则可以去掉这若干个数字，得到更优解
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = nums[0];
    let tempSum = nums[0];
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        // 算法核心
        // ----------------------------
        if (tempSum > 0) {
            tempSum += nums[i];
        } else {
            tempSum = nums[i];
        }
        sum = Math.max(sum, tempSum);
        // ----------------------------
    }
    return sum;
};