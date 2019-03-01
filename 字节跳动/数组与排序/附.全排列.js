/**
 * 1 2 3
 * 1 3 2
 * 2 1 3
 * 2 3 1
 * 3 2 1
 * 3 1 2
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n) {
    const result = [];
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i;
    }

    helper(result, arr, 0);
    return result;
};

var helper = function (result, arr, n) {
    if (n === arr.length - 1) {
        result.push(arr.join(''));
    }

    for (let i = n; i < arr.length; i++) {
        swap(arr, i, n);

        helper(result, arr, n + 1);

        swap(arr, n, i);
    }
};

var swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}