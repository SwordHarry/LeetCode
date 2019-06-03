#include <iostream>
using namespace std;


void quickSort(int nums[],int low,int high);
int partition(int nums[],int low,int high);

void quickSort(int nums[],int low,int high) {
    
    if(low < high) {
        int index = partition(nums,low,high);
        quickSort(nums,low,index - 1);
        quickSort(nums,index + 1,high);
    }
}

int partition(int nums[],int low,int high) {

    int key = nums[low];
    while(low < high) {
        while(low < high && nums[high] >= key) {
            --high;
        }
        nums[low] = nums[high];
        
        while(low < high && nums[low] <= key) {
            ++low;
        }
        nums[high] = nums[low];
    }
    nums[low] = key;

    return low;
}

int main(void) {

    int k = 9;
    int nums[k] = {04,49,38,65,97,76,13,27,49};

    for(int i = 0;i < 9;i++) {
        cout << nums[i] << " ";
    }

    quickSort(nums,0,k - 1);
    cout << endl;

    for(int i = 0;i < 9;i++) {
        cout << nums[i] << " ";
    }

    return 0;
}