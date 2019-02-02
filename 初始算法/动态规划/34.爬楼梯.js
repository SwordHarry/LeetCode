/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 */
/**
 *  思路：
 *      自底向上
 *      状态转移方程：
 *          爬 n 层楼梯的方法数 = 爬 n - 1 层楼梯的方法数 + 爬 n - 2 层楼梯的方法数
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    let step = 0,
        step1 = 1,
        step2 = 2;

    for (let i = 3; i <= n; i++) {
        step = step1 + step2;
        step1 = step2;
        step2 = step;
    }

    return step;
};