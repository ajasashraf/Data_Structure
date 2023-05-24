function mergeSort(arr) {
    // Base case: if the array is empty or has only one element, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort the two halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);                        
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let mergedArr = [];
  
    // Compare elements from the left and right arrays and merge them in sorted order
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        mergedArr.push(left.shift());
      } else {
        mergedArr.push(right.shift());
      }
    }
  
    // Add any remaining elements (if there are any) from the left and right arrays
    while (left.length) {
      mergedArr.push(left.shift());
    }
  
    while (right.length) {
      mergedArr.push(right.shift());
    }
  
    return mergedArr;
  }
  
  // Example usage:
  const array = [5, 2, 8, 4, 1, 9, 3];
  const sortedArray = mergeSort(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8, 9]