/**
 * Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 
 * 
*/
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {
        int len = A.size();
        
        unordered_map<int,int> m;
        
        for(int i = 0;i < len;i++) {
            for(int j = 0;j < len;j++) {
                m[A[i] + B[j]]++;
            }
        }
        
        int result = 0;
        
        for(int i = 0;i < len;i++) {
            for(int j = 0;j < len;j++) {
                if(m.count(-(C[i] + D[j]))) {
                    result += m[-(C[i] + D[j])];
                }
            }
        }
        
        return result;
    }

    // 将 map 转回 vector, 使其获得有序性
    vector<int> topKFrequent_answer(vector<int>& nums, int k) {
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