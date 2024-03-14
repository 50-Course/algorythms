function BFS(graph, start) {
    let queue = [start];
    let result = [];
    let visited = {}; 
    visited[start] = true;
    
    while (queue.length) {
        var vertex = queue.shift();
        result.push(vertex);
    
        graph[vertex].forEach(function(neighbor) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
        }
        });
    }
    
    return result;
} 

// explain what is going on in the above code snippet line by line
// 1. We create a queue and add the start node to it - since javascript does not have a Queue built-in structure that is why
// we use an array to simulate a queue? Is that correct? 
// 2. We create a result array to store the nodes we visit
// 3. We create a visited object to keep track of the nodes we visit
// 4. We set the start node as visited
// 5. We start a while loop that will run as long as the queue is not empty
// 6. We remove the first node from the queue and add it to the result array? Could this be added as:
//      result.push(queue.shift());? 
//      I think this is more readable and concise - Perfecto!
//  7. We loop through the neighbors of the current node and if they have not been visited we add them to the queue and mark them as visited
//  8. We return the result array
//  9. I think this is a good implementation of the BFS algorithm in javascript.

// Let's test the BFS function with the following graph:
// 0: 1, 2
// 1: 2
// 2: 0, 3
// 3: 3
// The result should be [2, 0, 3, 1]

describe('BFS', function() {
  it('should return the result of the BFS algorithm', function() {
 let graph = {
       0: [1, 2],
       1: [2],
       2: [ 0, 3],
       3: [3],
   } 
    expect(BFS(graph, 2)).toEqual([2, 0, 3, 1]);
    });
});


