var numUserArray=[]
var c=1;
function enterNum() {
    if(numUserArray.length<5 && userInput.value<56){
        numUserArray.push(userInput.value)
        myDiv.innerHTML+=`
        <p>num${c}:${userInput.value}</p>`
        c++
    }
    else{
        alert('cant insert more then five or number bigger then 56 or smaller then 0')
    }
}
var randomNumber=Math.floor(Math.random() * 56)
console.log(randomNumber);
function showIfUserSiccess() {
    for (let i = 0; i < numUserArray.length; i++) {
        if(randomNumber==numUserArray[i]){
            myDiv.innerHTML+=`
            <p>good!</p>`
            return
        }  
    }
    myDiv.innerHTML+=`
    <p>bad!</p>`
}
//10
var numUserArraForTask10=[]
var c10=1
function enterNumForTask10() {
    if(numUserArraForTask10.length<5 && userInputforTask10.value<56){
        numUserArraForTask10.push(userInputforTask10.value)
        myDivForTask10.innerHTML+=`
        <p>num${c10}:${userInputforTask10.value}</p>`
        c10++
    }
    else{
        alert('cant insert more then five or number bigger then 56 or smaller then 0')
    }
}
var randomNumberArray=[]
for (let j = 0; j < 5; j++) {
    randomNumberArray.push(Math.floor(Math.random() * 56))
}
console.log(randomNumberArray);
function showIfUserSiccessForTask10() {
    for (let g = 0; g < numUserArraForTask10.length; g++) {
        for (let h = 0; h < randomNumberArray.length; h++) {
            if(numUserArraForTask10[g]==randomNumberArray[h]){
                myDivForTask10.innerHTML+=`
                <p>good!</p>`
                return
            }
            
        }
    }
    myDivForTask10.innerHTML+=`
    <p>bad!</p>`
}