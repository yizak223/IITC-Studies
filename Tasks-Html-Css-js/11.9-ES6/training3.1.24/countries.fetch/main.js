const myUrl='https://restcountries.com/v3.1/all'
const mainDiv=document.querySelector('#mainDiv')

const fetchCountries=()=> {
fetch(myUrl)
    .then(res=>{return res.json()})
    .then(data=>{
        console.log(data);
        data.forEach(country => {
            mainDiv.innerHTML+=`<div class='countryCard'>
            <h1>${country.name.common}</h1>
            <img src="${country.flags.svg}" alt="${country.name.common}" width="100">
            <p><strong>Capital city:</strong>${country.capital}</p>
            </div>`
        });
    })
    .catch(error=>{console.log(error)})
    
}

fetchCountries()


