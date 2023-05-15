// Remove the node at the end of the linked list
function removeAtEnd(head) {
    if (head === null) {
      return null;
    }
  
    if (head.next === null) {
      head = null;
      return head;
    }
  
    let current = head;
    let previous = null;
  
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
  
    previous.next = null;
    return head;
  }

  // Create a linked list with head node containing value 1
let head = { value: 1, next:{ value: 2, next: null }};

console.log("Original Linked List:");
console.log(head); // Output: { value: 1, next: { value: 2, next: null } }

// Remove the node at the end
head = removeAtEnd(head);

console.log("Updated Linked List:");
console.log(head); // Output: { value: 1, next: null }
