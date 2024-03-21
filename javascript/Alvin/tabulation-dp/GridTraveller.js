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

  console.log(table);
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(10, 10));
console.log(gridTraveller(4, 5));

module.exports = {
  gridTraveller,
};
