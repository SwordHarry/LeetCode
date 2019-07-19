#include <vector>
using namespace std;

class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        int row = matrix.size();
        if(row == 0) {
            return 0;
        }
        int column = matrix[0].size();
        vector<vector<int>> vec(row,vector<int>(column,0));
        int result = 0;
        
        for(int i = 0;i < row;i++) {
            if(matrix[i][0] == '1') {
                vec[i][0] = 1;
                result = 1;
            }
        }
        
        for(int i = 0;i < column;i++) {
            if(matrix[0][i] == '1') {
                vec[0][i] = 1;
                result = 1;
            }
        }
        
        for(int i = 1;i < row;i++) {
            for(int j = 1;j < column;j++) {
                if(matrix[i][j] == '1') {
                    // 此处要和 左上，左，上 三个元素比较
                    int temp = min(vec[i - 1][j - 1],vec[i - 1][j]);
                    vec[i][j] = min(temp,vec[i][j - 1]) + 1;
                    result = max(result,vec[i][j]);
                }
            }
        }
        return result * result;
    }
};