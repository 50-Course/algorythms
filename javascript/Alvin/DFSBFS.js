class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function dfs(node) {
    let result = []; 
    let stack = [node];

    if (node === null || node === undefined) return [];
    while(stack.length > 0) {
        let current = stack.pop();
        if (current && (current.val !== undefined && current.val !== null) ) {
            result.push(current.val);
        }
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
}

function recursiveDFS(node) {
    if (node === null || node === undefined) return [];
    let leftVals = recursiveDFS(node.left);
    let rightVals = recursiveDFS(node.right);
    return [...rightVals,...leftVals, node.val]
}

function bfs(node) {
    let result = [];
    let queue = [node];
    let visited = new Array(node.length).fill(false);

    if (node === null || node === undefined) return [];

    while ( queue.length > 0) {
        let current = queue.shift();
        if (current.val !== null && current.val !== undefined) result.push(current.val);

        if(current.right !== null && current.right !== undefined)  queue.push(current.right);
        if(current.left !== null && current.left !== undefined)  queue.push(current.left);
        
        
    }
    return result;
}

function bfs_match(node, targetNode) {
    let queue = [node];

    if (node === null || node === undefined) return false;

    while ( queue.length > 0) {
        let current = queue.shift();
        if (current.val !== null && current.val !== undefined && current.val === targetNode) return true;

        if(current.right !== null && current.right !== undefined)  queue.push(current.right);
        if(current.left !== null && current.left !== undefined)  queue.push(current.left);  
    }
    return false;
}

function dfs_match(node, targetNode) {
    let stack = [node];

    if (node === null && node === undefined) return false;

    while (stack.length > 0) {
        let current = stack.pop();

        if (current.val !== null && current.val !== undefined && current.val === targetNode) return true;

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return false;
}

function recursiveDFSMatch(node, targetNode) {
    if (node === null && node === undefined) return false;
    return (node !== null && node !== undefined) ? 
        node.val == targetNode &&
        recursiveDFS_search(node.left, targetNode) &&
        recursiveDFS_search(node.right, targetNode)
    : false;
}


/* Driver code for our tree */
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
let h = new Node(undefined );
let i = new Node(null);

a.left = b;
a.right = c;
a.left.right = d;
a.left.left = g;
b.right = f;
b.left = e;
console.log(`BFS Transversal:`, bfs(a));
console.log(`DFS Transversal:`, dfs(a));
console.log('*** Tree Includes: Searching for a target with BFS ***');
console.log(`Searched for: ${'l'} in ${bfs(a)}`, bfs_match(a, 'l'));
console.log(`Searched for: ${'z'} in ${bfs(a)}`, bfs_match(a, 'z'));
console.log(`Searched for: ${'c'} in ${bfs(a)}`, bfs_match(a, 'c'));
console.log(`Searched for: ${'g'} in ${bfs(a)}`, bfs_match(a, 'g'));
console.log(`Searched for: ${'e'} in ${bfs(a)}`, bfs_match(a, 'e'));
console.log(`Searched for: ${'f'} in ${bfs(a)}`, bfs_match(a, 'f'));
console.log("**********************")
console.log('*** Tree Includes: Searching for a target with DFS ***');
console.log(`Searched for: ${'l'} in ${dfs(a)}`, dfs_match(a, 'l'));
console.log(`Searched for: ${'z'} in ${dfs(a)}`, dfs_match(a, 'z'));
console.log(`Searched for: ${'c'} in ${dfs(a)}`, dfs_match(a, 'c'));
console.log(`Searched for: ${'g'} in ${dfs(a)}`, dfs_match(a, 'g'));
console.log(`Searched for: ${'e'} in ${dfs(a)}`, dfs_match(a, 'e'));
console.log(`Searched for: ${'f'} in ${dfs(a)}`, dfs_match(a, 'f'));
console.log("**********************")
module.exports = {
    dfs,
    dfs_match,
    recursiveDFS,
    bfs,
    bfs_match,
    recursiveDFSMatch,
}