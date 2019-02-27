/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * 
 */
/**
 * 思路：
 *      参照爬楼梯的解法，可以知道 dp[n] = dp[n-1] + dp[n-2]
 *      现在爬楼梯可以任意爬， 所以 第 n 个 为前面所有 爬法 之和，包括 dp[0] = 1
 * 
 */
function jumpFloorII(number) {
    // write code here
    const dp = Array(number + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= number; i++) {
        for (let j = i - 1; j >= 0; j--) {
            dp[i] += dp[j];
        }
    }

    return dp[number];
}