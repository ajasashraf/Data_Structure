// Define a binary tree node
function TreeNode(val) {
    return{
        val:val,
        left:null,
        right:null
    }
  }
  
  // Function to perform inorder traversal
  function inorderTraversal(node) {  
    if (node === null) {
      return; // Base case: empty tree
    }
  
    inorderTraversal(node.left); // Traverse left subtree
    console.log(node.val); // Visit the current node
    inorderTraversal(node.right); // Traverse right subtree
  }
  
  // Create a sample binary tree
  const root = new TreeNode(6);
  root.left = new TreeNode(4);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(5);
  
  // Perform inorder traversal
  console.log("Inorder traversal:");
  inorderTraversal(root);
  