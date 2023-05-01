function selectionSort(arr) {
    // define a helper function called "swap" to swap two elements in the array
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    
    // iterate over the array
    for (let i = 0; i < arr.length; i++) {
      // assume the current index has the lowest value
      let lowest = i;
      
      // iterate over the rest of the array, looking for a lower value
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          // if a lower value is found, update the index of the lowest value
          lowest = j;
        }
      }
      
      // if the index of the lowest value has changed, swap the values
      if (i !== lowest) {
        swap(arr, i, lowest);
      }
    }
    
    // return the sorted array
    return arr;
  }
  
  console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));