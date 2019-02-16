/**
 * 给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */
/**
 * 思路：
 *      关键是如何合并，我这里使用 数组的 splice API进行数组元素的删除来达到合并
 *      O(n^2)时间复杂度，O(1)常数空间复杂度
 *      在时间上还要优化
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    const len = intervals.length;
    if (len < 2) {
        return intervals;
    }

    for (let i = 0; i < intervals.length - 1; i++) {
        let flag = false;
        for (let j = i + 1; j < intervals.length; j++) {
            if (intervals[i].end >= intervals[j].start && intervals[i].start <= intervals[j].end) {
                // 合并
                intervals[i].start = Math.min(intervals[j].start, intervals[i].start);
                intervals[i].end = Math.max(intervals[j].end, intervals[i].end);
                flag = true;
                intervals.splice(j, 1);
            }
        }
        if (flag) {
            i--;
        }
    }

    return intervals;
};

// answer algorithm
/**
 * 思路：将数组先按 start 的大小正序排序
 *      判断j的start 和 当前 i 的 end 的关系
 *      如果可以合并则直接 合并 end 即可，因为start 已经按正序排序了
 *      不能合并就把 j 的指向 赋值 给 i的下一个
 *      最后把数组的长度重新赋值，剔除后面的重复部分
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    if (intervals.length == 0) return []
    intervals.sort(function (a, b) {
        return a.start - b.start
    })
    var i = 0
    for (var j = 1; j < intervals.length; j++) {
        if (intervals[j].start <= intervals[i].end) {
            intervals[i].end = Math.max(intervals[i].end, intervals[j].end)
        } else {
            intervals[++i] = intervals[j]
        }
    }
    intervals.length = i + 1
    return intervals
};