const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
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

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);
  const commonArray = arr2.filter((num) => set1.has(num));
  return commonArray;
};
