// Insertion Sort function definition
function insertionSort(arr) {
  // Declare a variable to store the current value being sorted
  let currentVal;

  // Iterate over the array starting from the second element (index 1)
  for (var i = 1; i < arr.length; i++) {
    // Store the current value in the currentVal variable
    currentVal = arr[i];

    // Start another loop going backwards from the current element
    // The loop continues as long as the previous element is larger than the current value
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // Shift the previous element to the right
      arr[j + 1] = arr[j];
    }
    // Insert the current value into its correct position in the sorted part of the array
    arr[j + 1] = currentVal;
  }

  // Return the sorted array
  return arr;
}

// Call the function with an array to sort
console.log(insertionSort([2, 1, 9, 76, 4]));
