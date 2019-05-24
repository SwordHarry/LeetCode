#include <vector>
#include <stack>
using namespace std;

// 思路：递减栈，栈中存数组下标，下标差值为 温度上升所需天数
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        
        int len = T.size();
        
        vector<int> result(len,0);
        
        stack<int> s;
        s.push(0);
        
        for(int i = 1;i < len;i++) {
            
            while(!s.empty() && T[s.top()] < T[i]) {
                int j = s.top();
                s.pop();
                result[j] = i - j;
                
            }
            
            s.push(i);
        }

        while(!s.empty()) {
            result[s.top()] = 0;
            s.pop();
        }
        
        return result;
    }
};