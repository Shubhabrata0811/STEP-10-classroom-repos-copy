// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  let index = array.length - 1;

  while (index > -1) {
    if (array[index] === element) {
      return index;
    }

    index--;
  }

  return index;
}
