const ARRAYSTRING = ['ff', 'vvv', 'aaa']
function sortMyARRAYSTRING() {
    console.log(ARRAYSTRING.sort());
}
sortMyARRAYSTRING()
//2
const ARRAYNUM = [3, 5, 1]
function sortFromSmaller() {
    console.log(ARRAYNUM.sort((a, b) => a - b));
}
sortFromSmaller();
//3
const ARRAYNUM2 = [4, 6, 22, 1]
function sortFromBigger() {
    console.log(ARRAYNUM2.sort((b, a) => a - b));
}
sortFromSmaller
//4
function sortNamesFromUser() {
    const NAMESCLASS = [];
    const BodyDiv = document.querySelector('#BodyDiv');
    for (let i = 0; i < 9; i++) {
        BodyDiv.innerHTML +=
            `
        <input id='inputUser${i}' placeholder="name" type="text"><br><br>
        `;
    }
    BodyDiv.innerHTML +=
        `
    <button id="btn">ok</button>
    `;
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', function () {
        for (let j = 0; j < 9; j++) {
            const inputField = document.querySelector(`#inputUser${j}`);
            NAMESCLASS.push(inputField.value);
        }
        NAMESCLASS.sort()
        console.log(NAMESCLASS);
        //5
        const joinedNames = NAMESCLASS.join('-');
        console.log(joinedNames);
    },{once:true});
    }
    // sortNamesFromUser()
//6
function sortAgeRandom() {
   const RANDOM_AGE=[]
    for (let i = 0; i < 9; i++) {
        RANDOM_AGE.push(Math.floor(Math.random()*25))
    }
    RANDOM_AGE.sort((a,b)=>a-b)
    console.log(RANDOM_AGE);
}




