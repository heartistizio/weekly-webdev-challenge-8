'use strict';

function menu() {

    function toggleMenu() {
        document.querySelector('.menubar-nav').classList.toggle('closed');
    }

    function init() {
        let button = document.querySelector('.menubar-icon');
        button.addEventListener('click', toggleMenu);

        let dropdownMenu = document.querySelector('.menubar-menu');
        dropdownMenu.addEventListener('click', toggleMenu);
    }

    return {
        init: init
    };

}