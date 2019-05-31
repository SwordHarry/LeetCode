#include <set>
#include <string>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        set<char> cSet;
        int result = 0;
        int index = 0;
        
        int len = s.length();
        int curLen = 0;
        for(int i = 0;i < len;i++) {
            if(cSet.count(s[i])) {
                while(s[index] != s[i]) {
                    cSet.erase(s[index]);
                    index++;
                }
                curLen = i - index;
                // 指针不指向重复字符
                index++;
            } else {
                cSet.insert(s[i]);
                curLen++;
            }
            
            result = (result < curLen)?curLen:result;
        }
        
        
        return result;
    }
};