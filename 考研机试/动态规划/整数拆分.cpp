#include <cstring>
#include <algorithm>
using namespace std;

class Solution {
public:
    int integerBreak(int n) {
        
        if(n == 2) {
            return 1;
        }
        if(n == 3) {
            return 2;
        }
        if(n == 4) {
            return 4;
        }
        
        // 表示 dp[i] 的最大乘积
        int dp[n + 1];
        memset(dp,0,sizeof(dp));
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;
        dp[4] = 4;
        
        for(int i = 5;i <= n;i++) {
            for(int j = i/2;j >= 1;j--) {
                dp[i] = max(dp[i],dp[j]*dp[i - j]);
            }
        }
        
        return dp[n];
    }
};