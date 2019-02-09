/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

/**
 * 思路：
 *     1.初始化一个最大长度和当前长度都为1；
 *     2.对于一个字符串需要定义两个指针ab，ab之间的子串范围视为窗口，窗口是[a,b)；
 *     3.a初始化为第一个字符，b为第二个字符，让b向右滑动；
 *     4.如果与ab窗口内的所有字符都不同，长度+1；
 *     5.如果相同，a向左滑动到窗口内的相同的字符之后，b不滑动；
 *     6.最后获取 最大长度 和 当前长度 的最大值
 *     7.重复 4 到 6，直到b滑动完整个字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) {
        return 0;
    }
    let num = 1;
    let result = 1;
    let index = 0;
    const len = s.length;
    for (let i = 1; i < len; i++) {
        num = 1;
        for (let j = index; j < i; j++) {
            if (s[j] !== s[i]) {
                num++;
            } else {
                index = j + 1;
                i--;
                break;
            }
        }
        result = Math.max(result, num);
    }
    return result;
};