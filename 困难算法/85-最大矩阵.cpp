/**
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:

输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6
 * 
*/

/**
 * 思路：
 * 此题为 84 柱形图中的最大矩形的变种
 * 将 二维矩阵降维 即可得到 一维的 柱形图
 * 
 * 降维方式：
 * 从 上到下 扫描，相当于将 x 轴下移，下移过程中矩形会出现 浮空，浮空的矩形无视之，为0
 * 
 * 
*/
#include <stack>
#include <vector>
using namespace std;


class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        
        int row = matrix.size();
        if(row == 0) {
            return 0;
        }
        int column = matrix[0].size();
        
        int result = 0;
        
        vector<int> heights(column, 0);
        // 降维成一维
        for(int i = 0;i < row;i++) {
            for(int j = 0;j < column;j++) {
                if(matrix[i][j] == '1') {
                    heights[j] += 1;
                } else {
                    heights[j] = 0;
                }
            }
            result = max(result,largest(heights));
        }
        
        return result;
    }
    // 84 题的 算法
    int largest(vector<int> &heights) {
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
        
        while(s.top() != -1) {
            int t = s.top();
            s.pop();
            int width = len - s.top() - 1;
            result = max(result,width * heights[t]);
        }
        
        return result;
    }
};