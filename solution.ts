const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

const reverseString = (str: string): string => {
  return `"${str.split("").reverse().join("")}"`;
};

type StringOrNumber = string | number;
const checkType = (val: StringOrNumber): "String" | "Number" => {
  if (typeof val === "string") {
    return "String";
  }
  return "Number";
};

/**
 * Problem 4:
Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Sample Output:
"John Doe";
 */
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "names");
