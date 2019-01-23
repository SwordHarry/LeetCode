/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // my algorithm
var containsDuplicate = function(nums) {
    var len = nums.length;
    for(var i = 0;i < len-1;i++) {
        for(var j = i+1;j < len;j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// answer algorithm
/**
 * 充分使用数据结构的特点，set集合中不存在重复元素
 * 
*/
var containsDuplicate_answer = function(nums) {
    return new Set(nums).size !== nums.length;
}