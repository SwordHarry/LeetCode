#include <vector>
using namespace std;


// 思路：
// 维护一个滑动窗口 i 和 j
class Solution {
    public:
        int minSubArrayLen(int s, vector < int > & nums) {
            int len = nums.size();
            if (len == 0) {
                return 0;
            }
            int i = 0, j = 0;
            int result = len + 1;
            int temp = nums[i];
            while (j < len) {
                if (temp < s) {
                    j++;
                    if (j < len)
                        temp += nums[j];
                } else {
                    int index = j - i + 1;
                    result = (result < index) ? result : index;
                    temp -= nums[i];
                    i++;
                }
            }

            return (result == len + 1) ? 0 : result;
        }
};