/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。
 * 
 */
/**
 * 
 * 思路：
 *      对行和列使用 二分搜索，
 *      设置一个 index ，初始化为0
 *      0行和0列，low都从0开始
 *      搜索完没有的话
 *      index++
 *      就从1行和1列，low 都从 1 开始
 *      以此类推，直到 index 为数组长度
 *      
 *      这种解法没有充分用到 题目中 矩阵的规律，感觉自己蠢爆了
 *      
 *  
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const row = matrix.length;
    if (!row) {
        return false;
    }
    const column = matrix[0].length;

    let index = 0;

    while (index < row || index < column) {
        let rowLow = index,
            rowHigh = row - 1,
            columnLow = index,
            columnHigh = column - 1;

        while (rowLow <= rowHigh && index < column) {
            let rowMid = ~~((rowLow + rowHigh) / 2);

            if (target === matrix[rowMid][index]) {
                return true;
            } else if (target > matrix[rowMid][index]) {
                rowLow = rowMid + 1;
            } else {
                rowHigh = rowMid - 1;
            }

        }
        while (columnLow <= columnHigh && index < row) {
            let columnMid = ~~((columnLow + columnHigh) / 2);
            if (target === matrix[index][columnMid]) {
                return true;
            } else if (target > matrix[index][columnMid]) {
                columnLow = columnMid + 1;
            } else {
                columnHigh = columnMid - 1;
            }
        }

        index++;
    }

    return false;
};

// answer algorithm
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix_answer = function (matrix, target) {
    const row = matrix.length;
    if (!row) {
        return false;
    }
    const column = matrix[0].length;

    let i = 0;
    let j = column - 1;
    while (i < row && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }



    return false;
};