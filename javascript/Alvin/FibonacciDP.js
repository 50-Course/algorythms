/**
 * Working with dynamic programming requires two approach
 * 
 * - Memoization, involves keep track of call states at point in time
 * - And another....
 */

// Using Fibonacci with DFS - recursive approach
function fib(number, memo = {}) {
    //with memo
    if (number in memo) return memo[number];

    // base case - number is 1 or n is 2 reeturn the number
    if (number <=2) return number;

    memo[number] = fib(number - 1, memo) + fib(number - 2, memo);
    return memo[number];
}

console.log(fib(2));
console.log(fib(5));
console.log(fib(10));
console.log(fib(50));

module.exports = {
    fib
}