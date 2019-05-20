#include <vector>
using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        int row = matrix.size();
        if(row == 0) {
            return result;
        }
        int column = matrix[0].size();
        
        int i = 0,j = 0;
        int iMax = row - 1,jMax = column - 1;
        int iMin = 0,jMin = 0;
        int N = row * column;
        int direction = 1;
        result.push_back(matrix[0][0]);
        
        while(result.size() != N) {
            switch(direction) {
                case 1: // left to right
                    j++;

                    if(j > jMax) {
                        direction = 2;
                        j--;
                        iMin++;
                    } else {
                        result.push_back(matrix[i][j]);
                    }
                    break;
                case 2: // top to down
                    i++;
                    
                    if(i > iMax) {
                        direction = 3;
                        i--;
                        jMax--;
                    } else {
                        result.push_back(matrix[i][j]);
                    }
                    break;
                case 3: // right to left
                    j--;
                    if(j < jMin) {
                        direction = 4;
                        j++;
                        iMax--;
                    } else {
                        result.push_back(matrix[i][j]);
                    }
                    break;
                case 4: // down to top
                    i--;
                    
                    if(i < iMin) {
                        direction = 1;
                        i++;
                        jMin++;
                        
                    } else {
                        result.push_back(matrix[i][j]);
                    }
                    break;
            }

        }
        
        return result;
    }
};