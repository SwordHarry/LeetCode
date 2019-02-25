/**
 * 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

说明:
不允许旋转信封。

示例:

输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出: 3 
解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
 * 
 */
/**
 * 思路：
 *      动态规划：
 *      是二维版的最长上升子序列，同样需要一个备忘录 dp，
 *      可是与最长上升子序列不同的是，这里的子序列与原序列无关，即是与元素在原序列中的顺序无关
 *      所以一开始需要对原数组进行 sort 排序
 * 
 */
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    const len = envelopes.length;
    if (!len) {
        return 0;
    }
    envelopes.sort((a, b) => {
        return a[0] - b[0];
    });

    const dp = Array(len).fill(1);
    let result = dp[0];
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if ((envelopes[j][0] < envelopes[i][0]) && (envelopes[j][1] < envelopes[i][1])) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};

// O(nlogn)  answer algorithm
