// function getAlert() {
//     alert('wellcome')
// }
//2
function printToLog() {
    console.log(new Date().getHours());
}
//3
function changeToPurple() {
    var myH3=document.getElementById('myH3Y')
    myH3.style=`color:purple`
}
//4
function changeButton() {
    var changeTheButton=document.getElementById('myButton')
    changeTheButton.style=`width:2vh`
}
//5
function changeFirstPTag() {
    var pTag=document.getElementById('myPar')
    var pasteText=`${pTag.innerText}`
    pTag.innerText+=`${pasteText}`
}
//6
// var nameUser=prompt('name')
// function printUserName() {
//     userName.innerHTML+=`<p>${nameUser}</p>`
// }
function printUserNameInput() {
    userName.innerHTML+=inputTask6.value
}
//7
// function showTime() {
    var myDate= new Date()
    divDate.innerHTML=myDate
// }
    
if(myDate.getHours()<12){
    document.body.style=`background: yellow;`
    divDate.innerHTML+=`
    <p>good day</p>`
}
else{
    document.body.style=`background: blue;`
    divDate.innerHTML+=`
    <p>good night</p>`
}
