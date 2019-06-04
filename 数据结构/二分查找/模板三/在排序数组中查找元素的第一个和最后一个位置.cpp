#include <vector>
using namespace std;

class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        
        int len = nums.size();
        vector<int> result;
        if(len == 0) {
            
            result.push_back(-1);
            result.push_back(-1);
            return result;
        }
        int low = 0;
        int high = len - 1;
        
        
        
        // 先找 左边界
        while(low < high) {
            int mid = low + ((high - low) >> 1);
            if(nums[mid] >= target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        
        if(nums[low] != target) {
            result.push_back(-1);
            result.push_back(-1);
            return result;
        }
        result.push_back(low);
        
        // 找 右边界
        if(low == len - 1 || nums[low + 1] != target) {
            result.push_back(low);
            return result;
        }
        high = len - 1;
        while(low < high) {
            int mid = low + ((high - low) >> 1) + 1;
            if(nums[mid] <= target) {
                low = mid;
            } else {
                
                high = mid - 1;
            }
        }
        
        result.push_back(low);
        
        return result;
        
    }
};