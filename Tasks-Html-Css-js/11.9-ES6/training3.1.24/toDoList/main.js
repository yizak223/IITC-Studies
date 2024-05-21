const title = document.querySelector(`#title`)
const dueDate = document.querySelector(`#due_date`)
const addBtn = document.querySelector(`#addBtn`)
const list = document.querySelector(`#list`)
const obj = []
let arrayObj = JSON.parse(localStorage.getItem('array')) || [];

console.log(arrayObj)

addBtn.addEventListener('click', () => {
    newItem={
        title: title.value,
        date: dueDate.value
    }
    obj.push (newItem)
    console.log({obj});
    arrayObj.push(newItem);
    localStorage.setItem('array', JSON.stringify(arrayObj))
    render()
})
const render = () => {
if (arrayObj.length > 0) { 
    list.innerHTML = ''
    arrayObj.forEach(element => {
      
         list.innerHTML +=`<tr>
                        <td><input type='checkBox'></input></td>
                        <td>${element.title}</td>
                        <td class='dateElement'>${element.date}</td>
                        <td>
                            <button class='dltBtn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </td>
                    </tr>`
    });
    list.innerHTML += `<button id='rstBtn'>reset</button></td>`
    const rstBtn = document.querySelector('#rstBtn')
    rstBtn.addEventListener('click', () => {
        localStorage.clear()
        list.innerHTML = ''
        arrayObj = []
    })

    const dltBtn = document.querySelectorAll('.dltBtn');
    dltBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.parentNode.parentNode.rowIndex
            arrayObj.splice(index, 1)
            localStorage.setItem('array', JSON.stringify(arrayObj))
            list.innerHTML = ''
            render()
        })
    })

    const dateElement = document.querySelectorAll('.dateElement');
    dateElement.forEach(date=>{
        date.addEventListener('click', () => {
            const today = new Date()
            console.log(today.getYear(),date.getYear());
         switch(date.getYear()<today.getYear()){
             case true:
                 date.style.color ='red'
                 break;
             case false:
                 date.style.color = 'green'
                 break;
 
        }
    })
})}}
render()


