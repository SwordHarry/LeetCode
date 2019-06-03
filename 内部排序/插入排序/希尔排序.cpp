#include <iostream>
#include <vector>
using namespace std;

void shellInsert(vector<int> &nums,int dlta);
void shellSort(vector<int> &nums,int dlta[],int t);

void shellSort(vector<int> &nums,int dlta[],int t) {
    for(int i = 0;i < t;i++) {
        shellInsert(nums,dlta[i]);

        cout << "The " << i + 1 << " count for the sort:";
        for(int j = 0;j < nums.size();j++) {
            cout << nums[j] << " ";
        }
        cout << endl;
    }
}

void shellInsert(vector<int> &nums,int dlta) {
    int len = nums.size();
    for(int i = dlta;i < len;i++) {
        if(nums[i] < nums[i - dlta]) {
            // 暂存变量，去掉哨兵
            int temp = nums[i];
            int j = i - dlta;
            for(;j >= 0 && temp < nums[j];j -= dlta) {
                nums[j + dlta] = nums[j];
            }
            nums[j + dlta] = temp;
        }
    }
}

int main(void) {

    
    vector<int> nums =  {49,38,65,97,76,13,27,49,55,04};
    int len = nums.size();

    for(int i = 0;i < len;i++) {
        cout << nums[i] << " ";
    }

    // 增量数组
    int dlta[] = { 5, 3, 1 };
    int t = 3;
    // 希尔排序
    cout << endl;
    shellSort(nums,dlta,t);
    cout << endl;

    for(int i = 0;i < len;i++) {
        cout << nums[i] << " ";
    }

    return 0;
}