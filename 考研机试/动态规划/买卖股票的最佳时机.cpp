#include <vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int len = prices.size();
        if(len <= 1) {
            return 0;
        }
        int temp = prices[1] - prices[0];
        int minPrice = prices[0];
        if(temp < 0) {
            minPrice = prices[1];
            temp = 0;
        }
        if(len == 2) {
            return temp;
        }
        
        // dp[i] 截止到 第 i 天所能获得的最大利润
        int dp[len];
        // 边界条件：若只有两天
        dp[0] = 0;
        dp[1] = temp;
        
        // 递推式
        // dp[i] = max(dp[i - 1], prices[i] - min);
        // 第 i 天的最大利润为 第 (i - 1) 天的最大利润 或者 (第 i 天的股票价格 - 前i 天的最小价格)
        for(int i = 2;i < len;i++) {
            dp[i] = max(dp[i - 1],prices[i] - minPrice);
            minPrice = min(prices[i],minPrice);
        }
        
        return dp[len - 1];
    }
};