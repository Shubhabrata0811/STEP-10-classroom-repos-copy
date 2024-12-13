// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  let index = 0;

  while (index < array.length) {
    if (array[index] === element) {
      return index;
    }

    index++;
  }
  
  return -1;
}
