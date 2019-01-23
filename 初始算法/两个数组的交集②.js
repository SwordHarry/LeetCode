/**
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */


// my algorithm
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 思路：使用map来统计相同的数字和出现次数
 *      其实就是熟悉map的api
 */
var intersect = function (nums1, nums2) {
    var result = [];

    var map1 = setMap(nums1);
    var map2 = setMap(nums2);

    for (var [key, value] of map1) {
        var final = map2.get(key);

        if (typeof final !== "undefined") {
            var maxCount = getMin(map1.get(key), map2.get(key));
            for (var j = 0; j < maxCount; j++) {
                result.push(key);
            }
        }
    }

    return result;
};
var setMap = function (nums) {
    var map = new Map();
    for (var num of nums) {
        if (typeof map.get(num) !== "undefined") {
            var count = map.get(num);
            map.set(num, ++count);
        } else {
            map.set(num, 1);
        }
    }
    console.log(map);
    return map;
};
var getMin = function (num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

// answer algorithm
/**
 * 其实可以简单实现一个小型map，而且速度更快
 */
let intersect_answer = function (nums1, nums2) {
    let res = [];
    let map = {};
    for (let e of nums1) {
        map[e] = map[e] + 1 || 1;
    }
    for (let e of nums2) {
        if (map[e]) {
            res.push(e);
            map[e]--;
        }
    }
    return res;
};