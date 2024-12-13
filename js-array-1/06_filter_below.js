// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  let filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

function testFilterBelow(array, threshold, expected) {
  const result = filterBelow(array, threshold);
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
  testFilterBelow([6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterBelow([1, 2, 3], 0, []);
  testFilterBelow([10, 20, 30], 15, [10]);
  testFilterBelow([5, 5, 5, 5], 5, []);
  testFilterBelow([], 0, []);
}

test();
