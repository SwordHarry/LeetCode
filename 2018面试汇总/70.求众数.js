/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
 * 
 */
/**
 * 思路：
 *      需要在 优秀的 时间复杂度 下解决问题
 *      设置一个计数 和 结果
 *      如果后面的数和结果相同，计数+1
 *      如果不同，计数 -1 ，如果计数为零，
 *      结果 赋值为当前值，并且count 再次置为1
 *  
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    let count = 1;
    let result = nums[0];
    
    for(let i = 1;i < len;i++) {
        if(result === nums[i]) {
            count++;
        } else {
            count--;
            if(!count) {
                result = nums[i];
                count = 1;
            }
        }
    }
    
    return result;
};