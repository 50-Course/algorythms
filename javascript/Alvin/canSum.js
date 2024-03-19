/** Checks if there are elements in an array that could sum up to a number */
function canSum(target, someArray, memo = {}) {
  if (target in memo) return memo[target];
  // if we hit a base case of zero, we return true
  // however, negative value means there's remainder, which does not sum up to
  // the targetValue
  if (target === 0) return true;
  if (target < 0) return false;

  for (let n of someArray) {
    const remainder = target - n;
    if (canSum(remainder, someArray, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [4, 3]));
console.log(canSum(7, [5, 2, 4, 3, 7]));
console.log(canSum(7, [2, 3, 5]));
console.log(canSum(7, [2, 7, 14]));
console.log(canSum(7, [5, 3, 2, 1]));
console.log(canSum(100, [5, 3, 2, 1]));
console.log(canSum(100, [5, 3, 2, 1000]));
console.log(canSum(300, [7, 14]));
console.log(canSum(100, [7, 14]));
console.log(canSum(5, [5, 10]));

export default {
  canSum,
};
