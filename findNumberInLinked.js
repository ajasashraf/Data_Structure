// Node definition
function Node(data) {
  return {
    data: data,
    next: null
  };
}

// Function to check if an element is present in the linked list
function containsElement(head, element) {
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.data === element) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

// Create a linked list with predefined elements
const node1 = Node(10);
const node2 = Node(20);
const node3 = Node(30);
const node4 = Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Example usage
const linkedList = node1;
let ans=containsElement(linkedList,50)
console.log(ans);

// console.log(containsElement(linkedList, 30));  // Output: true
// console.log(containsElement(linkedList, 50));  // Output: false