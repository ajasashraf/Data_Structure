function insertionSortRecursive(arr, n) {
    // Base case: If array contains only one element, it is already sorted
    if (n <= 1) {
      return;
    }
  
    // Sort first n-1 elements recursively
    insertionSortRecursive(arr, n - 1);
  
    // Insert last element at its correct position in the sorted array
    let lastElement = arr[n - 1];
    let j = n - 2;
    while (j >= 0 && arr[j] > lastElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = lastElement;
  }
  
  // Example usage:
  const array = [5, 3, 1, 4, 2];
  insertionSortRecursive(array, array.length);
  console.log(array);