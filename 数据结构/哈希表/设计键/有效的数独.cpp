#include <vector>
#include <map>
#include <set>
using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        
        int len = board.size();
        
        map<char, bool> rowMap;
        map<char, bool> columnMap;
        map<int, set<char>> smallMap;
        
        for(int i = 0;i < len;i++) {
            rowMap.clear();
            columnMap.clear();
            for(int j = 0;j < len;j++) {
                if(board[i][j] != '.') {
                    // 对于每一行
                    if(rowMap.count(board[i][j])) {
                        
                        return false;
                    } else {
                        rowMap[board[i][j]] = true;
                    }
                    
                    
                    // 每个小九宫格
                    int temp = (i / 3) * 3 + j / 3;
                    
                    if(smallMap.count(temp)) {
                        if(smallMap[temp].count(board[i][j])) {
                            
                            return false;
                        } else {
                            smallMap[temp].insert(board[i][j]);
                        }
                    } else {
                        set<char> s;
                        s.insert(board[i][j]);
                        smallMap[temp] = s;
                    }
                }
                if(board[j][i] != '.') {
                    // 对于每一列
                    if(columnMap.count(board[j][i])) {
                        
                        return false;
                    } else {
                        columnMap[board[j][i]] = true;
                    }
                }
            }
        }
        
        
        return true;
    }
};