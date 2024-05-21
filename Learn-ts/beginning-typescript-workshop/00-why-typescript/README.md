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

# What is TypeScript?

It's a language, that is a _superset_ of JavaScript

So any JavaScript code is also a TypeScript code

But! You can add type annotations to specify what values a variable can accept.

---

# Example of transforming JavaScript

From this:

```ts
function mult(a, b) {
  return a * b;
}

console.log(mult("hi", "bob")); // Error here, but you have to figure it out!
```

To this:

```ts
function mult(a: number, b: number): number {
  return a * b;
}

console.log(mult("hi", "bob")); // TypeScript will show us an error here
```
