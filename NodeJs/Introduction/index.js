// console.log(4 + 6)

const { calculateSum, caculatorPlus, caculatorMinus, calaculatormultiplication, caculatorDivision } = require('./mat')
const os = require('os')// operating system
const fs = require('fs')// filesystem

// console.log(caculatorPlus(5 , 4));
// console.log(caculatorMinus(5 , 4));
// console.log(calaculatormultiplication(5 , 4));
// console.log(caculatorDivision(5 , 4));

// console.log(os.cpus())
//

console.log(calculateSum([1, 2, 3, 4, 5]))

//!3
console.log(fs.readFileSync('hellow.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(data);
}));

//?b task
fs.readFile('hellow.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(data);
});

//?c task
const content = ' this is with node js';
fs.appendFile('hellow.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written.');
})

//?d task
fs.appendFileSync('hellow.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written.');
})

//?e task

fs.writeFile('hellow.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written.');
})

//?f task\
fs.unlink('hellow.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
        return;
    }
    console.log('File deleted successfully');
});

//?4
// *Express.js: Express.js is a minimalist web application framework for Node.js, designed to build web applications and APIs quickly and easily. It provides a robust set of features for web and mobile applications.

// *Socket.io: Socket.io enables real-time, bidirectional, and event-based communication between web clients and servers. It's often used for building real-time chat applications, multiplayer games, and collaborative tools.

// *Lodash: Lodash is a utility library that provides many helpful functions for working with arrays, objects, strings, and more in JavaScript. It simplifies common programming tasks and improves code readability and maintainability.



