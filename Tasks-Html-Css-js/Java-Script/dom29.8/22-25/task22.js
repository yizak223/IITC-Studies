//22
function getAndPrintCountry() {
    var divElemnt = document.getElementById("myDiv")
    divElemnt.innerHTML += "<ol></ol>"
    for (var i = 0; i < 5; i++) {
        var country = prompt('enter1');
        divElemnt.innerHTML += `<li>${country}</li>`
    }
}
//22
var colorElement = document.getElementById('myDiv')
colorElement.innerHTML += `<ol id='myOrderList'></ol>`
function getListOfColorFromUsr() {
    for (let i = 0; i < 4; i++) {
        var color = prompt('color')
        document.getElementById('myOrderList').innerHTML += `<li>${color}</li>`
    }
}
// getListOfColorFromUsr()
//23
function getAndPrintTableUser() {
    var teacher = {}
    teacher.firstName = prompt('name')
    teacher.lastName = prompt('last name')
    teacher.professional = prompt('professional')
    teacher.email = prompt('email')
    document.getElementById('myDiv').innerHTML +=
        `<table>
        <thead>
    <th>firstName</th><th>lastName</th><th>professional</th><th><th>professional</th></th>
    </thead>
    <tbody>
        <tr>
        <td>${teacher.firstName}</td>
        <td>${teacher.lastName}</td>
        <td>${teacher.professional}</td>
        <td>${teacher.email}</td>
        </tr>
    </tbody>
    </table>`


}
//23
// var studentObject = {
//     fullName: prompt('name'),
//     email: prompt('email'),
//     grade: prompt('grade'),
// }
// myTableT23.innerHTML += `
//  <table>
//     <thead>
//         <th>fullName</th>
//         <th>email</th>
//         <th>grade</th>
//     </thead>
//     <tbody>
//         <tr>
//         <td>${studentObject.fullName}</td><td>${studentObject.email}</td><td>${studentObject.grade}</td>
//         </tr>
//     </tbody>
// </table>`


//24

var companyArray = [
    { companyname: 'harmonic', companycity: 'kysria', companynumWorkers: '100', companysearchFor: false },
    { companyname: 'komdor', companycity: 'tlv', companynumWorkers: '300', companysearchFor: true },
    { companyname: 'matrix', companycity: 'tlv', companynumWorkers: '140', companysearchFor: true }
]
for (var i = 0; i < companyArray.length; i++) {
    document.getElementById('myTbody').innerHTML +=
        `
        <tr>
        <td>${companyArray[i].companyname}</td>
        <td>${companyArray[i].companycity}</td>
        <td>${companyArray[i].companynumWorkers}</td>
        <td>${companyArray[i].companysearchFor}</td>
        </tr>
        `
}
// var carArray=[]
// for (let i = 0; i < 3; i++) {
//     carArray[i]={
//         company:prompt('comp'),
//         color:prompt('color'),
//         forSale:confirm('sale?')
//     }
// }
// myTableT24.innerHTML+=`
// <thead>
// <th>company</th>
// <th>color</th>
// <th>forSale</th>
// </thead>
// <tbody>
// <tr>
// <td>${carArray[0].company}</td>
// <td>${carArray[0].color}</td>
// <td>${carArray[0].forSale}</td>
// </tr>
// <tr>
// <td>${carArray[1].company}</td>
// <td>${carArray[1].color}</td>
// <td>${carArray[1].forSale}</td>
// </tr>
// <tr>
// <td>${carArray[2].company}</td>
// <td>${carArray[2].color}</td>
// <td>${carArray[2].forSale}</td>
// </tr>
// </tbody>
// `
//25
var myTableForStyle = document.getElementById('myTable')

myTableForStyle.style = `
background-color:#b6abab;
border: solid ;
border-collapse: collapse;
`
var myTds = document.getElementsByTagName('td')
for (var i = 0; i < myTds.length; i++) {
    myTds[i].style.border = "solid";
}
//25
var managerObject={
    firstName:'yyyy',
    lastName:'df',
    age:122,
    sallery:10000
}
divTask25.innerHTML+=`${managerObject.firstName}
${managerObject.lastName}
${managerObject.age}
${managerObject.sallery}`

