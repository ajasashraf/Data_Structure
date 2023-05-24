// Create an empty stack
function createStack() {
    return [];
  }
  
  // Check if the stack is empty
  function isEmpty(stack) {
    return stack.length === 0;
  }
  
  // Push an element onto the stack
  function push(stack, element) {
    stack.push(element);
  }
  
  // Pop an element from the stack
  function pop(stack) {
    if (isEmpty(stack)) {
      console.log("Stack is empty");
      return;
    }
    return stack.pop();
  }
  
  // Peek at the top element of the stack
  function peek(stack) {
    if (isEmpty(stack)) {
      console.log("Stack is empty");
      return;
    }
    return stack[stack.length - 1];
  }
  
  // Example usage:
  const stack = createStack();
  
  push(stack, 10);
  push(stack, 20);
  push(stack, 30);
  
  console.log(peek(stack)); // Output: 30
  
  console.log(pop(stack)); // Output: 30
  console.log(pop(stack)); // Output: 20
  console.log(pop(stack)); // Output: 10
  console.log(pop(stack)); // Output: Stack is empty