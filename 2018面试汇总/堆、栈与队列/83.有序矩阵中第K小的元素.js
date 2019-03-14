/**
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
说明: 
你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n^2 。
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const len = matrix.length;

    const stack1 = [];
    const stack2 = [];

    stack1.push(-Number.MAX_VALUE);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (stack1[stack1.length - 1] <= matrix[i][j]) {
                stack1.push(matrix[i][j]);
            } else {
                while (stack1[stack1.length - 1] > matrix[i][j]) {
                    stack2.push(stack1.pop());
                }
                stack1.push(matrix[i][j]);
                while (stack2.length) {
                    stack1.push(stack2.pop());
                }
            }


        }
    }

    return stack1[k];
};

// answer algorithm
var kthSmallest = function (matrix, k) {
    const len = matrix.length;

    let low = matrix[0][0],
        high = matrix[len - 1][len - 1];

    while (low < high) {
        const mid = low + ~~((high - low) / 2);
        let count = 0,
            j = len - 1;

        for (let i = 0; i < len; i++) {
            while (j >= 0 && matrix[i][j] > mid) {
                j--;
            }
            count += j + 1;
        }
        if (count < k) {
            low = mid + 1;
        } else {
            high = mid;
        }

    }
    return low;
};