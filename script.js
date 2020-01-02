window.addEventListener('load', loadSite)

function loadSite() {

    const text = document.querySelector('.headline-about-me')
    text.addEventListener('click', toggleTextVisibility)

    const menu = document.querySelector('.dropdown-icon')
    menu.addEventListener('click', toggleMenuVisibility)
}

/**
 * a function that hidde and show the dropdown menu.
 * @param {MouseEvent} 
 */
let show
function toggleMenuVisibility() {
    if (show) {
        const menuItems = document.querySelectorAll('.show')
        for (const item of menuItems) {
            item.style.opacity = "1"
        }
    }
    else {
        const menuItems = document.querySelectorAll('.show')
        for (const item of menuItems) {
            item.style.opacity = "0"
        }
    }

    show = !show
}

/**
 * a function that hidde and show a part of text on the page.
 * @param {MouseEvent} 
 */
function toggleTextVisibility() {
    let hiddenText = document.querySelector('.text-about-me');

    if (hiddenText.classList.contains('hidden')) {
        hiddenText.classList.remove('hidden');
    } else {
        hiddenText.classList.add('hidden');

    }
}