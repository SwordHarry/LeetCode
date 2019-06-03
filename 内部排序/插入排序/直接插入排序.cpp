#include <iostream>
using namespace std;

void insertSort(int nums[],int k) {
    for(int i = 2;i < k;i++) {
        if(nums[i] < nums[i - 1]) {
            nums[0] = nums[i];
            nums[i] = nums[i - 1];
            int j = i - 2;
            for(;j > 0 && nums[0] < nums[j];j--) {
                nums[j + 1] = nums[j];
            }
            nums[j + 1] = nums[0];
        }
    }
}

int main(void) {

    int k = 9;
    int nums[k] = {-1,49,38,65,97,76,13,27,49};

    for(int i = 1;i < 9;i++) {
        cout << nums[i] << " ";
    }

    insertSort(nums,k);
    cout << endl;

    for(int i = 1;i < 9;i++) {
        cout << nums[i] << " ";
    }

    return 0;
}