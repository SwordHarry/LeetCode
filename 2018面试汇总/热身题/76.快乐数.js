/**
 * 编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

输入: 19
输出: true
解释: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
 * 
 */
/**
 * 思路：这题没有难度，直接按照题意来解
 *      用map 保存求解过的值，注意 js的指数运算符是 **
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1) {
        return true;
    }

    const map = {};

    while (true) {
        if (n === 1) {
            return true;
        }
        let sum = 0;
        while (n) {
            sum += (n % 10) ** 2;
            n = ~~(n / 10);
        }

        if (map[sum]) {
            return false;
        } else {
            map[sum] = true;
        }
        n = sum;
    }
};