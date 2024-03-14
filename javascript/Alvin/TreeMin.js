const { ThreeSum } = require("./3Sum");

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Finds the smallest minimum value in a given tree
 * @param {Node} node 
 * @returns {Node} node value in agiven tree structure 
 */
const TreeMin = node => {
    let minimums = 0;
    let queue = new Array(node);

    if (node === null) return Number.POSITIVE_INFINITY; /// Because infinity can't def be a minimum, so we assign
                                                        /// to null pointers, given we infact don't want to work with
                                                        /// them
    while(queue.length > 0) {
        let current = queue.shift();

        if (current.val !== null && current.val <= minimums) minimums = current.val;

        if (current.right !== null) queue.push(current.right)
        if (current.left !== null) queue.push(current.left)
    }
    return minimums;

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

console.log(`Min value in a tree: `, TreeMin(a));

module.exports = {
    TreeMin
}