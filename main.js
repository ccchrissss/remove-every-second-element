// JavaScript Array Practice — 7 kyu
// =================================

// Solve each problem by writing the requested JavaScript function. Aim for clear,
// readable solutions using array methods where appropriate. Do not modify the
// input arrays unless the problem explicitly says to.

// ------------------------------------------------------------
// 1. Remove Every Second Element
// ------------------------------------------------------------

// Given an array, return a new array containing every other element, starting
// with the first element (index 0).

// Examples:
//   removeEverySecond([1, 2, 3, 4, 5, 6])  // [1, 3, 5]
//   removeEverySecond(["a", "b", "c", "d"]) // ["a", "c"]
//   removeEverySecond([7])                  // [7]
//   removeEverySecond([])                   // []

// Requirements:
// - Return a new array.
// - Keep the elements at indexes 0, 2, 4, and so on.
// - The original array must remain unchanged.

// Function signature:
//   function removeEverySecond(arr) {}



// we will be given an array, and we want to return a new array which contains every other element, beginning with the first element which is index 0. 
// return just the new array

// removeEverySecond([0, 5, 3, 1, 5, 2, 6])
// [0, 3, 5, 6]
// removeEverySecond(['heyo', 'listen', 'to', 'what', 'i', 'say', 'o'])
// ['heyo', 'to', 'i', 'o']
// removeEverySecond([0, 1])
// [0]
// removeEverySecond([])
// []

// declare a new variable called newArr, assign it to the arg array filtered out for elements in which the index is even
// return newArr

function removeEverySecond(arr) {

  const newArr = arr.filter( (e, i, a) => i % 2 === 0)

  return newArr
}

console.log(removeEverySecond([0, 5, 3, 1, 5, 2, 6]))
console.log(removeEverySecond(["heyo", "listen", "to", "what", "i", "say", "o"]));
console.log(removeEverySecond([0, 1]));
console.log(removeEverySecond([]));