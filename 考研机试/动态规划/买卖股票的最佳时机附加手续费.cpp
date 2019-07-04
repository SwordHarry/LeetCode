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