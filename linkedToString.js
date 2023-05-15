function linkedListToString(head) {
    let currentNode = head;
    let result = '';
  
    while (currentNode !== null) {
      result += currentNode.value;
      if (currentNode.next !== null) {
        result += ' -> ';
      }
      currentNode = currentNode.next;
    }
  
    return result;
  }
// Create nodes
const node3 = { value: 'Node 3', next: null };
const node2 = { value: 'Node 2', next: node3 };
const node1 = { value: 'Node 1', next: node2 };

// Connect the nodes manually to form the linked list

// Call the function to convert the linked list to a string
const result = linkedListToString(node1);

console.log(result); // Output: Node 1 -> Node 2 -> Node 3
  