/**
 * 给定 二叉树的 前序遍历 和 后序遍历 的字符串，
 * 输出 所有可能的二叉树的数目
 * 
*/


#include <iostream>
#include <cmath>
#include <string>
using namespace std;

int main() {

    string preStr;
    string postStr;

    cin >> preStr >> postStr;

    int count = 0;
    int len = preStr.size();
    for(int i = 0;i < len;i++) {
        for(int j = 1;j < len;j++) {
            if(preStr[i] == postStr[j] && preStr[i + 1] == postStr[j - 1]) {
                count++;
            }
        }
    }

    int result = pow(2,count);
    result = result % 1007;
    cout << result << endl;
    system("pause");
    return 0;
}