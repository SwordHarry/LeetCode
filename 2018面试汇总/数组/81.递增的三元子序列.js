/**
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

示例 1:

输入: [1,2,3,4,5]
输出: true
示例 2:

输入: [5,4,3,2,1]
输出: false
 * 
 * 
 */
/**
 * 思路：
 *      虽然不满足题意，但是是 暴力解法 的一种优化
 *      满足O(n) 时间复杂度，但是不满足 O(1) 空间复杂度
 *      创建两个数组 backward[n] forward[n]
 *      其中 backward[i] 存储 0 到 i - 1 中最大的数,
 *          forward[i] 存储 n 到 i + 1 中最小的数
 *      
 *      最后只需要同时查看三个数组，一旦满足
 *      backward[i] < nums[i] < forward[i]
 *      输出 true，否则输出 false
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const len = nums.length;
    const backward = Array(len).fill(0),
        forward = Array(len).fill(0);

    backward[0] = nums[0];
    forward[len - 1] = nums[len - 1];
    // 构造 backward
    for (let i = 1; i < len; i++) {
        backward[i] = Math.min(backward[i - 1], nums[i]);
    }

    // 构造 forward
    for (let i = len - 2; i >= 0; i--) {
        forward[i] = Math.max(forward[i + 1], nums[i]);
    }

    // 输出结果
    for (let i = 1; i < len - 1; i++) {
        if ((backward[i] < nums[i]) && (forward[i] > nums[i])) {
            return true;
        }
    }

    return false;
};

// answer algorithm
var increasingTriplet_answer = function (nums) {
    
};