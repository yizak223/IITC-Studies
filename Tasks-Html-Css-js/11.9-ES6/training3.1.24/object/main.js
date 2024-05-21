'use strict';

const book = {
    title: 'Harry potter',
    pageNumber: 980
}
console.log(book);

const MYdiv = document.querySelector(`#mydiv`)
MYdiv.innerHTML=`<h1>${book.title}</h1>`

//!render some books
const Books=[
    {title: 'harry potter1', pageNumber: 980},
    {title: 'harry potter2', pageNumber:300},
    {title: 'harry potter3', pageNumber:524}
]
console.log({Books});
const booksDiv = document.querySelector(`#booksDiv`)

Books.forEach(book => {
        booksDiv.innerHTML+=
        `<h1>${book.title}</h1>
        <p>${book.pageNumber}</p>` 
});

//*map
const booksDivMap = document.querySelector(`#booksDivMap`)
const elements = Books.map(book => {
    return `<h1>${book.title}</h1>
            <p>${book.pageNumber}</p>`
}).join('')
console.log({elements});
booksDiv.innerHTML+= elements