#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

/**
 * 参考：https://blog.csdn.net/qq_40421671/article/details/81252273
 * 
*/

int dp(int nums[],int len) {

    int result = 0;
    int temp = 0;
    for(int i = 0;i < len;i++) {
        if(temp > 0) {
            temp += nums[i];
        } else {
            temp = nums[i];
        }
        result = max(result,temp);
    }

    return result;
}

int main(void) {

    int row,column;

    cin >> row >> column;

    vector<vector<int>> matrix(row,vector<int>(column,0));

    for(int i = 0;i < row;i++) {
        for(int j = 0;j < column;j++) {
            cin >> matrix[i][j];
        }
    }

    int result = 0;
    int nums[column];
    // 合并 矩阵行
    for(int k = 0;k < row;k++) {
        memset(nums,0,sizeof(nums));
        for(int i = k;i < row;i++) {
            for(int j = 0;j < column;j++) {
                nums[j] += matrix[i][j];
            }
            result = max(result,dp(nums,column));
        }
    }

    
    cout << result << endl;


    return 0;
}