function qsort(arr) {
    
    // create a partion
    partition(arr, 0, arr.length - 1);
    // sort the left part
    sort(arr, 0, partition(arr, 0, arr.length - 1) - 1)
    // sort the right part
    sort(arr, partition(arr, 0, arr.length - 1), arr.length - 1)

}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}    

function sort(arr, left, right) {
    if (left >= right) {
        return;
    }

    var index = partition(arr, left, right);
    sort(arr, left, index - 1);
    sort(arr, index, right);
}
