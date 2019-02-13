/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * 
 * 
 */

/**
 * my algorithm:
 *         此题没有要求，首先想到的是直接对数组进行排序，
 *         然后返回第k大的元素
 *  
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => {
        return a - b;
    });

    return nums[nums.length - k];
};

// answer algorithm
/**
 * 使用两个栈，一个 bigger 一个 less
 * 将数组的第一个数作为标志，遍历剩下元素，如果大于，放入Bigger中，如果小于，放入less中
 * 最后判断bigger长度，如果 k === bigger.length + 1，则返回数组第一个数，
 * 如果 k < bigger.length + 1，则递归 bigger 和K
 * 否则递归 less 和 k - bigger.length - 1
 *   这种解决方案 空间复杂度大，别人解法速度高，可是我本人使用这种解法速度慢
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest_answer = function (nums, k) {
    const bigger = [];
    const less = [];
    const num = nums.shift();
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] > num) {
            bigger.push(nums[i]);
        } else {
            less.push(nums[i]);
        }
    }

    const biggerLen = bigger.length;
    if (k === biggerLen + 1) {
        return num;
    } else if (k < biggerLen + 1) {
        return findKthLargest(bigger, k);
    } else {
        return findKthLargest(less, k - biggerLen - 1);
    }

};