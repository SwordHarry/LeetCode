/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// my algorithm
/**
 * 思路：
 *   旋转n步其实就是执行n次的旋转1步
 *   虽然我这么想的话，执行时间很慢，但是可以实现
 * 
 * */
var rotate = function (nums, k) {
    // ------容错------
    if (k < 1) {
        return;
    }

    if (nums.length < 2) {
        return;
    }
    // ------容错------

    var init = nums[0];
    var temp;
    var index;
    while (k > 0) {
        for (var i = 0; i < nums.length; i++) {
            index = (i + 1) % nums.length;
            temp = nums[index];
            nums[index] = init;
            init = temp;
        }
        k--;
        init = nums[0];
    }

};

/**
 * 大神解法：
 * 充分使用 javascript 中对数组操作的 api 实现 旋转数组操作
 * splice unshift
 */

var rotate_answer = function (nums, k) {
    let l = nums.length;
    k %= l;
    nums.unshift(...nums.splice(l - k, k));
}