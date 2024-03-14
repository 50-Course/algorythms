//k
// For Preorder (Data-Left-Right):
//  - We read the data of the root node
//  - Visit the left sub-tree if it exist
//  - Visit the right sub-tree if it exist
//  - Return the result of the elements in the order
//
//  Another strats for Preorder (Data-Right-Left)
//
//  We read the root node
//  // Visit the right sub-tree if it exist
//  // Visit the lefft sub-tree if it exist
//

class DFS {
  root: Node;

  constructor(node: Node) {
    this.root = node;
  }

  searchPre(node: Node) {
    if (node.val !== null) {
      console.log(node);
      this.searchPre(node.left);
      this.searchPre(node.right);
    }
  }

  searchPre2(node: Node) {
    if (node != undefined || node.left == null) {
      console.log(node);
      this.searchPre2(node.left);
      this.searchPre2(node.right);
    }
  }

  searchIn(node: Node) {
    if (node.val !== null) {
      this.searchIn(node.left);
      console.log(node);
      this.searchIn(node.right);
    }
  }
  searchIn2(node: Node) {
    if (node.val !== null) {
      this.searchIn2(node.right);
      console.log(node);
      this.searchIn2(node.left);
    }
  }

  searchPost(node: Node) {
    if (node.val != null) {
      this.searchPost(node.left);
      this.searchPost(node.right);
      console.log(node);
    }
  }
  searchPost2(node: Node) {
    if (node.val != null) {
      this.searchPost2(node.right);
      this.searchPost2(node.left);
      console.log(node);
    }
  }
}

// Let's test the DFS
// Create a tree
//       1
//       /\
//      2  3
//      /\ /\
//      4 5 6 7
//      /\  /\
//      8 9 10 11
//      /\
//      6 7
//      /\
//      8 9

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.right.left.left = new Node(10);
root.right.left.right = new Node(11);
root.left.left.left.left = new Node(6);
root.left.left.left.right = new Node(7);
root.left.left.left.left.left = new Node(8);
root.left.left.left.left.right = new Node(9);

let dfs = new DFS(root);
console.log("Preorder");
dfs.searchPre(root);
console.log("Preorder2");
dfs.searchPre2(root);
console.log("Inorder");
