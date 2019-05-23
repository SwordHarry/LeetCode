#include <vector>
#include <string>
#include <queue>
#include <set>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int openLock(vector<string>& deadends, string target) {
        
        unordered_set<string> deadSet(deadends.begin(),deadends.end());
        queue<string> q;
        q.push("0000");
        int result = 0;
        
        set<string> s;
        
        while(!q.empty()) {
            int qLen = q.size();
            for(int j = 0;j < qLen;j++) {
                string str = q.front();
                q.pop();
            
                if(str == target) {
                    return result;
                }

                bool flag = true;
                
                // 将其分支放入
                if(!deadSet.count(str)) {
                    int strLen = str.length();
                    for(int i = 0;i < strLen;i++) {
                        char old = str[i];
                        int temp = str[i] - '0';
                        int temp2 = temp;
                        
                        temp = (temp == 9)?0:(temp + 1);
                        
                        // int 转 char
                        str[i] = temp + '0';
                        
                        if(!s.count(str)) {
                            q.push(str);
                            s.insert(str);
                        }
                        

                        temp2 = (temp2 == 0)?9:(temp2 - 1);
                        
                        str[i] = temp2 + '0';
                        if(!s.count(str)) {
                            q.push(str);
                            s.insert(str);
                        }
                        
                        // 复原字符串
                        str[i] = old;
                    }
                }

            }
            
            result++;
            
        }
        
        
        return -1;
    }
};