// Remove the node at the beginning of the linked list
function removeAtBeginning(head) {
    if (head === null) {
      return null;
    }
  
    const newHead = head.next;
    return newHead;
  }
  
  // Create a linked list with head node containing value 1
  let head = { value: 2, next: { value: 1, next: null } };
  
  console.log("Original Linked List:");
  console.log(head); // Output: { value: 1, next: null }
  
  // Remove the node at the beginning
  head = removeAtBeginning(head);
  
  console.log("Updated Linked List:");
  console.log(head); // Output: null
  