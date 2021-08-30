/*
Define a function that takes in a sorted array as input and 
return an array of two elements from the inputed array
that sums up to equal 0

*/

function sumZero(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}
