function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // 4

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([33, 22, 17, 38, 11]));
