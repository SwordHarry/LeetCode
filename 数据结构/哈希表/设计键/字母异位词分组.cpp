#include <string>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> result;
        map<string,vector<string>> m;
        
        int len = strs.size();
        
        for(int i = 0;i < len;i++) {
            string temp = strs[i];
            // 按 ASCII 码排序
            sort(temp.begin(), temp.end());
            if(m.count(temp)) {
                m[temp].push_back(strs[i]);
            } else {
                vector<string> vec;
                vec.push_back(strs[i]);
                m.insert(make_pair(temp,vec));
            }
        }
        
        map<string,vector<string>>::iterator it = m.begin();
        while(it != m.end()) {
            vector<string> vec = it->second;
            result.push_back(vec);
            it++;
        }
        
        return result;
    }
};