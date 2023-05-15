// Node creation function
function createNode(value) {
    return {
      value: value,
      next: null
    };
  }
  
  // Insertion at the beginning of the linked list
  function insertAtBeginning(head, value) {
    const newNode = createNode(value);
    newNode.next = head;
    return newNode;
  }
  
  // Create a linked list with head node containing value 1
  let head = createNode(1);

  head = insertAtBeginning(head, 2);

  head = insertAtBeginning(head, 3);
  console.log(head); // Output: { value: 3, next: { value: 2, next: { value: 1, next: null } } }
  