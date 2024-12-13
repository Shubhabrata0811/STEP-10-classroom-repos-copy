// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters
function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let index = 0;
  while (index < array1.length) {
    if (array1[index] !== array2[index]) {
      return false;
    }
    index++;
  }
  return true;
}

function testAreEqual(array1, array2, expected) {
  const result = areEqual(array1, array2);
  const visual = result === expected ? "✅" : "❌";
  const msg =
    "array1: " +
    array1 +
    " array2: " +
    array2 +
    " Expected: " +
    expected +
    " Result: " +
    result;

  console.log(visual + msg);
}

function test() {
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
  testAreEqual([], [], true);
  testAreEqual([1, 2, 3], [1, 2, 3], true);
  testAreEqual([1, 2, 3, 4], [4, 3, 2, 1], false);
}

test();
