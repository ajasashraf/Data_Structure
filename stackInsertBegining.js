function createNode(value) {
  return {
    value: value,
    next: null
  };
}

function push(stack, value) {
  const newNode = createNode(value);
  newNode.next = stack;
  return newNode;
}

let stack = null; // Empty stack

stack = push(stack, 3); // Push 3
stack = push(stack, 5); // Push 5
stack = push(stack, 9); // Push 9

console.log(stack); // Output: { value: 9, next: { value: 5, next: { value: 3, next: null } } }
