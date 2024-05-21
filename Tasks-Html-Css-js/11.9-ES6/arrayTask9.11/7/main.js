const MyDiv = document.querySelector('#MyDiv')

const HITEC_ARRAY = ['zepp', 'Whoop', 'vimazy', 'garmin', 'Strava', 'NURVV', 'Stryd', 'On Running', 'PlaySight', 'ShotTracker'];
// for (let i = 0; i <HITEC_ARRAY.length; i++) {
//     namesArea.innerHTML+=
//     `
//     <p>${HITEC_ARRAY[i]}</p>
//     `
// }
const zepp = 'https://play-lh.googleusercontent.com/Hb2rqfgDJ7R3FdgO0F1W-GNto4BxorygjHGkYMsdHageFGH778IXmLUswRDbiUhmWqA';
const Whoop = 'https://media.dcrainmaker.com/images/2020/05/DSC_5648_thumb.jpg'
const vimazy = 'data:image/png;base64,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'
const garmin = 'https://1000logos.net/wp-content/uploads/2021/05/Garmin-logo.png'
const Strava = 'https://i0.wp.com/bikewalkwichita.org/wp-content/uploads/2020/03/strava-logo-png-4.png?ssl=1'
const NURVV = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCVDfr_z5Eszi3LxXsGnzCIJFItX2CzdzNMfwKS3hMrmYuWr1Ia4ydxOWG9iam2BY4zY&usqp=CAU'
const Stryd = 'https://wpassets.trainingpeaks.com/wp-content/uploads/2019/04/16115345/stryd-logo-960x600.png'
const OnRunning = 'https://www.clipartmax.com/png/small/8-82162_on-running-com-on-running-logo.png'
const PlaySight = 'https://playsight.com/wp-content/uploads/2020/09/logo-playsight-GO-plus.png'
const ShotTracker = 'https://shottracker.com/themes/st2018/img/shottracker-logo.png'
const komdor =  'https://storage.googleapis.com/bubble-finder/$3R0csqz92fhx3Y1Id03YWTfq9WjqypSEamgY2KWlPMIwnBUAOZYUxY'
const matrix = 'https://upload.wikimedia.org/wikipedia/he/7/74/Matrix_logo.jpg'

const zeppLink = 'https://www.zepp.com/'
const WhoopLink = 'https://www.whoop.com/'
const vimazyLink = 'https://vimazi.com/'
const garminLink = 'https://shorturl.at/dzLNR'
const StravaLink = 'https://www.strava.com/onboarding'
const NURVVLink = 'https://www.nurvv.com/en-us/'
const StrydLink = 'https://www.stryd.com/gl/en'
const OnRunningLink = 'https://www.on-running.com/en-il/'
const PlaySightLink = 'https://playsight.com/'
const ShotTrackerLink = 'https://shottracker.com/'


const ARRAY_LINK=[zeppLink,WhoopLink,vimazyLink,garminLink,StravaLink,NURVVLink,StrydLink,OnRunningLink,PlaySightLink,ShotTrackerLink]
const PICTURE_ARRAY = [zepp,Whoop,vimazy,garmin,Strava,NURVV,Stryd,OnRunning,PlaySight,ShotTracker,komdor,matrix]
// for (let i = 0; i <PICTURE_ARRAY.length; i++) {
//     MyDiv.innerHTML+=
//     `
//     <img src="${PICTURE_ARRAY[i]}">
//     `
// }
const citiesArray=['nyc','boston','tlv','hong-kong','rome','ramt-gan','gvs','jerusalem','rehovot','pth']
const arrayLink=[]
let arrayCompany=[]

for (let j = 0; j < 10; j++) {
    let objectCompany={
        CompanyName:`${HITEC_ARRAY[j]}`,
        image:`${PICTURE_ARRAY[j]}`,
        city:`${citiesArray[j]}`,
        id:Math.floor(Math.random()*100),
        subject:'sport',
        link:`${ARRAY_LINK[j]}`
    }
    arrayCompany.push(objectCompany)
}
console.log(arrayCompany[9].CompanyName);
for (let g = 0; g < 10; g++) {
  divForPrintObject.innerHTML+=
    `<div class='cardCompany' style=border:solid;>
    <h1>${arrayCompany[g].CompanyName}</h1>
    <a href="${arrayCompany[g].link}">
        <img src="${arrayCompany[g].image}">
    </a>
    <p>${arrayCompany[g].city}</p>
    </div>
    ` 
  
}

let collecrionCard=document.querySelectorAll('.cardCompany')

    for (const i in arrayCompany) {
        collecrionCard[i].innerHTML += `
        <span>${arrayCompany[i].id}</span>
        `
}  
