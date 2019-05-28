#include <vector>
#include <queue>
#include <limits.h>
using namespace std;


class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {
        
        int row = matrix.size();
        if(row == 0) {
            return matrix;
        }
        int column = matrix[0].size();
        
        queue<pair<int,int>> q;
        
        // 找到所有的 0
        for(int i = 0;i < row;i++) {
            for(int j = 0;j < column;j++) {
                if(matrix[i][j] == 0) {
                    pair<int,int> p(i,j);
                    q.push(p);
                } else {
                    matrix[i][j] = INT_MAX;
                }
            }
        }
        
        // 从0开始遍历 矩阵，更改距离
        while(!q.empty()) {
            pair<int,int> cur = q.front();
            q.pop();
            
            int x = cur.first;
            int y = cur.second;
            // 上下左右
            if(x > 0 && matrix[x - 1][y] > matrix[x][y] + 1) {
                matrix[x - 1][y] = matrix[x][y] + 1;
                pair<int,int> p(x-1,y);
                q.push(p);
            }
            if(x < row - 1 && matrix[x + 1][y] > matrix[x][y] + 1) {
                matrix[x + 1][y] = matrix[x][y] + 1;
                pair<int,int> p(x+1,y);
                q.push(p);
            }
            if(y > 0 && matrix[x][y - 1] > matrix[x][y] + 1) {
                matrix[x][y - 1] = matrix[x][y] + 1;
                pair<int,int> p(x,y - 1);
                q.push(p);
            }
            if(y < column - 1 && matrix[x][y + 1] > matrix[x][y] + 1) {
                matrix[x][y + 1] = matrix[x][y] + 1;
                pair<int,int> p(x,y + 1);
                q.push(p);
            }
        }
        
        return matrix;
    }

};