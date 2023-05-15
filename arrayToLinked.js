function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = createNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = createNode(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

// Example usage:
const array = [1, 2, 3, 6];
const linkedList = arrayToLinkedList(array);

// Accessing values in the linked list
console.log(JSON.stringify(linkedList));


// ...and so on
