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
/*
Problem 6:
Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

// Sample Input:
const student = new Student("Alice", 20, "A");
student.getDetails();

// Sample Output:
"Name: Alice, Age: 20, Grade: A";
*/
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
const student = new Student("Alice", 20, "A");
const res = student.getDetails();
console.log(res);
