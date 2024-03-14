const graph = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
let visited = new Array(graph.length).fill(false);
let count = 0;

function dfs(node) {
  if (visited[node]) {
    return;
  }

  visited[node] = true;

  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

for (let i = 0; i < graph.length; i++) {
  if (!visited[i]) {
    count++;
    dfs(i);
  }
}

console.log("Number of connected components:", count); // Output: 2
