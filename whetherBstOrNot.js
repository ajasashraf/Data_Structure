function TreeNode(value) {
    return {
        value: value,
        left: null,
        right: null
      };
  }
  
  function insertNode(root, value) {
    if (root === null) {
      return new TreeNode(value);
    }
  
    if (value < root.value) {
      root.left = insertNode(root.left, value);
    } else {
      root.right = insertNode(root.right, value);
    }
  
    return root;
  }
  
  function isBSTUtil(node, min, max) {
    if (node === null) {
      return true;
    }
  
    if (node.value <= min || node.value >= max) {
      return false;
    }
  
    return (
      isBSTUtil(node.left, min, node.value) &&
      isBSTUtil(node.right, node.value, max)
    );
  }
  
  function isBST(tree) {
    return isBSTUtil(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  }
  
  // Create an empty binary tree
  let tree = null;
  
  // Insert nodes into the binary tree
  tree = insertNode(tree, 4);
  tree = insertNode(tree, 2);
  tree = insertNode(tree, 6);
  tree = insertNode(tree, 1);
  tree = insertNode(tree, 3);
  tree = insertNode(tree, 5);
  tree = insertNode(tree, 7);

  // Validate if the tree is a binary search tree
  const isTreeBST = isBST(tree);
  
  // Print the result
  console.log("Is the tree a binary search tree?", isTreeBST);
  