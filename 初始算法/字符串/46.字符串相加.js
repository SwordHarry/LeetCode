/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。 
 */

/**
 * 思路：与字符串相乘的思路类似，注意两个数组的长度不一样长而且注意前导0 
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const sum = [];
    const len = num1.length > num2.length ? num1.length : num2.length;
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    for (let i = 0; i < len; i++) {
        let number1 = num1[i] ? Number(num1[i]) : 0;
        let number2 = num2[i] ? Number(num2[i]) : 0;
        if (sum[i] === undefined) {
            sum[i] = number1 + number2;
        } else {
            sum[i] += number1 + number2;
        }

        if (sum[i] > 9) {
            if (sum[i + 1] === undefined) {
                sum[i + 1] = ~~(sum[i] / 10);
            } else {
                sum[i + 1] += ~~(sum[i] / 10);
            }
        }
        sum[i] = sum[i] % 10;
    }

    return sum.reverse().join('');

};