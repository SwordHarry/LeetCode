#include <vector>

using namespace std;

class Solution {
    public:
        int findMaxConsecutiveOnes(vector < int > & nums) {
            int len = nums.size();
            int index = 0;
            int result = 0;
            int i = 1;
            for (; i < len; i++) {
                if (nums[i] == 1) {
                    if (nums[index] == 0) {
                        index = i;
                    } else {
                        int temp = i - index + 1;
                        result = (result > temp) ? result : temp;
                    }

                } else if (nums[i] == 0) {
                    if (nums[index] == 1) {
                        int temp = i - index;
                        index = i;
                        result = (result > temp) ? result : temp;
                    }
                }
            }

            // 特殊情况判断
            if (len == 1) {
                return (nums[0] == 1) ? 1 : 0;
            }
            // 最后一个 是 1，前面都是0
            if (result == 0 && index != 0) {
                return 1;
            }

            return result;
        }

    // answer algorithm
    int findMaxConsecutiveOnes_answer(vector < int > & nums) {
        int max = 0, m = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i]) {
                m++;
                if (i == nums.size() - 1 && m > max) max = m;
            } else {
                if (m > max) max = m;
                m = 0;
            }
        }
        return max;
    }
};