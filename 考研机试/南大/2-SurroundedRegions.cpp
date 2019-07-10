#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

int main(void) {

    int row,column;
    cin >> row >> column;

    char matrix[row][column];
    for(int i = 0;i < row;i++) {
        for(int j = 0;j < column;j++) {
            cin >> matrix[i][j];
        }
    }

    queue<pair<int,int>> q;
    int flag[row][column];
    memset(flag,0,sizeof(flag));
    

    for(int i = 0;i < row;i++) {
        if(matrix[i][0] == 'O') {
            q.push(make_pair(i,0));
        }
        if(matrix[i][column - 1] == 'O') {
            q.push(make_pair(i,column - 1));
        }
    }

    for(int j = 0;j < column;j++) {
        if(matrix[0][j] == 'O') {
            q.push(make_pair(0,j));
        }
        if(matrix[row - 1][j] == 'O') {
            q.push(make_pair(row - 1,j));
        }
    }

    while(!q.empty()) {
        pair<int,int> p = q.front();
        q.pop();
        int x = p.first;
        int y = p.second;
        if(flag[x][y] == 1) {
            continue;
        } else {
            flag[x][y] = 1;
            matrix[x][y] = '#';
            // 遍历上下左右
            if(x > 0) {
                if(matrix[x - 1][y] == 'O' && flag[x - 1][y] == 0) {
                    q.push(make_pair(x - 1,y));
                }
            }
            if(x < row - 1 && flag[x + 1][y] == 0) {
                if(matrix[x + 1][y] == 'O') {
                    q.push(make_pair(x + 1,y));
                }
            }
            if(y > 0 && flag[x][y - 1] == 0) {
                if(matrix[x][y - 1] == 'O') {
                    q.push(make_pair(x,y - 1));
                }
            }
            if(y < column - 1 && flag[x][y + 1] == 0) {
                if(matrix[x][y + 1] == 'O') {
                    q.push(make_pair(x,y + 1));
                }
            }
        }
    }

    for(int i = 0;i < row;i++) {
        for(int j = 0;j < column;j++) {
            if(matrix[i][j] == '#') {
                matrix[i][j] = 'O';
            } else {
                matrix[i][j] = 'X';
            }
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}