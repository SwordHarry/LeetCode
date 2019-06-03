#include <iostream>
using namespace std;

void bubbleSort(int nums[],int k) {
    for(int i = 0;i < k;i++) {
        bool flag = true;
        // 已经沉入数组底部的大数就不必要在以后比较了，故为 k - i
        for(int j = 1;j < k - i;j++) {
            if(nums[j - 1] > nums[j]) {
                // swap
                int temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
                flag = false;
            }
            
        }
        if(flag) {
            return;
        }
    }
}

int main(void) {

    int k = 9;
    int nums[k] = {-1,49,38,65,97,76,13,27,49};

    for(int i = 0;i < 9;i++) {
        cout << nums[i] << " ";
    }

    bubbleSort(nums,k);
    cout << endl;

    for(int i = 0;i < 9;i++) {
        cout << nums[i] << " ";
    }

    return 0;
}