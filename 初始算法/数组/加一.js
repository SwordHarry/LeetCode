/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    var len = digits.length;
    digits[len - 1]++;

    for (var i = len - 1; i > 0; i--) {

        digits[i - 1] += parseInt(digits[i] / 10);
        digits[i] = parseInt(digits[i] % 10);

    }


    // [9,9,9]
    if (digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits
};



/**
 * 
 * 合理使用标志位 减少循环次数，提高效率
 */
var plusOne_answer = function (digits) {
    let addFlag = true;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (addFlag) {
            digits[i]++;
            if (digits[i] === 10) {
                digits[i] = 0;
                addFlag = true;
            } else {
                addFlag = false;
            }
        }
    }

    if (addFlag) {
        digits.unshift(1);
    }

    return digits;
};