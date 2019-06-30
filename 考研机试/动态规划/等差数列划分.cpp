#include <vector>
#include <cstring>
using namespace std;

class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& A) {
        int len = A.size();
        if(len < 3) {
            return 0;
        }
        
        int dp[len];
        memset(dp,0,sizeof(dp));
        int result = 0;
        
        for(int i = 2;i < len;i++) {
            if(A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
                dp[i] = dp[i - 1] + 1;
                result += dp[i];
            }
        }
        
        return result;
    }
};