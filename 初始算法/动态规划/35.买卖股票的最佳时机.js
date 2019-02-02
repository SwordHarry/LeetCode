/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */
// 时间复杂度： O(n*n) 并没有运用到 动态规划 的思想
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let result = 0;
    const len = prices.length;
    let profit;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            profit = prices[j] - prices[i];
            if (profit > result) {
                result = profit;
            }
        }
    }
    return result;
};

// answer algorithm
/**
 * 动态规划：
 *          利润 profit(m3 - m1) = profit(m3 - m2) + profit(m2 - m1)
 *          设 ai 为 profit(m(i+1) - mi) 
 */
var maxProfit_answer = function (prices) {

    if (prices == null || prices.length === 0) {
        return 0;
    }

    let len = prices.length;
    const profitArr = [];
    for (let i = 0; i < len - 1; i++) {
        profitArr.push(prices[i + 1] - prices[i]);
    }

    len = profitArr.length;
    let maxProfit = 0,
        profit = 0;
    for (let i = 0; i < len; i++) {
        if (profit + profitArr[i] > 0) {
            profit = profit + profitArr[i];
        } else {
            profit = 0;
        }

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};