function selectionSort(arr, start = 0) {
    if (start >= arr.length - 1) {
      return arr;
    }
  
    let minIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
  
    if (minIndex !== start) {
      [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];
    }
    //or you can write like this
  //   if(min!==start){
  //     let temp = arr[start];
  //     arr[start]=arr[min];
  //     arr[min]=temp;
  // }
  
    return selectionSort(arr, start + 1);
  }
  
  // Example usage:
  const arr = [64, 25, 12, 22, 11];
  console.log("Original array:", arr);
  const sortedArr = selectionSort(arr);
  console.log("Sorted array:", sortedArr);