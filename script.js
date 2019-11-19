window.addEventListener('load', loadSite)

function loadSite() {
 
rotateText()

const menu = document.querySelector('.dropdown-icon')
menu.addEventListener('click', showMenu )
}


function rotateText() {
    const span = document.querySelector('.hello-text')  
    span.setAttribute( 'transform','rotate(180deg)')
    console.log('hej')
} 


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