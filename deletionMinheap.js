function deleteValueFromMinHeap(heap, value) {
  const index = heap.indexOf(value);

  if (index === -1) {
    // Value not found in the heap
    return heap;
  }

  heap[index] = heap[heap.length - 1]; // Replace the value with the last element in the heap
  heap.pop(); // Remove the last element

  heapifyDown(heap, index);

  return heap;                   
}

function heapifyDown(heap, index) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;

  let smallestChildIndex = index;
  if (
    leftChildIndex < heap.length &&
    heap[leftChildIndex] < heap[smallestChildIndex]
  ) {
    smallestChildIndex = leftChildIndex;
  }
  if (
    rightChildIndex < heap.length &&
    heap[rightChildIndex] < heap[smallestChildIndex]
  ) {
    smallestChildIndex = rightChildIndex;
  }

  if (smallestChildIndex !== index) {
    [heap[index], heap[smallestChildIndex]] = [
      heap[smallestChildIndex],
      heap[index],
    ];
    heapifyDown(heap, smallestChildIndex);
  }
}

// Example usage:
const heap = [3, 7, 10, 8, 9, 17, 19, 26, 16, 14]; // Existing min heap
const valueToDelete = 9;
const updatedHeap = deleteValueFromMinHeap(heap, valueToDelete);
console.log("Heap after deletion:", updatedHeap);
