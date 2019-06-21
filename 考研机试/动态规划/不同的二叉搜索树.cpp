/**
 * 
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 动态规划
 * 若求 1...n 为结点组成的二叉搜索树
 *  则 以 1...n 分别为根有多少种情况
 * 
 * 若以1 为根，则左子树为 0 ，右子树为 n - 1 (结点个数)
 *    2 为根，左子树为 1，右子树为 n - 2
 *    3 为根，左子树为 2，右子树为 n - 3
 * 
 * 用数组存储 1...n 个结点时，可组成的二叉搜索树
 * 故   [n] = 以1为根的情况数 + 以 2 为根的情况数 + ... + 以 n 为根的情况数;
 *      [n] = [0] * [n - 1] + [1] * [n - 2] + ... + [n - 1] * [0];
 *    
 * 
*/

class Solution {
public:
    int numTrees(int n) {
        
        
        int result[n + 1];
        result[0] = 1;
        result[1] = 1;
        
        
        for(int i = 2;i <= n;i++) {
            result[i] = result[i - 1];
            for(int j = 1;j < i;j++) {
                result[i] += result[j - 1] * result[i - j];
            }
            
        }
        
        return result[n];
    }
};