function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.ceil((left + right) / 2);

  while (arr[middle] !== value && left < right) {
    if (value < arr[middle]) right = middle - 1;
    else left = middle + 1;

    middle = Math.ceil((left + right) / 2);
  }

  if (value === arr[middle]) return middle;

  return -1;
}

//                          l   m  r
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3)); // 2
