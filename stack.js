// Stack creation function
function createStack() {
    return {
      top: null,
      size: 0
    };
  }
  
  // Push an element onto the stack
  function push(stack, value) {
    const newNode = createStack(value);
  
    newNode.next = stack.top;
    stack.top = newNode;
    stack.size++;
  }
  
  // Pop an element from the stack
  function pop(stack) {
    if (stack.top === null) {
      return null; // Stack is empty
    }
  
    const value = stack.top.value;
    stack.top = stack.top.next;
    stack.size--;
  
    return value;
  }
  
  
  // Create an empty stack
  let stack = createStack();
  
  console.log("Original Stack:");
  console.log(stack); // Output: { top: null, size: 0 }
  
  // Push elements onto the stack
  push(stack, 1);
  push(stack, 2);
  push(stack, 3);
  
  console.log("Updated Stack:");
  console.log(stack); // Output: { top: { value: 3, next: { value: 2, next: { value: 1, next: null } } }, size: 3 }
  
  // Pop an element from the stack
  const poppedElement = pop(stack);
  console.log("Popped Element:", poppedElement); // Output: 3
  
  console.log("Updated Stack:");
  console.log(stack); // Output: { top: { value: 2, next: { value: 1, next: null } }, size: 2 }