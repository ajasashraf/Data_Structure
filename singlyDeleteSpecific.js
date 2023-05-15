// Remove the node at a specific index in the linked list
function removeAtIndex(head, index) {
    if (head === null) {
      return null;
    }
  
    if (index === 0) {
      head = head.next;
      return head;
    }
  
    let current = head;
    let previous = null;
    let count = 0;
  
    while (count < index && current !== null) {
      previous = current;
      current = current.next;
      count++;
    }
  
    if (current === null) {
      return head; // Index out of range, return original head
    }
  
    previous.next = current.next;
    return head;
  }

  
  // Create a linked list with head node containing value 1
let head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

console.log("Original Linked List:");
console.log(head); // Output: { value: 1, next: { value: 2, next: { value: 3, next: null } } }

// Remove the node at index 1
head = removeAtIndex(head, 1);

console.log("Updated Linked List:");
console.log(head); // Output: { value: 1, next: { value: 3, next: null } }
