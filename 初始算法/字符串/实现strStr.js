/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) {
        return 0;
    }
    
    let result = -1;
    for(let i = 0,haystackLen = haystack.length;i < haystackLen;i++) {
        if(haystack[i] === needle[0]) {
            result = i;
            for(let j = 1,needleLen = needle.length;j < needleLen;j++) {
                if((i + j) >= haystackLen || haystack[i + j] !== needle[j]) {
                    result = -1;
                    break;
                }
            }
        }
        if(result !== -1) {
            break;
        }
    }
    
    return result;
};

// 其实可以直接用 api  indexOf ？？？