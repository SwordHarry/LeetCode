/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * 思路：
 *      考点是二分查找 
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 1,
            index = low;
        let hight = n;

        while (low < hight) {
            index = ~~((low + hight) / 2);
            if (isBadVersion(index)) {
                hight = index;
            } else {
                low = index + 1;
            }
        }

        return hight;
    };
};