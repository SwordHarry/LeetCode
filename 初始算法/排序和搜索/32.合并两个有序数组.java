class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = 0, j = 0;
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                i++;
            } else {
                for (int index = m; index > i; index--) {
                    nums1[index] = nums1[index - 1];
                }

                nums1[i] = nums2[j];

                i++;
                m++;
                j++;
            }
        }

        while (j < n) {
            nums1[i] = nums2[j];
            i++;
            j++;
        }
    }
}