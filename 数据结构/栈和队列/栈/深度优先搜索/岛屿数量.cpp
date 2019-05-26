#include <vector>
#include <stack>
using namespace std;


// 这题用 广度优先搜索更佳
class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        stack<pair<int,int>> s;
        
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
                    s.push(p);
                    grid[i][j] = '0';
                    
                    while(!s.empty()) {
                        pair<int,int> p = s.top();
                        s.pop();
                        
                        int x = p.first;
                        int y = p.second;
                        
                        // 上下左右
                        if(x > 0 && grid[x - 1][y] == '1') {
                            pair<int,int> temp(x-1,y);
                            s.push(temp);
                            grid[x - 1][y] = '0';
                        }
                        
                        if(x < row - 1 && grid[x + 1][y] == '1') {
                            pair<int,int> temp(x + 1,y);
                            s.push(temp);
                            grid[x + 1][y] = '0';
                        }
                        
                        if(y > 0 && grid[x][y - 1] == '1') {
                            pair<int,int> temp(x,y - 1);
                            s.push(temp);
                            grid[x][y - 1] = '0';
                        }
                        
                        if(y < column - 1 && grid[x][y + 1] == '1') {
                            pair<int,int> temp(x,y + 1);
                            s.push(temp);
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