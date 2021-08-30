// Function to print fibonaci numbers up to the 10th time
const printFibonacciNumbersTo10 = function () {
  let firstNumber = 1;
  let secondNumber = 2;
  let thirdNumber;
  let result = [firstNumber, secondNumber];
  for (let i = 1; i <= 10; i++) {
    thirdNumber = firstNumber + secondNumber;
    result.push(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
  }
  return result;
};
