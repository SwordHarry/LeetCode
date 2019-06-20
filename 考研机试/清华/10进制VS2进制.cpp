#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

// n 进制 转化为 m进制
void convert(int n,int m,vector<int> &input,vector<int> &output) {
    
    int i = 0;
    int len = input.size();
    while(i < len) {
        int pre = 0;
        
        for(int j = i;j < len;j++) {
            int temp = pre * n + input[j];
            pre = temp % m;
            input[j] = temp / m;
        }
        
        output.push_back(pre);
        
        while(i < len && input[i] == 0) {
            ++i;
        }
    }
    
    // 将 input 的有效位数保留
    
    // 记得将 ouput 反转
    reverse(output.begin(),output.end());
}


int main(void) {
    
    string num;
    while(cin >> num) {
        vector<int> input;
        vector<int> output;
        int len = num.length();
        for(int i = 0;i < len;i++) {
            int temp = num[i] - '0';
            input.push_back(temp);
        }
        
        convert(10,2,input,output);
        reverse(output.begin(),output.end());
        
        vector<int> result;
        convert(2,10,output,result);
        
        len = result.size();
        for(int i = 0;i < len;i++) {
            cout << result[i];
        }
        cout << endl;
    }
    
    return 0;
}