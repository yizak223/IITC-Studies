//38
function getTeacherObject(numparams) {
    for (var i = 0; i < numparams; i++) {
        var TeacherObject = {
            fullname: 'xdh',
            email: 'xdfg',
            sallery: 3000,
            year: 2000
        }
        if (TeacherObject.sallery > 100 || TeacherObject.year < 1990) {
            myDiv.innerHTML +=
                `
            <span>
            ${TeacherObject.fullname}
            ${TeacherObject.email}
            ${TeacherObject.sallery}
            ${TeacherObject.year}
            </span>
            `
        }
    }
}
// getTeacherObject(5)
//39
function geProductElem(numparamsparams) {
    for (let i = 0; i < numparamsparams; i++) {
        var productObject = {
            name: 'dfh',
            motag: 'nike',
            price: 44,
            storeArray: ['store1', 'store2', 'store', 'store5',]
        }
        myDiv.innerHTML += `
       <p>${productObject.name}</p>
       ${productObject.storeArray}
       `
    }
}
// geProductElem(3)
//40
function getApartmentElem(paramsnum) {
    for (let i = 0; i < paramsnum; i++) {
        var apartmentObject = {
            adress: 'sdf',
            priceRent: 2333,
            priceBuy: 200000,
            intersting: ['cohen', 'levi', 'goldberg'],
            willSpan: true
        }
        myDiv.innerHTML += `
        <p>${apartmentObject.adress}</p>
        <span>${apartmentObject.intersting}</span
        `
    }
}
// getApartmentElem(3)
//41
function getCountryElem(numparams) {
    for (let i = 0; i < numparams; i++) {
        var countryObject = {
            name: 'israel',
            numCitizien: 2000,
            cities: ['tlv', 'jerusalem', 'pth'],
            beitHabad: true
        }
        myDiv.innerHTML += `
        <p>${countryObject.name}</p>
        <p>${countryObject.cities}</p>
        `
    }
}
// getCountryElem(3)
//42
function getMovieElem() {
    var num = 4;
    for (let i = 0; i < num; i++) {
        var movieObject = {
            name: 'spiderman',
            numViewers: 1000,
            yaer: 2004,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeb5JLJrVlXPifFhMcSkher-h2NVXMtlsxeKOWpjv&s',
        }
        myDiv.innerHTML+=`
        <h1>${movieObject.name}</h1>
        <p>${movieObject.numViewers}</p>
        <p>${movieObject.yaer}</p>
        <img src='${movieObject.image}'>
        `
    }
}
// getMovieElem() 
//43
function checkEmailOf2Users() {
    var userObjectArray=[]
    for (let i = 0; i < 2; i++) {
        userObjectArray[i]={
            name:prompt('name'),
            email:prompt('email'),
            password:prompt('password'),
            image:prompt('image')
        }
    }
    if (userObjectArray[0].email==userObjectArray[1].email) {
        myDiv.innerHTML+=`<p>the emails of the users equals</p>`
    }
    else{
        for (let i = 0; i < 2; i++) {
        myDiv.innerHTML+=`
        <h1>${userObjectArray[i].name}</h1>
        <p>${userObjectArray[i].email}</p>
        <p>${userObjectArray[i].password}</p>
        <img src='${userObjectArray[i].image}'>
        `
        }
    }
}
checkEmailOf2Users()