#include <vector>
#include <iostream>
using namespace std;

void printNums(vector<int> & nums) {
    int len = nums.size();

    for(int i = 0;i < len;i++) {
        cout << nums[i] << " ";
    }

    cout << endl;
}

void merge(vector<int> &nums,int left,int mid,int right) {
    int len = right - left + 1;
    vector<int> temp(len,0);
    int i = 0;
    int l = left;
    int r = mid + 1;

    for(;l <= mid && r <= right;i++) {
        if(nums[l] < nums[r]) {
            temp[i] = nums[l];
            l++;
        } else {
            temp[i] = nums[r];
            r++;
        }
    }

    while(l <= mid) {
        temp[i] = nums[l];
        i++;
        l++;
    }
    while(r <= right) {
        temp[i] = nums[r];
        i++;
        r++;
    }

    for(i = 0;i < len;i++) {
        nums[left + i] = temp[i];
    }
}

void MSort(vector<int> &nums,int left,int right) {
    if(left >= right) {
        return;
    } else {
        int mid = (left + right) / 2;
        MSort(nums,left,mid);
        MSort(nums,mid + 1,right);
        merge(nums,left,mid,right);
    }
    
    
    
}

void mergeSort(vector<int> &nums) {
    // 0 -> len - 1
    MSort(nums,0,nums.size() - 1);
}

int main(void) {

    vector<int> nums = {12,35,7,2,46,87,32,64,79,45};

    printNums(nums);

    mergeSort(nums);

    printNums(nums);

    return 0;
}