// ####### Array Types

const an: number[] = [1, 2, 3];
const as: string[] = ['a', 'b', 'c'];

const bs: Array<boolean> = [true, false, true];

an[1] + 4

const splits: string[] = as[1].split('')


function findNumber(arr: number[], num: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}


// ##### Type Aliases

type NumberArray = number[];

const an2: NumberArray = [1, 2, 3];

type NumberMatrix = NumberArray[];

const m: NumberMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

m[1][2] // 6

// They are just _aliases_ for the types, they don't create new types.

function findNumber2(arr: NumberArray, num: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}

findNumber2(an, 2) // true

const x = [1, '2', true]