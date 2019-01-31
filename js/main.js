'use strict';


let circle1 = generateCircle(projects, '#F34739');
let circle2 = generateCircle(clients, '#009989');
let circle3 = generateCircle(months, '#152B3C');


circle1.animate(0.5);
circle2.animate(0.35);
circle3.animate(0.8);

function open(){
  document.querySelector('.menubar-nav').classList.remove('closed');

}

function close(){
  document.querySelector('.menubar-nav').classList.add('closed');
}

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', open);

let closeIcon = document.querySelector('.hamburger.close');
closeIcon.addEventListener('click', close);

let menuItem = document.querySelector('.menubar-menu');
menuItem.addEventListener('click', close);

