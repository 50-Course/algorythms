/**
 * Fibonacci problem using the tabulation approach of dyanmic programming
 *
 * The objective here is to have it all in O(n) space and O(n) time
 */
const fib = (n) => {
  let array = new Array(n + 1).fill(0);
  array[1] = 1;

  for (let i = 0; i <= n; ++i) {
    array[i + 1] += array[i];
    array[i + 2] += array[i];
  }
  return array[n];
};

console.log(fib(6));
console.log(fib(8));
console.log(fib(11));
console.log(fib(20));
console.log(fib(50));

module.exports = {
  fib,
};
