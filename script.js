window.addEventListener('load', loadSite)

function loadSite() {

//rotateText()


const startRotateText = document.querySelector('.inner-circle')
startRotateText.addEventListener('click', rotateTextAroundCircle )


const menu = document.querySelector('.dropdown-icon')
menu.addEventListener('click', showMenu )
}


function rotateTextAroundCircle() {
console.log('rotate')
// Code for Safari
document.querySelectorAll(".outercircle").style.WebkitTransform = "rotate(20deg)"; 
// Code for IE9
document.querySelectorAll(".outercircle").style.msTransform = "rotate(20deg)"; 
// Standard syntax
document.querySelectorAll(".outercircle").style.transform = "rotate(20deg)"; 
  }



/* function rotateText() {
    const span = document.querySelector('.hello-text')  
    span.setAttribute( 'transform','rotate(180deg)')
    console.log('hej')
}  */


let show
function showMenu() {
    if(show)
    {const menuItems = document.querySelectorAll('.show')
for(const item of menuItems) {
    item.style.opacity = "1"
    }
}
 else{
    const menuItems = document.querySelectorAll('.show')
    for(const item of menuItems) {
        item.style.opacity = "0"
    }
 }

show = !show
}