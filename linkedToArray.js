function linkedListToArray(head) {
  let array = [];

  let current = head;
  while (current !== null) {
    array.push(current.value);
    current = current.next;
  }

  return array;
}

// Example usage:
const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

const array = linkedListToArray(linkedList);
console.log(array); // Output: [1, 2, 3]
