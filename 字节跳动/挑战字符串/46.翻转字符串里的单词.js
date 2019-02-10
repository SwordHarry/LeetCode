/**
 * 给定一个字符串，逐个翻转字符串中的每个单词。

示例:  

输入: "the sky is blue",
输出: "blue is sky the".
说明:

无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
进阶: 请选用C语言的用户尝试使用 O(1) 空间复杂度的原地解法。
 */

// 熟悉字符串的API和正则表达式
// my algorithm
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {

    return str.trim().split(/\s+/).reverse().join(' ');
};

// answer algorithm： 完全按照进阶的要求去做的，只用到了 substring 一个API
/**
 * @param {string} str
 * @returns {string}
 */
// s 用于保存最终结果，c用于保存单词
var reverseWords_answer = function (str) {

    let s = '';
    let c = '';

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ' && c !== '') {
            s += ' ' + c;
            c = '';
        }
        if (str[i] !== ' ') {
            c = str[i] + c;
        }
    }

    if (c !== '') {
        s += ' ' + c;
    }

    return s.length ? s.substring(1) : '';
};