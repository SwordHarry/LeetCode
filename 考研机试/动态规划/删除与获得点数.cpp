/**
 * 给定一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

示例 1:

输入: nums = [3, 4, 2]
输出: 6
解释: 
删除 4 来获得 4 个点数，因此 3 也被删除。
之后，删除 2 来获得 2 个点数。总共获得 6 个点数。
示例 2:

输入: nums = [2, 2, 3, 3, 3, 4]
输出: 9
解释: 
删除 3 来获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。
注意:

nums的长度最大为20000。
每个整数nums[i]的大小都在[1, 10000]范围内。
 * 
 * 
*/

/**
 * 这题很像 打家劫舍 的思路，不过要先将 数字转化为 数组下标
 *      即 temp[nums[i]] += nums[i];
 *      然后不能 打劫相邻的家舍 即可
*/

#include <vector>
using namespace std;

class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        int len = nums.size();
        
        if(len == 0) {
            return 0;
        }
        if(len == 1) {
            return nums[0];
        }
        
        
        vector<int> temp(10001,0);
        for(int i = 0;i < len;i++) {
            temp[nums[i]] += nums[i];
        }
    
        vector<int> dp(10001,0);
        dp[1] = temp[1];
        dp[0] = 0;
        for(int i = 2;i < 10001;i++) {
            dp[i] = max(dp[i - 2] + temp[i],dp[i - 1]);
        }
        
        return dp[10000];
    }
};