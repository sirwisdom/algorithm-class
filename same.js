/*
Write a function called same, that takes in two arrays.
The function should return true if every element in the array has 
it's corresponding value squared in the second array.
The frequency of the array must be the same

*/
let item1 = [1, 2, 3, 4, 4, 4];
let item2 = [4, 1, 2, 3, 4, 4];
let item3 = [4, 1, 2, 9, 4, 4];
const same = (arrA, arrB) => {
  if (arrA.length != arrB.length) return false;
  let arrACounter = {};
  let arrBCounter = {};

  for (let i = 0; i < arrA.length; i++) {
    arrACounter[arrA[i]] = arrACounter[arrA[i]] + 1 || 1;
  }

  for (let i = 0; i < arrB.length; i++) {
    arrBCounter[arrB[i]] = arrBCounter[arrB[i]] + 1 || 1;
  }

  for (let val in arrACounter) {
    console.log("val", val);
    if (!(val ** 2 in arrBCounter)) {
      return false;
    }

    if (arrACounter[val] !== arrBCounter[val ** 2]) {
      return false;
    }
  }
  return true;
};
