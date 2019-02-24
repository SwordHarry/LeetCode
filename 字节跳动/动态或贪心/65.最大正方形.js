/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
 */
/**
 * 思路：
 *      动态规划，使用一个备忘录的二维数组记录该位置的最大正方形面积
 *      
 *      递推式：dp[i][j] = matrix[i][j]?min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1 : 0;
 *      边界条件：dp[0][j] = matrix[0][j]
 *              dp[i][0] = matrix[i][0]
 *      
 *      注意：如果原数组 matrix 中 matrix[i][j] === 0
 *          则dp[i][j] 直接为0
 *          当 matrix[i][j] === 1
 *          才看其 左 上 左上 三个方向的面积记录
 * 
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const row = matrix.length;
    if (!row) {
        return 0;
    }
    const column = matrix[0].length;

    let result = 0;
    const dp = [];

    // 边界条件
    for (let i = 0; i < row; i++) {
        dp[i] = [];
        dp[i][0] = matrix[i][0] - '0';
        if (dp[i][0]) {
            result = 1;
        }
    }
    for (let i = 0; i < column; i++) {
        dp[0][i] = matrix[0][i] - '0';
        if (dp[0][i]) {
            result = 1;
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            } else {
                dp[i][j] = 0;
            }
            result = Math.max(result, dp[i][j]);
        }
    }

    return result * result;
};