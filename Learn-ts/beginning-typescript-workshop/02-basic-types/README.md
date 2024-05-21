---
marp: true
theme: default
class:
  - invert
auto-scaling: true
style: |
  section {
    justify-content: start;
  }
---

# Basic types

This lesson discusses the basic types in TypeScript, and where to use types in general

---

# Number type

Define a variable with the `number` type:

```ts
let n: number = 1;
```

Use it:

```ts
n++; // OK

n - 4; // OK

n - true; // Error
```

---

# String type

Define a variable with the `string` type:

```ts
const s: string = "hello";
```

Use it:

```ts
s.split(""); // OK

s - 5; // Error
```

---

# Boolean type

Define a variable with the `boolean` type:

```ts
const b: boolean = true;
```

Use it:

```ts
b && !b; // OK

b - 5; // Error
```

---

# Any type

The `any` type is an escape hatch: it will never error and accepts any
operation on it.

Define a variable with the `any` type:

```ts
const a: any = true;
```

Use it:

```ts
a && !a; // OK

a - 5; // OK

a.split(""); // OK

```

---

# Where can you place types? Variable definitions


```ts

let a: number;

let b: number = 2;

const c: number = 3;
```

---

# Where can you place types? Parameters

```ts
function add(a: number, b: number) {
  return a + b;
}
```

or...

```ts
const plus1 = (a: number) => a + 1
```

---

# Where can you place types? Return types

```ts
function add(a, b): number {
  return a + b;
}
```

or...

```ts
const plus1 = (a): number => a + 1
```

## Combined

```ts
function add(a: number, b: number): number {
  return a + b;
}

const plus1 = (a): number => a + 1
```

---

# Where can you place types? Class properties

```ts
class Person {
  name: string;
  age: number;

  constructor() {
    this.name = '';
     this.age = 0;
  }
}
```

---

# Type inference

Most of the times, you will only need to type paremeters and TypeScript
will "guess" the types of the other variables.

Examples:

```ts
const x = 0; // No need to type

x + 1; // OK

const y = x * 3; // No need to type

// No need to type the return value
function add(a: number, b: number) {
  return a + b;
}

const z = add(1, 2); // No need to type
```
