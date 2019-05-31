#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int sLen = s.length();
        int tLen = t.length();
        
        if(sLen != tLen) {
            return false;
        }
        
        unordered_map<char,char> m;
        
        m.insert(make_pair(s[0],t[0]));
        for(int i = 1;i < sLen;i++) {
            if(!m.count(s[i])) {
                m.insert(make_pair(s[i],t[i]));
                // 增加判断，防止 s 中两个不同字母指向 同一字母
                for(int j = 0;j < i;j++) {
                    if(s[j] != s[i] && m[s[j]] == m[s[i]]) {
                        return false;
                    }
                }
            } else {
                if(m[s[i]] != t[i]) {
                    return false;
                }
            }
        }
        
        return true;
    }

    // answer algorithm
    // 使用 string:find 函数，判断第一次字符各自出现的索引是否相等
    bool isIsomorphic_answer(string s, string t) {
        if(s.empty()) {
            return true;
        }
        
        for (int i=0; i<s.size(); i++) {
            if(s.find(s[i])!=t.find(t[i])) {
                return false;
            }
            
        }
        return true;
    }
};