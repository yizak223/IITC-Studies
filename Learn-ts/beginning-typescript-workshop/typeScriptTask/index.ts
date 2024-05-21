import { writeFileSync } from "node:fs";

export function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 5))

writeFileSync("test.txt", "Hello, world!");