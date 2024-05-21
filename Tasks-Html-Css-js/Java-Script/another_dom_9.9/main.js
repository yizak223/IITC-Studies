var tdListUser;
sendBtn.addEventListener('click',
function () {

    userDetails.innerHTML=
    `
    <h1>Wellcome ${userName.value}</h1>
    <h2>Tell us what your mission?</h2>
    `
    detailsList.innerHTML+=
    `
    <input id='titleMission' type="text" placeholder="title to your mission">
    <input id='explainMossion' type="text" placeholder="what your mission?">
    <input id='DateMission' type="text" placeholder="until when?">
    <input id='DoneMission' type="text" placeholder="is it done?">
    <button id='addLine'>add</button>
    `
    userList.innerHTML+=
    `<thead>
    <th>Title</th><th>Explanasion</th><th>until</th><th>done?</th>
    </thead>`
    userList.style=
    `
    border-collapse: collapse;
    border: 1px solid;
    width: 100%;
    border: 1px solid;
    `
    addLine.addEventListener('click',
function () {
    tdListUser=document.getElementById('td')
    userList.innerHTML+=
    `
    <tbody id='bosyUserList'>
    <tr>
        <td>${titleMission.value}</td>
        <td>${explainMossion.value} </td>
        <td>${DateMission.value} </td>
        <td>${DoneMission.value} </td>
    </tr>
  </tbody>
    `
})
})


