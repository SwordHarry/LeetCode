#include <iostream>
#include <stdlib.h>
#include <vector>
using namespace std;

/*
思路：
    [1 2 3 4 5 6 7]; k = 3
    相当于
    ① 反转左半部分：[4 3 2 1 5 6 7];
    ② 反转右半部分：[4 3 2 1 7 6 5];
    ③ 反转整个数组：[5 6 7 1 2 3 4];
*/

class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int len = nums.size();
        if(len < 2) {
            return;
        }
        int count = (k % len);
        int index = len - count;
        reverse(nums,0,index);
        reverse(nums,index,len);
        reverse(nums,0,len);
        
    }
    
    void reverse(vector<int> &nums,int start,int end) {
        int count = (end-start)/2;
        for(int i = 0;i < count;i++) {
            int startIndex = i + start;
            int endIndex = end - i - 1;
            int temp = nums[startIndex];
            nums[startIndex] = nums[endIndex];
            nums[endIndex] = temp;
        }
    }
};

int main(void) {
    Solution s;
    vector<int> nums = {1,2,3,4,5,6,7};
    s.rotate(nums,1);

    for(int i = 0;i < nums.size();i++) {
        cout << nums[i] << " ";
    }
    return 0;
}