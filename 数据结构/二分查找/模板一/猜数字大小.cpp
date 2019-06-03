// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        if(n == 1) {
            return 1;
        }
        
        int low = 1;
        int high = n;
        // 此处如果是 (low + high) / 2 将会溢出
        int answer = low + (high - low) / 2;
        int result = guess(answer);
        
        while(result != 0) {
            if(result == 1) {
                low = answer + 1;
                answer = low + (high - low) / 2;
            } else if(result == -1) {
                high = answer - 1;
                answer = low + (high - low) / 2;
            }
            
            result = guess(answer);
        }
        
        return answer;
    }
};