#include <string>
using namespace std;


class Solution {
public:
    int strStr(string haystack, string needle) {
        int lenOfNeedle = needle.length();
        if(lenOfNeedle == 0) {
            return 0;
        }
        
        int result = -1;
        int lenOfHaystack = haystack.length();
        
        for(int i = 0;i < lenOfHaystack;i++) {
            // 加此判断 则不会超时，判断 子串长度此时比 余下串长度长，无需继续检索了
            if(i + lenOfNeedle > lenOfHaystack) {
                return -1;
            }
            
            if(haystack[i] == needle[0]) {
                result = i;
                for(int j = 1;j < lenOfNeedle;j++) {
                    if(haystack[i + j] != needle[j]) {
                        result = -1;
                        break;
                    }
                }
            }
            
            if(result != -1) {
                return result;
            }
        }
        
        return result;
        
    }
};