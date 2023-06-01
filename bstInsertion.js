// Define a node structure to represent individual nodes in the binary search tree
function TreeNode(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  }
  
  // Function to insert a new value into the binary search tree
  function insert(root, value) {
    if (root === null) {
      // If the tree is empty, create a new node and make it the root
      return TreeNode(value);
    }
  
    if (value < root.value) {
      // If the new value is less than the current node's value, insert in the left subtree
      root.left = insert(root.left, value);
    } else {
      // If the new value is greater than or equal to the current node's value, insert in the right subtree
      root.right = insert(root.right, value);
    }
  
    return root;
  }
  
  // Usage example
  let root = null;
  root = insert(root, 8);
  root = insert(root, 3);
  root = insert(root, 10);
  root = insert(root, 1);
  root = insert(root, 6);
  root = insert(root, 14);
  root = insert(root, 4);
  root = insert(root, 7);
  root = insert(root, 13);
  
  console.log(root); // Output the root node of the binary search tree
  