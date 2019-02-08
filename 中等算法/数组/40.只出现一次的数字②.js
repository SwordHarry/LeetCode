/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,3,2]
输出: 3
示例 2:

输入: [0,1,0,1,0,1,99]
输出: 99
 */

// my answer ：改变了数组的长度，且需要保证数组内的数字非负。。。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[0] = nums[0] ^ nums[i];
        if (nums[0] === 0) {
            nums.push(nums[i]);
        }
    }

    return nums[0];
};

// 思路：00 -> 01 -> 10 -> 00
// 设计一个逻辑电路能表示三位
/**
 * a、b都是32位的变量。
 * 我们使用a的第k位与b的第k位组合起来的两位二进制，表示当前位出现了几次。
 * 也就是，一个8位的二进制x就变成了16位来表示。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let a = 0,
        b = 0;
    for (let num of nums) {
        a = (a ^ num) & ~b;
        b = (b ^ num) & ~a;
        console.log(a, b)
    }

    return a;
};