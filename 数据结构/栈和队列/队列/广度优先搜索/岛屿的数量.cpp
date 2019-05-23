#include <vector>
#include <queue>
using namespace std;


class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        queue<pair<int,int>> q;
        
        int row = grid.size();
        if(row == 0) {
            return 0;
        }
        int column = grid[0].size();
        
        int result = 0;
        
        for(int i = 0;i < row;i++) {
            for(int j = 0;j < column;j++) {
                if(grid[i][j] == '1') {
                    pair<int,int> p(i,j);
                    q.push(p);
                    grid[i][j] = '0';
                    while(!q.empty()) {
                        pair<int,int> p = q.front();
                        q.pop();
                        int x = p.first;
                        int y = p.second;
                        // 上下左右
                        if(x - 1 > -1 && grid[x - 1][y] == '1') {
                            pair<int,int> temp(x - 1,y);
                            q.push(temp);
                            grid[x - 1][y] = '0';
                        }
                        
                        if(x + 1 < row && grid[x + 1][y] == '1') {
                            pair<int,int> temp(x + 1,y);
                            q.push(temp);
                            grid[x + 1][y] = '0';
                        }
                        if(y - 1 > -1 && grid[x][y - 1] == '1') {
                            pair<int,int> temp(x,y - 1);
                            q.push(temp);
                            grid[x][y - 1] = '0';
                        }
                        if(y + 1 < column && grid[x][y + 1] == '1') {
                            pair<int,int> temp(x,y + 1);
                            q.push(temp);
                            grid[x][y + 1] = '0';
                        }
                    }
                    
                    result++;
                }
            }
        }
        
        return result;
    }
};