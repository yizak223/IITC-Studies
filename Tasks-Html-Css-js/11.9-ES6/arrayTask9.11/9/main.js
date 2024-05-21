const ARRAY_OBJECT = [
    {
        Fname: "John",
        Lname: "Doe",
        age: 12
    },
    {
        Fname: "Jane",
        Lname: "Smith",
        age: 21
    },
];
console.log(ARRAY_OBJECT);
function printIfAgeBigger18(objectArray) {
    for (let i = 0; i < objectArray.length; i++) {
        if(objectArray[i].age>=18){
            myDiv.innerHTML+=
            `
            <p>${objectArray[i].Fname}</p>
            `
        }
        else{
            myDiv.innerHTML+=
            `
            <p>${objectArray[i].Lname}</p>
            `
        } 
    }

}
printIfAgeBigger18(ARRAY_OBJECT)