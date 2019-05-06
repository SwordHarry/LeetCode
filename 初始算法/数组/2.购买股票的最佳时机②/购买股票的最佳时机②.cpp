#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int len = prices.size();
        int result = 0;
        for(int i = 0;i < len - 1;i++) {
            int profit = prices[i + 1] - prices[i];
            if(profit > 0) {
                result += profit;
            }
        }
        
        
        return result;
    }
};

int main(void) {

    Solution s;
    vector<int> vec = {1,2,3,4,3,5,6};
    cout << s.maxProfit(vec) << endl;
    return 0;
}