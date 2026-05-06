const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

const reverseString = (str: string): string => {
  return `"${str.split("").reverse().join("")}"`;
};

/**
 * Problem 3:
Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

// Sample Input 1:
checkType("Hello");

// Sample Output 1:
"String";

// Sample Input 2:
checkType(42);

// Sample Output 2:
"Number";
 */

type StringOrNumber = string | number;
const checkType = (val: StringOrNumber): "String" | "Number" => {
  if (typeof val === "string") {
    return "String";
  }
  return "Number";
};

console.log(checkType("Hello"));
console.log(checkType(42));
console.log(checkType(true));
