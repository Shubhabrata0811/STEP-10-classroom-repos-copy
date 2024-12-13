// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters
function filterAbove(array, threshold) {
  let filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

function testFilterAbove(array, threshold, expected) {
  const result = filterAbove(array, threshold);
  const visual = "" + result === "" + expected ? "✅" : "❌";
  const msg =
    "Array: " +
    array +
    " threshold: " +
    threshold +
    " Expected: " +
    expected +
    " Result: " +
    result;

  console.log(visual + msg);
}

function test() {
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove([1, 2, 3], 4, []);
  testFilterAbove([10, 20, 30], 15, [20, 30]);
  testFilterAbove([5, 5, 5, 5], 5, []);
  testFilterAbove([], 0, []);
}

test();