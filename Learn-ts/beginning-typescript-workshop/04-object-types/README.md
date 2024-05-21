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

# Object types

This lesson describes object types

---

# Defining object types

Define:

```ts
const gil: {name: string; age: number} = {name: "Gil Tayar", age: 55};

gil.age           // OK

gil.somethingElse // Error
```

But better to use a type alias:

```ts
type Person = {
  name: string;
  age: number;
};

const carmel: Person = {name: "Carmel Egger", age: 40};
```

---

# Using interfaces instead of types

Instead of `type`, you can use `interface`:

```ts

interface Person {
  name: string;
  age: number;
}

const carmel: Person = {name: "Carmel Egger", age: 40};
```

No inference here:

```ts
let gil = {name: "Gil Tayar", age: 55} // Not a `Person`

let carmel: Person = gil; // This works even if they don't have the same "interface"
```

---

# Extending interfaces

```ts
interface Teacher extends Person {
  subject: string;
}

const yishayahu: Teacher = {name: "Leibowitz", age: Infinity, subject: "Bible"};
```

A `Teacher` is a `Person`, but a `Person` is not necessarily a `Teacher`:

```ts
const justAPerson: Person = yishayahu; // OK - A teacher is a person

const anotherTeacher: Teacher = gil; // Error - a person is not a Person
```
