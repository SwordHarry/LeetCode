#include <vector>
using namespace std;

/**
 * 
 * 
*/
int binarySearch(vector<int> &nums,int target) {

    int len = nums.size();
    
    int low = 0;
    int high = len - 1;

    while(low < high) {
        int mid = low + ((high - low) >> 1);

        if(nums[mid] >= target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return (nums[low] == target)?low:-1;
}