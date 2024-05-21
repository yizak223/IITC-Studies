function printToLogColor(colorParam)
{
    console.log(colorParam);
}
//2
function printToDiv(textParam) {
    var elementDiv=document.getElementById('myDiv')
    var pasteText=`${textParam}`
    elementDiv.innerText=`${pasteText}`
}
//3

function printValueToH1() {
    myH1.innerText=inputForH1.value
}