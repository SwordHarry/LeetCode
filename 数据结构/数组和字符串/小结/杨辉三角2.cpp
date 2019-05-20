#include <vector>
using namespace std;

class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> result(rowIndex + 1);
        result[0] = 1;
        result[rowIndex] = 1;
        
        for(int i = 1;i <= rowIndex;i++) {
            result[i] = 1; // 每行的最后一个 1
            for(int j = i - 1;j > 0;j--) { // 注意这里应该从右往左算，如果从左往右将会把上一行的数据覆盖
                result[j] = result[j - 1] + result[j];
            }
        }
        
        return result;
    }
};

/*
[
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1]
]

*/