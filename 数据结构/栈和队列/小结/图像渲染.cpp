#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        
        if(image[sr][sc] == newColor) {
            return image;
        }
        
        int oldColor = image[sr][sc];
        int row = image.size();
        int column = image[0].size();
        
        stack<pair<int,int>> s;
        pair<int,int> p(sr,sc);
        s.push(p);
        
        while(!s.empty()) {
            pair<int,int> cur = s.top();
            s.pop();
            
            int x = cur.first;
            int y = cur.second;
            image[x][y] = newColor;
            // 上下左右
            if(x > 0 && image[x - 1][y] == oldColor) {
                pair<int,int> temp(x - 1,y);
                s.push(temp);
            }
            if(x < row - 1 && image[x + 1][y] == oldColor) {
                pair<int,int> temp(x + 1,y);
                s.push(temp);
            }
            if(y > 0 && image[x][y - 1] == oldColor) {
                pair<int,int> temp(x,y - 1);
                s.push(temp);
            }
            if(y < column - 1 && image[x][y + 1] == oldColor) {
                pair<int,int> temp(x,y + 1);
                s.push(temp);
            }
            
        }
        
        
        return image;
    }
};