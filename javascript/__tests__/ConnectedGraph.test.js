const connectedGraph = require("../ConnectedGraph");

let graph = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

describe("Determine if the nodes of a graphs are connected", () => {
  it("should return true if the nodes are connected", () => {
    expect(connectedGraph(graph, graph[0])).toBe(true);
  });
  it("Should return the number of connected nodes", () => {
    expect(connectedGraph(graph)).toBe(2);
  });
});
