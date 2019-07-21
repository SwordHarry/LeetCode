/**给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

示例:

输入: [2,1,5,6,2,3]
输出: 10
 * 
 * 
*/

#include <iostream>
#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int result = 0;
        
        int len = heights.size();
        stack<int> s;
        s.push(-1);
        for(int i = 0;i < len;i++) {
            int t = s.top();
            while(t != -1 && heights[t] > heights[i]) {
                s.pop();
                int width = i - s.top() - 1;
                result = max(result,width * heights[t]);
                t = s.top();
            }
            s.push(i);
        }
        
        // 遍历完数组后 栈不为空
        while(s.top() != -1) {
            int t = s.top();
            s.pop();
            int width = len - s.top() - 1;
            result = max(result,width * heights[t]);
        }
        
        return result;
    }
};