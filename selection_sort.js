const swap = (a, b) => {
  tmp = a;
  a = b;
  b = tmp;
};

const selection_sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    min = i;

    for (let j = i + 1; j <= array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      // swap values of lowest with first value of the unsorted list
      swap(array[i], array[min]);
    }
  }
  return array;
};

console.log(selection_sort([14, 5, 10, 32]));
