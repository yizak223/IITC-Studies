//8
// function changeToGreen() {
//     myDiv.style=`color:green`
// }
// var age=prompt('age')
// if(age>18){
//     myDiv.innerHTML+=`
//     <p onmouseover="changeToGreen()">wellcome</p>`
//     myDiv.style=`color:red`
// }
// else{
//     myDiv.innerHTML+=`
//     <p onmouseover="changeToGreen()">wellcome</p>`
//     myDiv.style=`color:blue`
// }
//9    

var arrayGuess = []
// for (let i = 0; i < 5; i++) {
//     arrayGuess[i]= +forTask9.value
// }


function enterNum() {
    if (arrayGuess.length < 5) {
        arrayGuess.push(forTask9.value)
    }
}
function printNum() {
    if (arrayGuess.length == 5) {
        pargMy.innerHTML += `${arrayGuess}`
    }
    
} 
var computerRandom = Math.floor(Math.random() * 56)
function showSuccess() {
for (let i = 0; i < 5; i++) {
    if (arrayGuess[i] == computerRandom) {
        pargMy.innerHTML += `goood!`
    }
    else {
        pargMy.innerHTML = `bad!`
    }
}
}

console.log(arrayGuess);
//10
// function printNum() {
//     pargMy.innerHTML += `${arrayGuess}`
// }
// var arrayGuess = []
// for (let i = 0; i < 5; i++) {
//     arrayGuess[i] = prompt('num')
// }
// var computerRandomArray = []
// for (let i = 0; i < 5; i++) {
//     computerRandomArray[i] = Math.floor(Math.random()*56)
//     forComputerGurss.innerHTML += `
//     <p>${computerRandomArray[i]}</p>
//     `
// }
// var t = 0
// for (let i = 0; i < arrayGuess.length; i++) {
//     for (let j = 0; j < computerRandomArray.length; j++) {
//         if (arrayGuess[0] == computerRandomArray[0]) {
//             forAlertSuccess.innerHTML += `<p>goood!</p>`
//             t++
//         }
//         if (t > 0) {
//             break;
//         }
//     }
//     if (t > 0) {
//         break;
//     }
// }
// if(t==0){
//     forAlertSuccess.innerHTML += `<p>bad!</p>`
// }
//11




