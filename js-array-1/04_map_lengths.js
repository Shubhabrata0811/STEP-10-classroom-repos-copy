// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters
function mapLengths(words) {
  const mapArray = [];

  for(let index = 0; index < words.length; index++){
    mapArray[index] = words[index].length;
  }

  return mapArray;
}

test();
function testMapLengths(words, expected) {
  const result = mapLengths(words);
  const visual = "" + result === "" + expected ? "✅" : "❌";
  const msg =
    "Words: " + words + " Expected: " + expected + " Result: " + result;

  console.log(visual + msg);
}

function test() {
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths(["hello", "world"], [5, 5]);
  testMapLengths(["a", "ab", "abc"], [1, 2, 3]);
  testMapLengths([""], [0]);
  testMapLengths([], []);
}

test();