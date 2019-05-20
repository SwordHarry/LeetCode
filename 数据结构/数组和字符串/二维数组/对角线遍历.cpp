#include <vector>
using namespace std;

class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        bool flag = true; // 是否向 右上 遍历
        int row = matrix.size();
        if(row == 0) {
            return result;
        }
        int column = matrix[0].size();
        int k = 0;
        while(k != row + column - 1) {
            if(flag) {
                
                for(int i = k;i >= 0;i--) {
                    int j = k - i;
                    if(i < row && j < column) {
                        result.push_back(matrix[i][j]);
                    }
                    
                }
                flag = false;
            } else {
                
                for(int i = 0;i <= k;i++) {
                    int j = k - i;
                    if(i < row && j < column) {
                        result.push_back(matrix[i][j]);
                    }
                    
                }
                flag = true;
            }
            
            k++;
        }
        
        return result;
    }

    // answer algorithm
    
};