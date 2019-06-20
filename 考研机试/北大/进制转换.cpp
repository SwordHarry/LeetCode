#include<iostream>
#include<vector>
#include<string>
using namespace std;

// 10 进制转 n 进制
void convert(int n,vector<int> &input,vector<int> &output) {
    
    int inputLen = input.size();

    int i = 0;
    
    while(i < inputLen) {
        int pre = 0;
        
        for(int j = i;j < inputLen;j++) {
            int temp = pre * 10 + input[j];
            pre = temp % n;
            input[j] = temp / n;
        }
        output.push_back(pre);
        while(i < inputLen && input[i] == 0) {
            ++i;
        }
    }
}

int main(void) {
    
    
    
    string num;
    while(cin >> num) {
        vector<int> input;
        int length = num.length();
        for(int i = 0;i < length;i++) {
            int temp = num[i] - '0';
            input.push_back(temp);
        }
        
        
        vector<int> output;
        convert(2,input,output);
        
        for(int i = output.size() - 1;i >= 0;i--) {
            cout << output[i];
        }
        cout << endl;
    }
    
    return 0;
}