/**
 * 思路：最长上升子序列的变种
 *      每遍历到字符串中的字符，若存在比当前字符大的字符，则删除之
 *      直到删除的个数已为k 或遍历到了 最后一个字符为止
 * 
*/

#include <iostream>
#include <string>
#include <cstring>
using namespace std;

int main() {

    string num;
    int k;
    cin >> num >> k;
    if(k == 0) {
        cout << num;
        return 0;
    }

    int len = num.length();
    int finalLen = len - k;
    if(finalLen <= 0) {
        cout << "";
        return 0;
    }
    int flag[len];
    memset(flag,0,sizeof(flag));

    int i = 1;
    int j = 0;
    // 有可能存在 12345 这种删除字符数目不够k 的情况
    // 则将前 len - k 个 字符打印之
    while(i < len && k > 0) {

        int a = num[i] - '0';
        for(int j = 0;j < i;j++) {
            int b = num[j] - '0';
            if(a < b && flag[j] == 0) {
                flag[j] = 1;
                k--;
                if(k == 0) {
                    break;
                }
            }
        }
        i++;
    }

    for(int i = 0;i < len;i++) {
        if(flag[i] == 0 && finalLen > 0) {
            cout << num[i];
            finalLen--;
        }
    }

    return 0;
}