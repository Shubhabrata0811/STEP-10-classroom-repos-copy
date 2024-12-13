// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function nthFibonacci(n) {
  if (n < 2) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return nthFibonacci(n - 2) + nthFibonacci(n - 1);
}

function fibonacci(n) {
  const fibonacciArray = [];

  for (let index = 0; index < n; index++) {
    fibonacciArray[index] = nthFibonacci(index + 1);
  }

  return fibonacciArray;
}
