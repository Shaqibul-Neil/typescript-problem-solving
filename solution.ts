/**
 * Problem 1:
Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Sample Output:
[2, 4, 6]
 */

const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([1, 3, 5]));
console.log(filterEvenNumbers([]));
