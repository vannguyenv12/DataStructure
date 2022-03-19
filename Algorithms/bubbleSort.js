function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // swap
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }

      if (noSwap) break;
    }
  }
  return arr;
}
console.log(bubbleSort([9, 1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort([12, 22, 13, 9, 10]));
