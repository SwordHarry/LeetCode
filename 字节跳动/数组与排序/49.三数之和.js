/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * 思路：
 *      这里是要求出 三个数组内元素和为零， 元素组合不能重复
 *      和为零意味着数组内有正有负
 *      1.对数组进行正序排序
 *      2.指定a = nums[0] ,b = nums[i = a + 1],c = nums[j = nums.length - 1]
 *      3.若 a > 0 ，则可以return []；
 *      4.判断 a === -b-c
 *      5.如果是  将三元组 push 入result，i 向 右移动,j向左移动
 *          *注意：如果移动后的数字相同，则继续移动，避免重复
 *      6.如果不是，分两种情况：此时数组已排序，越往右数字越大
 *          a > -b-c：j 向左移动
 *          a < -b-c：i 向右移动
 *      直到 i >= j 为止
 *      7.遍历完一遍后，a向右移动，同理，需要判断移动后的数字是否相同，
 *          相同则继续移动直到index >= len 为止
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const len = nums.length;
    if (len < 3) {
        return [];
    }
    // 对数组排序，分成正和负
    nums.sort((a, b) => {
        return a - b;
    });

    console.log(nums);

    const result = [];

    for (let index = 0; index < len; index++) {

        let i = index + 1;
        let j = len - 1;
        if (nums[index] > 0) {
            break;
        }
        if (index > 0 && nums[index] === nums[index - 1]) {
            continue;
        }
        while (i < j) {
            if (nums[index] === -nums[i] - nums[j]) {
                result.push([nums[index], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[i + 1]) {
                    i++;
                }
                while (i < j && nums[j] === nums[j - 1]) {
                    j--;
                }
                i++;
                j--;
            } else if (nums[index] > -nums[i] - nums[j]) {
                j--;
            } else {
                i++;
            }
        }
    }

    return result;
};