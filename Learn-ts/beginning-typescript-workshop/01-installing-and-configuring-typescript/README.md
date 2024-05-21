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

# Installing and Configuring TypeScript

Let's show how to create a project that can run TypeScript files

---

# Creating the project

- Create `package.json`:

```sh
$ npm init -y
```

This creates a `package.json`

- Add a `"type": "module"` in the `package.json` to say that it's an ESM package:

```json
{
  ...
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
  ...
}
```

---

# Adding TypeScript

- Add the TypeScript transpiler to the package dependencies:

```sh
$ npm install --save-dev typescript
```

- Add the `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true, // Show _all_ type errors
    "module": "ESNext", // inpput is ESM
    "moduleResolution": "Node", // you can find modules using the regular Node.js way (`node_modules` etc)
    "target": "ESNext", // output is JavaScript without transpilation to older version
    "lib": ["ESNext"], // std library is ESNext
    "outDir": "dist"
  }
}
```

---

# Add support for Node.js

```sh
$ npm install --save-dev @types/node
```

This adds type checking for all the Node.js API

---

# Let's try an example

Create a file called `index.ts` with this content:

```ts
import { writeFileSync } from "node:fs";

export function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

writeFileSync("test.txt", "Hello, world!");
```

And run the TypeScript compiler:

```sh
$ npx tsc
```

This creates a file `dist/index.js` (`dist` because of the `outDir` option in `tsconfig.json`)

---

# Running the transpiled code

```sh
$ node dist/index.js
```

Yay!

# Finding errors

Let's change some code to make an error.

Change `console.log(add(1, 23))` to `console.log(add('hi', 'bob'))`

Now if we run `npx tsc` we get an error!

---

# Making the build easier

Let's add a script `build` to the `package.json`:

```json
"script": {
  "build": "tsc --watch"
}
```

Now if you run:

```sh
$ npm run build
```

TypeScript builds the files but if any changes, they are rebuilt!

---

# Making the re-running easier

Instead of:

```sh
$ node dist/index.js
```

Run:

```sh
$ node --watch dist/index.js
```

Then Node.js reruns the file whenever it changes!

So now you can open two terminals: one with the build watch and one with the Node.js running!

