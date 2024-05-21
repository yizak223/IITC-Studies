// function printToLogNamE() {
//     console.log(forName.value);
// }
function refreshPage() {
    location.reload()
}
function printToLogAge() {
    var yearToday = new Date()
    console.log(yearToday);
    var dateInput = forAge.value
    console.log(dateInput);
    var makeItDate = new Date(dateInput);
    var year = makeItDate;
    console.log(year);
    console.log(yearToday.getFullYear() - year.getFullYear());
    var userAge=yearToday.getFullYear() - year.getFullYear();
    if(yearToday.getMonth()<makeItDate.getMonth()||
    yearToday.getMonth()===makeItDate.getMonth()&&yearToday.getDate() < makeItDate.getDate())
    {
        userAge--;
    }
    if (userAge >= 18) {
        myDiv.innerHTML = `
        <h1  onmouseover="changeToGreen()" >wellcome</h1>
        <input  onchange="printLog() " class="firstname" type="text" placeholder="enter first name"><br>
        <input class="firstname" type="text" placeholder="enter first name"><br>
        <input class="firstname" type="text" placeholder="enter first name"><br>
        <input class="firstname" type="text" placeholder="enter first name"><br>
        <input id="lastname" type="text" placeholder="enter last name">
        <button onclick='printAllNames()'>print name with thier family</button>`
        myDiv.style = `color:blue;`
    }
    else {
        myDiv.innerHTML = `
        <p>no entry</p>
        <img src='https://phabcart.imgix.net/cdn/scdn/images/uploads/636844577374966611_7a003bk_web_600.jpg'>`
        myDiv.style = `color:red`
        setTimeout(refreshPage, 3000);
    }
}
function changeToGreen() {
    myDiv.style = `color:green`
}
var nameArray = []
function printAllNames() {
    var namesCollectionInput = myDiv.getElementsByClassName('firstname')
    var lastNameLowerCase = lastname.value.toLowerCase()
    for (let i = 0; i < namesCollectionInput.length; i++) {
        nameArray.push(namesCollectionInput[i].value)
        myUl.innerHTML += `
        <li class='namesList'>${namesCollectionInput[i].value}  ${lastname.value}</li>`
    }
    console.log(nameArray);
    var namesCollectionList = myUl.getElementsByTagName('li')
    console.log(namesCollectionList);
    for (let j = 0; j < namesCollectionInput.length; j++) {
        var firstNameLowerCase = namesCollectionInput[j].value.toLowerCase()
        if (firstNameLowerCase[0] == lastNameLowerCase[0]) {
            namesCollectionList[j].style = `color:pink;`
        }
    }
    myUl.innerHTML += `
    <button onclick='makeItOrder()'>show names according to the order of their length</button>
    `
    myDivForInput.innerHTML += `
    <button onmouseover="userOverButton()" onclick="openInput()">open input</button>`
}
console.log(nameArray);
function openInput() {
    myDivForInput.innerHTML += `
    <input id='searchInput' oninput="showResult()" type="text" placeholder='search name'>`
}
function showResult() {
    for (let k = 0; k < nameArray.length; k++) {
        {
            if (0 <= nameArray[k].indexOf(searchInput.value) && nameArray[k].indexOf(searchInput.value) < nameArray[k].length) {
                console.log(nameArray[k].indexOf(searchInput.value));
                console.log(nameArray[k].length);
                resultOfInput.innerHTML= searchInput.value
            }
            else{
                resultOfInput.innerHTML=`this name isn't exsist`
            }
        }

    }
}
function userOverButton() {
    console.log('the user want to serch');
}

// function makeItOrder() {
//     namesCollectionInput.sort(function(a,b){
//         myUl.innerHTML += `
//         <li class='namesList'>first name:${namesCollectionInput[i].value} lastname: ${lastname.value}</li>`
//     })
//     console.log(namesCollectionInput);
// }



