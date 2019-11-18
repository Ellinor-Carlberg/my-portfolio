window.addEventListener('load', loadSite)

function loadSite() {

const menu = document.querySelector('.dropdown-icon')
menu.addEventListener('click', showMenu )
}
let show
function showMenu() {
    if(show)
    {const menuItems = document.querySelectorAll('.show')
for(const item of menuItems) {
    item.style.opacity = "1"
}}
 else{
    const menuItems = document.querySelectorAll('.show')
    for(const item of menuItems) {
        item.style.opacity = "0"
    }
 }

show = !show
}