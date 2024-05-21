startAnimationBtn.addEventListener('click',startGrowInterval)
stopBtn.addEventListener('click',stopGrow)
var widthGrow=0;
var heightGrow=0;
function GrowWidth() {
    if (widthGrow<=userWidth.value) {
         myDiv.style.width=`${widthGrow++}px`
    }
}
function GrowHeight() {
    if (heightGrow<=userHeight.value) {
        myDiv.style.height=`${heightGrow++}px`
    } 
}
var intervalGrowWidth;
var intervalGrowHight;
function startGrowInterval() {
    intervalGrowWidth=setInterval(GrowWidth,20) 
    intervalGrowHight=setInterval(GrowHeight,20)
}
function stopGrow() {
    clearInterval(intervalGrowWidth)
    clearInterval(intervalGrowHight)
}


