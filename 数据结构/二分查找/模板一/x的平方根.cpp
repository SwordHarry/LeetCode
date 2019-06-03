class Solution {
public:
    int mySqrt(int x) {
        if(x == 0 || x == 1) {
            return x;
        }
        
        int low = 0;
        int high = x;
        int oldTemp = 0;
        int temp = 0;
        while(low <= high) {
            int mid = (low + high) / 2;
            oldTemp = temp;
            // 防止出现 除数为 0 的 bug
            temp = x / mid;
            // 若 结果不变，则可退出循环，此时 low = high + 1
            if(oldTemp == temp) {
                break;
            }
            if(mid == temp) {
                return mid;
            } else if(mid > temp) {
                high = mid;
            } else {
                low = mid;
            }
        }
        
        // low = high + 1
        return low;
    }
};