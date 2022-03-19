function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 5, 3]));

// curr: 1
// arr[j + 1] = arr[j] -> 2 > 1 -> YES -> [2,2]
// arr[j] = currenVal -> [1,2]

// curr: 5
// 1 > 5 -> NOT
// end loop

// curr: 3
// 5 > 3 ? YES -> [1,2,5,5]
// [1,2,3,3]
