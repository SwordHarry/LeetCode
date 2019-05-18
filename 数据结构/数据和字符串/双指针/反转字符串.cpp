#include <vector>
using namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        int len = s.size();
        
        for(int i = 0;i < len/2;i++) {
            int endIndex = len - 1 - i;
            char c = s[i];
            s[i] = s[endIndex];
            s[endIndex] = c;
        }
        
        
    }
};