#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        int len = strs.size();
        if(len == 0) {
            return "";
        }
        string result = "";
        int index = 0;
        
        int minLen = strs[0].length();
        for(int i = 0;i < len;i++) {
            int temp = strs[i].length();
            if(temp < minLen) {
                minLen = strs[i].length();
            }
        }
        
        bool flag = true;
        while(index < minLen) {
            flag = true;
            for(int i = 1;i < len;i++) {
                if(strs[0][index] != strs[i][index]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                index++;    
            } else {
                break;
            }
            
        }
        
        result = strs[0].substr(0, index);
        return result;
    }
};