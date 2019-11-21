window.addEventListener('load', loadSite)

function loadSite() {

const text = document.querySelector('.headline-about-me')
text.addEventListener( 'click', showText )

const menu = document.querySelector('.dropdown-icon')
menu.addEventListener('click', showMenu )
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


function showText() {
    let hiddenText = document.querySelector('.text-about-me');

        if (hiddenText.classList.contains('hidden')) {
            hiddenText.classList.remove('hidden');
          } else {
            hiddenText.classList.add('hidden');

          }
}