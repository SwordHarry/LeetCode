#include <iostream>
#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    string decodeString(string s) {
        
        
        int len = s.length();
        if(len == 0) {
            return "";
        }
        
        stack<int> countStack;
        stack<string> strStack;
        
        for(int i = 0;i < len;i++) {
            // char 转 int
            int temp = s[i] - '0';
            if(temp >= 0 && temp <= 9) {
                // 若数字为多位
                if(i > 0) {
                    int pre = s[i - 1] - '0';
                    if(pre >= 0 && pre <= 9) {
                        temp = countStack.top() * 10 + temp;
                        countStack.pop();
                    }
                }
                countStack.push(temp);
            } else {
                // 不是数字
                // [  字母 或 ]
                if(s[i] == ']') {
                    int count = countStack.top();
                    countStack.pop();
                    string curStr = "";
                    
                    while(strStack.top() != "[") {
                        curStr = strStack.top() + curStr;
                        strStack.pop();
                    }
                    
                    strStack.pop(); // [
                    string curCopy(curStr);
                    for(int j = 1;j < count;j++) {
                        curStr += curCopy; // 此处是累加，需要一个副本
                    }
                    
                    
                    if(!strStack.empty() && strStack.top() != "[") {
                        curStr = strStack.top() + curStr;
                        strStack.pop();
                    }
                    strStack.push(curStr);
                    
                } else {
                    // char 转 string
                    string curStr(1,s[i]);
                    // 这里 需要加上 curStr != "[" 防止 z[ 连接
                    if(!strStack.empty() && strStack.top() != "[" && curStr != "[") {
                        curStr = strStack.top() + curStr;
                        strStack.pop();
                    }
                    strStack.push(curStr);
                    
                }
            }
            
        }
        
        return strStack.top();
    }

    // 简化 判断
    string decodeString_answer(string s) {
        
        int len = s.length();
        
        stack<int> countStack;
        stack<string> strStack;
        
        string result = "";
        int num = 0;
        
        for(int i = 0;i < len;i++) {
            
            if(s[i] >= '0' && s[i] <= '9') {
                // 数字
                num = num * 10 + (s[i] - '0');
            } else if(s[i] == '[') {
                // [
                countStack.push(num);
                num = 0;
                
                strStack.push(result);
                result.clear();
                
            } else if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
                // a-z A-Z
                result += s[i];
                
            } else if(s[i] == ']') {
                // ]
                int count = countStack.top();
                countStack.pop();
                
                string copyStr(result);
                
                for(int i = 1;i < count;i++) {
                    result += copyStr;
                }
                
                result = strStack.top() + result;
                strStack.pop();
            }
            
        }
        
        return result;
    }
};

int main(void) {
    string str = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef";

    Solution s;
    cout << s.decodeString(str) << endl;
}