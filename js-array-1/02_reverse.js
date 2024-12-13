// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters
function reverse(array) {
  const reverseArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray[reverseArray.length] = array[index];
  }

  return reverseArray;
}

function testReverse(array, expected) {
  const result = reverse(array);
  const visual = "" + result === "" + expected ? "✅" : "❌";
  const msg =
    "array: " + array + " Expected: " + expected + " Result: " + result;

  console.log(visual + msg);
}

function test() {
  testReverse([], []);
  testReverse([1], [1]);
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
}

test();
