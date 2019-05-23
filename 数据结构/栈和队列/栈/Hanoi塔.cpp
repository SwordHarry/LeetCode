#include <iostream>
using namespace std;

void move(char x,int n,char z) {
    int static c = 0;

    cout << ++c << " time: " << "move disk " << n << " from " << x << " to " << z << endl;
}

void hanoi(int n,char x,char y,char z) {

    if(n == 1) {
        move(x,1,z);
    } else {
        hanoi(n - 1, x, z, y);
        move(x, n, z);
        hanoi(n - 1, y, x, z);
    }
}

int main(void) {

    hanoi(4,'x','y','z');
    return 0;
}