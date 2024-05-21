//31
var userObject = {
    firstName: 'dfsdf',
    lastName: 'dfh',
    profile: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    email: 'sadf',
    password: 'gggg54'
}
// myDiv.innerHTML+=`
// <div>${userObject.firstName}</div>
// <div>${userObject.lastName}</div>
// <img src='${userObject.profile}'>
// <div>${userObject.email}</div>
// <div>${userObject.password}</div>
// `
//32
var carsArray = []

for (let i = 0; i < 4; i++) {
    var carObject = {
        company: 'g',
        color: 'red',
        smak: '444',
        year: 2000
    }
    tableTask32.innerHTML += `
   <tr>
   <td>${carObject.company}</td>
   <td>${carObject.color}</td>
   <td>${carObject.smak}</td>
   <td>${carObject.year}</td>
   `
}
//33
function get3catsObject() {
    var catObject = {}
    for (var i = 0; i < 3; i++) {
        catObject.name = 'hhh',
            catObject.year = 1999,
            catObject.type = 'gg',
            catObject.weight = 66
        h1nine.innerHTML += `
        ${catObject.name}
        ${catObject.year}
        ${catObject.type}
        ${catObject.weight}
        `
    }
}
// get3catsObject()
//34
function getDogsObject() {
    var num = 2;
    for (let i = 0; i < num; i++) {
        var dogObject = {
            name: 'sdfg',
            age: 33,
            type: 'sdf',
            owner: 'sdf'
        }
        myDiv.innerHTML += `
        <p> ${dogObject.name}
        ${dogObject.age}
        ${dogObject.type}
        ${dogObject.owner}
        </p>
            `
    }
}
//35
function getBugObject() {
    var num = 3;
    for (let i = 0; i < 3; i++) {
        var BugObject = {
            name: 'dfgh',
            nameScientic: 'dfgh',
            numLegs: 4,
            wings: true
        }
        if (BugObject.wings == true) {
            myDiv.innerHTML +=
                `<h3>
            ${BugObject.name}
            ${BugObject.numLegs}
            ${BugObject.nameScientic}
            ${BugObject.wings}
            </h3>
            `
        }
    }
}
// getBugObject()
//36
function getchildObject() {
    var num = 3;
    for (let i = 0; i < num; i++) {
        var childObject = {
            name: 'ffff',
            age: 13,
            inGarden: true
        }
        if (childObject.age > 4) {
            myDiv.innerHTML += `
        <p>
        ${childObject.name}
        ${childObject.age}
        ${childObject.inGarden}
        </p>
        `
        }

    }
}
getchildObject()
//37
var computerElement = document.getElementById('myDiv')
var computerArray = []
function getComputersObjects(num) {
    for (let i = 0; i < num; i++) {
        computerArray[i] = {
            company: prompt('comp'),
            model: prompt('model'),
            heavy: +prompt('heavy'),
            supplay: confirm('is exsist?')
        }
    }
    console.log(computerArray);
}
// getComputersObjects(2) 
function printToScreenComputerArray() {
    for (let i = 0; i < computerArray.length; i++) {
        if (computerArray[i].supplay == true && computerArray[i].heavy > 2) {
            computerElement.innerHTML += `<p>the compan: ${computerArray[i].company}
            the model: ${computerArray[i].model}
            his heavy: ${computerArray[i].heavy}
            supplay: ${computerArray[i].supplay}</p>`
        }
    }
}
// printToScreenComputerArray()
