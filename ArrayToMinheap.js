function buildMinHeap(array) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, i);
  }
}

function heapify(array, index) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let smallest = index;

  if (left < array.length && array[left] < array[smallest]) {
      smallest = left;
  }

  if (right < array.length && array[right] < array[smallest]) {
      smallest = right;
  }

  if (smallest !== index) {
      [array[index], array[smallest]] = [array[smallest], array[index]];
      heapify(array, smallest);
  }
}
const arr = [5, 3, 8, 4, 2, 1];
buildMinHeap(arr);
console.log(arr); // Output: [1, 2, 5, 4, 3, 8]

//for max-heap just change hte condition -- array[left] > array[smallest] and array[right] > array[smallest]