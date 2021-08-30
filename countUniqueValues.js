/*
Write a function that takes a sorted array as an argument and returns the total number
of unique valus tin the array

*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0,
    j = 0;
  while (j < arr.length) {
    if (arr[j] !== arr[i]) {
      i++;
    }

    j++;
  }
  return i;
}
