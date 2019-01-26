/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trimLeft();
    let result = '';

    if (str[0] === '-' || str[0] === '+') {
        result += str[0];
        str = str.slice(1);
    }

    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (/\d/.test(str[i])) {
            result += str[i];
        } else {
            break;
        }
    }
    if (result.length === 0) {
        return 0;
    } else if (result.length === 1 && (result === '-' || result === '+')) {
        return 0;
    } else {
        var num = Number(result);
        if (num > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        } else if (num < -Math.pow(2, 31)) {
            return -Math.pow(2, 31);
        } else {
            return num;
        }
    }
};


// answer algorithm
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi_answer = function (str) {
    str = str.trim();
    if (!str) {
        return 0;
    }

    if (str.length === 1) {
        return isNaN(+str) ? 0 : +str;
    }

    let extractReg = /^([+|-]?)(\d+)/;

    let signal = '';
    let num = 0;
    let newStr = str.replace(extractReg, (match, $signal, $num) => {
        signal = $signal;
        num = $num;
    });

    if (!num) {
        return 0;
    }

    if (num >= Math.pow(2, 31)) {
        num = signal === '-' ? Math.pow(2, 31) : Math.pow(2, 31) - 1;
    }

    return signal === '-' ? (-num) : num;
};