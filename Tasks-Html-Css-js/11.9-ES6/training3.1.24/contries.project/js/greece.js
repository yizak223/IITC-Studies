const mainDiv=document.querySelector('#mainDiv');
const fettchCountries=(countryName='Greece')=> {

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res=>{return res.json()})
    .then(data=>{
        console.log(data);
        mainDiv.innerHTML+=`<h1>${data[0].name.common}</h1>
        <img src="${data[0].flags.png}">
        <p>${data[0].capital}</p>
        <p>${data[0].borders}</p>
        <iframe src="https://maps.google.com/maps?q=${data[0].latlng}&z=8&ie=UTF8&iwloc=&output=embed" target="_parent" ></iframe>`
    })
    .catch(error=>{console.log(error)})
}
fettchCountries()
