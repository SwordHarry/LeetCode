#include <string>
#include <cstring>
using namespace std;


/**
 * 
 * dp[i][j] 表示 从 i 到 j 的子串 是否是 回文
 * 边界条件：dp[i][i] = 1; dp[i][i + 1] = (s[i] == s[i + 1])?1:0;
 * 递推式：j - i > 2：dp[i][j] = (s[i] == s[j] && dp[i + 1][j - 1])?1:0
*/

class Solution {
public:
    int countSubstrings(string s) {
        int len = s.length();
        int result = 0;
        
        int dp[len][len];
        
        memset(dp,0,sizeof(dp));
        
        // 单个字符是回文，两个相邻且相等是回文
        for(int i = 0;i < len - 1;i++) {
            dp[i][i] = 1;
            result++;
            if(s[i] == s[i + 1]) {
                dp[i][i + 1] = 1;
                result++;
            }
        }
        
        dp[len - 1][len - 1] = 1;
        result++;
        
        // i 和 j 之间超过2个
        for(int i = len - 3;i >= 0;i--) {
            for(int j = i + 2;j < len;j++) {
                if(s[i] == s[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = 1;
                    result++;
                }
            }
        }
        
        
        return result;
    }
};