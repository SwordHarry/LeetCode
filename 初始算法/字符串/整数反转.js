/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x.toString();
    var strArr = str.split('');
    var symbol = '';
    if(str[0] === "-") {
        symbol = strArr.shift();
    }
    
    x = Number(symbol + strArr.reverse().join(''));
    if(x > Math.pow(2,31) - 1 || x < -Math.pow(2,31)) {
        return 0;
    }
    return x;
};


// answer algorithm
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let digit = 0, res = 0;
    while (x !== 0) {
      digit = x % 10;
      res = res * 10 + digit;
      x = (x - digit) / 10;
    }
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
      return 0;
    } else {
      return res;
    }
  };