#include <iostream>
#include <queue>
using namespace std;

// 重载运算符 实现 自定义小顶堆
bool operator < (pair<int,int> a, pair<int,int>  b ){
    if (a.first == b.first) 
		return a.second > b.second;
    return a.first > b.first; 
}

int main(void) {
    
    int count;
    int id;
    int score;
    while(cin >> count) {
        // 声明 自定义 小顶堆
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>> > q;
        for(int i = 0;i < count;i++) {
            cin >> id >> score;
            pair<int,int> p(score,id);
            q.push(p);
        }
        
        while(!q.empty()) {
            pair<int,int> result = q.top();
            cout << result.second << " " << result.first << endl;
            q.pop();
        }
    }
}