/**
 * Write a functon that takes in a maze, the size of the maze is > 2,
 * and returns true if the maze has a path from the top left corner to the
 * bottomost-right corner.
 *
 * Maze tiles are represented as a matrix of 0 and 1. Where passable tiles are represented as
 * 0s and walls as 1s.
 *
 * Possible movements  is vertical and horizontal - which means we can walk in all four directions.
 * No diagonal movements
 */
const hasPath = (maze, start, dest) => {
  // positions are represented as a matrix of (x, y location) - (0,0) is the starting postion of topmost left
  // (0, 1) is the movement one tile to the right along the x axis.
  // (1,0) - movement one tile to the bottom along the y-axis
  // We want to keep track of visited tiles so we don't revist them
  // then we can do a dfs -  depth first search transversal till we have visited the destination tile.
  // The destination tile is (maze.length[-1][-1])

  if (maze.length <= 2) return false;
  let stack = [start];
  let visited = new Array(maze.length).fill().map(() => false);

  console.table(visited);

  while (stack.length > 0) {
    let current_pos = stack.pop();

    if (current_pos !== null || current_pos !== undefined) {
      stack.push(maze[current_pos]);
    }

    // backtrack and label the tile as visited
    visited[current_pos] = true;

    if (
      // down
      ((maze[current_pos] && maze[current_pos] + 1) ||
        // right
        (maze[current_pos] + 1 && maze[current_pos]) ||
        // left
        (maze[current_pos] - 1 && maze[current_pos]) ||
        // up
        (maze[current_pos] && maze[current_pos] - 1)) === dest
    ) {
      return true;
    }
  }

  return false;
};
