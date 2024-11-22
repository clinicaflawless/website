/*index*/

const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle ("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open')
}

