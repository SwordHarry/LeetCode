/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7] 
 */
/**
 * 思路：
 *      左 下 右 上
 *      两个指针，四个边界值
 *      一个 计数器
 *      注意判断边界条件 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = [];
    const row = matrix.length;
    if (!row) {
        return result;
    }
    const column = matrix[0].length;

    let i = 0,
        j = 0,
        iMin = 0,
        jMin = 0,
        iMax = row,
        jMax = column;

    let curDirection = 'left';
    let count = 0;
    while ((i >= iMin && i <= iMax) && (j >= jMin && j <= jMax)) {
        count++;
        result.push(matrix[i][j]);
        switch (curDirection) {
            case 'left':
                {
                    j++;
                    if (j === jMax) {
                        curDirection = 'down';
                        iMin++;
                        j--;
                        i++;
                    }
                    break;
                };
            case 'down':
                {
                    i++;
                    if (i === iMax) {
                        curDirection = 'right';
                        jMax--;
                        i--;
                        j--;
                    }
                    break;
                };
            case 'right':
                {
                    j--;
                    if (j === jMin - 1) {
                        curDirection = 'up';
                        iMax--;
                        j++;
                        i--;
                    }

                    break;
                };
            case 'up':
                {
                    i--;
                    if (i === iMin - 1) {
                        curDirection = 'left';
                        jMin++;
                        i++;
                        j++;
                    }
                    break;
                };
        }
        if (count === row * column) {
            break;
        }
    }

    return result;
};