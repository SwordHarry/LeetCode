#include <string>
using namespace std;

/**
 * 思路：
 *      动态规划
 *      dp[i][j]表示 s1 前i个字符和 s2 前j个字符的最小ASCII码删除和
 *      则可推断出边界条件：
 *      dp[i][0] = dp[i - 1][0] + s[i - 1];
 *      dp[0][j] = dp[0][j - 1] + s[j - 1];
 *      
 *      递推式较难想到：
 *      if(s[i - 1] == s[j - 1]) s[i - 1] 和 s[j - 1] 都不需要删去
 *          dp[i][j] = dp[i - 1][j - 1];
 *      else 删去 s[i - 1] 或者 删去 s[j - 1]
 *          dp[i][j] = min(dp[i - 1][j] + s[i - 1],dp[i][j - 1] + s[j - 1]);
 *      
*/


class Solution {
public:
    int minimumDeleteSum(string s1, string s2) {
        int len1 = s1.length();
        int len2 = s2.length();
        
        int dp[len1 + 1][len2 + 1];
        dp[0][0] = 0;
        
        // 边界条件
        for(int i = 1;i <= len1;i++) {
            dp[i][0] = dp[i - 1][0] + s1[i - 1];
        }
        
        for(int i = 1;i <= len2;i++) {
            dp[0][i] = dp[0][i - 1] + s2[i - 1];
        }
        
        for(int i = 1;i <= len1;i++) {
            for(int j = 1;j <= len2;j++) {
                if(s1[i - 1] == s2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    int temp1 = dp[i - 1][j] + s1[i - 1];
                    int temp2 = dp[i][j - 1] + s2[j - 1];
                    dp[i][j] = temp1 > temp2?temp2:temp1;
                }
            }
        }

        return dp[len1][len2];
    }
};