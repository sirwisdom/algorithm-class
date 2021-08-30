// Function to print odd numbers from 0 100
const printOddNumbersTo100 = function () {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
      result = result + i + ", ";
    }
  }
  return result;
};

// Function to capitalize the first word of a string.
const capitalizeFirstLeter = function (str) {
  if (!str) return;
  let strArray = str.split(" ");
  let result = "";
  for (let i = 0; i < strArray.length; i++) {
    let word = strArray[i];
    let capLetter = word[0].toUpperCase();
    word[0] = capLetter;
    word = `${capLetter}${word.substr(1, word.length)}`;
    result = result + word + (i === strArray.length - 1 ? "" : " ");
  }
  return result;
};
