//task1 class
document.body.innerHTML+=`
<div id='mainDiv'></div>`

mainDiv.innerHTML+=`
<input id='colorInput' type="color">`
colorInput.addEventListener('input',printToLog)
function printToLog() {
    console.log(colorInput.value);
}
//task2 class
mainDiv.innerHTML+=`
<input id='inputText' type="text">
`
mainDiv.innerHTML+=`
<div id='secondDiv'></div>
`
inputText.addEventListener('input',printToScreen)
function printToScreen() {
    secondDiv.innerHTML=`
    ${inputText.value}
    `
}
//3
// mainDiv.innerHTML+=`
// <input id='inputForH1' type='text'>
// <button id='btnH1'>print h1</button>
// <div id='thirdDiv'></div>`
// function printToH1() {
//     thirdDiv.innerHTML+=`
//     <h1>${inputForH1.value}</h1>
//     `
// }
// btnH1.addEventListener('click',printToH1)
// //task1
// // thirdDiv.innerHTML+=`
// // <h1>hover alert</h1>`
// // thirdDiv.addEventListener('mouseover',makeAlert)
// // function makeAlert() {
// //     alert('hey you')
// // }
// //2
