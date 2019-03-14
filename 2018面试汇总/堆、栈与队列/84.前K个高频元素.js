/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
说明：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 
 */
/**
 * 思路：
 *      使用map 做 数组元素 和 出现次数 的映射
 *      再用 result 数组做最后结果的存储
 *      由于map 中没有次序，所以先将map 中前 k 个key 放进 result 中
 *      后面的 key 则将 result 中出现次数最少的元素 替换即可
 *      但是这样 执行效率 一般
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const len = nums.length;
    const map = {};
    const result = [];

    for (let i = 0; i < len; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }

    for (let key in map) {
        if (result.length < k) {
            result.push(key);
        } else {
            let smallestIndex = 0;
            for (let i = 1; i < k; i++) {
                if (map[result[smallestIndex]] > map[result[i]]) {
                    smallestIndex = i;
                }
            }
            if (map[result[smallestIndex]] < map[key]) {
                result[smallestIndex] = key;
            }

        }
    }

    return result;
};

// answer algorithm  选了一个易懂的，充分使用了 map 和 Array 的 api
var topKFrequent_answer = function(nums, k) {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }
    let distinctNums = Array.from(map.keys());
    distinctNums.sort((a,b) => {
        return map.get(b) - map.get(a);
    })
    return distinctNums.slice(0, k);
};