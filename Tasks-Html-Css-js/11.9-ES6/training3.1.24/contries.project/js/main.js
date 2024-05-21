const mainDiv=document.querySelector('#mainDiv');
const fettchCountries=(countryName='Israel')=> {

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res=>{return res.json()})
    .then(data=>{
        console.log(data);
        mainDiv.innerHTML = `
        <input type="text" id="searchCountry">
        <button id='btnSrch'>Search</button>
        <h1>${data[0].name.common}</h1>
        <div class="country-info">
            <img src="${data[0].flags.png}" alt="Flag">
            <p><strong>Capital city:</strong> ${data[0].capital}</p>
            <p><strong>Borders Country:</strong> ${data[0].borders}</p>
        </div>
        <div class="map-container">
            <iframe src="https://maps.google.com/maps?q=${data[0].latlng}&z=8&ie=UTF8&iwloc=&output=embed" target="_parent"></iframe>
        </div>`
        const searchCountry=document.querySelector('#searchCountry');
        const btnSrch=document.querySelector('#btnSrch');
        btnSrch.addEventListener('click', ()=>{
            fettchCountries(searchCountry.value);
        })
    })
    .catch(error=>{console.log(error)})
}
fettchCountries()

const rndBtn=document.querySelector('#rndBtn');
rndBtn.addEventListener('click', ()=>{
    const rndNum=Math.floor(Math.random()*250);
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>{return res.json()})
    .then(data=>{
        fettchCountries(data[rndNum].name.common);
    })
    .catch(error=>{console.log(error)})
    
})