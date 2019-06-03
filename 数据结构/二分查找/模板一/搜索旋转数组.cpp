#include <vector>
using namespace std;

/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 * 
*/

/**
 * 思路一：
 *      mid = (low + high) / 2;
 *      根据 mid 判断 左边有序还是右边有序
 *      左边有序则对左边进行 二分查找，找不到则 对右边递归
 *      反之亦然
 * 
*/

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int len = nums.size();
        if(len == 0) {
            return -1;
        }
        int low = 0;
        int high = len - 1;
        int mid = (low + high) / 2;
        
        
        if(nums[mid] == target) {
            return mid;
        }
        if(nums[low] < nums[high]) {
            return binarySearch(nums,low,high,target);
        }
        
        int result = -1;
        if(nums[mid] < nums[high]) {
            result = binarySearch(nums,mid,high,target);
            // low -> mid - 1
            if(result == -1) {
                vector<int> temp(nums.begin() + low, nums.begin() + mid);
                result = search(temp,target);
                if(result != -1) {
                    result += low;
                }
            }
            
        } else if(nums[mid] > nums[high]) {
            result = binarySearch(nums,low,mid,target);
            // mid + 1 -> high
            if(result == -1) {
                vector<int> temp(nums.begin() + mid + 1, nums.begin() + high + 1);
                result = search(temp,target);
                if(result != -1) {
                    result += mid + 1;
                }
            }
        }
        
        
        return result;
    }
    
    int binarySearch(vector<int>& nums, int low, int high, int target) {
        int mid;
        while(low <= high) {
            mid = (low + high) / 2;
            if(nums[mid] > target) {
                high = mid - 1;
            } else if(nums[mid] < target) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
        
        return -1;
    }



    int search_answer(vector<int>& nums, int target) {
        int len = nums.size();
        if(len == 0) {
            return -1;
        }
        int low = 0;
        int high = len - 1;
        int mid;
        
        while(low <= high) {
            mid = (low + high) / 2;
            
            if(nums[mid] == target) {
                return mid;
            } 
            if(nums[mid] < nums[high]) {
                // 右边有序
                if(nums[mid] < target && nums[high] >= target) {
                    // target 在右边
                    low = mid + 1;
                } else {
                    // target 不在右边
                    high = mid - 1;
                }
            } else {
                // 左边有序
                if(nums[mid] > target && nums[low] <= target) {
                    // target 在左边
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
                
            }
        }
        
        
        return -1;
    }
};