#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        
        for(int i = 0;i < numRows;i++) {
            vector<int> temp(i + 1,0);
            temp[0] = 1;
            temp[temp.size() - 1] = 1;
            for(int j = 1;j < i;j++) {
                temp[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
            result.push_back(temp);
        }
        
        return result;
    }
};

int main(void) {

    Solution s;
    s.generate(3);

    return 0;
}