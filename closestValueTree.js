function TreeNode(value) {
     return {
      value: value,
      left: null,
      right: null
    };
  }
  
  function insertNode(root, value) {
    if (root === null) {
      return TreeNode(value);
    }
  
    if (value < root.value) {
      root.left = insertNode(root.left, value);
    } else {
      root.right = insertNode(root.right, value);
    }
  
    return root;
  }
  
  function findClosestValue(node, target, closest) {
    if (node === null) {
      return closest;
    }
  
    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
      closest = node.value;
    }
  
    if (target < node.value) {
      return findClosestValue(node.left, target, closest);
    } else if (target > node.value) {
      return findClosestValue(node.right, target, closest);
    } else {
      return closest;
    }
  }
  
  function closestValue(tree, target) {
    return findClosestValue(tree, target, Infinity);
  }
  
  // Create an empty binary tree
  let tree = null;
  
  // Insert nodes into the binary tree
  tree = insertNode(tree, 8);
  tree = insertNode(tree, 3);
  tree = insertNode(tree, 10);
  tree = insertNode(tree, 1);
  tree = insertNode(tree, 6);
  tree = insertNode(tree, 14);
  tree = insertNode(tree, 4);
  tree = insertNode(tree, 7);
  tree = insertNode(tree, 13);
  
  // Define the target number
  const target = 11;
  
  // Find the closest value to the target in the tree
  const closest = closestValue(tree, target);
  
  // Print the closest value
  console.log("Closest value:", closest);
  