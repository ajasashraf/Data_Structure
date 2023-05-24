function createQueue() {
    const queue = [];
  
    return {
      enqueue(item) {
        queue.push(item);
      },
  
      dequeue() {
        if (queue.length === 0) {
          return null;
        }
        return queue.shift();
      },
  
      peek() {
        if (queue.length === 0) {
          return null;
        }
        return queue[0];
      },
  
      isEmpty() {
        return queue.length === 0;
      },
  
      size() {
        return queue.length;
      },
  
      clear() {
        queue.length = 0;
      }
    };
  }
  
  // Example usage:
  const queue = createQueue();
  
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');
  
  console.log(queue.dequeue()); // Output: A
  
  console.log(queue.peek()); // Output: B
  
  console.log(queue.size()); // Output: 2
  
  console.log(queue.isEmpty()); // Output: false
  
  queue.clear();
  console.log(queue.isEmpty()); // Output: true