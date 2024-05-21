const MY_OBJECT={
    myName:'yizak',
    password:12345,
    mail:'yizak223@gmail.com',
    userName:'hmje21'
}
const USER_OBJECT={
    myName:'',
    password:12,
    mail:'',
    userName:''
}

let userDiv=document.querySelector('#userDiv')

userDiv.innerHTML+=
`
<input placeholder="name" type="text">
<input placeholder="password" type="password">
<input placeholder="email" type="email">
<input placeholder="user name" type="text">
<button>ok</button>
`

let inputUser=document.querySelectorAll('input')
let btn=document.querySelector('button')
btn.addEventListener('click',checkIfEqualObject)

function checkIfEqualObject() {
    // let userObject={
    //     name:`${inputUser[0].value}`,
    //     password:inputUser[1].value,
    //     mail:`${inputUser[2].value}`,
    //     userName:`${inputUser[3].value}`
    // }
    let i=0
    for (const key in USER_OBJECT) {
        USER_OBJECT[key]=inputUser[i].value  
        i++ 
    }
    console.log(USER_OBJECT);
    let isTheyEquals=true;
    for (const key in MY_OBJECT) {
        if (MY_OBJECT[key]!=USER_OBJECT[key]) {
            return false
        }
    }
    return isTheyEquals

}
// for (const i in myCompanies) {
//     document.querySelectorAll(".comDiv")[i].innerHTML += `
//     <span>${myCompanies[i].id}</span>
//     `
// }