/**
 * 给定一个正整数 N，试求有多少组连续正整数满足所有数字之和为 N?

示例 1:

输入: 5
输出: 2
解释: 5 = 5 = 2 + 3，共有两组连续整数([5],[2,3])求和后为 5。
示例 2:

输入: 9
输出: 3
解释: 9 = 9 = 4 + 5 = 2 + 3 + 4
示例 3:

输入: 15
输出: 4
解释: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
说明: 1 <= N <= 10 ^ 9

*/

// 滑动窗口 超时
#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int result = 1;
    int i = 1;
    int j = 2;
    while(j <= n && i != j) {
        // 等差数列求和
        int temp = (i + j) * (j - i + 1) / 2;

        if(temp == n) {
            result++;
            i++;
        } else if(temp < n) {
            j++;
        } else {
            i++;
        }

    }

    cout << result << endl;

    return 0;
}

// 数学推导
/*
    假设 N=由 区间 [a,a+k-1] 累加得到 等差数列 首项为 a ，项数 为 k

其中 a>=1，k>=1 且都为整数

N=(a+a+k-1)*k/2

-> a*k=N-(k-1)*k/2
-> (k-1)*k/2<N && (N-(k-1)*k/2) 能被 k 整除

*/

int main() {

    int N;
    cin >> N;
    

    int count=0;
    for(int i=1;(i-1)*i/2<N;i++){
        int tmp=N-(i-1)*i/2;
        if(tmp%i==0){
            count++;
        }
    }
    return count;
}