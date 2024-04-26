/**
 * Write a function that takes in an unsorted array and returns
 * an array with all the unique values sorted in ascending, followed by all the duplicate values sorted.in descending
 * order
 */
const dualsort = (arr) => {
    let count = {};
    let uniq = [];
    let dups = [];

    // count the number of times a number appears in the array
    arr.forEach((num) => {
        count[num] = (count[num] || 0) + 1;
    });

    arr.forEach((num) => {
        if (count[num] === 1) {
            uniq.push(num);
        } else {
            dups.push(num);
        }
    });

    uniq.sort((a, b) => a - b);
    dups.sort((a, b) => b - a);

    return [...uniq, ...dups];
};

console.log(dualsort([2, 1, 9, 1, 2, 5, 2, 6, 1]));
console.log(dualsort([2, 1, 9, 1, 2, 5, 1, 6, 1]));
