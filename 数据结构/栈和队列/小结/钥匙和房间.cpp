#include <set>
#include <stack>
#include <vector>
using namespace std;


class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        
        int len = rooms.size();
        
        // 已经去过的房间
        set<int> roomSet;
        // 已经拿到的钥匙
        stack<int> keyStack;
        
        roomSet.insert(0);
        
        int zeroLen = rooms[0].size();
        for(int i = 0;i < zeroLen;i++) {
            keyStack.push(rooms[0][i]);
            
        }
        
        // 开始从 0 号房搜刮房间
        while(!keyStack.empty()) {
            int key = keyStack.top();
            keyStack.pop();
            
            if(!roomSet.count(key)) {
                roomSet.insert(key);
                int len = rooms[key].size();
                for(int i = 0;i < len;i++) {
                    if(!roomSet.count(rooms[key][i])) {
                        keyStack.push(rooms[key][i]);
                    }
                }
            }

        }
        
        return roomSet.size() == len;
    }
};