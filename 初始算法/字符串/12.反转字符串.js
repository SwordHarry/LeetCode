/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var len = s.length - 1,
        halfLen = ~~(s.length / 2),
        i,temp;
    for(i = 0;i < halfLen;i++) {
        temp = s[i];
        s[i] = s[len - i];
        s[len - i] = temp;
    }

    // or
    // s.reverse();
};