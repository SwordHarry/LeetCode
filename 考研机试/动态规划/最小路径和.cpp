
#include <vector>
using namespace std;

class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        // m + n - 2
        
        int row = grid.size();
        int column = grid[0].size();
        
        
        // grid[0][j] 和 grid[i][0]
        for(int i = 1;i < row;i++) {
            grid[i][0] += grid[i - 1][0];
        }
        
        for(int j = 1;j < column;j++) {
            grid[0][j] += grid[0][j - 1];
        }
        
        for(int i = 1;i < row;i++) {
            for(int j = 1;j < column;j++) {
                grid[i][j] += min(grid[i - 1][j],grid[i][j - 1]);
            }
        }
        
        return grid[row - 1][column - 1];
    }
    
    
    int min(int a,int b) {
        return (a>b)?b:a;
    }
};