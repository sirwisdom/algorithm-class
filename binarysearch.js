const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
};

numbers = [3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 20, 23, 39];

binarySearch(numbers, 20);
