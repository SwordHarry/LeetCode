/**
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

示例 1:

输入: 2
输出: [0,1,1]
示例 2:

输入: 5
输出: [0,1,1,2,1,2]
进阶:

给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
要求算法的空间复杂度为O(n)。
你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/counting-bits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
*/

/**
 * 思路：
    偶数/2实际上就是去掉最右边的0，一的个数是不会变的。
    奇数/2实际上就是去掉最右边的1，一的个数会减一。
    因此res[偶数]=res[偶数/2]，res[奇数]=res[奇数/2]+1
*/

#include <vector>
using namespace std;

class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> result;
        result.push_back(0);
        for(int i = 1;i <= num;i++) {
            result.push_back((i % 2 == 0)?result[i >> 1]:(result[i >> 1] + 1));
        }
        
        return result;
    }
};