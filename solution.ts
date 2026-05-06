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

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (obj: Book): Book & { isRead: boolean } => {
  return { ...obj, isRead: true };
};

class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

/**
 * Problem 7:
Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

// Sample Input:
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

// Sample Output:
[3, 4, 5]
 */
const start = performance.now();
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
const end = performance.now();
console.log("1", end - start);

const start2 = performance.now();
const getIntersection2 = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);
  const commonArray = arr2.filter((num) => set1.has(num));
  return commonArray;
};
console.log(getIntersection2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
const end2 = performance.now();
console.log("2", end2 - start2);
