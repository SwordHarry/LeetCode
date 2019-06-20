#include <vector>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        int len = nums.size();
        
        if(len == 1) {
            return nums[0];
        }
        
        
        int low = 0;
        int high = len - 1;
        if(nums[low] < nums[high]) {
            return nums[low];
        }
        // 可能存在 nums[low] == nums[high]; 的情况 [ 2 2 2 2 0 1 2 ]
        
        
        
        while(low < high) {
            
            int mid = low + ((high - low) >> 1);
            
            if(nums[mid] > nums[high]) {
                low = mid + 1;
            } else if(nums[mid] < nums[high]) {
                high = mid;
            } else {
                high--;
            }
        }
        
        return nums[low];
    }
};