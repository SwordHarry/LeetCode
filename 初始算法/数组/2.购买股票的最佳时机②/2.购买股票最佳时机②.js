/**
 * @param {number[]} prices
 * @return {number}
 */
// my algorithm
var maxProfit = function (prices) {
    var flag = true;
    var sum = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1] && flag) {
            sum -= prices[i];
            flag = false;
        } else if (prices[i] > prices[i + 1] && !flag) {
            sum += prices[i];
            flag = true;
        }
    }

    if (!flag) {
        sum += prices[prices.length - 1];
    }

    return sum;
};

// answer algorithm
var maxProfit_answer = function (prices) {
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            max += prices[i + 1] - prices[i];
        }
    }
    return max;
}