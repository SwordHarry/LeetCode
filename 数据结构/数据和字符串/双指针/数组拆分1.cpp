#include <vector>

#include <algorithm>

using namespace std;

class Solution {
    public:
        int arrayPairSum(vector < int > & nums) {
            int len = nums.size();

            int result = 0;
            sort(nums.begin(), nums.end());
            for (int i = 0; i < len; i = i + 2) {
                result += nums[i];
            }

            return result;
        }

    // 不使用 sort 的答案
    int arrayPairSum_answer(vector < int > & nums) {
        int n[20001] = {
            0
        }, i, j, sum;
        int numsSize = nums.size();

        for (i = 0; i < numsSize; i++) //建立值、键哈希表，即基数排序
            n[nums[i] + 10000]++; //保证下标为正数
        for (i = j = sum = 0; i < 20001;) //将下标为 0、2、4 ... 的相加
            if (n[i]) //判断是否存在该数，若存在则判断是否偶数下标
        {
            if (j % 2 == 0) sum += i - 10000; //偶数下标，累加
            j++; //计数
            n[i]--; //该值减 1
        } else i++; //不存在，跳过该值
        return sum;
    }
};