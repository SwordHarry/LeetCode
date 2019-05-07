#include <vector>
using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int len = nums.size();
        for(int i = 1;i < len;i++) {
            nums[0] = nums[0] ^ nums[i];
        }
        
        return nums[0];
    }
};