function mult(a, b) {
  return a * b;
}

console.log(mult("hi", "bob")); // Error here, but you have to figure it out!

function multTs(a: number, b: number): number {
  return a * b;
}

//@ts-expect-error
console.log(multTs("hi", "bob")); // TypeScript will show us an error here
