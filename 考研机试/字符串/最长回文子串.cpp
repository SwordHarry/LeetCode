#include <string>
#include <cstring>
using namespace std;

class Solution {
public:
    int start = 0;
    int end = 0;
    
    string longestPalindrome(string s) {
        int len = s.length();
        if(len == 0) {
            
            return "";
        }
        // 从 i 开始的 j 位为回文串
        int dp[len][len];
        memset(dp,0,sizeof(dp));
        
        for(int i = 0;i < len - 1;i++) {
            dp[i][i] = 1;
            update(i,i + 1);
            if(s[i] == s[i + 1]) {
                dp[i][i+1] = 1;
                update(i,i + 2);
            }
        }
        
        dp[len - 1][len - 1] = 1;
        update(len-1,len);
        
        for(int i = len - 3;i >= 0;i--) {
            for(int j = i + 2;j < len;j++) {
                if(s[j] == s[i] && dp[i + 1][j - 1] == 1) {
                    dp[i][j] = 1;
                    update(i,j + 1);
                }
            }
        }
        
        return s.substr(start,end - start);
    }
    
    void update(int _start,int _end) {
        if(end - start < _end - _start) {
            start = _start,
            end = _end;
        }
    }
};