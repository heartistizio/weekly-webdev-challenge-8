'use strict';

function menu() {
    function open(){
        document.querySelector('.menubar-nav').classList.add('opened');

    }

    let hamburger = document.querySelector('.hamburger.icon');
    hamburger.addEventListener('click', open());

    let close = document.querySelector('.hamburger.close');
    close.addEventListener('click', close);
}