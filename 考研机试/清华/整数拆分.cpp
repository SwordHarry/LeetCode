/*

7 = 1 + 2 + 4 
7 = 1 + 2 + 2 + 2
7 = 1 + 1 + 1 + 4 
7 = 1 + 1 + 1 + 2 + 2 
7 = 1 + 1 + 1 + 1 + 1 + 2 
7 = 1 + 1 + 1 + 1 + 1 + 1 + 1
6

6 = 1 + 1 + 1 + 1 + 1 + 1
6 = 1 + 1 + 1 + 1 + 2
6 = 1 + 1 + 2 + 2
6 = 1 + 1 + 4
6 = 2 + 2 + 2
6 = 2 + 4
6

4 = 4
4 = 1 + 1 + 1 + 1
4 = 2 + 2
4 = 1 + 1 + 2
4

3
2

2
2

1
1

f(2m + 1) = f(2m)， 
f(2m) = f(2m - 1) + f(m)，
*/
#include <iostream>
#include <cmath>
using namespace std;
# define NUM 1000000000

int main(void) {
    
    int num;
    
    while(cin >> num) {
        int result = 0;
        int *temp = new int[num + 1];
        temp[0] = 1;
        temp[1] = 1;
        for(int i = 2;i <= num;i++) {
            if(i % 2 == 0) {
                // 防溢出
                temp[i] = (temp[i - 1] + temp[i/2])%NUM;
            } else {
                temp[i] = temp[i - 1];
            }
        }
        
        cout << temp[num] << endl;
        delete [] temp;
        temp = NULL;
    }
    
}