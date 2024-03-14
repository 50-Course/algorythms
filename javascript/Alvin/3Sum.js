class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Computes the tatal sum of nodes in a tree that is equal to some
 * target sum.
 * 
 * Uses a BFS approach (recursive approach)
 * 
 * {@param} node Tree-like structure with nodes
 * {@param} target total sum which some node must be equivalent to
 * {@returns} result sum of nodes of a given tree
 */
const ThreeSum = (node) => {
    if (node === null) return 0;
    return node.val + ThreeSum(node.left) + ThreeSum(node.right);
}

// Iterative approach
const threeSum= (node) => {
    if (node === null) return 0;
    let queue = 0;
    let sum = 0;
    while(queue.length > 0) {
        let current = queue.shift()
        sum += current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return sum;
}

// Three sum using the DFS approach iterativvely
//
// Uses Data-Right-Left order transversal in otherwords, In-order transbersal
const threeSumDFS = (node) => {
    let sum = 0;

    let stack = new Array(node);

    if (node === null) return 0;
    while(stack.length > 0) {
        let current = stack.pop()
        sum += current.val;

        if (current.right !== null) stack.push(current.right)
        if (current.left !== null) stack.push(current.left);
    }
    return sum;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);


a.left = b;
a.right = c;
a.left.right = d;
a.left.left = g;
b.right = f;
b.left = e;


console.log(threeSum(a));
console.log(ThreeSum(a));
console.log(threeSumDFS(a));

module.exports = {
    ThreeSum,
    threeSum,
    threeSumDFS
}