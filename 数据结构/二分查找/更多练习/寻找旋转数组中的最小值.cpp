#include <vector>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        
        // 二分查找找左边界，旋转点
        int len = nums.size();
        if(len == 1) {
            return nums[0];
        }
        int low = 0;
        int high = len - 1;
        
        if(nums[low] < nums[high]) {
            // 没有旋转
            return nums[low];
        }
        
        while(low < high) {
            int mid = low + ((high - low) >> 1);
            if(nums[low] < nums[high]) {
                break;
            }
            
            if(nums[mid] > nums[low]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        
        return nums[low];
    }

    // 双指针夹逼
    int findMin_answer(vector<int>& nums) {
        int end = nums.size()-1;
        int start = 0;
        int middl;
        
        if (nums[0] < nums[end]) return nums[0];
            
        while( start < end)
        {
            if(end - start == 1)
                break;
            middl = (start+end)/2;
            
            if( nums[start] < nums[middl])
                start = middl;
            if( nums[middl] < nums[end])
                end = middl;
        }
        return nums[end];
    }
};