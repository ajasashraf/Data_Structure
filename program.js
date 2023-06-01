function TreeNode(val){
    return {
        val:val,
        left:null,
        right:null
    }
}

function insert(root,value){
    if(root===null){
        return TreeNode(value)
    }

    if(value<root.value){
        root.left=insert(root.left,value)
    }
    else{
        root.right=insert(root.right,value)
    }

    return root;
}

let root = null;

root=insert(root,8);
root = insert(root, 3);
  root = insert(root, 10);
  root = insert(root, 1);
  root = insert(root, 6);
  root = insert(root, 14);
  root = insert(root, 4);
  root = insert(root, 7);
  root = insert(root, 13);

  console.log(root)