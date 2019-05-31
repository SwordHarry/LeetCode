#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> m;
        
        int len = nums.size();
        vector<int> result;
        
        if(len == 0) {
            return result;
        }
        
        m.insert(make_pair(nums[0],0));
        
        for(int i = 1;i < len;i++) {
            if(m.count(target - nums[i])) {
                
                result.push_back(m[target-nums[i]]);
                result.push_back(i);
                break;
            }
            
            m.insert(make_pair(nums[i],i));
        }
        
        return result;
    }
};