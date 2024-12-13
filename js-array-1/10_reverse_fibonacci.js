// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
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

function reverseFibonacci(n) {
  const fibonacciArray = [];

  for (let term = n; term > 0; term--) {
    fibonacciArray[fibonacciArray.length] = nthFibonacci(term);
  }

  return fibonacciArray;
}