/**
 * @param {number[]} nums
 * @return {number}
 */

// my algorithm
var removeDuplicates = function (nums) {

    var flag = true;
    while (flag) {
        flag = false;
        for (var i = 0; i < nums.length - 1; i++) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    nums.splice(j, 1);
                    flag = true;
                }
            }
        }
    }

    return nums.length;
};

// awnser algorithm
var removeDuplicates_answer = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    var number = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[number]) {
            number++;
            nums[number] = nums[i];
        }
    }
    number++;
    return number;

};

var nums = [1, 1, 2, 2, 3, 4, 4, 4, 5];

console.log(removeDuplicates_answer(nums), nums);

// filter api
var removeDuplicates_filter = function (nums) {
    return nums.filter((item, index, self) => {
        return self.indexOf(item) == index;
    });
}
var newArr = removeDuplicates_filter(nums);
console.log(newArr);