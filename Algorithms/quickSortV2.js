function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let swapIdx = start;

  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);

  return swapIdx;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
function quickSort(arr, left = 0, right = arr.length - 1) {
  const pivotIdx = pivot(arr, left, right);

  if (left >= right) return arr;

  // LEFT
  quickSort(arr, left, pivotIdx - 1);

  // RIGHT
  quickSort(arr, pivotIdx + 1, right);

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
