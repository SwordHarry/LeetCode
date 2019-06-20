class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        
        // 二分查找 找左边界
        
        int len = letters.size();
        
        
        int low = 0;
        int high = len - 1;
        
        
        while(low < high) {
            int mid = low + ((high - low) >> 1);
            
            if(letters[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        if(letters[low] <= target) {
            return letters[0];
        }
        return letters[low];
    }
};