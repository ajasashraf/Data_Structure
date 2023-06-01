// Define a binary tree node
function TreeNode(val) {
    return{
        val:val,
        left:null,
        right:null
    }
  }
  
  // Function to perform preorder traversal
  function preorderTraversal(node) {
    if (node === null) {
      return; // Base case: empty tree
    }
  
    console.log(node.val); // Visit the current node
    preorderTraversal(node.left); // Traverse left subtree
    preorderTraversal(node.right); // Traverse right subtree
  }
  
  // Create a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Perform preorder traversal
  console.log("Preorder traversal:");
  preorderTraversal(root);
  