/**
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
 */
/**
 * 思路：
 *      找出所有可能情况的 算法题 一般可以联想到 递归
 *      先判断 aab 是不是回文串,
 *      然后把 a 割了， ab 做递归
 *      递归到字符串 尾部了，
 *      把 aa 割了， b 做递归
 *      
 * 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];
    const arr = [];
    const _helper = function (s, arr, result) {
        if (isPalindrome(s)) {
            arr.push(s);
            result.push(arr.slice());
            arr.pop();
        }

        const len = s.length;
        for (let i = 1; i < len; i++) {
            let s1 = s.substr(0, i);
            let s2 = s.substr(i, len);

            if (isPalindrome(s1)) {
                arr.push(s1);
                _helper(s2, arr, result);
                arr.pop();
            }

        }
    };

    _helper(s, arr, result);

    return result;
};

// 将上一题的 验证回文串 的验证函数 搬过来
var isPalindrome = function (s) {

    const len = s.length;
    for (let i = 0; i < ~~(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }

    return true;
};