/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 */
/**
 * 思路：
 *      一开始想的太简单，并不是正则表达式，而是 动态规划 问题
 *      如果用正则表达式
 *      若遇到 'ccaccc' ['cc','ac'] 则不能通过
 * 
 *      此题为 动态规划 问题
 *      dp[i] 表示 字符串 s 中以 第 i - 1 个 结尾的子串  i = 1 => s.length
 *      dp[j] 表示 为以第 j 个开始 j = i-1 => 0
 * 
 *      j 到 i-1 是否 出现在 字典里，若出现了 则 置 dp[i] 为 true
 *      并且不再循环 j ，让 i++ 开始再次循环 i
 *      
 *      显然，边界条件 dp[0] = true
 *      因为 空字符串 匹配
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const wordLen = wordDict.length;
    const strLen = s.length;

    if (!wordLen) {
        return false;
    }

    const dp = [];
    dp[0] = true;
    for (let i = 1; i <= strLen; i++) {
        for (let j = i - 1; j >= 0; j--) {
            // 若 dp[i] 为 true 了则可以开始一次新循环
            if (dp[i]) {
                break;
            }
            const subStr = s.substring(j, i);
            dp[i] = dp[j] && wordDict.includes(subStr);
        }
    }

    console.log(dp)

    return dp[dp.length - 1];
};