/**
 * Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104
UPDATE (2017/9/19):
The arr parameter had been changed to an array of integers (instead of a list of integers). Please reload the code definition to get the latest changes.
 * 
*/

#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        int len = arr.size();
        
        if(len <= k) {
            return arr;
        }
        
        int low = 0;
        int high = len - 1;
        
        int mid;
        while(low + 1 < high) {
            mid = low + ((high - low) >> 1);
            if(arr[mid] > x) {
                high = mid;
            } else {
                low = mid;
            }
        }
        
        vector<int> result(k,0);
        
        
        for(int i = 0;i < k;i++) {
            
            
            if(low >= 0 && high < len) {
                int lowSubVal = abs(arr[low] - x);
                int highSubVal = abs(arr[high] - x);
                
                if(lowSubVal <= highSubVal) {
                    result[i] = arr[low];
                    low--;
                } else {
                    result[i] = arr[high];
                    high++;
                }
            } else if(low < 0) {
                result[i] = arr[high];
                high++;
            } else {
                result[i] = arr[low];
                low--;
            }
        }

        sort(result.begin(),result.end());
        return result;
    }
};