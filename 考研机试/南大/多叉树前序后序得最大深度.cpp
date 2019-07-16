/**
 * 输入 一串 多叉树的 前序遍历字符 和 后序遍历字符，
 * 得出该多叉树的最大深度
 * 
 *              A
 *  B       C        D      E           
 * F G H   I J      K  
 * 
 * A B F G H C I J D K E
 * F G H B I J C K D E A
 * 
 * 3
 * 
*/


#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main(void) {

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

    cout << pow(2,count) << endl;
    return 0;
}