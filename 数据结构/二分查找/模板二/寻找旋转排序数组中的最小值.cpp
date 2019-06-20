#include <vector>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        int len = nums.size();
        int low = 0;
        int high = len - 1;
        
        // 没有旋转或者 长度为1
        if(len == 1 || nums[0] < nums[high]) {
            return nums[0];
        }
        
        while(low < high) {
            int mid = low + ((high - low) >> 1);
            if(nums[mid] < nums[high]) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        
        return nums[low];
    }
};