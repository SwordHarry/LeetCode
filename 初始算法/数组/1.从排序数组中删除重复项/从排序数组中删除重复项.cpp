#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        int removeDuplicates(vector<int> & nums) {

            // 数组长度
            const int len = nums.size();
            if (len == 0) {
                return 0;
            }
            int j = 0;
            for (int i = 1; i < len; i++) {
                if (nums[i] != nums[j]) {
                    j++;
                    nums[j] = nums[i];
                }
            }

            return j + 1;
        }
};

int main(void) {

	Solution s;

	vector<int> nums = {1, 1, 2, 3, 4, 4};
	cout << s.removeDuplicates(nums) << endl;
}