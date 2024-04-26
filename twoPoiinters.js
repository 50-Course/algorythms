function twoPinter(array, target) {
    sortedArr = array.toSorted();
    let left = 0;
    let right = sortedArr.length -1;

    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right] 
        if (sum === target) {
            return [sortedArr[left], sortedArr[right]]
        }
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1]
}
console.log(twoPinter([1, 2, 3, 4, 5, 6], 3))

