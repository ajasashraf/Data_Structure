// Node creation function
function createNode(value) {
    return {
      value: value,
      next: null
    };
  }
  
  // Insertion at the end of the linked list
  function insertAtEnd(head, value) {
    const newNode = createNode(value);
  
    if (head === null) {
      return newNode;
    }
  
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
  
    current.next = newNode;
    return head;
  }
  
  // Create a linked list with head node containing value 1
  let head = createNode(1);
  
  console.log("Original Linked List:");
  console.log(head); // Output: { value: 1, next: null }
  
  // Insert a node at the end
  head = insertAtEnd(head, 2);
  
  // Insert another node at the end
  head = insertAtEnd(head, 3);
  
  console.log("Updated Linked List:");
  console.log(head); // Output: { value: 1, next: { value: 2, next: { value: 3, next: null } } }
  