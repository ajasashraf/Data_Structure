function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: an array with 0 or 1 element is already sorted
    }
  
    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]); // Elements smaller than the pivot go to the left
      } else {
        right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
      }
    }
  
    return [...quickSort(left), pivot,... quickSort(right)]; // Recursively sort the left and right partitions
  }
  
  // Example usage:
  const array = [9, 2, 5, 1, 7, 6, 8, 3, 4];
  const sortedArray = quickSort(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]