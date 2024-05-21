//26
var workerObject={
    fullName:'yyyy  ffff',
    yearBorn:2000,
    email:'sdfgsdfg',
    adress:'drgdfg'
}
divTask26.innerHTML+=`
${workerObject.fullName}
${workerObject.yearBorn}
${workerObject.email}
${workerObject.adress}
`
//27
var friutObject={
    fname:'apple',
    color:'red',
    type:'pinacollda'
}
divTask26.innerHTML+=`
${friutObject.fname}
${friutObject.color}
${friutObject.type}
`
//28
var classObject={
    numClass:1,
    numStudent:5,
    nameStudent:['yizak','ben','dan','yair','lior']
}
for (let i = 0; i < classObject.nameStudent.length; i++) {
    divTask26.innerHTML+=`
    <p>${classObject.nameStudent[i]}</p>`
    
}
//29
// var key=prompt('enter key')
var ganObject={
    nameOfGannet:'shir',
    numChildern:10,
    nameAray:['yizak','ben','dan','yair','lior','yizak','ben','dan','yair','lior'],
    key:'some'
}

for (let i = 0; i < ganObject.nameAray.length; i++) {
    myol.innerHTML+=`
<li>${ganObject.nameAray[i]}</li>`
}
// divTask29.innerHTML+=`${key}`

//30
// var objectCity={
//     name:'tlv',
//     numOfCitizen:2000,
//     symbol:`https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80`
// }
// divTask29.innerHTML+=`
// ${objectCity.name}
// ${objectCity.numOfCitizen}
// <img src=${objectCity.symbol}>
// `





