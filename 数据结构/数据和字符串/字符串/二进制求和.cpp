#include <string>
using namespace std;

class Solution {
public:
    string addBinary(string a, string b) {
        int bLen = b.length();
        int aLen = a.length();
        
        int aIndex = aLen - 1;
        int bIndex = bLen - 1;
        int carry = 0;
        
        string result = "";
        
        while(aIndex >= 0 || bIndex >= 0) {
            
            int aNum = (aIndex >= 0)?(a[aIndex] - '0'):0;
            int bNum = (bIndex >= 0)?(b[bIndex] - '0'):0;
            int temp = aNum + bNum + carry;
            if(temp > 1) {
                carry = 1;
                temp = temp - 2;
            } else {
                carry = 0;
            }
            
            result = to_string(temp) + result;
            aIndex--;
            bIndex--;
        }
        
        if(carry == 1) {
            result = to_string(carry) + result;
        }

        return result;
    }
    
};