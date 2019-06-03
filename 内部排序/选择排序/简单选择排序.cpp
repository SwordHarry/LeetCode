#include <iostream>
using namespace std;

void selectSort(int nums[],int k);
int findMinIndex(int nums[],int count,int k);

void selectSort(int nums[],int k) {
    for(int i = 0;i < k;i++) {
        int j = findMinIndex(nums,i,k);
        if(i != j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}

int findMinIndex(int nums[],int count,int k) {
    int minIndex = count;

    for(int i = count + 1;i < k;i++) {
        if(nums[minIndex] > nums[i]) {
            minIndex = i;
        }
    }

    return minIndex;
}

int main(void) {

    int k = 7;
    int nums[] = {44, 39, 56, 78, 12, 32, 47};

    for(int i = 0;i < k;i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    selectSort(nums,k);

    for(int i = 0;i < k;i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}