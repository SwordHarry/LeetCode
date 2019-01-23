/**
 * @param {number[]} nums
 * @return {number}
 */

/*
问题：给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
*/

 // my algorithm
var singleNumber = function(nums) {
    
    var len = nums.length;
    var result,flag = false;
    for(var i = 0;i < len;i++) {
        for(var j = 0;j < len;j++) {
            if(nums[i] === nums[j] && i !== j) {
                flag = true;
               break;
            }
        }
        if(!flag) {
            result = nums[i];
            break;
        }
        flag = false;
    }
    
    return result;
};

// answer algorithm
/**
 * 使用二进制的异或，
 * 若出现重复数字，某一位经过两次异或之后将会变回0，
 * 只有单独存在的那个数字才会位变为1
*/
var singleNumber_answer = function(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
       result = result ^ nums[i];
   }
   return result;
}