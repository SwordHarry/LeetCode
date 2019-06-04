// Forward declaration of isBadVersion API.
bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int low = 0;
        int high = n;
        
        while(low < high) {
            int mid = low + ((high - low) >> 1);
            bool flag = isBadVersion(mid + 1);
            if(flag) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        
        return isBadVersion(low + 1)?(low + 1):-1;
    }
};