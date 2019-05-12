#include <iostream>
#include <string>
using namespace std;

int main(void) {
    
    string str;
    
    while(cin >> str) {
        int len = str.length();
        for(int i = 0;i < len / 2;i++) {
            char c = str[i];
            str[i] = str[len - 1 - i];
            str[len - 1 - i] = c;
        }
        cout << str << endl;
    }
    
    return 0;
}