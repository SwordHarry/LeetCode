/**
 * 
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */


 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// my algorithm
/**
 * 我觉得这条题因为有 js 原生的数组 api 所以不难，
 * 可是如果不准使用api的情况下又该怎么实现
 * 
 *  */ 
var moveZeroes = function(nums) {
    var zeroCount = 0;
    var len = nums.length;
    for(var i = len;i >= 0;i--) {
        if(nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
        }
    }
};