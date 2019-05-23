#include <string>
#include <stack>
#include <iostream>
using namespace std;

class Solution{
    public:
    int postfix(string infix) {
        int result = 0;
        string resultStr = "";

        int len = infix.length();

        stack<int> numStack;
        stack<char> operStack;

        operStack.push('#');
        int i = 0;
        while(infix[i] != '#' || operStack.top() != '#') {
            // 结尾是 # 号
            if(infix[i] != '#') {
                int temp = infix[i] - '0';

                if(temp >= 0 && temp <= 9) {
                    // 是数字
                    resultStr += infix[i];
                    numStack.push(temp);
                } else {
                    // 是符号
                    char curOper = infix[i];
                    char preOper = operStack.top();

                    if(Isp(preOper) > Osp(curOper)) {
                        // 进行运算
                        resultStr += preOper;
                        operStack.pop();
                        int a = numStack.top();
                        numStack.pop();
                        int b = numStack.top();
                        numStack.pop();
                        int c = calculate(a,b,preOper);
                        numStack.push(c);
                        
                    }

                    operStack.push(curOper);

                }
                
                i++;
            } else {
                char oper = operStack.top();
                resultStr += oper;
                operStack.pop();
                int b = numStack.top();
                numStack.pop();
                int a = numStack.top();
                numStack.pop();
                int c = calculate(a,b,oper);
                numStack.push(c);
                
            }
            
        }
        
        // 打印 中缀表达式
        cout << "the postfix is:" + resultStr << endl;
        return numStack.top(); // 返回结果
    }

    // 栈内 运算符 的 运算优先级
    int Isp(char ch){
        switch(ch){
            case '#': 	return 0;
            case '(': 	return 1;
            case '+': 	return 3;
            case '-': 	return 3;
            case '*': 	return 5;
            case '/': 	return 5;
            case '%': 	return 5;
            case '^': 	return 7;
            case ')': 	return 8;
        }
    }
    // 栈外 运算符 的 运算优先级
    int Osp(char ch) {
        switch(ch){
            case '#': 	return 0;
            case '(': 	return 8;
            case '+': 	return 2;
            case '-': 	return 2;
            case '*': 	return 4;
            case '/': 	return 4;
            case '%': 	return 4;
            case '^': 	return 6;
            case ')': 	return 1;
	    }

    }

    int calculate(int a,int b,char ch) {
        switch (ch)
        {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return a + b;
        }
    }
};


int main(void) {

    cout << "please input expression:" << endl;
    string infix;
    cin >> infix;
    infix = infix + '#';
    Solution s;
    int result = s.postfix(infix);

    cout << "the result is:" << result << endl;
    return 0;
}