const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

/**
 * Problem 2:
Write a function reverseString that takes a string as input and returns the reversed version of that string.

// Sample Input:
reverseString("typescript");

// Sample Output:
"tpircsepyt";
 */
const reverseString = (str: string): string => {
  return `"${str.split("").reverse().join("")}"`;
};
console.log(reverseString("typescript"));
