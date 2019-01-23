/**
 * 给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /**
  * 原地算法：一种使用小的，固定数量的额外之空间来转换资料的算法。
  *  我这里使用了一维数组，其实这样不好，算不上原地
  */
var rotate = function (matrix) {
    var len = matrix.length;
    var temp = [];

    // 降维
    for (var i = len - 1; i >= 0; i--) {
        temp.push(...matrix[i]);
    }
    console.log(temp);

    // 用额外空间旋转，如何原地旋转啊？
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            matrix[i][j] = temp[i + j * len];
        }
    }

};


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /**
  * 
  * 这里只用到了一个 额外空间变量 temp
  */
var rotate = function (matrix) {
    var len = matrix.length - 1;
    for (var i = 0; i < len / 2; i++) {
        for (var j = i; j < len - i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[len - j][i];
            matrix[len - j][i] = matrix[len - i][len - j];
            matrix[len - i][len - j] = matrix[j][len - i];
            matrix[j][len - i] = temp;

        }
    }
    return matrix;
};