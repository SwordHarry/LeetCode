/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
 */
/**
 * 思路：
 *      原地操作nums1
 *      nums1 和 nums2 做比较，
 *      如果nums2[j] < nums1[i] 就插入到 nums[i] 的前面，并且m++
 *      如果nums2[j] >= nums1[i] 就 i++ 直到 i > m 为止
 *      若 i > m ，nums2还未插入完毕则将其全部插入
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0,
        j = 0;

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            i++;
        } else {
            // 将 nums1 从i开始整体往后移动
            for (let index = m; index > i; index--) {
                nums1[index] = nums1[index - 1];
            }
            nums1[i] = nums2[j];
            m++;
            i++;
            j++;
        }
    }
    while (j < n) {
        nums1[i] = nums2[j];
        i++;
        j++;
    }
};