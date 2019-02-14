/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
/**
 * 思路：
 *      要求时间复杂度为O(n)，
 *      这里的意思应该是不允许排序并且只遍历一次数组
 *      就能找出答案
 *      这里我使用了map，然后遍历数组，如果 该元素在map 存在，则跳过
 *      如果不存在，就以此元素为中心，查看是否有 high++ 和 low--，直到没有为止
 *      记录遍历长度
 *      可是这么做算法复杂度貌似是O(n^2)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) {
        return 0;
    }
    const map = {};
    let max = 1;
    let temp = 1;

    for (let i of nums) {
        temp = 1;
        if (!map[i]) {
            let h = i + 1;
            let l = i - 1;
            while (map[h]) {
                temp++;
                h++;
            }
            while (map[l]) {
                temp++;
                l--;
            }
        }
        max = Math.max(max, temp);
        map[i] = 1;
    }

    max = Math.max(max, temp);
    return max;
};

// answer algorithm
/**
 * 思路：
 *      使用map保存最长连续序列的长度
 *      遍历数组，如果当前元素是map中没有的，
 *      查看当前元素 - 1 和 + 1 的元素在map中的值left和right
 *      则 最长连续序列长度 = 1 + left + right;
 *      更新i ,i - left, i + right
 *      将三者在map中的值更新为 最长连续序列长度。
 *      
 *      为什么不是更新 i , i - 1,i + 1
 *      因为left 和 right 不一定是 1 ，而且不需要
 *      从 1 更新到 left 或者从1 更新到 right，因为每次更新
 *      只需要拿邻近的值，而且被更新的值在map中原本不存在
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) {
        return 0;
    }
    const map = {};
    let max = 1;

    for (let i of nums) {
        if (!map[i]) {
            let left = map[i - 1] || 0;
            let right = map[i + 1] || 0;
            let len = left + right + 1;

            if (len > max) {
                max = len;
            }
            map[i] = len;
            map[i - left] = len;
            map[i + right] = len;
        }
    }
    return max;
};