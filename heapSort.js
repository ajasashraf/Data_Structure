function buildMaxHeap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapifyMax(array, i);
    }
}

function heapifyMax(array, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < array.length && array[left] > array[largest]) {
        largest = left;
    }

    if (right < array.length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [array[index], array[largest]] = [array[largest], array[index]];
        heapifyMax(array, largest);
    }
}

function heapSort(array) {
    buildMaxHeap(array); // Build a max heap from the array

    for (let i = array.length - 1; i > 0; i--) {
        // Move the current root (maximum value) to the end of the array
        [array[0], array[i]] = [array[i], array[0]];
        
        // Call heapifyMax on the reduced heap
        heapifyMax(array, 0);
    }

    return array;
}

// Example usage:
const array = [4, 10, 3, 5, 1];
console.log("Original Array:", array);

const sortedArray = heapSort(array);
console.log("Sorted Array:", sortedArray);