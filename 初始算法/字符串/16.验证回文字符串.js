/**
 * @param {string} s
 * @return {boolean}
 */
// 对于正则表达式的应用
// /[^0-9a-zA-Z]/g
var isPalindrome = function(s) {

    var str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    const len = str.length;
    for(let i = 0;i < ~~(len/2);i++) {
        if(str[i] !== str[len - 1 - i]){
            return false;
        }
    }
    
    
    return true;
};