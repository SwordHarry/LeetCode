#include <vector>
using namespace std;

class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int len = nums.size();
        int max = nums[0];
        int index = 0;
        for(int i = 1;i < len;i++) {
            if(max < nums[i]) {
                max = nums[i];
                index = i;
            }
        }
        
        for(int i = 0;i < len;i++) {
            if(index != i) {
                if(nums[i] * 2 > max) {
                    return -1;
                }
            }
        }
        return index;
    }
};