// Define a binary tree node
function TreeNode(val) {
    return{
        val:val,
        left:null,
        right:null
    }
  }
  
  // Function to perform postorder traversal
  function postorderTraversal(node) {
    if (node === null) {
      return; // Base case: empty tree
    }
  
    postorderTraversal(node.left); // Traverse left subtree
    postorderTraversal(node.right); // Traverse right subtree
    console.log(node.val); // Visit the current node
  }
  
  // Create a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Perform postorder traversal
  console.log("Postorder traversal:");
  postorderTraversal(root);
  