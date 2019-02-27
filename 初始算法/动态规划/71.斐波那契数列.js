/**
 * 
 * 
 */
function Fibonacci(n) {
    // write code here
    let num1 = 1;
    let num2 = 0;
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }

    return result;
}