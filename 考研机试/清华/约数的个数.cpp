#include <vector>
#include <iostream>
using namespace std;

/*
// 如下解法会 超出时间限制
int main(void) {
    
    int len;
    cin >> len;
    
    int *arr = new int[len];
    
    for(int i = 0;i < len;i++) {
        cin >> arr[i];
    }
    
    for(int i = 0;i < len;i++) {
        int result = 1;
        if(arr[i] > 1) {
            int temp = arr[i] / 2;
            for(int j = 1;j <= temp;j++) {
                if(arr[i] % j == 0) {
                    result++;
                } 
            }
        }
        cout << result << endl;
    }
    
}
*/

// answer algorithm
// 思路：利用 平方根 减少计算范围 如 12 的约数就有 1 2 3 和 4 6 12 他们为两两配对关系而 4 * 4 > 12
int main(void) {
    
    int len;
    cin >> len;
    
    int *arr = new int[len];
    
    for(int i = 0;i < len;i++) {
        cin >> arr[i];
    }
    
    for(int i = 0;i < len;i++) {
        int result = 0;
        int num = 1;
        for(;num * num < arr[i];num++) {
            if(arr[i] % num == 0) {
                result += 2;
            }
        }
        if(num * num == arr[i]) {
            result++;
        }

        cout << result << endl;
    }
    
}
