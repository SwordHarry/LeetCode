/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 */
/**
 * 思路：使用数组来存储各数字，并且用数组下标表示 个位 十位 百位等，
 *      注意进位 和 数组下标越界undefined ，以及 '0000' 的情况
 *  
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    let sum = [];
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (sum[i + j] === undefined) {
                sum[i + j] = Number(num1[i]) * Number(num2[j]);
            } else {
                sum[i + j] += Number(num1[i]) * Number(num2[j]);
            }

            if (sum[i + j] > 9) {
                if (sum[i + j + 1] === undefined) {
                    sum[i + j + 1] = ~~(sum[i + j] / 10);
                } else {
                    sum[i + j + 1] += ~~(sum[i + j] / 10);
                }
            }
            sum[i + j] = sum[i + j] % 10;
        }
    }

    if (sum.every((val) => {
            return val === 0;
        })) {
        return '0';
    }

    return sum.reverse().join('');
};