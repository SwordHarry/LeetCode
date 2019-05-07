#include <vector>
#include <map>
using namespace std;

class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        map<int,int> m;
        vector<int> result;
        
        int len1 = nums1.size();
        for(int i = 0;i < len1;i++) {
            int num = nums1[i];
            if(m.find(num) != m.end()) {
                m[num] = m[num] + 1;
            } else {
                m[num] = 1;
            }
            
        }
        
        int len2 = nums2.size();
        for(int i = 0;i < len2;i++) {
            int num = nums2[i];
            if(m.find(num) != m.end() && m[num] != 0) {
                m[num]--;
                result.push_back(num);
            }
        }
        
        return result;
    }
};