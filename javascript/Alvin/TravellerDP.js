class Node {
    constructor(val) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/**
 * Given you an adventurer, that needs to move on an M * N grid, you
 * are required to move from the top-left to the bottom-right.
 * 
 * How many ways can you travel to the goal on the grid of dimensions, m*n
 * 
 * 
 * THIS IS A BRILLIANT DYNAMIC PROGRAMMING QUESTION
 * 
 * So first try, what are the patterns we see here,
 * - We need to visit a grid only once that is! What DS? A queue? why? It allows
 *   us to keep track of the order we visit the node such that we visit it only once,
 *   we enqueue a node to visit, visit it, backtrack - flush it off the queue
 * - Are you smelling another pattern here? Bread-first search. But then we working with
 *    a grid, meaning arrays, 2D arrays.
 */
const timeTraveller = (m, n) = {
}

module.exports = {
    timeTraveller
}
