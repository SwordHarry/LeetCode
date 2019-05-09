#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

/*
    思路：
        遍历一遍数组，
        维护一个双向队列；
        如果 队首元素 为小标 i - k
            则把 队首元素 弹出
        如果 队尾元素，即下标在 原数组 的值比 当前数组值小
            则把 队尾元素 弹出
            直到 队列 为空或者 大于等于 为止
        此时 队列 将当前 下标 压入
        结果数组 压入 队首元素
*/
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        
        int len = nums.size();
        vector<int> result;
        deque<int> q;
        for(int i = 0;i < len;i++) {
            if(!q.empty() && q.front() == i - k) {
                q.pop_front();
            }
            while(!q.empty() && nums[q.back()] < nums[i] ){
                q.pop_back();
            }
            q.push_back(i);
            if(i >= k - 1) {
                result.push_back(nums[q.front()]);
            }
        }
        return result;
    }
};