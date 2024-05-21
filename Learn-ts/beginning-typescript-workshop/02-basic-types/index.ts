// ###### Basic Types

const n: number = 1;
const s: string = 'hello';
const b: boolean = true;
const o: object = {x: 4};
const a: any = 1;

n - 4             // OK
//@ts-expect-error
n - true          // Error

s.split('')       // OK
//@ts-expect-error
s - 5

//@ts-expect-error
o.x               // Error!

b && !b            // OK
//@ts-expect-error
b - 5

a.split('')       // OK
a + 1             // OK

// ###### Places Types Can Be Used

// variables
let n2: number;

// parameters and return types
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// class properties
class Person {
  name: string;
  age: number;

  constructor() {
    this.name = '';
     this.age = 0;
  }
}

/// ##### Type Inference

const x = 0; // No need to type

x + 1; // OK

const y = x * 3; // No need to type

// No need to define return value
function add2(a: number, b: number) {
  return a + b;
}

const z = add2(1, 2); // No need to type
