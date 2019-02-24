/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */
/**
 * 思路：
 *      动态规划，
 *              可以使用一个二维数组备忘录，实现自底向上
 *              temp[i][j] 是记录 在该位置时，前面走过的最短路径
 *              注意边界条件即可，边界条件没得选择
 * 
 *      注意案例：
 *          -1
 *         2  3
 *       1  -1  -3
 *      
 *      这个案例用递推 自底向上是不行的，必须按照动态规划自顶向下  
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const len = triangle.length;
    if (!len) {
        return 0;
    }

    const temp = [];
    for (let i = 0; i < len; i++) {
        temp[i] = [];
    }
    temp[0][0] = triangle[0][0];

    for (let i = 1; i < len; i++) {
        const column = triangle[i].length;
        for (let j = 0; j < column; j++) {
            if (j === 0) {
                temp[i][j] = triangle[i][j] + temp[i - 1][j];
            } else if (j === column - 1) {
                temp[i][j] = triangle[i][j] + temp[i - 1][j - 1];
            } else {
                const path1 = triangle[i][j] + temp[i - 1][j];
                const path2 = triangle[i][j] + temp[i - 1][j - 1];
                temp[i][j] = Math.min(path1, path2);
            }
        }
    }

    let result = temp[len - 1][0];
    for (let i = 1; i < len; i++) {
        result = Math.min(result, temp[len - 1][i]);
    }


    return result;
};

// answer algorithm
// 极度精简，直接使用原数组实现，自顶向下，还不需要考虑边界条件
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {

    for (let i = triangle.length - 2; i >= 0; i--) {

        for (let j = 0; j < triangle[i].length; j++) {

            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    return triangle[0][0];
};