#include <vector>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int len = nums.size();
        
        int sum = 0;
        int result = nums[0];
        for(int i = 0;i < len;i++) {
            sum += nums[i];
            if(sum > result) {
                result = sum;
            } 
            if(sum < 0) {
                sum = 0;
            }
        }
        
        return result;
    }
};