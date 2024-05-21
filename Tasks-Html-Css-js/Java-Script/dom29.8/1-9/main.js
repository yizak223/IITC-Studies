var pElement = document.getElementById('myp')
console.log(pElement.innerText);
//2
var p2Elem = document.getElementById('p2')
p2Elem.innerText = 'my dom app';
//3
var task3Elem = document.getElementById('first')
console.log(task3Elem.innerText);
var task3Elem = document.getElementById('sec')
console.log(task3Elem.innerText);
var task3Elem = document.getElementById('third')
console.log(task3Elem.innerText);
var task3Elem = document.getElementById('four')
console.log(task3Elem.innerText);
//4
var elemp1 = document.getElementsByClassName('p3');
for (var i = 0; i < elemp1.length; i++) {
    console.log(elemp1[i].innerHTML);
}

//5
console.log(elemp1[1]);
//6
console.log(elemp1[2].innerText);
//7
var tagElem = document.getElementsByTagName('p')
for (var i = 0; i < elemp1.length; i++) {
    console.log(tagElem[i]);
}
//8

function printUserNmae() {
    document.body.innerHTML += "<h2>"
    document.body.innerHTML += prompt('name')
    document.body.innerHTML += "</h2>"
    // document.body.innerHTML+=('<h2>'+prompt('enter name')+'</h2>') ;   
}
// printUserNmae()
//9


//22

