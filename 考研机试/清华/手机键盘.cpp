#include <map>
#include <string>
#include <iostream>
using namespace std;

// 获取字母 在第几个 按键；从 0 开始
int getGroupIndex(int index) {
    if(index < 15) {
        return index / 3;
    } else {
        if (index - 15 < 4) {
            return 5;
        } else if(index > 21) {
            return 7;
        } else {
            return 6;
        }
    }
}

// 获取 字母在 按键的 第几个位置；从 0 开始
int getIndexOfGroup(int index) {
    if(index < 15) {
        return index % 3;
    } else {
        index = index - 15;
        if(index < 4) {
            return index;
        } else {
            index = index - 4;
            if(index < 3) {
                return index;
            } else {
                return index - 3;
            }
        }
    }
}

int main(void) {
    
    string input;
    
    int result;
    while(cin >> input) {
        result = 0;
        int len = input.length();
        for(int i = 0;i < len;i++) {
            // 换算成 ASCII 码
            int index = input[i] - 97; // 0 - 25
            
            int indexOfGroup = getIndexOfGroup(index);
            result += indexOfGroup + 1;
            
            if(i > 0) {
                if(getGroupIndex(index) == getGroupIndex(input[i - 1] - 97)) {
                    result += 2;
                }
            }
        }
        
        cout << result;
    }
    
}
