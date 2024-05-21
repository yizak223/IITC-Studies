const array = [ 1, 3, 6, 5, 77, 21, 64, -5]

//sum of the array
let sum1 = 0
for (let i = 0; i < array.length; i++) { sum1 += array[i] }

let sum2 = 0
array.forEach(num => { sum2 += num });

//reduce
let res = array.reduce((total, item) => { return total + item }, 0);
let totalMulti =array.reduce((total, item) => {return total * item} , 1 );
console.log({ sum1 });
console.log({ sum2 });
console.log({ res });
console.log({totalMulti});

//?find the mininmum number
const fun = () => { }
let min = array[0]
for (let i = 1; i < array.length; i++) {
    min > array[i] ? min = array[i] : null //if statment
}
console.log({ min });

let max = array[0]
for (let i = 1; i < array.length; i++) {
    max < array[i] ? max = array[i] : null
}
console.log({max});


