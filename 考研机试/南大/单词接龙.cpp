#include <vector>
#include <string>
#include <set>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        
        int listLen = wordList.size();
        if(listLen == 0) {
            return 0;
        }
        
        // endWord 是否在 字典 中
        unordered_set<string> wordSet(wordList.begin(),wordList.end());
        if(wordSet.find(endWord) == wordSet.end()) {
            return 0;
        }
        wordSet.erase(beginWord);
        
        int result = 0;
        int wordLen = beginWord.length();
        
        unordered_set<string> beginSet{beginWord};
        while(beginSet.find(endWord) == beginSet.end()) {
            unordered_set<string> tempSet;
            for(auto s: beginSet) {
                for(int i = 0;i < wordLen;i++) {
                    for(char x = 'a';x <= 'z';x++) {
                        string str = s;
                        str[i] = x;
                        if(wordSet.find(str) != wordSet.end()) {
                            wordSet.erase(str);
                            tempSet.insert(str);
                        }
                    }
                }
            }
            if(tempSet.empty()) {
                return 0;
            }
            // ***
            beginSet = tempSet;
            result++;
        }
        
        return result + 1;
    }
};