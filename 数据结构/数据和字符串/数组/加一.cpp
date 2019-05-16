#include <vector>
using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int carry = 1;
        int len = digits.size();
        int index = len - 1;
        while(carry == 1) {

            if(digits[index] == 9) {
                digits[index] = 0;
                carry = 1;
            } else {
                digits[index]++;
                carry = 0;
            }
            
            if(index == 0 && carry == 1) {
                digits.insert(digits.begin(),carry);
                carry = 0;
            }
            index--;
        }
        
        return digits;
    }
};