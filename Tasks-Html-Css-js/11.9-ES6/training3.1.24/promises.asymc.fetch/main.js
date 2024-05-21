// console.log('this first print');
// setTimeout(() => {
//     console.log('this second print');
// })

console.log('this 1 print');

setTimeout(() => {
    console.log('this 2 print');
},1000)

setTimeout(() => {
    console.log('this 3 print');
},0)

const myUrl='https://restcountries.com/v3.1/all'

fetch(myUrl)
    .then(res=>{return res.json()})
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{console.log(error)})

