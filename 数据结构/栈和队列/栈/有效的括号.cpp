#include <string>
#include <stack>
#include <map>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        
        int len = s.length();
        if(len == 0) {
            return true;
        }
        
        stack<char> st;
        map<char,char> m = initMap();
        for(int i = 0;i < len;i++) {
            
            if(m.find(s[i]) != m.end()) {
                if(st.size() == 0) {
                    return false;
                }
                char c = st.top();
                st.pop();
                
                if(c != m[s[i]]) {
                    return false;
                }
            } else {
                st.push(s[i]);
            }
        }
        
        
        return st.size() == 0;
    }
    
    map<char,char> initMap() {
        map<char,char> m;
        pair<char,char> p1(')','(');
        pair<char,char> p2(']','[');
        pair<char,char> p3('}','{');
        m.insert(p1);
        m.insert(p2);
        m.insert(p3);
        return m;
    }
};