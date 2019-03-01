/**
 * 
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3
 * 
 */
/**
 * 思路： DFS 深度遍历，这条题和岛屿的大小一模一样，不要需要注意 grid 中都是 character，不是数字
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const row = grid.length;
    if (!row) {
        return 0;
    }
    const column = grid[0].length;
    let result = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (+grid[i][j]) {
                _helper(grid, i, j);
                result++;
            }
        }
    }
    return result;
};


var _helper = function (grid, i, j) {

    if (i < 0 || i > grid.length - 1) {
        return;
    }
    if (j < 0 || j > grid[0].length - 1) {
        return;
    }

    if (!+grid[i][j]) {
        return;
    }
    grid[i][j] = 0;

    _helper(grid, i - 1, j);
    _helper(grid, i + 1, j);
    _helper(grid, i, j - 1);
    _helper(grid, i, j + 1);

}