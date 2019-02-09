/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
 

示例2:

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 

注意：

输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间
 * 
 * 
 */

// my algorithm
/**
 * 思路：使用 map 将s1结构化，然后遍历map2
 *      如果遍历到的字符在s1里面(indexOf)
 *      则将后面s1长度的字符与map进行比较
 *      耗时太长了
 * */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // 在子串的基础上 使得子串可以排列
    const len1 = s1.length;
    const len2 = s2.length;
    const map = {};
    let cloneMap = {};
    let index = -1;
    let flag = false;
    for (let i of s1) {
        map[i] = map[i] + 1 || 1;
    }
    cloneMap = Object.assign(cloneMap, map);

    for (let i = 0; i < len2; i++) {
        index = s1.indexOf(s2[i]);
        if (index !== -1) {
            for (let j = 0; j < s1.length; j++) {
                if (cloneMap[s2[i + j]]) {
                    flag = true;
                    cloneMap[s2[i + j]]--;
                } else {
                    cloneMap = Object.assign({}, map);
                    break;
                }
            }
        }

        for (let i in cloneMap) {
            if (cloneMap.hasOwnProperty(i)) {
                if (cloneMap[i] !== 0) {
                    flag = false;
                }
            }
        }
        if (flag) {
            return true;
        }
    }

    return flag;
};

// answer algorithm
/**
 * 思路：留意题意：输入的字符串只包含小写字母，故只有26个英文字母
 *      使用一个标志数组 diff ，对于s1的所有字符的[unicode - 97]下标进行 + 1操作，同理对于s2中等s1长的子串（窗口，从0开始）进行 - 1操作
 *      判断diff中所有的元素是否为零，是则return true;否则s2窗口右移1位，注意右移的时候需要将窗口外的元素进行 + 1操作，新加入窗口内的元素进行 - 1操作
 *      如此可以无视s1的排列，只需要管s2的子串窗口中是否是s1的所有字符的集合即可
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const diff = Array(26).fill(0);

    const len1 = s1.length;
    const len2 = s2.length;
    for (let i = 0; i < len1; i++) {
        diff[s1.charCodeAt(i) - 97]++;
        diff[s2.charCodeAt(i) - 97]--;
    }

    if (diff.every((val) => {
            return val === 0;
        })) {
        return true;
    }

    for (let i = len1; i < len2; i++) {
        diff[s2.charCodeAt(i - len1) - 97]++;
        diff[s2.charCodeAt(i) - 97]--;

        if (diff.every((val) => {
                return val === 0;
            })) {
            return true;
        }
    }

    return diff.every((val) => {
        return val === 0;
    });

};