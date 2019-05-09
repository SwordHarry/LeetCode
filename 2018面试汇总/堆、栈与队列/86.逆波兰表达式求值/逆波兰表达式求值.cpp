#include <stack>
#include <map>
#include <vector>
#include <sstream>
using namespace std;

class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> s;
        int len = tokens.size();
        map<string,int> m;
        pair<string,int> pAdd("+",1);
        pair<string,int> pSub("-",2);
        pair<string,int> pMul("*",3);
        pair<string,int> pDiv("/",4);
        
        m.insert(pAdd);
        m.insert(pSub);
        m.insert(pMul);
        m.insert(pDiv);
        int num1 = 0;
        int num2 = 0;
        for(int i = 0;i < len;i++) {
            
            switch(m[tokens[i]]) {
                case 1:
                    num1 = s.top();
                    s.pop();
                    num2 = s.top();
                    s.pop();
                    s.push(num2 + num1);
                    break;
                case 2:
                    num1 = s.top();
                    s.pop();
                    num2 = s.top();
                    s.pop();
                    s.push(num2 - num1);
                    break;
                case 3:
                    num1 = s.top();
                    s.pop();
                    num2 = s.top();
                    s.pop();
                    s.push(num2 * num1);
                    break;
                case 4:
                    num1 = s.top();
                    s.pop();
                    num2 = s.top();
                    s.pop();
                    s.push(num2 / num1);
                    break;
                default:
                    stringstream ss;
                    ss << tokens[i];
                    ss >> num1;
                    s.push(num1);
            }
        }
        return s.top();
    }
};