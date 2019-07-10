/**
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

示例 1:

输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
输出: 8
解释: 能够达到的最大利润:  
在此处买入 prices[0] = 1
在此处卖出 prices[3] = 8
在此处买入 prices[4] = 4
在此处卖出 prices[5] = 9
总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
注意:

0 < prices.length <= 50000.
0 < prices[i] < 50000.
0 <= fee < 50000.
 * 
*/

#include <vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int len = prices.size();
        
        // 第 i 天不买股票最大利润
        int cash[len];
        cash[0] = 0;
        // 第 i 天持有股票的最大利润
        int hold[len];
        hold[0] = -prices[0];
        
        for(int i = 1;i < len;i++) {
            cash[i] = max(cash[i - 1],hold[i - 1] + prices[i] - fee);
            hold[i] = max(hold[i - 1],cash[i] - prices[i]);
        }

        return cash[len - 1];
    }
};