#include <string>
#include <map>
using namespace std;

class Solution {
public:
    int longestPalindrome(string s) {
        
        map<char,int> m;
        int result = 0;
        int len = s.length();
        // map 的插入和更新的 正确用法
        for(int i = 0;i < len;i++) {
            map<char,int>::iterator it = m.find(s[i]);
            if(it == m.end()) {
                m.insert(make_pair(s[i],1));
            } else {
                it->second++;
            }
        }
        
        bool flag = true;
        // 遍历 map
        map<char,int>::iterator it = m.begin();
        while(it != m.end()) {
            if(flag && it->second % 2 != 0) {
                result++;
                flag = false;
            }
            result += ((it->second / 2) * 2);
            it++;
        }
        
        return result;
    }
};