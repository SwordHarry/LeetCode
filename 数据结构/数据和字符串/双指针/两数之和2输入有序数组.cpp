#include <vector>
using namespace std;

// 思路：
// 首尾 双指针，两数之和 较大则 尾指针前移，较小 则 首指针后移
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        
        int len = numbers.size();
        
        vector<int> result;
        int smallIndex = 0;
        int bigIndex = len - 1;
        
        while(smallIndex != bigIndex) {
            if(numbers[smallIndex] + numbers[bigIndex] == target) {
                break;
            } else if(numbers[smallIndex] + numbers[bigIndex] >= target) {
                bigIndex--;
            } else {
                smallIndex++;
            }
        }
        
        result.push_back(smallIndex + 1);
        result.push_back(bigIndex + 1);
        
        return result;
    }
};