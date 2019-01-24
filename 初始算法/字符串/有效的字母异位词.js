/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    var map = {};
    for (let c of s) {
        map[c] = map[c] + 1 || 1;
    }

    for (let c of t) {

        if (typeof map[c] === "undefined" || map[c] === 0) {
            return false;
        } else {
            map[c]--;
        }
    }
    return true;
};


// answer algorithm
/**
 * 思路：
 *  利用正则表达式，
 * 不断地将两个字符串中出现的某个 字符全部去掉，
 * 以此判断是否是字母异位词，
 * 因为字母异位词，中出现的字母和次数都是一样的，只是顺序不同
 */
var isAnagram_answer = function (s, t) {

    while (s !== t && s.length === t.length) {
        if (s === t || s.length !== t.length) {
            break;
        }
        
        var letter = new RegExp(s[0], 'g');
        s = s.replace(letter, '');
        t = t.replace(letter, '');
    }
    return s === t;
};