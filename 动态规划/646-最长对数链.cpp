/**
 * 
 * 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

给定一个对数集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

示例 :

输入: [[1,2], [2,3], [3,4]]
输出: 2
解释: 最长的数对链是 [1,2] -> [3,4]
注意：

给出数对的个数在 [1, 1000] 范围内。

 * 
*/

#include <vector>
#include <algorithm>
using namespace std;

bool compare(vector<int>& a,vector<int>& b) {
    if(a[0] == b[0]) {
        return a[1] < b[1];
    } else {
        return a[0] < b[0];
    }
}

class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        int len = pairs.size();
        
        // 自定义排序，从小到大
        sort(pairs.begin(),pairs.end(),compare);
        
        int dp[len];
        for(int i = 0;i < len;i++) {
             dp[i] = 1;
        }
        
        for(int i = 1;i < len;i++) {
            for(int j = 0;j < i;j++) {
                if(pairs[i][0] > pairs[j][1]) {
                    dp[i] = max(dp[i],dp[j] + 1);
                }
            }
        }
        
        
        return dp[len - 1];
    }
};