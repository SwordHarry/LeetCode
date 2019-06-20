#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <limits.h>
using namespace std;

class Status {
public:
    int cur;
    int cost;
    int leader;
};

bool operator < (const Status& a, const Status& b ){
    
    return a.cost > b.cost; 
}

int main(void) {
    
    int numberOfCity;
    
    
    while(cin >> numberOfCity) {
        if(numberOfCity == 0) {
            break;
        }
        
        int numberOfRoad;
        cin >> numberOfRoad;
        
        // 初始化 领接矩阵
        vector<vector<int>> roadMap;
        for(int i = 0;i < numberOfCity;i++) {
            vector<int> temp(numberOfCity,INT_MAX);
            roadMap.push_back(temp);
        }
        
        for(int i = 0;i < numberOfRoad;i++) {
            int row;
            int column;
            int cost;
            cin >> row >> column >> cost;
            if(roadMap[row - 1][column - 1] > cost) {
                roadMap[row - 1][column - 1] = cost;
                roadMap[column - 1][row - 1] = cost;
            }
        }
        
        
        // 城市下标 对应的 支持者
        vector<int> leaderOfCity;
        for(int i = 0;i < numberOfCity;i++) {
            int leader;
            cin >> leader;
            leaderOfCity.push_back(leader);
        }
        
        set<int> citySet; // 已经访问过的城市
        priority_queue<Status> cityQue; // 优先队列 BFS
        int result = INT_MAX;
        
        
        Status status;
        status.cur = 0;
        status.leader = 1;
        status.cost = 0;
        cityQue.push(status);
        
        int cost = 0;
        while(!cityQue.empty()) {
            Status curSta = cityQue.top();
            cityQue.pop();
            citySet.insert(curSta.cur);
            if(curSta.cur == 1) {
                result = curSta.cost;
                break;
            }

            for(int i = 0;i < numberOfCity;i++) {
                if(roadMap[curSta.cur][i] != INT_MAX && curSta.leader <= leaderOfCity[i] && (citySet.find(i) == citySet.end())) {
                    Status status;
                    status.cur = i;
                    status.cost = curSta.cost + roadMap[curSta.cur][i];
                    status.leader = leaderOfCity[i];
                    cityQue.push(status);
                }
            }
            
        }
        
        result = (result == INT_MAX)?-1:result;
        cout << result;
    }
    
    return 0;
}