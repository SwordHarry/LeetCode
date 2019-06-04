#include <vector>
using namespace std;

/**
 * 
 * 二分查找一般由三个主要部分组成：

    预处理 —— 如果集合未排序，则进行排序。

    二分查找 —— 使用循环或递归在每次比较后将查找空间划分为两半。

    后处理 —— 在剩余空间中确定可行的候选者。
 * 
*/

/**
 * 二分查找 分类：
 * 
 *  1. 标准二分查找
 *  2. 查找 左边界
 *  3. 查找 右边界
 * 
*/

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int len = nums.size();
        int low = 0;
        int high = len - 1;
        
        while(low <= high) {
            int mid = (low + high) / 2;
            if(nums[mid] == target) {
                return mid;
            } else if(nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        
        return -1;
    }
};