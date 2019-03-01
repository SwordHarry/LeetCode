/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
 */
/**
 * 思路：
 *      回溯算法，回溯算法的算法难度一般为中等以上，此题为困难水平
 *      先理清楚 算法的条件
 *      
 *      皇后不能在同一行
 *      皇后不能在同一列
 *      皇后不能在 斜率为+1 斜线
 *      皇后不能在 斜率为-1 斜线
 * 
 * 
 *      设置一个 pos[n] n 为行数
 *      pos[n] 的值 就是 第 n 个皇后放在第 几 列
 *      这就排除了 皇后在 同一行 的情况
 *      pos[i] !== pos[j]
 *      排除 皇后在 同一列 的情况
 * 
 *      斜率为 -1 的斜线：行号-列号 值相等
 *      斜率为 +1 的斜线，行号+列表 值相等
 *      则若存在 两个皇后的位置 (i,j) 和 (k,l)
 *      i-j===k-l或i+j===k+l
 *      则说明这两个皇后在同一斜线上，将等式移项后可以发现
 *      |i-k| === |j-l|，成立则2个皇后就在同一斜线上了
 *      
 *      针对上面的所有条件 可以列出一个能否 放置皇后的判断
 *      
 *      回溯算法的解空间就是 树
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];
    const pos = Array(n).fill(-1);
    solveNQueensDFS(0, n, pos, result);

    return result.map(list => list.map(item => {
        const arr = Array(n).fill('.');
        arr[item] = 'Q';
        return arr.join('');
    }));
};

var solveNQueensDFS = function (t, n, pos, result) {
    if (t === n) {
        result.push(pos.slice());
        return;
    } else {
        for (let i = 0; i < n; i++) {
            pos[t] = i;
            if (isPlace(t, pos)) {
                solveNQueensDFS(t + 1, n, pos, result);
            }
        }
    }
};

var isPlace = function (t, pos) {
    for (let j = 0; j < t; j++) {
        if ((Math.abs(t - j)) === Math.abs(pos[t] - pos[j]) || (pos[j] === pos[t])) {
            return false;
        }
    }
    return true;
}