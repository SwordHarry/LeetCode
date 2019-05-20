#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        int len = s.length();
        
        int i = 0;
        int j = 0;
        for(;i < len;i++) {
            if(s[i] == ' ') {
                reverse(s.begin() + j,s.begin() + i);
                j = i + 1;
            }
        }
        
        reverse(s.begin() + j,s.end());
        return s;
    }
};