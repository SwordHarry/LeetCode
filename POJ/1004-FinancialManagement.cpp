#include <iostream>
#include <iomanip>
using namespace std;

int N = 12;

int main() {

    // 设置输出为 两位小数
    cout << setiosflags(ios::fixed) << setprecision(2);

    long double result = 0;
    for(int i = 0;i < N;i++) {
        double temp;
        cin >> temp;
        result += temp;
    }

    cout << "$" << result / 12 << endl;

    return 0;
}