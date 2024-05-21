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

# Array types

This lesson discusses typing arrays

---

# Defining Array types

Define:

```ts
const an: number[] = [1, 2, 3];
const as: string[] = ['a', 'b', 'c'];
const bs: Array<boolean> = [true, false, true];
```

Now use them:

```ts
an[1] + 4;

function findNumber(arr: number[], num: number): boolean {
  for (let i = 0; i !== arr.length; i++) {
    if (arr[i] === num) return true;
  }

  return false;
}
```

---

# Type aliases

Type aliases are names we give other types

```ts
type NumberArray = number[];

const an: NumberArray = [1, 2, 3];
```

You can use them inside other type aliases:

```ts
type NumberMatrix = NumberArray[];

const m: NumberMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

m[1][2] // 6
```

---

# They are just aliases

```ts
function findNumber(arr: NumberArray, num: number): boolean {
  // ...
}

const an: number[] = [1, 2, 3];

findNumber(an, 2); // true
```

---

# Type inference works

```ts
const an = [1, 2, 3]; // number[]
```

And even if you mix types

```ts
const an = [1, '2', true] // (number | string | boolean)[]
```

(we'll learn about union types later!)
