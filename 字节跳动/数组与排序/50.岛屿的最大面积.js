/**
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。

注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 */
/**
 * 思路：
 *      递归深度遍历二维数组，
 *      如果遇到1，进入递归，将其上下左右都递归检查一次，若为1，则面积 + 1
 *      注意：
 *          1.遇到为1时，记录了面积 + 1后记得将其置为0，否则会死循环
 *          2.判断数组下标越界问题
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const rowLen = grid.length;
    if (!rowLen) {
        return 0;
    }
    const columnLen = grid[0].length;
    let result = 0;
    for (let j = 0; j < columnLen; j++) {
        for (let i = 0; i < rowLen; i++) {
            if (grid[i][j]) {
                result = Math.max(result, getMaxIsland(i, j, grid));
            }
        }
    }

    return result;
};

var getMaxIsland = function (i, j, grid) {
    if (i < 0 || i >= grid.length) {
        return 0;
    }
    if (j < 0 || j >= grid[0].length) {
        return 0;
    }

    if (!grid[i][j]) {
        return 0;
    }

    let area = 1;
    grid[i][j] = 0;

    area += getMaxIsland(i - 1, j, grid);
    area += getMaxIsland(i + 1, j, grid);
    area += getMaxIsland(i, j - 1, grid);
    area += getMaxIsland(i, j + 1, grid);

    return area;
}