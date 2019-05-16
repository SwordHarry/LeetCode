#include <vector>
using namespace std;

class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int len = nums.size();
        if(len == 0) {
            return -1;
        }
        int left[len];
        left[0] = nums[0];
        for(int i = 1;i < len;i++) {
            left[i] = left[i - 1] + nums[i];
        }
        
        int right[len];
        right[len - 1] = nums[len - 1];
        for(int i = len - 2;i >= 0;i--) {
            right[i] = right[i + 1] + nums[i];
        }
        
        for(int i = 0;i < len;i++) {
            if(left[i] == right[i]) {
                return i;
            }
        }
        
        return -1;
    }
};