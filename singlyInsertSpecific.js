// Node creation function
function createNode(value) {
    return {
      value: value,
      next: null
    };
  }
  
  // Insertion at a specific index in the linked list
  function insertAtIndex(head, index, value) {
    const newNode = createNode(value);
  
    if (index === 0) {
      newNode.next = head;
      return newNode;
    }
  
    let current = head;
    let previous = null;
    let count = 0;
  
    while (count < index && current !== null) {
      previous = current;
      current = current.next;
      count++;
    }
  
    newNode.next = current;
    previous.next = newNode;
  
    return head;
  }
  
  // Create a linked list with head node containing value 1
  let head = createNode(1);
  
  console.log("Original Linked List:");
  console.log(head); // Output: { value: 1, next: null }
  
  // Insert a node at index 0 (beginning)
  head = insertAtIndex(head, 0, 2);
  
  console.log("Updated Linked List:");
  console.log(head); // Output: { value: 2, next: { value: 1, next: null } }
  
  // Insert a node at index 1 (middle)
  head = insertAtIndex(head, 1, 3);
  
  console.log("Updated Linked List:");
  console.log(head); // Output: { value: 2, next: { value: 3, next: { value: 1, next: null } } }
  
  // Insert a node at index 3 (end)
  head = insertAtIndex(head, 3, 4);
  
  console.log("Updated Linked List:");
  console.log(head); // Output: { value: 2, next: { value: 3, next: { value: 1, next: { value: 4, next: null } } } }
  