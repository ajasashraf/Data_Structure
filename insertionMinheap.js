function insertMinHeap(heap, value) {
    heap.push(value);  // Insert the new element at the bottom-rightmost position
    let index = heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && heap[parentIndex] > heap[index]) {
        // Swap the parent and current element
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
    }
}

// Example usage:
let heap = [3, 8, 10, 14, 9, 17, 19, 26, 16];  // Existing min heap
insertMinHeap(heap, 7);
console.log(heap);

//For maxheap insertion just change condition heap[parentIndex] < heap[index] and need to put array accordingly