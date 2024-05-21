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

# 05 Union types

This lesson describes how to combine types using union (`|`)

---

# Using unions for "option" types

Sometimes we need a variable to also be undefined, to signify "emptiness", but...:

```ts
let s: string;
s = "something"; // OK
s = undefined; // Error!
```

To enable this, we use `|`

```ts
let s: string | undefined;
s = "something"; // OK
s = undefined; // OK!
```

---

# TypeScript is smart about union types

It understands that `if` makes it safe:

```ts
function splitWordsOrElse(value: string | undefined): string[] {
  if (value !== undefined) {
    // here `value` is not `undefined`
    return value.split(" ");
  } else {
    // here `value` _is_ `undefined`
    return value.split(" "); // Error
  }
}
```

---

# Enums

Define:

```ts
let direction: "up" | "down" | "left" | "right";

direction = "up"; // OK
direction = "west"; // Error
```

# Enums are usually type-aliased

```ts
type Direction = "up" | "down" | "left" | "right";
type Location = { x: number; y: number };

function move(location: Location, direction: Direction) {
  switch (direction) {
    case "up":
      location.y += 1;
      break;
    case "down":
      location.y -= 1;
      break;
    case "left":
      location.x -= 1;
      break;
    case "right":
      location.x += 1;
      break;
  }
}
```

---

# Variant types

Defining:

```ts
type Command =
  | {
      kind: "move";
      direction: Direction;
    }
  | {
      kind: "print";
    }
  | {
      kind: "teleport";
      location: Location;
    };
```

---

# Using variant types

```ts
function executeCommands(actor: Location, commands: Command[]) {
  for (const command of commands) {
    switch (command.kind) {
      case "move":
        move(actor, command.direction);
        break;
      case "print":
        console.log(actor);
        break;
      case "teleport":
        actor.x = command.location.x;
        actor.y = command.location.y;
        break;
    }
  }
}
```

---

# This is type-safe!

```ts
console.log(
  executeCommands({ x: 0, y: 0 }, [
    { kind: "move", direction: "up" },
    { kind: "print" },
    { kind: "teleport", location: { x: 10, y: 10 } },
    { kind: "print" },
  ])
);
// { x: 0, y: 1 }
// { x: 10, y: 10 }
```
