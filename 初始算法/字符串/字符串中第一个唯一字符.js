/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar_1 = function(s) {
    var map = {};
    for(let c of s) {
        map[c] = map[c] + 1 || 1;
    }
    
    for(let c of s) {
        if(map[c] === 1){
            return s.indexOf(c);
        }
    }
    return -1;
};

var firstUniqChar_2 = function(s) {
    let i,len = s.length;
    for(i = 0;i < len;i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))
            return i;
    }
    return -1;
    
};

// answer algorithm
var firstUniqChar_answer = function(s) {
    let firstUniqChar = s.length;
     let alpha = "abcdefghijklmnopqrstuvwxyz";
     for (let i = 0; i < alpha.length; i++) {
         let index = s.indexOf(alpha[i]);
         if (index != -1 && index == s.lastIndexOf(alpha[i])) {
             if (index < firstUniqChar) {
                 firstUniqChar = index;
             }
         }
     }
     return firstUniqChar == s.length ? -1 : firstUniqChar;
 };