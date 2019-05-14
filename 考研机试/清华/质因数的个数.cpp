#include <iostream>
using namespace std;

/*
// Pollard Rho因数分解 超时
int main(void) {
    
    int num;
    
    while(cin >> num) {
        int result = 0;
        for(int i = 2;i <= num;i++) {
            if(num % i == 0) {
                num /= i;
                result++;
                i--;
            }
        }
        
        cout << result << endl;
    }
    return 0;
}*/

// answer algorithm
int main(void) {
    int num;
    
    while(cin >> num) {
        int result = 0;
        // 此处 仅计算到 num 的平方根
        for(int i = 2;i*i <= num;i++) {
            while(num % i == 0) {
                num /= i;
                result++;
            }
            
        }
        if(num != 1) {
            result++;
        }
        cout << result << endl;
    }
    return 0;
}