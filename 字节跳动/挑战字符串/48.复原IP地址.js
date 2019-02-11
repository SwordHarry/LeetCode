/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
 */
/**
 * 思路：
 *      给定一个字符串，将其用三个点分割成四部分
 *      每部分有如此规定：
 *           数字大于255 ，非法
 *           数字含多余前缀0，非法
 *           
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = [];

    spliceIP(s, 1, 1, '', result);
    spliceIP(s, 1, 2, '', result);
    spliceIP(s, 1, 3, '', result);

    return result;
};

var spliceIP = function (s, deepth, index, resultStr, result) {
    if (deepth > 4) {
        return;
    }

    let subStr = '';
    if (deepth === 4) {
        subStr = s;
    } else {
        subStr = s.substr(0, index);
        s = s.substr(index);
    }

    if (isValid(subStr)) {
        resultStr = resultStr + '.' + subStr;
        if (deepth === 4) {
            result.push(resultStr.substr(1));
        } else if (deepth === 3) {
            // 第三层往下就是第四层，第四层的index参数已经不需要了
            spliceIP(s, deepth + 1, 1, resultStr, result);
        } else {
            spliceIP(s, deepth + 1, 1, resultStr, result);
            spliceIP(s, deepth + 1, 2, resultStr, result);
            spliceIP(s, deepth + 1, 3, resultStr, result);
        }

    } else {
        return;
    }

};
// 判断 IP段 是否合法
var isValid = function (s) {
    if (!s.length || s.length > 3) {
        return false;
    }

    if (s[0] === '0' && s.length !== 1) {
        return false;
    }

    if (Number(s) > 255) {
        return false;
    }

    return true;
};