/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

/**
 * 思路：
 *     动态规划：需要一个n长度的备忘录 dp，
 *             从左往右遍历，每次需要一个末尾元素
 *             将末尾元素之前的元素与其比较
 *             如果发现 j 处的元素比 i 末尾处的小
 *             递推式： dp[i] = max(dp[i] , 1 + dp[j])
 *             边界条件： dp = 1
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }

    const dp = Array(len).fill(1);
    let result = dp[0];
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};