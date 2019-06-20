class Solution {
public:
    int numTrees(int n) {
        
        
        int result[n + 1];
        result[0] = 1;
        result[1] = 1;
        
        
        for(int i = 2;i <= n;i++) {
            result[i] = result[i - 1];
            for(int j = 1;j < i;j++) {
                result[i] += result[j - 1] * result[i - j];
            }
            
        }
        
        return result[n];
    }
};