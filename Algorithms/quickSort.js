function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    // Get first element
    while (numberList[i] < pivot) i++;
    while (numberList[j] > pivot) j--;

    // swap
    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(numberList, left, right) {
  // base case
  if (left >= right) return numberList;

  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
}

console.log(quickSort([4, 9, 2], 0, 2));
console.log(quickSort([2, 8, 1, 4], 0, 3));
