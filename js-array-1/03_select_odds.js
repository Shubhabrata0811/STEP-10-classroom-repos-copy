// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.
function isOdd(number) {
  return number % 2 === 1;
}
function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumbers[oddNumbers.length] = numbers[index];
    }
  }

  return oddNumbers;
}

function testSelectOdds(numbers, expected) {
  const result = selectOdds(numbers);
  const visual = "" + result === "" + expected ? "✅" : "❌";
  const msg =
    "array: " + numbers + " Expected: " + expected + " Result: " + result;

  console.log(visual + msg);
}

function test() {
  testSelectOdds([], []);
  testSelectOdds([1], [1]);
  testSelectOdds([3, 2, 4, 5, 7], [3, 5, 7]);
  testSelectOdds([2, 4, 6], []);
}

test();
