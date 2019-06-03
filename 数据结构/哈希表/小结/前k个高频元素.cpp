/**
 * Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 * 
*/
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> m;
        int len = nums.size();
        
        
        for(int i = 0;i < len;i++) {
            m[nums[i]]++;
        }
        
        
        vector<pair<int,int>> temp(m.begin(),m.end());
        sort(temp.begin(),temp.end(),compare);
        
        vector<int> result;
        for(int i = 0;i < k;i++) {
            result.push_back(temp[i].first);
        }
        
        
        return result;
    }
    
    static bool compare(const pair<int,int> &x,const pair<int,int> &y) {
        return x.second > y.second;
    }
};