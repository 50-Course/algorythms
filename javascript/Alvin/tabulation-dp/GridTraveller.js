/**
 * Say you are a traveller moving on a 2d grid. You are sarting from
 * the top-left, and required to move all the way to the bottom-right.
 *
 * You may only move right and down the path on the grid.
 *
 * How many ways can you travel to the goal on the grid with m * n dimensions
 */
const gridTraveller = (m, n) => {
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];

      // check if our current position is within bounds, so we don't perform
      // illegal operation, and we add the current position to the next value
      // we can only do this "rightward" and "downward'"
      if (j + 1 <= n) table[i][j + 1] += current; // add downwards
      if (i + 1 <= m) table[i + 1][j] += current; // add right
    }
  }
  // console.table(table);
  return table[m][n];
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(10, 10));
console.log(gridTraveller(4, 5));
console.log(gridTraveller(18, 18));

module.exports = {
  gridTraveller,
};
