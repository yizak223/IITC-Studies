//9
var divElement = document.getElementById('myDiv')
function getAndPrintNumAndColor() {
    var userColor = prompt('enter color')
    var num = +prompt('enter num')
    for (var i = 0; i < num; i++) {
        divElement.innerHTML += `<span>${userColor}</span>`
    }
}
// getAndPrintNumAndColor()
//10
function getTextAndTagAndBuilt() {
    var userText = prompt('enter text')
    var tagUser = prompt('enter tag')
    divElement.innerHTML += `<${tagUser}>${userText}</${tagUser}>`
}
// getTextAndTagAndBuilt()
//11
function createInputType() {
    var userInput = prompt('enter type input')
    divElement.innerHTML += `<input type=${userInput}>`
}
// createInputType()
//12
function changeTextOfClass(myClass, SOMEtext) {
    var arrayClass = divElement.getElementsByClassName(`${myClass}`)
    for (var i = 0; i < arrayClass.length; i++) {
        arrayClass[i].innerHTML = `${SOMEtext}`;
    }
}
// changeTextOfClass(`aa`,"text")
//13
function getSpanWithTextToPtag() {
    var pArray = document.getElementsByTagName("p");
    for (var i = 0; i < pArray.length; i++) {
        pArray[i].innerHTML += "<span>something</span>";
    }
}

// getSpanWithTextToPtag()
//14
function getDetailsAndPrint() {
    var userName = prompt('enter name')
    var familyname = prompt('enter familyname')
    var age = +prompt('enter age')
    if (age < 18) {
        divElement.innerHTML += `<p>${userName}</p>`
        divElement.innerHTML += `<p>${familyname}</p>`
        divElement.innerHTML += `<p>${age}</p>`
    }
    else {
        divElement.innerHTML += `<p>${userName}</p>`
        divElement.innerHTML += `<input>`
        divElement.innerHTML += `<p>${familyname}</p>`
        divElement.innerHTML += `<input>`
        divElement.innerHTML += `<p>${age}</p>`
        divElement.innerHTML += `<input>`
    }


}
// for(var i=0;i<3;i++)
// {
//     var userName=prompt('enter name')
//     document.body.innerHTML+=`<p>${userName}</p>`
// }
// getDetailsAndPrint()
//15
function makeMovieObject() {
    var movie = {}
    movie.name = prompt('name movie')
    movie.numViews = prompt('number viewers')
    movie.year = prompt('enter year')
    movie.image = prompt('enter image link')
    divElement.innerHTML += `<h1>name of movie: ${movie.name}</h1>
    <h2> numViews:${movie.numViews} </h2>
    <p> year:${movie.year}</p>
    <img src=${movie.image}>`
}
// makeMovieObject()
//16
function objectWorker() {
    var workerObject = {}
    workerObject.firstName = prompt('name')
    workerObject.lastName = prompt('lastName')
    workerObject.email = prompt('email')
    workerObject.ClassWorker = prompt('ClassWorker')
    var hisNameElement = divElement.innerHTML += `<h1>${workerObject.firstName}</h1>`
    var hislastNamElement = divElement.innerHTML += `<h2>${workerObject.lastName}</h2>`
    var hisemailElement = divElement.innerHTML += `<p>${workerObject.email}</p>`
    var hisClassWorkerElement = divElement.innerHTML += `<p>${workerObject.ClassWorker}</p>`
}

// objectWorker()

//17
function getNumCreareObject() {
    var num = prompt('num')
    var buildingObject = {}
    for (var i = 0; i < num; i++) {
        buildingObject.kablan = prompt('kablan')
        buildingObject.company = prompt('company')
        buildingObject.floors = prompt('floors')
        buildingObject.apartment = prompt('apartment')
        var newBuildingHTML = divElement.innerHTML += `<div class="building">
        <p>kablan: ${buildingObject.kablan}</p>
        <p>company:${buildingObject.company}</p>
        <p>floors:${buildingObject.floors}</p>
        <p>apartment:${buildingObject.apartment}</p>
        </div>
        `
    }
}
// getNumCreareObject()
//18
function getNumCreareObjectOfStores() {
    var num = prompt('num')
    var storesObject = {}
    for (var i = 0; i < num; i++) {
        storesObject.name = prompt('name')
        storesObject.adress = prompt('adress')
        storesObject.numClasses = prompt('numClasses')
        storesObject.numWorkers = +prompt('workers')
        if (storesObject.numWorkers > 10) {
            var buildingElement = divElement.innerHTML += `<h1>name: ${storesObject.name}</h1>
            <p>adress: ${storesObject.adress}</p>
            <p>numClasses:${storesObject.numClasses}</p>
            <p>numWorkers:${storesObject.numWorkers}</p>
            `
        }

    }
}
// getNumCreareObjectOfStores()
//19
function getHowMuchBuildingBuilt() {
    console.log(document.getElementsByClassName(`building`).length);
}
// getHowMuchBuildingBuilt()
//20
var orderElement = document.getElementsByClassName('myOrderList')
function builtObjectsFromUserToListOfContactMan() {
    var num = +prompt('number')
    var contactObject = {}
    for (var i = 0; i < num; i++) {
        hisName = prompt('enter name')
        contactObject.company = prompt('enter company')
        contactObject.phone = prompt('enter phone')
        contactObject.email = prompt('enter email')
        orderElement = divElement.innerHTML += `<li><strong>his name: </strong>${hisName}</li>`
    }

}
//21
function addDoctorObjectToTable() {
    var num = +prompt('number')
for (let i = 0; i <num ; i++) {
    var doctorObject = {
    fullname : prompt('name'),
    professional : prompt('professional'),
    phone : prompt('phone'),
    avaibale : prompt('avaibale'),
    email : prompt('email')
    
    }
    myTable.innerHTML+=`<tr>
    <td>${doctorObject.fullname}</td>
    <td>${doctorObject.professional}</td>
    <td>${doctorObject.phone}</td>
    <td>${doctorObject.avaibale}</td>
    <td>${doctorObject.email}</td>
    </tr>`
}
    
}
// addDoctorObjectToTable() 
